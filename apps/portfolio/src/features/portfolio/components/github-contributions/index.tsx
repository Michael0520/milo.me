import { Suspense } from "react";

import type { Activity } from "@/components/kibo-ui/contribution-graph";

import { getGitHubContributions } from "../../data/github-contributions";
import { Panel } from "../panel";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

export function GitHubContributions() {
  // Degrade to an empty graph on fetch failure — use() rethrows rejections
  // and there is no error boundary above, so an uncaught one 500s the page.
  const contributions = getGitHubContributions().catch((error): Activity[] => {
    console.error("[github-contributions]", error);
    return [];
  });

  return (
    <Panel id="contributions">
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </Panel>
  );
}

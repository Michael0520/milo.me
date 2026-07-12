import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_CONTRIBUTIONS_API_URL, GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export const getGitHubContributions = unstable_cache(
  async () => {
    const res = await fetch(`${GITHUB_CONTRIBUTIONS_API_URL}/v4/${GITHUB_USERNAME}?y=last`);

    // Throw on failure so unstable_cache skips persisting the result and the
    // next request retries — returning [] here would cache an empty graph for
    // the whole revalidate window. Callers decide the fallback.
    if (!res.ok) {
      throw new Error(`GitHub contributions API responded ${res.status}`);
    }

    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions ?? [];
  },
  ["github-contributions"],
  { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
);

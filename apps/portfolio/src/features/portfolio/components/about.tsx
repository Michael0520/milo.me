import { Markdown } from "@/components/markdown";
import { USER } from "@/features/portfolio/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent className="py-6">
        <div className="typeset typeset-description">
          <Markdown>{USER.about}</Markdown>
        </div>
      </PanelContent>
    </Panel>
  );
}

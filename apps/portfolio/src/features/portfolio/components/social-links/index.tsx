import { SOCIAL_LINKS } from "../../data/social-links";
import { Panel, PanelContent } from "../panel";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      <PanelContent>
        <ul className="flex flex-wrap gap-2">
          {SOCIAL_LINKS.map((link) => (
            <SocialLinkItem key={link.name} {...link} />
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}

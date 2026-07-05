import { Icons } from "@/components/icons";

import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "github",
    icon: <Icons.github />,
    title: "GitHub",
    href: "https://github.com/Michael0520",
    handle: "Michael0520",
  },
  {
    name: "instagram",
    icon: <Icons.instagram />,
    title: "Instagram",
    href: "https://www.instagram.com/michaello.dev/",
    handle: "michaello.dev",
  },
  {
    name: "threads",
    icon: <Icons.threads />,
    title: "Threads",
    href: "https://www.threads.net/@michaello.dev",
    handle: "michaello.dev",
  },
];

export function getSocialLinkByName(name: string) {
  return SOCIAL_LINKS.find((link) => link.name === name);
}

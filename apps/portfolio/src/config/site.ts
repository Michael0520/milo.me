import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://www.michaello.me",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

const DEV_NAV: NavItem[] =
  process.env.NODE_ENV === "development"
    ? [
        {
          title: "Components",
          href: "/components",
        },
        {
          title: "Blocks",
          href: "/blocks",
        },
      ]
    : [];

export const MAIN_NAV: NavItem[] = [
  ...DEV_NAV,
  {
    title: "Talks",
    href: "/talks",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const MOBILE_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
];

export const X_USERNAME = "";
export const GITHUB_USERNAME = "Michael0520";
export const SOURCE_CODE_GITHUB_REPO = "Michael0520/milo.me";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Michael0520/milo.me";

export const GITHUB_CONTRIBUTIONS_API_URL =
  process.env.GITHUB_CONTRIBUTIONS_API_URL || "https://github-contributions-api.jogruber.de";

export const SPONSORSHIP_URL = "";

export const UTM_PARAMS = {
  utm_source: "michaello.me",
};

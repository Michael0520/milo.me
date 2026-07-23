import { notFound } from "next/navigation";

import { SITE_INFO } from "@/config/site";
import { getDocsByCategory } from "@/features/doc/data/documents";
import { buildRssFeed } from "@/features/doc/lib/build-rss-feed";

export const revalidate = false;
export const dynamic = "force-static";

export function GET() {
  // /components is a dev-only showcase (page + [slug] both notFound() in prod);
  // gate its feed the same way so component docs can't leak into a public feed.
  if (process.env.NODE_ENV !== "development") notFound();

  return buildRssFeed({
    title: "Components",
    description: "A collection of reusable components.",
    posts: getDocsByCategory("components"),
    getLink: (post) => `${SITE_INFO.url}/components/${post.slug}`,
  });
}

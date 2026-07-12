import { SITE_INFO } from "@/config/site";
import { getDocsByCategory } from "@/features/doc/data/documents";
import { buildRssFeed } from "@/features/doc/lib/build-rss-feed";

export const revalidate = false;
export const dynamic = "force-static";

export function GET() {
  return buildRssFeed({
    title: "Components",
    description: "A collection of reusable components.",
    posts: getDocsByCategory("components"),
    getLink: (post) => `${SITE_INFO.url}/components/${post.slug}`,
  });
}

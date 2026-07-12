import { SITE_INFO } from "@/config/site";
import { getDocPath, getDocsByCategory } from "@/features/doc/data/documents";
import { buildRssFeed } from "@/features/doc/lib/build-rss-feed";
import { DOC_CATEGORIES } from "@/features/doc/types/document";

export const revalidate = false;
export const dynamic = "force-static";

export function GET() {
  return buildRssFeed({
    title: "Daily",
    description: SITE_INFO.description,
    posts: getDocsByCategory(DOC_CATEGORIES.personal),
    getLink: (post) => `${SITE_INFO.url}${getDocPath(post)}`,
  });
}

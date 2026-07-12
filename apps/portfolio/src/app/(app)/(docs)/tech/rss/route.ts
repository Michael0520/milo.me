import { SITE_INFO } from "@/config/site";
import { getDocPath, getDocsByCategory } from "@/features/doc/data/documents";
import { DOC_CATEGORIES } from "@/features/doc/types/document";
import { escapeXml, toISODateSafe } from "@/utils/string";

export const revalidate = false;
export const dynamic = "force-static";

export function GET() {
  const allPosts = getDocsByCategory(DOC_CATEGORIES.tech);

  const itemsXml = allPosts
    .map((post) => {
      const pubDate = toISODateSafe(post.metadata.createdAt);
      if (!pubDate) {
        return null;
      }

      return `<item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${SITE_INFO.url}${getDocPath(post)}</link>
          <description>${escapeXml(post.metadata.description || "")}</description>
          <pubDate>${pubDate}</pubDate>
        </item>`;
    })
    .filter(Boolean)
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Tech | ${SITE_INFO.name}</title>
      <link>${SITE_INFO.url}</link>
      <description>${SITE_INFO.description}</description>
      ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

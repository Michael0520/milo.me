import { SITE_INFO } from "@/config/site";
import { getDocPath, getDocsByCategory } from "@/features/doc/data/documents";

export const revalidate = false;
export const dynamic = "force-static";

export function GET() {
  const allPosts = getDocsByCategory("tech");

  const itemsXml = allPosts
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${SITE_INFO.url}${getDocPath(post)}</link>
          <description>${post.metadata.description || ""}</description>
          <pubDate>${new Date(post.metadata.createdAt).toISOString()}</pubDate>
        </item>`,
    )
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

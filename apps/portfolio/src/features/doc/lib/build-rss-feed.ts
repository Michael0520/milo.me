import { SITE_INFO } from "@/config/site";
import type { Doc } from "@/features/doc/types/document";
import { escapeXml } from "@/utils/string";

type RssFeedOptions = {
  title: string;
  description: string;
  posts: Doc[];
  getLink: (post: Doc) => string;
};

// RSS 2.0 requires RFC-822 dates; toUTCString() emits the accepted
// four-digit-year form. Invalid dates return null so the item is skipped.
function toRssDateSafe(value: string | undefined | null): string | null {
  if (!value) {
    return null;
  }

  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toUTCString();
}

// Single chokepoint for feed XML: every interpolated field passes through
// escapeXml here so individual routes cannot forget one.
export function buildRssFeed({ title, description, posts, getLink }: RssFeedOptions): Response {
  const itemsXml = posts
    .map((post) => {
      const pubDate = toRssDateSafe(post.metadata.createdAt);
      if (!pubDate) {
        return null;
      }

      return `<item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${escapeXml(getLink(post))}</link>
          <description>${escapeXml(post.metadata.description || "")}</description>
          <pubDate>${pubDate}</pubDate>
        </item>`;
    })
    .filter(Boolean)
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${escapeXml(`${title} | ${SITE_INFO.name}`)}</title>
      <link>${escapeXml(SITE_INFO.url)}</link>
      <description>${escapeXml(description)}</description>
      ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

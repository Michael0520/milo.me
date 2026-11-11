export type ArticlePreview = {
  href: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: number;
};

export function resolveArticleLink(
  href: string,
  siteUrl: string,
  articles: readonly ArticlePreview[],
): { article: ArticlePreview; href: string } | null {
  if (href.startsWith("#")) return null;

  try {
    const base = new URL(siteUrl);
    const url = new URL(href, base);
    if (url.origin !== base.origin) return null;

    const pathname = url.pathname.replace(/\/$/, "");
    const article = articles.find(
      (item) => pathname === item.href || pathname === item.href.replace(/^\/tech\//, "/blog/"),
    );
    return article ? { article, href: `${article.href}${url.search}${url.hash}` } : null;
  } catch {
    return null;
  }
}

export function buildQuoteUrl(
  pageUrl: string,
  anchorId: string,
  text: string,
  endText?: string,
  articleText?: string,
) {
  const url = new URL(pageUrl);
  const normalize = (value: string) => value.trim().replace(/\s+/g, " ");
  const match = normalize(text).toLowerCase();
  const content = normalize(articleText ?? "").toLowerCase();
  // Text directives search the whole page; repeated text uses the precise paragraph instead.
  if (!match || (content && content.indexOf(match) !== content.lastIndexOf(match))) {
    url.hash = encodeURIComponent(anchorId);
    return url.href;
  }
  const encode = (value: string) => encodeURIComponent(normalize(value)).replace(/-/g, "%2D");

  url.hash = `${encodeURIComponent(anchorId)}:~:text=${encode(text)}${endText ? `,${encode(endText)}` : ""}`;
  return url.href;
}

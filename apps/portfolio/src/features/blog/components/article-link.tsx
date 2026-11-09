import { cache } from "react";

import { SITE_INFO } from "@/config/site";
import { resolveArticleLink } from "@/features/blog/lib/article-links";
import { getDocPath, getDocsByCategory } from "@/features/doc/data/documents";
import { DOC_CATEGORIES } from "@/features/doc/types/document";

import { ArticleLinkPreview } from "./article-link-preview";

const getArticlePreviews = cache(() =>
  getDocsByCategory(DOC_CATEGORIES.tech).map((doc) => ({
    href: getDocPath(doc),
    title: doc.metadata.title,
    description: doc.metadata.description,
    createdAt: doc.metadata.createdAt,
    readingTime: doc.readingTime,
  })),
);

export function ArticleLink({ href, ...props }: React.ComponentProps<"a">) {
  const resolved = href && resolveArticleLink(href, SITE_INFO.url, getArticlePreviews());
  if (!resolved) return <a href={href} {...props} />;

  return <ArticleLinkPreview article={resolved.article} href={resolved.href} {...props} />;
}

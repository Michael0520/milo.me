"use client";

import Link from "next/link";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import type { ArticlePreview } from "@/features/blog/lib/article-links";

export function ArticleLinkPreview({
  article,
  href,
  children,
  ...props
}: React.ComponentProps<"a"> & { article: ArticlePreview; href: string }) {
  return (
    <HoverCard>
      <HoverCardTrigger delay={350} render={<Link href={href} />} {...props}>
        {children}
      </HoverCardTrigger>
      <HoverCardContent
        align="start"
        alignOffset={0}
        sideOffset={8}
        className="not-prose w-80 max-w-[calc(100vw-2rem)] space-y-2 leading-relaxed tracking-normal"
      >
        <p className="text-xs text-muted-foreground">
          More from Tech · {article.readingTime} min read
        </p>
        <p className="font-semibold text-foreground">{article.title}</p>
        <p className="text-sm text-muted-foreground">{article.description}</p>
        <time dateTime={article.createdAt} className="block text-xs text-muted-foreground">
          {new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" }).format(
            new Date(article.createdAt),
          )}
        </time>
      </HoverCardContent>
    </HoverCard>
  );
}

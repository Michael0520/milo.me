import { format } from "date-fns";
import Link from "next/link";

import type { Doc } from "@/features/doc/types/document";

export function PostItem({ post }: { post: Doc }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      prefetch={false}
      className="group flex items-baseline gap-3 rounded-md px-3 py-2.5 transition-all duration-200 hover:bg-foreground/[0.06]"
    >
      <h3 className="text-base leading-snug font-medium opacity-80 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
        {post.metadata.title}
      </h3>

      <span className="shrink-0 text-sm text-muted-foreground transition-all duration-200 group-hover:text-foreground/80">
        <time dateTime={new Date(post.metadata.createdAt).toISOString()}>
          {format(new Date(post.metadata.createdAt), "MMM d")}
        </time>
        <span className="mx-1.5">·</span>
        {post.readingTime}min
      </span>
    </Link>
  );
}

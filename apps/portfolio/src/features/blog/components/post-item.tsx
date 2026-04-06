import { format } from "date-fns";
import Link from "next/link";

import type { Doc } from "@/features/doc/types/document";

export function PostItem({ post }: { post: Doc }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      prefetch={false}
      className="group flex items-baseline gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-foreground/[0.08]"
    >
      <h3 className="text-base leading-snug font-medium group-hover:text-primary">
        {post.metadata.title}
      </h3>

      <span className="shrink-0 text-sm text-muted-foreground/60 transition-colors group-hover:text-muted-foreground">
        <time dateTime={new Date(post.metadata.createdAt).toISOString()}>
          {format(new Date(post.metadata.createdAt), "MMM d")}
        </time>
        <span className="mx-1.5">·</span>
        {post.readingTime}min
      </span>
    </Link>
  );
}

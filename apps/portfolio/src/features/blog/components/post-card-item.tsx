import { format } from "date-fns";
import { ArrowUpRightIcon, CalendarIcon, ClockIcon } from "lucide-react";
import Link from "next/link";

import type { Doc } from "@/features/doc/types/document";

export function PostCardItem({ post }: { post: Doc }) {
  const { title, description, createdAt, category, pinned, new: isNew } = post.metadata;

  return (
    <Link
      href={`/${category}/${post.slug}`}
      className="group block rounded-lg p-4 -mx-4 transition-all duration-200 hover:bg-foreground/[0.06]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 transition-all duration-200 group-hover:translate-x-1">
          <h3 className="text-lg leading-snug font-semibold tracking-tight text-balance opacity-90 transition-opacity duration-200 group-hover:opacity-100">
            {title}
          </h3>

          {description && (
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground/70 line-clamp-2 transition-colors duration-200 group-hover:text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <span className="mt-1 flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRightIcon className="size-4" />
          Read
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <CalendarIcon className="size-3" />
          <time dateTime={createdAt}>{format(new Date(createdAt), "MMM dd, yyyy")}</time>
        </span>
        <span className="flex items-center gap-1">
          <ClockIcon className="size-3" />
          {post.readingTime} min read
        </span>
      </div>

      {(pinned || isNew) && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {pinned && (
            <span className="rounded-md bg-accent px-1.5 py-0.5 text-xs text-accent-foreground">
              Pinned
            </span>
          )}
          {isNew && (
            <span className="rounded-md bg-accent px-1.5 py-0.5 text-xs text-accent-foreground">
              New
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

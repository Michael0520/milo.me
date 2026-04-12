import { format } from "date-fns";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Link from "next/link";

import type { Doc } from "@/features/doc/types/document";

export function PostCardItem({ post }: { post: Doc }) {
  const { title, description, createdAt, category, pinned, new: isNew } = post.metadata;

  return (
    <Link
      href={`/${category}/${post.slug}`}
      className="group block py-7 transition-all duration-200"
    >
      <div className="transition-all duration-200 group-hover:translate-x-1">
        <h3 className="text-xl leading-tight font-semibold tracking-tight text-balance text-foreground md:text-2xl">
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground line-clamp-2 transition-colors duration-200 group-hover:text-foreground/80">
            {description}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarIcon className="size-3" />
            <time dateTime={createdAt}>{format(new Date(createdAt), "MMM dd, yyyy")}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <ClockIcon className="size-3" />
            {post.readingTime} min read
          </span>
          {pinned && (
            <span className="rounded-sm bg-accent px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
              Pinned
            </span>
          )}
          {isNew && (
            <span className="rounded-sm bg-accent px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
              New
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

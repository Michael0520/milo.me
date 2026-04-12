import { ArrowLeftIcon, ArrowRightIcon, ListIcon } from "lucide-react";
import Link from "next/link";

import type { Doc } from "@/features/doc/types/document";
import { cn } from "@/lib/utils";

type Direction = "previous" | "next";

function NavCard({
  direction,
  doc,
  basePath,
}: {
  direction: Direction;
  doc: Doc;
  basePath: string;
}) {
  const isNext = direction === "next";
  const Icon = isNext ? ArrowRightIcon : ArrowLeftIcon;
  const label = isNext ? "Next post" : "Previous post";

  return (
    <Link
      href={`${basePath}/${doc.slug}`}
      className={cn(
        "group flex flex-col gap-2 rounded-lg border border-border bg-muted/40 p-5 ring-1 ring-foreground/5 transition-all hover:border-foreground/20 hover:bg-muted/60 hover:ring-foreground/10",
        isNext && "md:text-right",
      )}
    >
      <span
        className={cn(
          "flex items-center gap-1.5 font-mono text-xs text-muted-foreground",
          isNext && "md:justify-end",
        )}
      >
        {!isNext && <Icon className="size-3" />}
        {label}
        {isNext && <Icon className="size-3" />}
      </span>
      <span
        className={cn(
          "text-sm font-semibold leading-snug text-foreground/80 transition-all duration-200 line-clamp-2 group-hover:text-foreground",
          !isNext && "group-hover:translate-x-1",
          isNext && "md:group-hover:-translate-x-1",
        )}
      >
        {doc.metadata.title}
      </span>
    </Link>
  );
}

function BackToListCard({
  direction,
  basePath,
  listLabel,
}: {
  direction: Direction;
  basePath: string;
  listLabel: string;
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={basePath}
      className={cn(
        "group flex flex-col gap-2 rounded-lg border border-dashed border-border bg-muted/20 p-5 transition-all hover:border-foreground/20 hover:bg-muted/40",
        isNext && "md:text-right",
      )}
    >
      <span
        className={cn(
          "flex items-center gap-1.5 font-mono text-xs text-muted-foreground",
          isNext && "md:justify-end",
        )}
      >
        {!isNext && <ListIcon className="size-3" />}
        End of list
        {isNext && <ListIcon className="size-3" />}
      </span>
      <span
        className={cn(
          "text-sm font-semibold leading-snug text-foreground/80 transition-all duration-200 group-hover:text-foreground",
          !isNext && "group-hover:translate-x-1",
          isNext && "group-hover:-translate-x-1",
        )}
      >
        Back to all {listLabel}
      </span>
    </Link>
  );
}

export function PostNeighbourNav({
  previous,
  next,
  basePath,
  listLabel,
}: {
  previous: Doc | null;
  next: Doc | null;
  basePath: string;
  listLabel: string;
}) {
  return (
    <nav aria-label="Post navigation" className="grid grid-cols-1 gap-3 px-4 py-6 md:grid-cols-2">
      {previous ? (
        <NavCard direction="previous" doc={previous} basePath={basePath} />
      ) : (
        <BackToListCard direction="previous" basePath={basePath} listLabel={listLabel} />
      )}
      {next ? (
        <NavCard direction="next" doc={next} basePath={basePath} />
      ) : (
        <BackToListCard direction="next" basePath={basePath} listLabel={listLabel} />
      )}
    </nav>
  );
}

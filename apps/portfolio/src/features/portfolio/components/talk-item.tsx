import { format } from "date-fns";
import { CalendarIcon, MapPinIcon, PresentationIcon } from "lucide-react";

import type { Talk } from "@/features/portfolio/types/talks";

export function TalkItem({ talk }: { talk: Talk }) {
  return (
    <a
      href={`/slides/${talk.slug}/index.html`}
      target="_blank"
      rel="noopener"
      className="group block rounded-lg p-4 -mx-4 transition-colors hover:bg-accent-muted"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg leading-snug font-semibold tracking-tight text-balance group-hover:text-primary">
            {talk.title}
          </h3>

          {talk.description && (
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {talk.description}
            </p>
          )}
        </div>

        <span className="mt-1 flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          <PresentationIcon className="size-4" />
          Slides
        </span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <span className="font-medium">{talk.event}</span>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {talk.location && (
            <span className="flex items-center gap-1">
              <MapPinIcon className="size-3" />
              {talk.location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <CalendarIcon className="size-3" />
            <time dateTime={talk.date}>{format(new Date(talk.date), "MMM dd, yyyy")}</time>
          </span>
        </div>
      </div>

      {talk.tags && talk.tags.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {talk.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent px-1.5 py-0.5 text-xs text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}

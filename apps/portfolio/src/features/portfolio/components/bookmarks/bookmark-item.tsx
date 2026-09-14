import { format } from "date-fns";
import { ArrowUpRightIcon, BookmarkIcon } from "lucide-react";

import { getIcon } from "@/components/icons";
import { IconTile } from "@/components/ui/icon-tile";
import { Separator } from "@/components/ui/separator";
import { UTM_PARAMS } from "@/config/site";
import type { Bookmark } from "@/features/portfolio/types/bookmarks";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

export function BookmarkItem({ className, bookmark }: { className?: string; bookmark: Bookmark }) {
  return (
    <a
      className={cn("flex items-center pr-2 hover:bg-accent-muted", className)}
      href={addQueryParams(bookmark.url, UTM_PARAMS)}
      target="_blank"
      rel="noopener"
    >
      <IconTile className="mx-4">{getIcon(bookmark.iconName) ?? <BookmarkIcon />}</IconTile>

      <div className="flex-1 space-y-1 border-l border-dashed border-line p-4 pr-2">
        <h3 className="leading-snug font-medium text-balance">{bookmark.title}</h3>

        <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
          {bookmark.author && (
            <>
              <dl>
                <dt className="sr-only">Author</dt>
                <dd>{bookmark.author}</dd>
              </dl>

              <Separator
                className="data-vertical:h-4 data-vertical:self-center"
                orientation="vertical"
              />
            </>
          )}

          <dl>
            <dt className="sr-only">Bookmarked on</dt>
            <dd>
              <time dateTime={new Date(bookmark.bookmarkedAt).toISOString()}>
                {format(new Date(bookmark.bookmarkedAt), "dd.MM.yyyy")}
              </time>
            </dd>
          </dl>
        </div>
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}

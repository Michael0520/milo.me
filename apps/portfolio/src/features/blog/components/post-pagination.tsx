"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { usePageQuery } from "../hooks/use-page-query";

export function PostPagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  // The clamped page from the parent — reconciled against the filtered result
  // set. The raw `page` in the URL may exceed totalPages after a search
  // narrows results; highlighting/disabled state must track the clamped value
  // or the bar shows nothing selected on a page that is rendering content.
  currentPage: number;
}) {
  const { setPage } = usePageQuery();

  if (totalPages <= 1) return null;

  const goTo = (next: number) => {
    setPage(Math.max(1, Math.min(totalPages, next)));
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center border-t border-line pt-6 pb-4"
    >
      <ButtonGroup>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Previous page"
          className="cursor-pointer"
        >
          <ChevronLeftIcon />
        </Button>

        {pages.map((p) => (
          <Button
            key={p}
            variant={p === currentPage ? "default" : "outline"}
            size="sm"
            onClick={() => goTo(p)}
            aria-current={p === currentPage ? "page" : undefined}
            className="font-mono w-8 cursor-pointer"
          >
            {p}
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next page"
          className="cursor-pointer"
        >
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </nav>
  );
}

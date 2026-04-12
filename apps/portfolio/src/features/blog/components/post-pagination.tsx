"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

import { usePageQuery } from "../hooks/use-page-query";

export function PostPagination({ totalPages }: { totalPages: number }) {
  const { page, setPage } = usePageQuery();

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
          onClick={() => goTo(page - 1)}
          disabled={page <= 1}
          aria-label="Previous page"
          className="cursor-pointer"
        >
          <ChevronLeftIcon />
        </Button>

        {pages.map((p) => (
          <Button
            key={p}
            variant={p === page ? "default" : "outline"}
            size="sm"
            onClick={() => goTo(p)}
            aria-current={p === page ? "page" : undefined}
            className="font-mono w-8 cursor-pointer"
          >
            {p}
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => goTo(page + 1)}
          disabled={page >= totalPages}
          aria-label="Next page"
          className="cursor-pointer"
        >
          <ChevronRightIcon />
        </Button>
      </ButtonGroup>
    </nav>
  );
}

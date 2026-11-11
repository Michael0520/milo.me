"use client";

import { LinkIcon } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { copyText } from "@/utils/copy";

export function ArticleHeading({
  as: Comp = "h2",
  children,
  className,
  id,
  ...props
}: React.ComponentProps<"h2"> & { as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }) {
  return (
    <Comp id={id} className={cn("group/heading", className)} {...props}>
      {children}
      {id && (
        <button
          type="button"
          className="not-prose ml-2 inline-flex size-8 items-center justify-center rounded-md align-middle text-muted-foreground opacity-60 transition-opacity hover:bg-accent hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:opacity-0 sm:group-hover/heading:opacity-100"
          aria-label={`Copy link to section: ${id}`}
          onClick={async () => {
            const url = new URL(window.location.href);
            url.hash = id;
            const copied = await copyText(url.href);
            if (copied) toast.success("Section link copied");
            else toast.error("Could not copy the link. Please try again.");
          }}
        >
          <LinkIcon className="size-4" aria-hidden="true" />
        </button>
      )}
    </Comp>
  );
}

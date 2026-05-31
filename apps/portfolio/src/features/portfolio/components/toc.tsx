"use client";

import type { TOCItemType } from "fumadocs-core/toc";

import { TOCMinimap } from "@/components/toc-minimap";
import { useMediaQuery } from "@/hooks/use-media-query";

export function TOC({ items }: { items: TOCItemType[] }) {
  const isDesktop = useMediaQuery("(min-width: 64rem)"); // lg breakpoint

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="fixed top-1/2 right-2 z-40 -translate-y-1/2">
      <TOCMinimap
        items={items}
        options={{
          threshold: 0,
          rootMargin: "-20% 0% -60% 0%",
        }}
      />
    </div>
  );
}

export default TOC;

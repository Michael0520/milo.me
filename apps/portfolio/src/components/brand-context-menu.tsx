"use client";

import { TypeIcon } from "lucide-react";
import { toast } from "sonner";

import { copyText } from "@/utils/copy";

import { getMarkSVG, MichaelloMark } from "./michaello-mark";
import { getWordmarkSVG } from "./michaello-wordmark";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  // The site is dark-only (forcedTheme="dark" in providers), so the mark is
  // always shown on dark — copy the light-on-dark (#fff) SVG unconditionally.
  // Keying this off resolvedTheme let stale localStorage.theme="light" copy a
  // black mark onto a dark site.
  const markColor = "#fff";

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG(markColor);
            void copyText(svg);
            toast.success("Mark as SVG copied");
          }}
        >
          <MichaelloMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = getWordmarkSVG(markColor);
            void copyText(svg);
            toast.success("Logotype as SVG copied");
          }}
        >
          <TypeIcon />
          Copy Logotype as SVG
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

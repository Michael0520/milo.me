"use client";

import { TypeIcon } from "lucide-react";
import { useTheme } from "next-themes";
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
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem
          onClick={() => {
            const svg = getMarkSVG(resolvedTheme === "light" ? "#000" : "#fff");
            void copyText(svg);
            toast.success("Mark as SVG copied");
          }}
        >
          <MichaelloMark />
          Copy Mark as SVG
        </ContextMenuItem>

        <ContextMenuItem
          onClick={() => {
            const svg = getWordmarkSVG(resolvedTheme === "light" ? "#000" : "#fff");
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

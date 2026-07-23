"use client";

import { useRouter } from "@bprogress/next/app";
import { useHotkeys } from "react-hotkeys-hook";

const IS_DEV = process.env.NODE_ENV === "development";

export function KeyboardShortcuts() {
  const router = useRouter();

  // Mirror the command menu's advertised shortcuts (command-menu.tsx MENU_LINKS)
  // exactly: GH/GD/GN/GT. Previously GD/GN/GT were shown but never registered,
  // and g>s (/sponsors) + g>w (/wall-of-love) pointed at routes that don't exist.
  useHotkeys("g>h", () => router.push("/"));
  useHotkeys("g>d", () => router.push("/daily"));
  useHotkeys("g>n", () => router.push("/tech"));
  useHotkeys("g>t", () => router.push("/talks"));

  // Dev-only showcase routes (both notFound() in production), matching the
  // dev-gated GC/GB entries in the command menu.
  useHotkeys("g>c", () => router.push("/components"), { enabled: IS_DEV });
  useHotkeys("g>b", () => router.push("/blocks"), { enabled: IS_DEV });

  return null;
}

"use client";

import { useTheme } from "next-themes";
import { useEffect, useId, useRef, useState } from "react";

export function MermaidBlock({ code }: { code: string }) {
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !ref.current) return;

    let cancelled = false;

    (async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: resolvedTheme === "dark" ? "dark" : "default",
        securityLevel: "loose",
        fontFamily: "inherit",
      });

      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, code);
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
        }
      } catch (error) {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = `<pre class="text-sm text-red-500">Mermaid render error: ${
            error instanceof Error ? error.message : String(error)
          }</pre>`;
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [code, id, mounted, resolvedTheme]);

  return (
    <div
      ref={ref}
      className="my-6 flex justify-center overflow-x-auto rounded-lg border border-line bg-card p-4 [&>svg]:h-auto [&>svg]:max-w-full"
      suppressHydrationWarning
    >
      {!mounted && <div className="text-sm text-muted-foreground font-mono">Loading diagram…</div>}
    </div>
  );
}

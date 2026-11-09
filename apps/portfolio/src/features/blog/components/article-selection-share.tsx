"use client";

import { CopyIcon, LinkIcon, ShareIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { buildQuoteUrl } from "@/features/blog/lib/article-links";
import { copyText } from "@/utils/copy";

type Quote = { text: string; url: string; x: number; y: number; width: number };

const excluded = "pre, button, input, textarea, select, [contenteditable], .not-prose:not(code)";

function getParagraph(node: Node, root: HTMLElement) {
  const element = node instanceof Element ? node : node.parentElement;
  if (!element || element.closest(excluded) || !root.contains(element)) return null;
  return element.closest<HTMLElement>("p[id]");
}

export function ArticleSelectionShare({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let pointerDown = false;
    let timeout: ReturnType<typeof setTimeout>;

    const update = () => {
      if (pointerDown || toolbarRef.current?.contains(document.activeElement)) return;
      const root = contentRef.current;
      const selection = window.getSelection();
      if (!root || !selection || selection.isCollapsed || !selection.rangeCount) {
        setQuote(null);
        return;
      }

      const range = selection.getRangeAt(0);
      const start = getParagraph(range.startContainer, root);
      const end = getParagraph(range.endContainer, root);
      const text = selection.toString().trim();
      if (
        !start ||
        !end ||
        !text ||
        text.length > 4000 ||
        range.cloneContents().querySelector(excluded)
      ) {
        setQuote(null);
        return;
      }

      let startText = text;
      let endText: string | undefined;
      if (start !== end) {
        const startRange = range.cloneRange();
        startRange.setEnd(start, start.childNodes.length);
        startText = startRange.toString();
        const endRange = range.cloneRange();
        endRange.setStart(end, 0);
        endText = endRange.toString();
      }

      const rect = range.getBoundingClientRect();
      if (rect.bottom < 64 || rect.top > window.innerHeight) {
        setQuote(null);
        return;
      }
      const width = Math.min(320, window.innerWidth - 24);
      setQuote({
        text,
        url: buildQuoteUrl(window.location.href, start.id, startText, endText, root.innerText),
        width,
        x: Math.max(
          12,
          Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - 12),
        ),
        y: Math.max(
          72,
          Math.min(rect.top > 128 ? rect.top - 56 : rect.bottom + 12, window.innerHeight - 128),
        ),
      });
    };

    const schedule = () => {
      clearTimeout(timeout);
      timeout = setTimeout(update, 120);
    };
    const hide = () => {
      clearTimeout(timeout);
      setQuote(null);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && toolbarRef.current?.contains(event.target)) return;
      pointerDown = true;
      hide();
    };
    const onPointerUp = () => {
      pointerDown = false;
      schedule();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") hide();
    };
    const revealQuote = () => {
      const root = contentRef.current;
      root?.querySelector("[data-quote-target]")?.removeAttribute("data-quote-target");
      // Supporting browsers consume the text directive before exposing location.hash.
      const match = window.location.hash.match(/^#(.+?):~:text=/);
      if (!match) return;
      try {
        const target = document.getElementById(decodeURIComponent(match[1]));
        if (target && root?.contains(target)) {
          target.dataset.quoteTarget = "";
          target.scrollIntoView({ block: "start" });
        }
      } catch {
        // A malformed fragment must not interrupt reading the article.
      }
    };

    revealQuote();
    document.addEventListener("selectionchange", schedule);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", hide, { passive: true });
    window.addEventListener("resize", hide);
    window.addEventListener("hashchange", revealQuote);
    setReady(true);
    update();
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("selectionchange", schedule);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", hide);
      window.removeEventListener("resize", hide);
      window.removeEventListener("hashchange", revealQuote);
    };
  }, []);

  const copy = async (value: string, message: string) => {
    const copied = await copyText(value);
    if (copied) toast.success(message);
    else toast.error("Could not copy. Please try again.");
  };

  return (
    <>
      <div ref={contentRef} className="article-content" data-reading-ready={ready}>
        {children}
      </div>
      {quote && (
        <div
          ref={toolbarRef}
          role="toolbar"
          aria-label="Share selected text"
          className="not-prose fixed z-50 flex rounded-xl border border-line bg-popover p-1 text-xs text-popover-foreground shadow-lg"
          style={{ left: quote.x, top: quote.y, width: quote.width }}
          onPointerDown={(event) => {
            if (event.pointerType === "mouse") event.preventDefault();
          }}
        >
          <button
            type="button"
            className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
            onClick={() => void copy(`“${quote.text}”\n\n${quote.url}`, "Quote copied")}
          >
            <CopyIcon className="size-3.5" aria-hidden="true" />
            Copy quote
          </button>
          <button
            type="button"
            className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
            onClick={() => void copy(quote.url, "Link copied")}
          >
            <LinkIcon className="size-3.5" aria-hidden="true" />
            Copy link
          </button>
          {typeof navigator.share === "function" && (
            <button
              type="button"
              className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-lg hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
              onClick={async () => {
                try {
                  await navigator.share({ text: quote.text, url: quote.url });
                } catch (error) {
                  if (!(error instanceof Error && error.name === "AbortError"))
                    toast.error("Could not share. Try copying the quote instead.");
                }
              }}
            >
              <ShareIcon className="size-3.5" aria-hidden="true" />
              Share
            </button>
          )}
        </div>
      )}
    </>
  );
}

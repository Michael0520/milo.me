"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/utils";

function Photo({ src, alt, caption }: { src: string; alt?: string; caption?: string }) {
  return (
    <figure className="shrink-0 snap-start scroll-ml-4">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt || caption || ""}
          width={600}
          height={400}
          className="h-[280px] w-auto object-cover sm:h-[360px] pointer-events-none"
          unoptimized
          draggable={false}
        />
      </div>
      {caption && <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

function PhotoCarousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0, hasMoved: false });

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    dragState.current = {
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
      hasMoved: false,
    };
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const el = scrollRef.current;
      if (!el) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = x - dragState.current.startX;
      if (Math.abs(walk) > 3) {
        dragState.current.hasMoved = true;
      }
      el.scrollLeft = dragState.current.scrollLeft - walk;
    },
    [isDragging],
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onClick = useCallback((e: React.MouseEvent) => {
    if (dragState.current.hasMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  return (
    <div className="not-prose -mx-4">
      <div
        ref={scrollRef}
        className={cn(
          "flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scroll-smooth scrollbar-none",
          isDragging ? "cursor-grabbing snap-none !scroll-auto" : "cursor-grab",
        )}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onClickCapture={onClick}
      >
        {children}
      </div>
    </div>
  );
}

export { PhotoCarousel, Photo };

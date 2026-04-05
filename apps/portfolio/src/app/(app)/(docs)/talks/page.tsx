import { ArrowUpRightIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { X_USERNAME } from "@/config/site";
import { TALKS } from "@/features/portfolio/data/talks";

const title = "Talks";
const description = "Conference talks and presentations I've given.";

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/talks",
  },
  openGraph: {
    url: "/talks",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: X_USERNAME,
    creator: X_USERNAME,
    images: [ogImage],
  },
};

export default function Page() {
  return (
    <div className="min-h-svh">
      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">{description}</p>
      </div>

      <div className="screen-line-top screen-line-bottom flex h-4" />

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TALKS.map((talk) => (
            <div
              key={talk.slug}
              className="flex flex-col gap-2 p-2 max-sm:screen-line-top max-sm:screen-line-bottom sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
            >
              {talk.image && (
                <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
                  <Image
                    src={talk.image}
                    alt={talk.title}
                    width={1200}
                    height={630}
                    quality={100}
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
                </div>
              )}

              <div className="flex flex-col gap-1 p-2">
                <h3 className="text-lg leading-snug font-medium text-balance">{talk.title}</h3>

                {talk.description && (
                  <p className="text-sm text-muted-foreground line-clamp-2">{talk.description}</p>
                )}

                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  {talk.event && (
                    <span className="flex items-center gap-1">
                      <ArrowUpRightIcon className="size-3" />
                      {talk.event}
                    </span>
                  )}
                  {talk.location && (
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="size-3" />
                      {talk.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <CalendarIcon className="size-3" />
                    {talk.date}
                  </span>
                </div>

                {talk.tags && talk.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {talk.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-accent px-1.5 py-0.5 text-xs text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
}

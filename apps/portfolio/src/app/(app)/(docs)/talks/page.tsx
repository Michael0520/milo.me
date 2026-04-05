import type { Metadata } from "next";

import { X_USERNAME } from "@/config/site";
import { TalkItem } from "@/features/portfolio/components/talk-item";
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

      <div className="screen-line-top flex h-4" />

      <div className="px-4 divide-y divide-line">
        {TALKS.map((talk) => (
          <div key={talk.slug} className="py-2">
            <TalkItem talk={talk} />
          </div>
        ))}
      </div>

      <div className="h-4" />
    </div>
  );
}

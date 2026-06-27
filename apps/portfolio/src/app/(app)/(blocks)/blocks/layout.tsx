import type { Metadata } from "next";

import { X_USERNAME } from "@/config/site";

import { BlocksNav } from "./blocks-nav";

const title = "Blocks";
const description = "A collection of beautifully designed, production-ready blocks.";

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blocks",
  },
  openGraph: {
    url: "/blocks",
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

export default function BlocksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="stripe-divider screen-line-bottom" />

      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl leading-none font-semibold tracking-tight">{title}</h1>
      </div>

      <div className="screen-line-bottom p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">{description}</p>
      </div>

      <div className="no-scrollbar max-w-full overflow-x-auto scroll-fade-effect-x p-4 whitespace-nowrap">
        <BlocksNav />
      </div>

      <div className="screen-line-top screen-line-bottom">
        <div className="stripe-divider" />
      </div>

      {children}
    </>
  );
}

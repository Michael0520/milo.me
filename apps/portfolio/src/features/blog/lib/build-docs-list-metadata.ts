import type { Metadata } from "next";

import { X_USERNAME } from "@/config/site";

export function buildDocsListMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: `/${string}`;
}): Metadata {
  const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      url: path,
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
}

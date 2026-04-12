import type { Metadata } from "next";

import { X_USERNAME } from "@/config/site";
import { getDocPath } from "@/features/doc/data/documents";
import type { Doc } from "@/features/doc/types/document";

export function buildDocPageMetadata(doc: Doc): Metadata {
  const { title, description, image, createdAt, updatedAt } = doc.metadata;

  const postUrl = getDocPath(doc);
  const ogImage =
    image ||
    `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      url: postUrl,
      type: "article",
      publishedTime: new Date(createdAt).toISOString(),
      modifiedTime: new Date(updatedAt).toISOString(),
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

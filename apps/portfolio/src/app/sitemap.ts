import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllDocs, getDocPath } from "@/features/doc/data/documents";
import { DOC_CATEGORIES } from "@/features/doc/types/document";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllDocs()
    .filter((doc) => doc.metadata.category !== DOC_CATEGORIES.components)
    .map((post) => ({
      url: `${SITE_INFO.url}${getDocPath(post)}`,
      lastModified: new Date(post.metadata.updatedAt).toISOString(),
    }));

  const routes = ["", "/daily", "/tech", "/talks"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}

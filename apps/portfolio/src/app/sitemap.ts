import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getDocsByCategory, getDocPath } from "@/features/doc/data/documents";
import { DOC_CATEGORIES } from "@/features/doc/types/document";

export default function sitemap(): MetadataRoute.Sitemap {
  // Mirror the page generators (daily = personal, tech = tech) exactly. A
  // `!== components` filter would let a doc with a missing/typo'd category slip
  // through getDocPath's `/daily` default and ship a URL that 404s, since
  // daily/[slug] generates params for personal only with dynamicParams=false.
  const posts = [
    ...getDocsByCategory(DOC_CATEGORIES.personal),
    ...getDocsByCategory(DOC_CATEGORIES.tech),
  ].map((post) => ({
    url: `${SITE_INFO.url}${getDocPath(post)}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }));

  const routes = ["", "/daily", "/tech", "/talks"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}

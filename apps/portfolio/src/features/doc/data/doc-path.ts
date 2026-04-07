import { DOC_CATEGORIES, type DocCategory } from "@/features/doc/types/document";

const CATEGORY_ROUTE_MAP: Record<DocCategory, string> = {
  [DOC_CATEGORIES.components]: "/components",
  [DOC_CATEGORIES.tech]: "/tech",
  [DOC_CATEGORIES.personal]: "/daily",
};

export function getDocPath(doc: { slug: string; metadata: { category?: DocCategory } }): string {
  const route = CATEGORY_ROUTE_MAP[doc.metadata.category ?? DOC_CATEGORIES.personal];
  return `${route}/${doc.slug}`;
}

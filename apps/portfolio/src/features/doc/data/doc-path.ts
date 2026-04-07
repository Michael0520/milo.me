import type { Doc } from "@/features/doc/types/document";

export function getDocPath(doc: Pick<Doc, "slug" | "metadata">): string {
  switch (doc.metadata.category) {
    case "components":
      return `/components/${doc.slug}`;
    case "tech":
      return `/tech/${doc.slug}`;
    default:
      return `/daily/${doc.slug}`;
  }
}

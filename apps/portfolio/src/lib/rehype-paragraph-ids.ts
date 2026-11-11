import { createHash } from "node:crypto";
import { visit } from "unist-util-visit";

import type { UnistNode, UnistTree } from "@/types/unist";

function getText(node: UnistNode): string {
  return node.value ?? node.children?.map(getText).join("") ?? "";
}

export function rehypeParagraphIds() {
  return (tree: UnistTree) => {
    const ids = new Set<string>();
    visit(tree, (node: UnistNode) => {
      if (typeof node.properties?.id === "string") ids.add(node.properties.id);
    });

    visit(tree, (node: UnistNode) => {
      if (node.type !== "element" || node.tagName !== "p" || node.properties?.id) return;
      const text = getText(node).trim().replace(/\s+/g, " ");
      if (!text) return;

      // Content-based IDs survive paragraphs being inserted earlier in an article.
      const base = `p-${createHash("sha256").update(text).digest("hex").slice(0, 12)}`;
      let id = base;
      let duplicate = 2;
      while (ids.has(id)) id = `${base}-${duplicate++}`;
      ids.add(id);
      node.properties = { ...node.properties, id };
    });
  };
}

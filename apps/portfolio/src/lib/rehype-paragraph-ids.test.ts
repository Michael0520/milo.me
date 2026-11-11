import { expect, test } from "vite-plus/test";

import type { UnistNode, UnistTree } from "../types/unist";
import { rehypeParagraphIds } from "./rehype-paragraph-ids";

const paragraph = (text: string): UnistNode => ({
  type: "element",
  tagName: "p",
  children: [{ type: "text", value: text }],
});

test("paragraph links survive unrelated paragraphs being inserted before them", () => {
  const original: UnistTree = { type: "root", children: [paragraph("A paragraph with 中文")] };
  const edited: UnistTree = {
    type: "root",
    children: [paragraph("New introduction"), paragraph("A paragraph with 中文")],
  };
  rehypeParagraphIds()(original);
  rehypeParagraphIds()(edited);
  expect(edited.children[1].properties?.id).toBe(original.children[0].properties?.id);
});

test("duplicate paragraphs and existing IDs never produce duplicate anchors", () => {
  const existing = paragraph("Explicit anchor");
  existing.properties = { id: "keep-me" };
  const tree: UnistTree = {
    type: "root",
    children: [existing, paragraph("Same text"), paragraph("Same text"), paragraph("")],
  };
  rehypeParagraphIds()(tree);
  expect(tree.children[0].properties?.id).toBe("keep-me");
  expect(tree.children[2].properties?.id).toBe(`${tree.children[1].properties?.id}-2`);
  expect(tree.children[3].properties?.id).toBeUndefined();
});

test("inline formatting does not change the paragraph anchor", () => {
  const plain = paragraph("Read this code");
  const formatted: UnistNode = {
    type: "element",
    tagName: "p",
    children: [
      { type: "text", value: "Read this " },
      { type: "element", tagName: "code", children: [{ type: "text", value: "code" }] },
    ],
  };
  rehypeParagraphIds()({ type: "root", children: [plain] });
  rehypeParagraphIds()({ type: "root", children: [formatted] });
  expect(formatted.properties?.id).toBe(plain.properties?.id);
});

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";
import { z } from "zod";

import type { Doc, DocMetadata } from "@/features/doc/types/document";
import { DOC_CATEGORIES } from "@/features/doc/types/document";

// Frontmatter was previously trusted via `file.data as DocMetadata` — an
// unchecked cast. A post missing `updatedAt`/`title` (or with an unparseable
// date) then crashed the whole build deep in an unrelated file (sitemap
// RangeError, RSS TypeError) with no hint which post was at fault. Validate at
// the single load chokepoint instead and fail with the file + field named.
// `satisfies` keeps this schema in lockstep with the DocMetadata type.
const isoDateString = (field: string) =>
  z
    .string({ required_error: `${field} is required` })
    .refine(
      (v) => !Number.isNaN(Date.parse(v)),
      `${field} must be a valid date string (e.g. "2025-02-03")`,
    );

const docMetadataSchema = z.object({
  title: z.string({ required_error: "title is required" }).min(1, "title must not be empty"),
  description: z
    .string({ required_error: "description is required" })
    .min(1, "description must not be empty"),
  image: z.string().optional(),
  category: z.nativeEnum(DOC_CATEGORIES).optional(),
  new: z.boolean().optional(),
  pinned: z.boolean().optional(),
  createdAt: isoDateString("createdAt"),
  updatedAt: isoDateString("updatedAt"),
}) satisfies z.ZodType<DocMetadata>;

function calculateReadingTime(content: string): number {
  // Strip MDX/HTML tags and frontmatter
  const text = content
    .replace(/<[^>]+>/g, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#*`>\-|[\]()!]/g, "")
    .trim();

  // Count CJK characters (~400 chars/min) and English words (~200 words/min)
  const cjkChars = (text.match(/[\u4e00-\u9fff\u3040-\u30ff]/g) || []).length;
  const nonCjkText = text.replace(/[\u4e00-\u9fff\u3040-\u30ff]/g, " ").trim();
  const englishWords = nonCjkText.split(/\s+/).filter(Boolean).length;

  const minutes = cjkChars / 400 + englishWords / 200;
  return Math.max(1, Math.ceil(minutes));
}

function parseFrontmatter(fileContent: string, source: string) {
  const file = matter(fileContent);

  const result = docMetadataSchema.safeParse(file.data);
  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid frontmatter in ${source}:\n${issues}`);
  }

  return {
    metadata: result.data,
    content: file.content,
  };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent, path.basename(filePath));
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map<Doc>((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));

    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
      readingTime: calculateReadingTime(content),
    };
  });
}

export const getAllDocs = cache(() => {
  return getMDXData(path.join(process.cwd(), "src/features/doc/content")).sort((a, b) => {
    if (a.metadata.pinned && !b.metadata.pinned) return -1;
    if (!a.metadata.pinned && b.metadata.pinned) return 1;

    return new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime();
  });
});

export function getDocBySlug(slug: string) {
  return getAllDocs().find((doc) => doc.slug === slug);
}

export function getDocsByCategory(category: string) {
  return getAllDocs().filter((doc) => doc.metadata?.category === category);
}

export { getDocPath } from "./doc-path";

export function findNeighbour(docs: Doc[], slug: string) {
  const len = docs.length;

  for (let i = 0; i < len; ++i) {
    if (docs[i].slug === slug) {
      return {
        previous: i > 0 ? docs[i - 1] : null,
        next: i < len - 1 ? docs[i + 1] : null,
      };
    }
  }

  return { previous: null, next: null };
}

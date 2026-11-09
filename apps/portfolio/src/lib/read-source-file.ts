import { readFileSync } from "node:fs";
import { join, posix } from "node:path";

export function readSourceFile(filePath: string) {
  const normalized = posix.normalize(filePath.replaceAll("\\", "/"));
  if (!normalized.startsWith("src/")) {
    throw new Error(`Component source must be inside src/: ${filePath}`);
  }
  const relativePath = normalized.slice("src/".length);

  // Literal source roots bound tracing to source files, excluding public slide bundles.
  try {
    return readFileSync(join(process.cwd(), "src", relativePath), "utf8");
  } catch (error) {
    if (!(error instanceof Error && "code" in error && error.code === "ENOENT")) throw error;
    return readFileSync(join(process.cwd(), "apps/portfolio/src", relativePath), "utf8");
  }
}

import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { expect, test, vi } from "vite-plus/test";

import { readSourceFile } from "./read-source-file";

const appDirectory = fileURLToPath(new URL("../../", import.meta.url));
const repositoryDirectory = resolve(appDirectory, "../..");

test.each([appDirectory, repositoryDirectory])(
  "loads component source when launched from %s",
  (directory) => {
    const cwd = vi.spyOn(process, "cwd").mockReturnValue(directory);
    try {
      expect(readSourceFile("src/components/ml-mark-path.ts")).toContain(
        "export const ML_MARK_PATH",
      );
      expect(readSourceFile("src/lib/../components/ml-mark-path.ts")).toContain(
        "export const ML_MARK_PATH",
      );
      expect(readSourceFile("src\\components\\ml-mark-path.ts")).toContain(
        "export const ML_MARK_PATH",
      );
    } finally {
      cwd.mockRestore();
    }
  },
);

test.each([
  "package.json",
  "../package.json",
  "src/../package.json",
  "src/../../package.json",
  "/tmp/example.ts",
])("rejects source paths outside the traced directory: %s", (filePath) => {
  expect(() => readSourceFile(filePath)).toThrow("Component source must be inside src/");
});

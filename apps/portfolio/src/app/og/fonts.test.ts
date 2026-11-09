import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { expect, test, vi } from "vite-plus/test";

const appDirectory = fileURLToPath(new URL("../../../", import.meta.url));
const repositoryDirectory = resolve(appDirectory, "../..");

test.each([appDirectory, repositoryDirectory])(
  "loads the correct OG fonts when launched from %s",
  async (directory) => {
    vi.resetModules();
    const cwd = vi.spyOn(process, "cwd").mockReturnValue(directory);
    try {
      const fonts = await import("./fonts");
      for (const [name, filename] of [
        ["geistMedium", "Geist-Medium.ttf"],
        ["geistSemiBold", "Geist-SemiBold.ttf"],
        ["geistMonoRegular", "GeistMono-Regular.ttf"],
      ] as const) {
        expect(fonts[name]).toEqual(readFileSync(join(appDirectory, "src/assets/fonts", filename)));
      }
    } finally {
      cwd.mockRestore();
    }
  },
);

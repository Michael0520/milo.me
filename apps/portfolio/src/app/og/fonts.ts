import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Keep both launch directories supported while making every font path statically traceable.
const fontDirectory = existsSync(join(process.cwd(), "src/assets/fonts"))
  ? join(process.cwd(), "src/assets/fonts")
  : join(process.cwd(), "apps/portfolio/src/assets/fonts");

export const geistMedium = readFileSync(join(fontDirectory, "Geist-Medium.ttf"));
export const geistSemiBold = readFileSync(join(fontDirectory, "Geist-SemiBold.ttf"));
export const geistMonoRegular = readFileSync(join(fontDirectory, "GeistMono-Regular.ttf"));

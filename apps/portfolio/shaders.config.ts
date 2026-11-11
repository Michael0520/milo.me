import { defineConfig } from "shaders/config";

export default defineConfig({
  // Components are imported from 'shaders/react'
  framework: "react",
  // Where `npx shaders install` writes component files
  outDir: "src/components/shaders",
  // Shaders project this codebase is connected to
  project: "5773d084-fa6a-415c-8b64-27fc7b67bbb5",
});

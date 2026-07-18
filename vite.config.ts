import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: [
      "**/.next/**",
      "**/out/**",
      "**/build/**",
      "**/dist/**",
      "**/next-env.d.ts",
      "**/pnpm-lock.yaml",
      "**/CHANGELOG.md",
      "apps/portfolio/public/slides/**",
      "apps/slides/**",
      "apps/portfolio/src/__registry__/**",
      "apps/portfolio/public/r/**",
    ],
  },
  lint: {
    plugins: ["typescript", "react", "nextjs", "import"],
    categories: {
      correctness: "error",
    },
    rules: {
      "typescript/consistent-type-imports": "error",
      "typescript/no-import-type-side-effects": "error",
      "nextjs/no-img-element": "off",
    },
    ignorePatterns: [
      "**/.next/**",
      "**/out/**",
      "**/build/**",
      "**/dist/**",
      "**/next-env.d.ts",
      "apps/portfolio/public/slides/**",
      "apps/slides/**",
      "apps/portfolio/src/__registry__/**",
    ],
  },
  run: {
    cache: true,
  },
});

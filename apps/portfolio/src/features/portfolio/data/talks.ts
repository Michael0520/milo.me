import type { Talk } from "../types/talks";

export const TALKS: Talk[] = [
  {
    title: "Modern Frontend Infra - A 2026 Toolchain Map",
    slug: "v-taiwan-2026",
    date: "2026-07-18",
    description:
      "Why — after the Rust rewrite and the great unification — the real battleground is AI's verification.",
    tags: ["frontend-infra", "vite", "rust", "oxc", "pnpm", "ai", "idp"],
    event: "v-taiwan Meetup",
    location: "Taiwan",
  },
  {
    title: "In the Age of AI, Development Workflows Are Being Redefined",
    slug: "code4taiwan-summit-2025",
    date: "2025-12-05",
    description:
      "From Traditional Debugging to Context Engineering - The Changing Role of Engineers",
    tags: ["ai", "react-grab", "context-engineering", "developer-workflow"],
    event: "Code for Taiwan Summit 2025",
    location: "Taiwan",
  },
  {
    title: "Modern Monorepo Toolchain - Build Systems, Task Runners & Beyond",
    slug: "jsdc-2025",
    date: "2025-11-29",
    description:
      "From tool selection to real-world implementation, how Monorepo becomes core infrastructure for modern frontend teams.",
    tags: ["monorepo", "toolchain", "nx", "turborepo", "oxlint", "ai"],
    event: "JSDC 2025",
    location: "Taiwan",
  },
  {
    title: "Monorepo Guide - Tool Selection & OXC",
    slug: "jsdc-meetup-2025",
    date: "2025-06-29",
    description:
      "A comprehensive guide to selecting the right tools for monorepo management and exploring the OXC (Oxidation Compiler) bundler.",
    tags: ["monorepo", "toolchain", "oxc", "frontend"],
    event: "JSDC 小聚",
    location: "Taiwan",
  },
];

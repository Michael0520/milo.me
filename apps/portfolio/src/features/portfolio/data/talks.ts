import type { Talk } from "../types/talks";

export const TALKS: Talk[] = [
  {
    title: "In the Age of AI, Development Workflows Are Being Redefined",
    slug: "code4taiwan-summit-2025",
    date: "2025-12-05",
    description:
      "From Traditional Debugging to Context Engineering - The Changing Role of Engineers",
    tags: ["ai", "react-grab", "context-engineering", "developer-workflow"],
    image: "https://www.michaello.me/images/meetup-2025/cover.png",
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
    image: "https://www.michaello.me/images/jsdc-2025/4.png",
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
    image: "https://www.michaello.me/images/jsdc-meetup-2025/3.png",
    event: "JSDC 小聚",
    location: "Taiwan",
  },
];

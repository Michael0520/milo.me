import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "beautiful-code-snap",
    title: "Beautiful Code Snap",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/Michael0520/beautiful-code-snap",
    skills: ["Open Source", "React", "TypeScript", "Next.js", "shadcn/ui", "Tailwind CSS"],
    description: `A beautiful code snapshot generator for developers.
- Beautiful code screenshots with customizable themes
- Support for multiple programming languages
- Quick and easy code sharing
- Built with modern web technologies`,
    isExpanded: true,
  },
];

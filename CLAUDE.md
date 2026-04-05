# CLAUDE.md

## Project Overview

Michael Lo's personal portfolio and blog. Monorepo with pnpm workspaces. Main app is `apps/portfolio` (Next.js 16).

## Commands

```bash
# Dev server
pnpm --filter michaello-portfolio dev

# Build
pnpm --filter michaello-portfolio build

# Type check
npx tsc --noEmit --project apps/portfolio/tsconfig.json

# Lint
vp check --fix
```

## Key Directories

- `apps/portfolio/src/features/portfolio/data/` — All personal data (user, talks, projects, tech-stack, social-links)
- `apps/portfolio/src/features/portfolio/types/` — Type definitions
- `apps/portfolio/src/features/doc/content/` — Blog posts (MDX)
- `apps/portfolio/src/config/site.ts` — Nav config, site metadata
- `apps/portfolio/src/components/command-menu.tsx` — Command palette (Cmd+K)
- `apps/portfolio/public/slides/` — Slidev presentation builds (excluded from eslint via `.eslintignore`)

## Architecture Decisions

### Dev-Only Features

Components showcase and Blocks are development tools, hidden in production:

- Nav: `DEV_NAV` array gated by `process.env.NODE_ENV === "development"` in `config/site.ts`
- Command menu: `DEV_MENU_LINKS` + JSX render guard in `command-menu.tsx`
- Routes: `notFound()` at top of page function in production
- Homepage: Components section wrapped in `process.env.NODE_ENV` check

### SVG Mask IDs

`MLMarkAnimated` uses `useId().replace(/:/g, "")` for unique mask IDs — prevents collision when multiple instances render simultaneously.

### Talks & Slides

- Talk data is static in `data/talks.ts` (no Slidev dependency at runtime)
- Slidev HTML builds live in `public/slides/{slug}/` with internal paths rewritten to match slug
- `slug` is semantic (e.g., `jsdc-2025`), not date-based

### OG Image Font Loading

OG routes use `readFileSync` with fallback paths for monorepo compatibility:

```ts
function loadFont(filename: string) {
  const paths = [
    join(process.cwd(), "src/assets/fonts", filename),
    join(process.cwd(), "apps/portfolio/src/assets/fonts", filename),
  ];
  // try each path...
}
```

### Image Preload Prevention

- Blog post links: `prefetch={false}` to prevent unused image preloads
- Avatar: `loading="lazy"` to prevent React SSR from generating cross-page `<link rel="preload">`

## Legacy Repo

Old portfolio at `/Users/ming/milo/personal-blog/milo` (Turborepo + Bun). Blog posts (45) not yet migrated.

## Conventions

- Verify locally with browser (Chrome DevTools) before pushing
- Zero console errors and warnings in production
- Use `date-fns` for date formatting
- Shared layout components in `src/components/` (e.g., `ContentGrid`)
- Feature-specific components in `src/features/{feature}/components/`

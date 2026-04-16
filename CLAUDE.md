# CLAUDE.md

## Project Overview

Michael Lo's personal portfolio and blog. Monorepo with pnpm workspaces. Main app is `apps/portfolio` (Next.js 16).

## Commands

```bash
# Dev server
vp run michaello-portfolio#dev

# Build
vp run michaello-portfolio#build

# Type check
vp run michaello-portfolio#check-types

# Format + lint (auto-fix)
vp check --fix

# Verify Vercel compat (Vercel uses pnpm — keep as pnpm)
cd apps/portfolio && pnpm install --frozen-lockfile
```

## Key Directories

- `apps/portfolio/src/features/portfolio/data/` — All personal data (user, talks, projects, tech-stack, social-links)
- `apps/portfolio/src/features/portfolio/types/` — Type definitions
- `apps/portfolio/src/features/doc/content/` — Blog posts (MDX)
- `apps/portfolio/src/config/site.ts` — Nav config, site metadata
- `apps/portfolio/src/components/command-menu.tsx` — Command palette (Cmd+K)
- `apps/portfolio/public/slides/` — Slidev presentation builds (excluded from oxlint via `ignorePatterns` in `vite.config.ts`)

## Architecture Decisions

### Dev-Only Features

Components showcase and Blocks are development tools, hidden in production:

- Nav: `DEV_NAV` array gated by `process.env.NODE_ENV === "development"` in `config/site.ts`
- Command menu: `DEV_MENU_LINKS` + JSX render guard in `command-menu.tsx`
- Routes: `notFound()` at top of page function in production
- Homepage: Components section wrapped in `process.env.NODE_ENV` check

### Talks & Slides

- Talk data is static in `data/talks.ts` (no Slidev dependency at runtime)
- Slidev HTML builds live in `public/slides/{slug}/` with internal paths rewritten to match slug
- `slug` is semantic (e.g., `jsdc-2025`), not date-based

## Upstream Tracking

This repo is based on [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com). The `upstream` remote is configured for tracking new features.

**Important:** No shared git history. Upstream is a single app, ours is a monorepo (`apps/portfolio/`). Cannot cherry-pick — must manually reimplement.

**After pulling upstream changes:** Delete any `apps/portfolio/pnpm-workspace.yaml` and `apps/portfolio/pnpm-lock.yaml` that upstream introduces. These make pnpm treat `apps/portfolio` as a separate workspace root, breaking Vercel deploys (Vercel runs install from `apps/portfolio`).

To check for new upstream features:

```bash
git fetch upstream
git log <last-checked-hash>..upstream/main --oneline
```

Last checked hash is stored in Claude memory. When the user asks to "check upstream" or "看 upstream 有什麼新功能", fetch and produce a summary report grouped by feat/fix/refactor, then update memory.

## Blog System

Use `/journal` skill to create blog posts. Writing conventions, MDX components, and photo handling are documented in `.claude/skills/journal/SKILL.md`.

## CI/CD

- **CI**: `.github/workflows/ci.yml` — Lint + Type Check + Build on push/PR to main
- **Release**: `.github/workflows/release.yml` — Release Please auto-generates CHANGELOG, version bump, and GitHub Release
- **Auto-delete branches**: Enabled in GitHub settings

## Conventions

- Verify locally with browser (Chrome DevTools) before pushing
- Zero console errors and warnings in production
- Use `date-fns` for date formatting
- Shared layout components in `src/components/` (e.g., `ContentGrid`)
- Feature-specific components in `src/features/{feature}/components/`
- GitHub repo: `Michael0520/milo.me`

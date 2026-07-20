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

# Slidev decks (source in apps/slides — see /slides skill)
cd apps/slides && pnpm dev           # default deck (2026-07-18) on :3030
cd apps/slides && pnpm build         # build all → apps/portfolio/public/slides/<slug>/
```

## Key Directories

- `apps/portfolio/src/features/portfolio/data/` — All personal data (user, talks, projects, tech-stack, social-links)
- `apps/portfolio/src/features/portfolio/types/` — Type definitions
- `apps/portfolio/src/features/doc/content/` — Blog posts (MDX)
- `apps/portfolio/src/config/site.ts` — Nav config, site metadata
- `apps/portfolio/src/components/command-menu.tsx` — Command palette (Cmd+K)
- `apps/slides/` — Slidev deck **sources**, one folder per talk (`YYYY-MM-DD/src/slides.md`); build outputs to portfolio `public/slides/<slug>/`
- `apps/portfolio/public/slides/` — Slidev presentation **builds** (excluded from oxlint via `ignorePatterns` in `vite.config.ts`)

## Dependency Management

All workspace deps are managed via pnpm catalogs (`pnpm-workspace.yaml`). Workspaces reference `"<pkg>": "catalog:"` (or `"catalog:preview"` for the experimental utils lane). **To bump a version, edit `pnpm-workspace.yaml` only** — every workspace that uses it updates in one place after `vp install`.

- Default `catalog:` — production versions for `apps/portfolio` + `apps/website`
- `catalogs.preview` — TS 6 / @types/node 25 lane for `packages/utils` only
- Adding a new dep: add to catalog first, then reference via `"catalog:"` in the workspace's `package.json`

## Architecture Decisions

### Dev-Only Features

Components showcase and Blocks are development tools, hidden in production:

- Nav: `DEV_NAV` array gated by `process.env.NODE_ENV === "development"` in `config/site.ts`
- Command menu: `DEV_MENU_LINKS` + JSX render guard in `command-menu.tsx`
- Routes: `notFound()` at top of page function in production
- Homepage: Components section wrapped in `process.env.NODE_ENV` check

### Talks & Slides

- **Deck sources** live in `apps/slides/<YYYY-MM-DD>/src/slides.md` (Slidev workspace, pnpm). Edit + preview there; the portfolio has no Slidev dependency at runtime.
- **Build → publish**: `apps/slides` build scripts compile each deck with `--base /slides/<slug>/` straight into `apps/portfolio/public/slides/<slug>/`. The `slug` is semantic (e.g. `jsdc-2025`), not date-based — the date folder → slug mapping lives in `apps/slides/package.json`.
- **Talk data** is static in `apps/portfolio/.../data/talks.ts`, which references the published `slug`. Keep a slug stable once live.
- Full workflow (new deck, dev, build, publish, wire into `talks.ts`) is codified in the **`/slides` skill** (`.claude/skills/slides/`).

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

- **CI** (`.github/workflows/ci.yml`): `detect-changes` (dorny/paths-filter) skips the heavy jobs when a PR touches only non-build paths (`apps/slides`, `public/slides`, `.claude`, `docs`, `openspec`, `*.md`); otherwise `build` (`vp check` + type-check + build) and `e2e` (Playwright smoke, `apps/portfolio/e2e/`) run. A `done` job aggregates them into one gate. Shared checkout+setup+install is a composite action (`.github/actions/setup`). All actions are pinned to commit SHAs.
- **cleanup-cache** (`.github/workflows/cleanup-cache.yml`): deletes a PR's Actions caches on close.
- **Release** (`.github/workflows/release.yml`): Release Please auto-generates CHANGELOG, version bump, and GitHub Release.
- **Renovate lockfiles** (`.github/workflows/renovate-lockfiles.yml`): Renovate's in-clone lockfile refresh breaks on catalog PRs that self-bump pnpm, so `renovate.json` sets `skipArtifactsUpdate` and this workflow regenerates `pnpm-lock.yaml` on every `renovate/**` push, committing it back via a scoped GitHub App token (`gitIgnoredAuthors` keeps Renovate managing the branch). Adopted from voidzero-dev/vite-plus — see [[reference_ci_deps_infra]].
- **Security** (`.github/workflows/zizmor.yml`): [zizmor](https://zizmor.sh) statically audits workflows + composite actions on every `.github/**` change (offline mode). Secret scanning is GitGuardian.
- **Least-privilege**: every workflow defaults to `permissions: {}` with jobs opting into exactly what they need; all actions are SHA-pinned; `concurrency` never cancels an in-progress `main` build.
- **Dependency automation**: Renovate owns automated **npm + pnpm catalog** updates (`.github/renovate.json`, held majors locked; lockfiles refreshed by the workflow above); `taze` is the manual catalog-aware lane (see [[reference_toolchain_baseline]]); Dependabot owns **GitHub Actions** only (`.github/dependabot.yml`). Split so they don't open duplicate PRs.
- **e2e tests**: `vp run michaello-portfolio#test:e2e` (Playwright; `test:e2e:install` fetches chromium). Unit tests are **not** wired yet — `vp test` is blocked by an upstream version lag (`@voidzero-dev/vite-plus-test` behind `vite-plus`).
- **Auto-delete branches**: Enabled in GitHub settings.
- **Note (private + free plan)**: branch protection and CodeQL/code-scanning need a paid tier (GHAS) for private repos. zizmor (workflow static analysis) and GitGuardian (secrets) cover the rest, so **CodeQL is the only remaining security gap** — revisit if the repo goes public or gets GHAS. The `done` gate is future-proofing for when branch protection can be enabled.

## Conventions

- Verify locally with browser (Chrome DevTools) before pushing
- Zero console errors and warnings in production
- Use `date-fns` for date formatting
- Shared layout components in `src/components/` (e.g., `ContentGrid`)
- Feature-specific components in `src/features/{feature}/components/`
- GitHub repo: `Michael0520/milo.me`

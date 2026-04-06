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

## Upstream Tracking

This repo is based on [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com). The `upstream` remote is configured for tracking new features.

**Important:** No shared git history. Upstream is a single app, ours is a monorepo (`apps/portfolio/`). Cannot cherry-pick — must manually reimplement.

To check for new upstream features:

```bash
git fetch upstream
git log <last-checked-hash>..upstream/main --oneline
```

Last checked hash is stored in Claude memory. When the user asks to "check upstream" or "看 upstream 有什麼新功能", fetch and produce a summary report grouped by feat/fix/refactor, then update memory.

## Legacy Repo

Old portfolio at `/Users/ming/milo/personal-blog/milo` (Turborepo + Bun). Blog posts (45) not yet migrated.

## Blog System

### Blog Listing

Text-based minimal list (no cover images). Posts grouped by year with large watermark year headers. Each item shows: title + date (MMM d) + reading time (Xmin).

Reading time is calculated in `documents.ts` from content word count (CJK 400 chars/min, English 200 words/min).

### Journal Posts

Use `/journal` skill to create journal-style blog posts. Two modes: Life (休閒生活) / Work (工作技術).

Key files:

- `.claude/skills/journal/SKILL.md` — Skill definition (v3.0)
- `src/features/doc/content/` — MDX files

### MDX Components

Custom components available in blog posts:

| Component                     | Usage                                                 |
| ----------------------------- | ----------------------------------------------------- |
| `<PhotoCarousel>` + `<Photo>` | Horizontal scrollable photo gallery with drag support |
| `<Callout>`                   | Highlighted callout box                               |
| `<Steps>` + `<Step>`          | Numbered step list                                    |
| `<FramedImage>`               | Image with border and optional zoom                   |
| `<YouTubeEmbed>`              | Embedded YouTube video                                |
| `<IframeEmbed>`               | Custom iframe embed                                   |

PhotoCarousel usage:

```mdx
<PhotoCarousel>
  <Photo src="/images/..." caption="描述" />
  <Photo src="/images/..." caption="描述" />
</PhotoCarousel>
```

### Fonts

- English: Geist Sans / Geist Mono
- Chinese: Noto Sans TC (思源黑體)
- Fallback chain: `--font-sans: Geist Sans, Noto Sans TC`

## Writing Conventions (正體中文)

Blog posts written in Traditional Chinese follow these rules:

- **句號** `。` 只出現在每段最後一句，段落中間用 `，` 連接
- **不使用破折號** `——`，用 `，` 或 `：` 代替
- **Blockquote** `>` 用於金句/重點語錄，每篇 2-3 個
- **短句獨立成段**製造節奏感，例如：「其實只是愛漂亮？也許吧。」
- **括號旁白**增加人味，例如：`（對，追星）`
- **前後呼應**：開頭拋出的問題/主題，結尾要回答或呼應
- **自然語言混用**：zh-TW、ja、en 按真實生活語境

## Conventions

- Verify locally with browser (Chrome DevTools) before pushing
- Zero console errors and warnings in production
- Use `date-fns` for date formatting
- Shared layout components in `src/components/` (e.g., `ContentGrid`)
- Feature-specific components in `src/features/{feature}/components/`

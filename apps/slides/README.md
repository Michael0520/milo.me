# Slidevs - Presentation Slides

This directory contains all presentation slides built with [Slidev](https://sli.dev/).
Each deck is authored under a `YYYY-MM-DD/` folder and published into
`apps/portfolio/public/slides/<slug>/` under a **semantic slug** (not the date).

## Structure

```
apps/slides/
├── shared/              # Shared assets across all presentations
│   └── images/          # Common images (avatar, logos, etc.)
├── 2025-06-29/          # Individual talk (YYYY-MM-DD format)
│   └── src/
│       ├── slides.md    # Main slide content
│       ├── components/  # Custom Vue components
│       ├── public/      # Talk-specific static assets
│       └── vite.config.ts
├── 2025-11-29/
│   └── src/
│       └── ...
└── package.json         # Root Slidev config + per-deck dev/build/export scripts
```

## Deck → published slug

The date folder is the source; the published slug is semantic. The mapping lives
in `package.json` build scripts (`--base /slides/<slug>/`):

| Source folder | Published slug (`public/slides/…`) |
| ------------- | ---------------------------------- |
| `2025-06-29`  | `jsdc-meetup-2025`                  |
| `2025-11-29`  | `jsdc-2025`                         |
| `2025-12-05`  | `code4taiwan-summit-2025`          |
| `2026-07-18`  | `v-taiwan-2026`                     |

`talks.ts` references these slugs, so keep the slug stable once published.

## Shared Assets

Common assets (avatar, logos) live in `shared/images/`. A deck can either symlink
`src/public/shared → ../../../shared` or copy the files in; both resolve the same
`/shared/images/...` path at runtime.

```html
<img src="/shared/images/avatar.jpg" />
```

## Development

Run from `apps/slides`:

```bash
# Default deck (2026-07-18 / v-taiwan-2026) on http://localhost:3030
pnpm dev

# A specific deck
pnpm dev:2025-11-29
```

## Build & Publish

```bash
# Build all decks into apps/portfolio/public/slides/<slug>/
pnpm build

# Build a single deck
pnpm build:2026-07-18
```

Each `build:<date>` compiles the deck with `--base /slides/<slug>/` and outputs the
static site straight into `../portfolio/public/slides/<slug>`, so it is served by the
portfolio at `/slides/<slug>/` and linked from the talk entry in `talks.ts`.

Optional PDF export: `pnpm export:2026-07-18` → `dist/2026-07-18.pdf`.

## Adding a New Talk

1. Create `YYYY-MM-DD/src/` and add `slides.md` (copy structure from an existing deck)
2. Add `dev:<date>`, `build:<date>` (with the semantic `--base /slides/<slug>/`), and
   `export:<date>` scripts to `package.json`, and add `build:<date>` to the `build` chain
3. Reference the new slug from `apps/portfolio/src/features/portfolio/data/talks.ts`

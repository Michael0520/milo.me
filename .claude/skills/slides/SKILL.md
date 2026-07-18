---
name: slides
description: Create, edit, build, and publish a Slidev talk deck in this monorepo. Use when adding a new talk deck, editing an existing deck's slides.md, rebuilding a deck into the portfolio, or wiring a deck into the Talks page.
metadata:
  author: michaello
  version: "1.0"
---

Slidev decks for michaello.me. **Sources** live in `apps/slides/`; **builds** are published into `apps/portfolio/public/slides/<slug>/` and linked from the Talks page.

The portfolio has **no Slidev dependency at runtime** — it just serves the static build. So the loop is always: edit source → build into portfolio → verify → commit.

---

## Layout

```
apps/slides/
├── shared/images/            # assets shared across decks (avatar, logos)
├── <YYYY-MM-DD>/src/
│   ├── slides.md             # the deck (Slidev markdown)
│   ├── components/           # per-deck Vue components
│   ├── public/               # per-deck assets; public/shared → ../../../shared
│   ├── style.css
│   ├── unocss.config.ts
│   └── vite.config.ts
└── package.json              # per-deck dev/build/export scripts + date→slug mapping
```

Deck folders are **date-named** (`YYYY-MM-DD`). The published **slug is semantic** and lives in the `package.json` build script's `--base`.

## Date → slug mapping (source of truth: `apps/slides/package.json`)

| Source folder | Published slug            |
| ------------- | ------------------------- |
| `2025-06-29`  | `jsdc-meetup-2025`        |
| `2025-11-29`  | `jsdc-2025`               |
| `2025-12-05`  | `code4taiwan-summit-2025` |
| `2026-07-18`  | `v-taiwan-2026`           |

## Edit / preview a deck

```bash
cd apps/slides
pnpm dev                 # default deck (2026-07-18) on http://localhost:3030
pnpm dev:2025-11-29      # a specific deck
```

Slidev HMR is live — edit `slides.md` and the browser updates. Reference shared assets as `/shared/images/<file>` and per-deck assets as `/<file>` (from that deck's `public/`).

## Build / publish

```bash
cd apps/slides
pnpm build               # all decks → apps/portfolio/public/slides/<slug>/
pnpm build:2026-07-18    # one deck
```

Each `build:<date>` runs `slidev build --base /slides/<slug>/ --out ../portfolio/public/slides/<slug>`. The `--base` **must** match the slug or the deployed page loads with broken asset paths (white screen).

> Tip: if a build might fail, build to a scratch dir first, sanity-check `index.html`'s base, then swap it into `public/slides/<slug>/` — avoids a broken build clobbering the live deck.

Optional PDF: `pnpm export:2026-07-18` → `dist/<date>.pdf`.

## Wire into the Talks page

Talk cards come from `apps/portfolio/src/features/portfolio/data/talks.ts`. Each entry's `slug` must match a published `public/slides/<slug>/`. Keep a slug **stable once live** (it's a public URL).

## Add a new deck

1. `apps/slides/<YYYY-MM-DD>/src/` with `slides.md` (copy an existing deck's `src/` for `style.css`, `unocss.config.ts`, `vite.config.ts`).
2. Wire shared assets: `cd <YYYY-MM-DD>/src/public && ln -sf ../../../shared shared` (or copy `shared/` in — both resolve `/shared/…`; symlink avoids duplication).
3. In `apps/slides/package.json` add `dev:<date>`, `build:<date>` (with the semantic `--base /slides/<slug>/ --out ../portfolio/public/slides/<slug>`), and `export:<date>`; append `build:<date>` to the `build` chain.
4. `pnpm build:<date>`, then add the talk to `talks.ts` referencing the new slug.

## Verify before pushing (repo convention)

- `public/slides/**` is oxlint-**ignored**, so lint-staged won't catch a broken build — you must check it yourself.
- Serve the built deck and confirm it renders (not just HTTP 200): open `/slides/<slug>/` in the browser (Chrome DevTools), zero console errors.
- Commit both the deck source (`apps/slides/…`) **and** the build (`apps/portfolio/public/slides/<slug>/…`) together, so source and published output stay in sync.

## Notes / gotchas

- Node engine warning (`wanted node 22.x`) on install is benign.
- `apps/slides` intentionally stays on real `vite` (not `vite-plus`) and its own `catalog:slides` lane in `pnpm-workspace.yaml`.
- The `workshop/code4taiwan-2026` branch still holds a deck in the **old** `drafts/.../slidev/` layout — when it merges, migrate it into the `apps/slides/<date>/` structure above and add its build script.

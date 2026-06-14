## Why

Michael is speaking at the **v-taiwan Meetup on 2026-07-18** (45 min + 10 min Q&A) — _Modern Frontend Infra: a 2026 toolchain map_. The audience is mostly **beginners**, so the talk needs a single memorable spine, hard knowledge only as garnish, and zero live-demo risk. This change tracks the talk's goal, background, and prep progress in one place so the remaining (author-only) work is unambiguous.

## What Changes

- **Thesis locked — "role reversal".** Infra always solves two things: **repetition** (toil, unchanged for decades) and **errors** (correctness). The _errors_ axis is flipping: from **catching humans → catching AI**. Three waves trace the mechanism: Rust (compute gets _cheap_) → unification (CI flips from "skip to save" to "run-it-all as guardrails") → AI (verification becomes the bottleneck → IDP / paved road).
- **Title (two-tier):** "Modern Frontend Infra: a 2026 toolchain map" + subtitle "why, after the Rust rewrite and the great unification, the real battleground is AI's verification".
- **Deck built** — Slidev, 30 slides, antfu style, **English slides + Chinese speaker notes**, **0 live demo** (screenshots / pre-recorded). Lives in the `milo` repo `apps/slides/2026-07-18`.
- **Speaker script + research** — full Chinese verbatim script and the NX-vs-Vite ecosystem research, in `docs/talks/` (this repo, PR #19).
- **Facts verified & corrected** — Oxlint 50–100x, Rolldown 10–30x build / −75% memory, VoidZero→Cloudflare 2026-06-04, CRA fully applies 2027-12.
- **Remaining (author-only):** 3 "in practice" case details (cargo platform / custom-linter / code-gen) + 4 screenshots/gif; timed rehearsal; build → deploy to `apps/portfolio/public/slides/v-taiwan-2026/`.

## Capabilities

### New Capabilities

- `vtaiwan-2026-talk`: the talk deliverable — its thesis/structure invariants, the slides+script artifacts, and the definition of "ready to present".

### Modified Capabilities

<!-- none — this is content work, not a change to an existing software capability -->

## Impact

- **Content/docs:** `docs/talks/2026-vtaiwan-modern-infra-script.md`, `docs/talks/nx-vs-vite-ecosystem.html` (this repo, PR #19 → main).
- **Slides source:** `milo` repo `apps/slides/2026-07-18/` (separate clone; Slidev toolchain lives there). Tracked on branch `feat/talk-v-taiwan-2026`.
- **Deploy target (later):** `apps/portfolio/public/slides/v-taiwan-2026/` once content is final.
- No production code, APIs, or dependencies affected.

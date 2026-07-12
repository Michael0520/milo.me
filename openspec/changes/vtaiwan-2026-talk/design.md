## Context

v-taiwan Meetup, 2026-07-18, 45 min + 10 min Q&A, **beginner-majority** audience (Vue community). Michael's angle is infra/DX (antfu-style). Hook is timely: two toolchain acquisitions in ~6 months (Cloudflare→VoidZero 2026-06-04, Anthropic→Bun 2025-12). A prior draft existed (`apps/slides/2026-07-18`, "three equal waves / verifiable environment" framing) and was rewritten this session to the sharper "role reversal" thesis.

## Goals / Non-Goals

**Goals:**

- One memorable spine a beginner can hold: the **two-axis frame** (repetition unchanged · errors flipping human→AI).
- Each wave lands a callback; the three waves form one causal chain (cheap → run-it-all → verification/IDP).
- Credibility via a dedicated **"in practice"** section (Michael's own infra: cargo platform, custom-linter, code-gen).
- Zero on-stage failure risk: **0 live demo**, all screenshots / pre-recorded.
- Every factual claim verified before stage.

**Non-Goals:**

- Not a tool selection/benchmark shootout (NX section is _reassurance_: "you don't need NX", not a comparison).
- Not teaching implementation in the case studies — show outcomes/concepts only.
- Not deploying to the live site yet (content still WIP).
- No EU-regulation depth — CRA is a one-line "second force" garnish.

## Decisions

- **Thesis = role reversal**, not "three equal waves". Waves 1–2 are setup; wave 3 (AI/verification) is the convergence/punchline. Closing line: _"repetition hasn't changed — what changed is whose errors we catch; and AI makes too many for anything but machines to catch."_
- **Two-tier title** — inviting main title + sharp subtitle naming "verification" as the battleground.
- **English slides + Chinese speaker notes** (antfu style preserved: serif-italic, glow, duotone icons, hand-drawn SVG, magic-move).
- **Flow fixes applied:** cut the redundant "three waves" roadmap slide (the two-axis is the sole spine); added a connector stitching unification ↔ run-it-all.
- **IDP** named _and_ plain-worded ("guardrails as a self-serve paved road").
- Deck source stays in the `milo` repo (Slidev toolchain lives there); built HTML gets copied into this repo's `public/slides/` for the site.

## Risks / Trade-offs

- **Wave 2 → 3 seam** is rhetorically strong but logically loose (vite-plus "run everything" is a caching strategy, not literally about AI) — mitigated by the connector + framing, but a sharp Q&A could probe it. Q&A prep noted in the deck's final speaker note (vite-plus vs NX affected; vite-plus 0.1.x in prod; Bun is Zig not Rust).
- **"Role reversal" slightly overclaims** vs the more precise "error source changed" — the two-axis frame is the honest guardrail; keep delivery from overselling.
- **Three deep-dives** (Oxc / pnpm symlink / circular-dep) risk over-signposting "this is hard"; the Oxc one is the first cut candidate if rehearsal runs long.
- **Timing unverifiable** until the placeholder case content is filled — rehearsal required.

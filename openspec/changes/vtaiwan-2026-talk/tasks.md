## 1. Thesis & structure (done)

- [x] 1.1 Lock thesis: role reversal + two-axis frame (repetition / errors)
- [x] 1.2 Lock two-tier title (map + "verification is the battleground")
- [x] 1.3 Lock agenda: open 7 / wave1 8 / wave2 9 / wave3 10 / in-practice 8 / wrap 3
- [x] 1.4 Decide "in practice" as a dedicated section (cargo / custom-linter / code-gen)

## 2. Deck build (done)

- [x] 2.1 Rewrite prior draft to new thesis, keep antfu style + assets (milo apps/slides/2026-07-18)
- [x] 2.2 English slides + Chinese speaker notes
- [x] 2.3 Convert all live demos to screenshot / pre-recorded placeholders (0 live demo)
- [x] 2.4 Flow polish: cut redundant three-wave roadmap; add wave1↔wave2 connector
- [x] 2.5 Verify: slidev build passes, console 0 errors/warnings, every layout renders

## 3. Facts & content fidelity (done)

- [x] 3.1 Verify + correct numbers (Oxlint 50–100x, Rolldown 10–30x/−75%, VoidZero 2026-06-04, CRA 2027-12)
- [x] 3.2 Remove unverified claim ($1M Vite fund)
- [x] 3.3 Full Chinese verbatim script + slide/asset plan (docs/talks/)

## 4. Version control (done)

- [x] 4.1 Commit deck source on milo `feat/talk-v-taiwan-2026`
- [x] 4.2 Commit docs on milo-vite-plus `docs/v-taiwan-2026-talk`
- [x] 4.3 Open PR #19 (docs → main)

## 5. Author-only — remaining

- [ ] 5.1 Fill case 1 (cargo / Rust platform): what it is, what it solves, one number
- [ ] 5.2 Fill case 2 (custom-linter): a concrete domain-specific mistake + results
- [ ] 5.3 Fill case 3 (code-gen): manual-vs-auto time saved + trust level (human last-look?)
- [ ] 5.4 Capture 4 screenshots/gif: vp run cache-hit, ls symlink, cargo, code-gen flow
- [ ] 5.5 Timed rehearsal — confirm ≤ 45 min (cut Oxc deep-dive first if long)

## 6. Deploy (after content final)

- [ ] 6.1 `slidev build` the deck
- [ ] 6.2 Copy build into apps/portfolio/public/slides/v-taiwan-2026/ (rewrite internal paths to slug)
- [ ] 6.3 Add talk entry to data/talks.ts
- [ ] 6.4 Open deploy PR → main → live on michaello.me

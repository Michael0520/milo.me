## 1. Install dependency

- [x] 1.1 Install `shaders` package in `apps/portfolio`

## 2. Create ShaderBackground component

- [x] 2.1 Create `apps/portfolio/src/components/shader-background.tsx` as a client component
- [x] 2.2 Configure shader effects: Glow → Swirl + Blob + WaveDistortion + FilmGrain
- [x] 2.3 Style as fixed full-viewport background with `fixed inset-0 -z-10`

## 3. Integrate into layout

- [x] 3.1 Add dynamic import of ShaderBackground in `apps/portfolio/src/app/(app)/layout.tsx` with `ssr: false`

## 4. Verification

- [x] 4.1 Run dev server and verify shader renders behind content
- [x] 4.2 Verify page content remains interactive (clickable links, scrolling)
- [x] 4.3 Verify no console errors

## Completed

All tasks completed in commit `d641fb9` (feat: add shader background, force dark mode, update footer and header).

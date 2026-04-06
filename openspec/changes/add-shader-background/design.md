## Context

The portfolio at `apps/portfolio` is a Next.js 16 app with a dark theme. The current background is a flat dark color. The `shaders` package provides React components for WebGL shader effects including Blob, Glow, Swirl, WaveDistortion, and FilmGrain.

## Goals / Non-Goals

**Goals:**

- Add an animated shader background that covers the full viewport
- Use dark blue/purple color palette (#07090f, #0d0e0f, #101112, #3E3ED6) to match the dark theme
- Include diagonal wave distortion, blob lighting, swirl, glow, and film grain effects
- Ensure the shader renders behind all existing content without affecting layout or interactivity
- Client-only rendering (WebGL requires browser)

**Non-Goals:**

- Light mode shader variant (dark only for now)
- Mobile performance optimization (can be iterated later)
- User-configurable shader parameters

## Decisions

### 1. Placement: Fixed position behind everything

Render the shader as a `fixed inset-0 -z-10` layer so it stays behind all content and doesn't affect scroll or layout. This is simpler than trying to integrate it into specific sections.

**Alternative considered:** Replacing ProfileCover only. Rejected because a full-page background is more impactful and the shader colors already match the dark theme.

### 2. Loading: Dynamic import with ssr: false

Use `next/dynamic` with `ssr: false` since WebGL requires a browser context. This prevents server-side rendering errors.

### 3. Package installation: In portfolio app only

Install `shaders` in `apps/portfolio/package.json`, not the workspace root, since only the portfolio app uses it.

## Risks / Trade-offs

- [Performance] WebGL shaders can be GPU-intensive. Mitigation: The shader config uses moderate settings (speed 0.4-1.5, no extreme deformation). Can add a reduced-motion media query later.
- [SSR] Shader requires client-side WebGL. Mitigation: Dynamic import with ssr: false.
- [Bundle size] The `shaders` package adds to the client bundle. Mitigation: Dynamic import ensures it's code-split.

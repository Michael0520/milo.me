## Why

The portfolio currently has a flat dark background. Adding a WebGL shader effect (animated dark blue/purple diagonal waves with film grain) will give the site a premium, visually distinctive feel that sets it apart from typical developer portfolios.

## What Changes

- Install `shaders` package in the portfolio app
- Create a `ShaderBackground` client component using Shader, Blob, Glow, Swirl, WaveDistortion, and FilmGrain
- Render it as a fixed full-screen background layer behind all page content
- Ensure it only renders on the client (WebGL) and degrades gracefully if unsupported

## Capabilities

### New Capabilities

- `shader-background`: Full-viewport animated WebGL shader background with dark blue/purple diagonal wave pattern, blob lighting, and film grain overlay

### Modified Capabilities

- `app-layout`: Layout wraps content over the shader background layer

## Impact

- `apps/portfolio/package.json` — Add `shaders` dependency
- `apps/portfolio/src/components/shader-background.tsx` — New component
- `apps/portfolio/src/app/(app)/layout.tsx` — Add ShaderBackground behind content

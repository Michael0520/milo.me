# Slidevs - Presentation Slides

This directory contains all presentation slides built with [Slidev](https://sli.dev/).

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
├── package.json         # Root Slidev config
└── build-all.sh         # Build script for all talks
```

## Shared Assets

Common assets (like avatar, logos) are stored in `shared/` directory.

```
shared/
└── images/
    └── avatar.jpg
```

### Setup for new presentation

Create a symlink in the `public/` directory:

```bash
cd apps/slides/YYYY-MM-DD/src/public
ln -sf ../../../shared shared
```

### Usage in slides

Reference shared assets using `/shared/images/filename.png` path:

```html
<img src="/shared/images/avatar.jpg" />
```

## Development

```bash
# Run specific talk
cd apps/slides
bun dev

# Build for production
cd apps/slides
bun run build
```

## Adding a New Talk

1. Create new directory with date: `YYYY-MM-DD/`
2. Create `src/` subdirectory inside
3. Copy `package.json` from existing talk
4. Create `slides.md` with your content
5. Update root `package.json` scripts to point to new talk

## Deployment

Each talk is built as a static site and deployed to `/talks/YYYY-MM-DD/` path.

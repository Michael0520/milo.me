# Michael Lo — Portfolio

Personal portfolio and blog built with Next.js 16, Tailwind CSS 4, and shadcn/ui.

Based on [chanhdai.me](https://chanhdai.me) by [@ncdai](https://github.com/ncdai), customized with new layout, shader background, ML logo animation, talks page, and personal data.

**Live:** [milo-vite-plus-website.vercel.app](https://milo-vite-plus-website.vercel.app)

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4 + shadcn/ui + Radix UI
- **Content:** MDX via next-mdx-remote
- **Animation:** Motion + custom SVG stroke animation
- **Monorepo:** pnpm workspaces + vite-plus toolchain

## Structure

```
apps/
  portfolio/        # Main Next.js site
    src/
      app/          # Pages and routes
      components/   # Shared UI components
      config/       # Site configuration
      features/
        blog/       # Blog components and content
        portfolio/  # Profile data, types, components
          data/     # user, projects, talks, tech-stack, social-links
          types/    # TypeScript type definitions
          components/ # TalkItem, etc.
      lib/          # Utilities
    public/
      images/       # Static assets
      slides/       # Slidev presentation builds
  website/          # Landing page (Vite)
packages/
  utils/            # Shared utilities
```

## Development

Toolchain is [Vite+](https://viteplus.dev/) (`vp`). Avoid calling `pnpm` / `npx` directly.

```bash
# Install dependencies
vp install

# Run dev server (portfolio)
vp run michaello-portfolio#dev

# Build portfolio
vp run michaello-portfolio#build

# Format + lint + types (auto-fix)
vp check --fix
```

## Environment Variables

Copy `apps/portfolio/.env.example` to `apps/portfolio/.env.local` and fill in values.

Key variables:

- `GITHUB_CONTRIBUTIONS_API_URL` — GitHub contributions graph data
- `NEXT_PUBLIC_POSTHOG_KEY` — Analytics (optional)

## Dev-Only Features

Components showcase and Blocks are dev-only tools, hidden in production:

- Routes return 404 via `notFound()` in production
- Nav and command menu items are gated by `process.env.NODE_ENV`
- Homepage components section is hidden in production

## Content

- **Blog:** MDX files in `apps/portfolio/src/features/doc/content/`
- **Talks:** Static data in `apps/portfolio/src/features/portfolio/data/talks.ts`, Slidev builds in `public/slides/`
- **Profile:** All personal data in `apps/portfolio/src/features/portfolio/data/`

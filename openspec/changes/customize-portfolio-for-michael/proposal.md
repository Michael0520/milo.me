## Why

This portfolio app is cloned from chanhdai.com (Nguyen Chanh Dai's personal site). All personal data — profile, social links, work experience, projects, awards, certifications, testimonials — belongs to the original author. We need to replace everything with Michael Lo's information to make this a functional personal portfolio for him.

## What Changes

- Replace user profile data (name, bio, avatar, contact info, timezone) with Michael Lo's information
- Update social links to Michael's accounts (GitHub: Michael0520, website: michaello.me)
- Replace work experiences and education history
- Replace project showcases with Michael's projects (modern-monorepo-template, NextJS13-ecomm-website, react-inventory-manager, etc.)
- Remove or clear awards, certifications, and testimonials (to be populated later)
- Update tech stack to reflect Michael's skills (TypeScript, React, Next.js, etc.)
- Update site config (site name, GitHub username, repo URL, meta tags)
- Remove references to external CDN (assets.chanhdai.com) and move assets locally or remove them
- Update environment variables and next.config.ts for the new domain
- Clean up third-party integrations specific to the original author (OpenPanel, PostHog, DMCA)

## Capabilities

### New Capabilities

- `user-profile`: Michael Lo's personal identity data — name, bio, avatar, contact, timezone, job title
- `social-links`: Michael's social media and professional links
- `work-history`: Michael's employment and education history
- `project-showcase`: Michael's personal and professional projects
- `site-config`: Site-wide configuration updated for Michael's domain and branding
- `asset-migration`: Move away from assets.chanhdai.com to local or self-hosted assets

### Modified Capabilities

## Impact

- `src/features/portfolio/data/user.ts` — Complete rewrite of personal data
- `src/features/portfolio/data/social-links.ts` — Replace all social links
- `src/features/portfolio/data/experiences.tsx` — Replace work/education history
- `src/features/portfolio/data/projects.ts` — Replace project list
- `src/features/portfolio/data/awards.ts` — Clear or replace
- `src/features/portfolio/data/certifications.ts` — Clear or replace
- `src/features/portfolio/data/testimonials.ts` — Clear or replace
- `src/features/portfolio/data/tech-stack.ts` — Update to Michael's stack
- `src/features/portfolio/data/bookmarks.ts` — Clear or replace
- `src/config/site.ts` — Update GitHub username, repo URL, site name
- `src/features/sponsor/data.tsx` — Clear sponsor data
- `.env` — Update environment variables
- `next.config.ts` — Update image domains, allowed dev origins
- `package.json` — Update name, author, homepage

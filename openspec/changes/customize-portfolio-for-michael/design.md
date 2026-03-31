## Context

The app at `apps/chanhdai` is a Next.js 16 portfolio cloned from github.com/ncdai/chanhdai.com. All personal data is centralized in `src/features/portfolio/data/` as TypeScript files exporting typed constants. Site-wide config lives in `src/config/site.ts`. External assets are hosted on `assets.chanhdai.com`.

The new owner is Michael Lo (@Michael0520), a Web Frontend Engineer based in Taiwan (UTC+08:00), with website michaello.me.

## Goals / Non-Goals

**Goals:**

- Replace all personal data files with Michael Lo's information
- Update site config, environment variables, and package metadata
- Remove or neutralize third-party integrations tied to the original author (OpenPanel, PostHog, DMCA)
- Ensure the site renders without errors after replacement
- Keep the app's architecture, UI components, and design system intact

**Non-Goals:**

- Redesigning the UI or layout
- Adding new features or pages
- Setting up deployment/CI
- Populating full blog content (can be done incrementally later)
- Setting up a custom asset CDN (use local `public/` for now)

## Decisions

### 1. Data replacement strategy: Edit in-place

Replace data values in existing TypeScript files rather than restructuring. The current data architecture is clean and well-typed — no reason to change it.

**Alternative considered:** Creating a separate config layer. Rejected because it adds unnecessary abstraction for a one-time personalization.

### 2. Assets: Move to local `public/` directory

Replace `assets.chanhdai.com` URLs with local paths under `public/images/`. Michael can upload his own avatar and assets there.

**Alternative considered:** Setting up a new CDN. Rejected as premature — local assets are fine for development and initial launch.

### 3. Third-party services: Remove, don't reconfigure

Remove OpenPanel, PostHog, and DMCA integrations entirely rather than reconfiguring with new keys. Michael can add his own analytics later.

**Alternative considered:** Keeping the integration code with empty keys. Rejected because it causes 401 errors and clutters the console.

### 4. Data we don't have yet: Use placeholders

For awards, certifications, testimonials, and detailed work history — use empty arrays or minimal placeholders. Michael can populate these incrementally.

## Risks / Trade-offs

- [Missing personal details] → Some fields (phone, email, detailed work history) aren't available from GitHub alone. Mitigation: Use what we have, leave others as clear TODOs for Michael to fill in.
- [Broken asset references] → Hardcoded `assets.chanhdai.com` URLs throughout data files. Mitigation: Search and replace all references systematically.
- [Type errors from empty arrays] → Emptying awards/certifications might cause rendering issues if components don't handle empty state. Mitigation: Verify rendering after changes.

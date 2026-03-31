## 1. User Profile & Identity

- [x] 1.1 Update `src/features/portfolio/data/user.ts` with Michael Lo's profile data (name, username, bio, jobTitle, address, timezone, website, keywords)
- [x] 1.2 Replace avatar URL with local placeholder path (`/images/avatar.webp`)
- [x] 1.3 Clear or update contact fields (email, phone) — remove original author's encoded values
- [x] 1.4 Update `flipSentences` and `about` markdown content for Michael

## 2. Social Links

- [x] 2.1 Update `src/features/portfolio/data/social-links.ts` with Michael's GitHub (Michael0520) and website (michaello.me)
- [x] 2.2 Remove social links that don't apply (or leave as TODO placeholders)

## 3. Work History & Credentials

- [x] 3.1 Replace `src/features/portfolio/data/experiences.tsx` — clear original author's work/education history, add placeholder structure for Michael
- [x] 3.2 Clear `src/features/portfolio/data/awards.ts` — set to empty array
- [x] 3.3 Clear `src/features/portfolio/data/certifications.ts` — set to empty array

## 4. Projects & Content

- [x] 4.1 Replace `src/features/portfolio/data/projects.ts` with Michael's GitHub projects (modern-monorepo-template, NextJS13-ecomm-website, react-inventory-manager)
- [x] 4.2 Clear `src/features/portfolio/data/testimonials.ts` — set to empty array
- [x] 4.3 Clear `src/features/portfolio/data/bookmarks.ts` — set to empty array
- [x] 4.4 Update `src/features/portfolio/data/tech-stack.ts` to reflect Michael's stack

## 5. Site Configuration

- [x] 5.1 Update `src/config/site.ts` — GITHUB_USERNAME, X_USERNAME, SOURCE_CODE_GITHUB_REPO, SOURCE_CODE_GITHUB_URL, SPONSORSHIP_URL
- [x] 5.2 Update `apps/chanhdai/package.json` — name, description, author, homepage, repository
- [x] 5.3 Update `.env` with correct values, remove analytics keys

## 6. Asset Migration & Cleanup

- [x] 6.1 Search and replace all `assets.chanhdai.com` URLs in data files with local `/images/` paths or remove them
- [x] 6.2 Update `next.config.ts` — remove `assets.chanhdai.com` from remotePatterns, add `avatars.githubusercontent.com`
- [x] 6.3 Remove or disable OpenPanel, PostHog, DMCA integrations to eliminate 401 errors
- [x] 6.4 Clear `src/features/sponsor/data.tsx` sponsor entries

## 7. Verification

- [ ] 7.1 Run `next build` to verify no build errors
- [x] 7.2 Load homepage in browser and verify no console errors
- [x] 7.3 Verify all sections render correctly with new/empty data

# Changelog

## [0.16.0](https://github.com/Michael0520/milo.me/compare/v0.15.0...v0.16.0) (2026-07-20)

Milestone release: hardens the CI/deps pipeline (Renovate lockfile automation, workflow security scanning, least-privilege) and moves the runtime to Node 24.

### Continuous Integration

* Renovate lockfile automation — a GitHub App + `renovate-lockfiles.yml` regenerate `pnpm-lock.yaml` on every `renovate/**` push, so catalog PRs that self-bump pnpm no longer break frozen install ([#64](https://github.com/Michael0520/milo.me/issues/64))
* zizmor workflow security audit + `permissions: {}` default on every workflow ([#65](https://github.com/Michael0520/milo.me/issues/65))
* lock sharp's 0.x minor bumps (semver leak past the held-major rule) and hold TypeScript on 6.x ([#64](https://github.com/Michael0520/milo.me/issues/64))

### Dependencies

* Node.js 22 → 24 ([#63](https://github.com/Michael0520/milo.me/issues/63))
* shaders v2 → v3 ([#61](https://github.com/Michael0520/milo.me/issues/61))
* refresh npm/catalog minor & patch — react, shiki, @types/react, iconify, pnpm ([#57](https://github.com/Michael0520/milo.me/issues/57))

### Documentation

* sync CLAUDE.md CI/CD section + dependabot comment with the new automation ([#66](https://github.com/Michael0520/milo.me/issues/66))

## [0.15.0](https://github.com/Michael0520/milo.me/compare/v0.14.2...v0.15.0) (2026-07-19)

Milestone release: adopts the applicable subset of [voidzero-dev/vite-plus](https://github.com/voidzero-dev/vite-plus)'s CI/DX patterns.

### Continuous Integration

* path-filtered CI — skip heavy jobs on docs/slides-only changes ([#46](https://github.com/Michael0520/milo.me/issues/46))
* shared `checkout + setup-vp + install` composite action ([#52](https://github.com/Michael0520/milo.me/issues/52))
* pin all GitHub Actions to commit SHAs ([#51](https://github.com/Michael0520/milo.me/issues/51)), bumped to node24 majors ([#54](https://github.com/Michael0520/milo.me/issues/54))
* least-privilege permissions, concurrency guard, and PR cache cleanup ([#46](https://github.com/Michael0520/milo.me/issues/46))
* Dependabot (GitHub Actions) + Renovate (npm/pnpm catalogs) dependency automation ([#49](https://github.com/Michael0520/milo.me/issues/49), [#55](https://github.com/Michael0520/milo.me/issues/55))

### Tests

* Playwright e2e smoke tests + CI job ([#52](https://github.com/Michael0520/milo.me/issues/52))

### Miscellaneous Chores

* refresh in-range dependencies, drop empty `tools/*` glob, sync docs ([#43](https://github.com/Michael0520/milo.me/issues/43), [#44](https://github.com/Michael0520/milo.me/issues/44), [#45](https://github.com/Michael0520/milo.me/issues/45))
* replace leftover `bun` with `vp dlx tsx` in dev scripts ([#53](https://github.com/Michael0520/milo.me/issues/53))

## [0.14.2](https://github.com/Michael0520/milo.me/compare/v0.14.1...v0.14.2) (2026-07-18)


### Bug Fixes

* **slides:** hide stuck Slidev Goto autocomplete overlay on v-taiwan ([#41](https://github.com/Michael0520/milo.me/issues/41)) ([4a28677](https://github.com/Michael0520/milo.me/commit/4a28677ffbcfc36ebee2e4aa2802130bf01b091c))

## [0.14.1](https://github.com/Michael0520/milo.me/compare/v0.14.0...v0.14.1) (2026-07-18)


### Bug Fixes

* migrate upstream theme-toggle + code-highlight fixes ([#37](https://github.com/Michael0520/milo.me/issues/37)) ([bb21bda](https://github.com/Michael0520/milo.me/commit/bb21bda06ea877ada4cbeb4c83e11e93d60fa8ed))

## [0.14.0](https://github.com/Michael0520/milo.me/compare/v0.13.0...v0.14.0) (2026-07-18)


### Features

* **blog:** flesh out code-gen case with FlowDiagram/ArchitectureDiagram components ([3837ab5](https://github.com/Michael0520/milo.me/commit/3837ab5900a5c135d1d6c6304a4b7dec1c05036d))
* **blog:** rewrite infra-map article in personal voice, embed talk slides ([21083aa](https://github.com/Michael0520/milo.me/commit/21083aa9cc03d3a44fcfc52069e74b175134b91a))
* **slides:** migrate Slidev workspace into monorepo ([#33](https://github.com/Michael0520/milo.me/issues/33)) ([fe92f9b](https://github.com/Michael0520/milo.me/commit/fe92f9b17dcf9c2d6a44605493c0567a5c9f2f7b))
* **talk:** deck rebuild — case-1 catalog 2x2 grid ([ce1963f](https://github.com/Michael0520/milo.me/commit/ce1963f95d1ba1a3f06ed61ea6fa5ccd16c6b5a2))
* **talk:** deck rebuild — case-section redesign (38 slides) ([2ed7bbe](https://github.com/Michael0520/milo.me/commit/2ed7bbed5f5b3f48631ea229f3ab68366727d921))
* **talk:** deck rebuild — plain titles for deep-dive slides, Kyle ref relocated ([88fd83e](https://github.com/Michael0520/milo.me/commit/88fd83ef0a576e9c3e4feefb03d78085b7497b74))
* **talk:** deck rebuild — TS7 Go visual on the cheap slide ([5a6163f](https://github.com/Michael0520/milo.me/commit/5a6163f251d8d7394cc72b1c8b9950fe169bf6ec))
* **talk:** rebuild v-taiwan deck — add opening agenda slide ([329d18b](https://github.com/Michael0520/milo.me/commit/329d18b9c0b8eefdc8c095c55dc83c2ef8100e8d))
* **talk:** rebuild v-taiwan deck — Code for Taiwan + event slides, three-wave roadmap ([bc685bb](https://github.com/Michael0520/milo.me/commit/bc685bb96577366ca4e0da1ef6f40304e2c87da9))
* **talk:** rebuild v-taiwan deck — two cases, Fortes layer, hand-drawn diagrams ([65342be](https://github.com/Michael0520/milo.me/commit/65342be3ed54ab585b6114a7f8bcb3a8d4393f86))
* **talk:** restructure article, deck, and script around two mirrored loops ([d61502e](https://github.com/Michael0520/milo.me/commit/d61502e2da07c61fd4bb24d106786f34f0da9ce6))
* upstream sync (44571d8) ([#31](https://github.com/Michael0520/milo.me/issues/31)) ([aed67ae](https://github.com/Michael0520/milo.me/commit/aed67ae0d8c7c67ab961e1ae3e3eedf8a70f3516))


### Bug Fixes

* **slides:** serve SPA fallback for deep deck routes on Vercel ([#35](https://github.com/Michael0520/milo.me/issues/35)) ([31d997c](https://github.com/Michael0520/milo.me/commit/31d997c03617d1881e5875058790c3d56117726b))

## [0.13.0](https://github.com/Michael0520/milo.me/compare/v0.12.1...v0.13.0) (2026-07-12)


### Features

* **doc:** add "2026 前端 Infra 新地圖" tech article ([#30](https://github.com/Michael0520/milo.me/issues/30)) ([c13ba60](https://github.com/Michael0520/milo.me/commit/c13ba6085362fb158faccee1f32f6deddb119a22))
* **footer:** snappier spring for interactive logotype ([#27](https://github.com/Michael0520/milo.me/issues/27)) ([d08f88f](https://github.com/Michael0520/milo.me/commit/d08f88f8aa15abe5b8a924943f631869c9c190c2))
* **social-links:** show handle in tooltip ([#29](https://github.com/Michael0520/milo.me/issues/29)) ([5ca78f0](https://github.com/Michael0520/milo.me/commit/5ca78f0d9de5b91b89b23aa580b72b6627f0f98f))

## [0.12.1](https://github.com/Michael0520/milo.me/compare/v0.12.0...v0.12.1) (2026-07-05)


### Miscellaneous Chores

* release 0.12.1 ([7822667](https://github.com/Michael0520/milo.me/commit/78226674294325a0250aa4cae0f24409d50a4c55))

## [0.12.0](https://github.com/Michael0520/milo.me/compare/v0.11.0...v0.12.0) (2026-06-30)


### Features

* sync upstream experience location + callout polish ([#22](https://github.com/Michael0520/milo.me/issues/22)) ([01c8cf2](https://github.com/Michael0520/milo.me/commit/01c8cf270260dce58e71e05673f7819ec5ff5796))
* sync upstream UI polish (safe ports) ([#20](https://github.com/Michael0520/milo.me/issues/20)) ([476171d](https://github.com/Michael0520/milo.me/commit/476171d8dea2d977eb0c7db8b323a5275b095c33))

## [0.11.0](https://github.com/Michael0520/milo.me/compare/v0.10.0...v0.11.0) (2026-06-06)


### Features

* add blog post on pnpm semantic catalogs + purple inline code style ([#17](https://github.com/Michael0520/milo.me/issues/17)) ([60a3cc1](https://github.com/Michael0520/milo.me/commit/60a3cc15c603e51c3d89c706b20a90810253edd9))
* migrate upstream e079c99 — Applied only the TOC minimap hover delay fix from the upstream commit. Changed `delay={0}` to `delay={0.1}` on the `HoverCardTrigger` in `toc-minimap.tsx` to prevent accidental hover triggers during mouse movement. All dev-only showcase restructuring changes (layout.tsx, sidebar.tsx, doc-layout.tsx, globals.css) were intentionally skipped. ([#15](https://github.com/Michael0520/milo.me/issues/15)) ([317819e](https://github.com/Michael0520/milo.me/commit/317819e04a74f9014ecdb99387a78aca4cbd6b2c))
* upstream sync (e2da09b) ([#18](https://github.com/Michael0520/milo.me/issues/18)) ([ab7312c](https://github.com/Michael0520/milo.me/commit/ab7312c541cb6ec113d3664e5dabb89ccb086a6d))


### Reverts

* remove .tmp-debug/ from .gitignore ([a502c14](https://github.com/Michael0520/milo.me/commit/a502c149e93723c647850d3e6bcf3aae6862351c))

## [0.10.0](https://github.com/Michael0520/milo.me/compare/v0.9.0...v0.10.0) (2026-06-02)


### Features

* **doc:** add journal post — On the Right Track (May 2026) ([#12](https://github.com/Michael0520/milo.me/issues/12)) ([54958f1](https://github.com/Michael0520/milo.me/commit/54958f12466233c03996960621e374d07ddcdc83))
* migrate upstream 0601-0603 improvements ([#14](https://github.com/Michael0520/milo.me/issues/14)) ([8c7e0da](https://github.com/Michael0520/milo.me/commit/8c7e0da866f7b04fcb32b18e6815c08c54c435a1))

## [0.9.0](https://github.com/Michael0520/milo.me/compare/v0.8.0...v0.9.0) (2026-05-31)


### Features

* **portfolio:** add homepage sticky TOC minimap navigation ([5d5926d](https://github.com/Michael0520/milo.me/commit/5d5926d3a0e1ebbe8592bb1fac905201f3970c37))

## [0.8.0](https://github.com/Michael0520/milo.me/compare/v0.7.0...v0.8.0) (2026-04-19)


### Features

* **next-config:** remove console logs in production except errors ([5434198](https://github.com/Michael0520/milo.me/commit/5434198875a15bf78ebeeebf525f994f4f07ae95))

## [0.7.0](https://github.com/Michael0520/milo.me/compare/v0.6.0...v0.7.0) (2026-04-16)


### Features

* **blog:** UX improvements — Mermaid, pagination, neighbour nav, shared layouts ([#8](https://github.com/Michael0520/milo.me/issues/8)) ([ade6393](https://github.com/Michael0520/milo.me/commit/ade6393395982336640318582592b802e1610e24))
* migrate 45 tech notes from legacy repo ([33f1ce6](https://github.com/Michael0520/milo.me/commit/33f1ce6aba913ec5af4b19cf3230c073d2531e12))
* migrate 45 tech notes from legacy repo ([984ab4c](https://github.com/Michael0520/milo.me/commit/984ab4c4a233ab35c028a46789d02fa2bd09e898))
* split /blog into /daily and /tech routes ([5b7be24](https://github.com/Michael0520/milo.me/commit/5b7be24b88a69fa51453edb4534cdd5c8c670766))
* **tech:** adopt card-style list matching /talks page ([2403559](https://github.com/Michael0520/milo.me/commit/240355986a63c4e7f2cfa39b291b455a1548f385))
* **toolchain:** adopt vite-plus + catalog-managed workspace deps ([0138c61](https://github.com/Michael0520/milo.me/commit/0138c619d1ecfd6f0f11953d4744cb81b1b7295a))
* update shader background to FlowingGradient with logo brand color ([32d143f](https://github.com/Michael0520/milo.me/commit/32d143f73270f1f8797926fc74761e1c2bccef56))


### Bug Fixes

* **content:** use English for all post titles ([f50013b](https://github.com/Michael0520/milo.me/commit/f50013b471c483c844e95d38c3ecd6ecf6360ef7))
* **seo:** add /talks to sitemap, remove /components, update llms.txt description ([52ad890](https://github.com/Michael0520/milo.me/commit/52ad89061f7a71093bad7b43fb0923d3bd9a3cdc))

## [0.6.0](https://github.com/Michael0520/milo.me/compare/v0.5.0...v0.6.0) (2026-04-06)


### Features

* add Vercel Web Analytics and simplify CLAUDE.md ([7270d10](https://github.com/Michael0520/milo.me/commit/7270d10c18049108230c9666fe3bbe014f8827bd))


### Bug Fixes

* relax node engine requirement to &gt;=18 ([969dd09](https://github.com/Michael0520/milo.me/commit/969dd097c9bae5c20cf7c50e1c25d1b2be2dffe5))
* relax root node engine to &gt;=18 for Vercel compatibility ([87fa0f2](https://github.com/Michael0520/milo.me/commit/87fa0f27b94466592709b65677b33f3299eea6cb))
* use explicit version for @vercel/analytics instead of catalog ([38aa2e0](https://github.com/Michael0520/milo.me/commit/38aa2e00f9a71f5f10ef7d0706cce5d5684e4a95))


### Reverts

* remove @vercel/analytics to fix Vercel deploy (keeping CLAUDE.md cleanup) ([5f28b23](https://github.com/Michael0520/milo.me/commit/5f28b2311d7dc4efda2558042a637765c7652e11))

## [0.5.0](https://github.com/Michael0520/milo.me/compare/v0.4.0...v0.5.0) (2026-04-06)


### Features

* add view transition for blog page navigation ([f3e2984](https://github.com/Michael0520/milo.me/commit/f3e2984c13bf0c6359647ba3895ca317ce705c46))

## [0.4.0](https://github.com/Michael0520/milo.me/compare/v0.3.0...v0.4.0) (2026-04-06)


### Features

* add second journal post "慢下來，才看得到更多" with photos ([4f8df7b](https://github.com/Michael0520/milo.me/commit/4f8df7b2b25d5a92f20f049519e5a4325c83ef1e))

## [0.3.0](https://github.com/Michael0520/milo.me/compare/v0.2.0...v0.3.0) (2026-04-06)


### Features

* **ci:** add CI workflow for lint, type check, and build ([290173f](https://github.com/Michael0520/milo.me/commit/290173f01215949960b64b145e73f61776ec3ea7))


### Bug Fixes

* **ci:** add GITHUB_CONTRIBUTIONS_API_URL env for build step ([a03c165](https://github.com/Michael0520/milo.me/commit/a03c165b22c1ed9b925a14d464bda90045c98310))
* **ci:** adjust tsconfig exclude paths for registry ([16b004d](https://github.com/Michael0520/milo.me/commit/16b004dd3a390e84fdc8f39a84d2471984c7dc6a))
* **ci:** dynamic import ImageZoom to avoid SSR Element error during build ([892afa5](https://github.com/Michael0520/milo.me/commit/892afa59dca48b52d7206504ea2290afca91d8fd))
* **ci:** exclude registry from type check to fix CI ([5eeeefd](https://github.com/Michael0520/milo.me/commit/5eeeefd97c13b17e2a5ee98f57b343b62634800f))
* **ci:** exclude src/registry from tsconfig to fix fumadocs type errors ([3fd31c1](https://github.com/Michael0520/milo.me/commit/3fd31c13d3279a0aa93dc84c520c47512300c62a))
* **ci:** fix import sort and export order lint errors ([7a0153d](https://github.com/Michael0520/milo.me/commit/7a0153d0efea1c9396b52088f2f22d66563c8056))
* **ci:** fix import sort in mdx.tsx ([79b19da](https://github.com/Michael0520/milo.me/commit/79b19da22f77e001d23989cd563d66444717297d))
* **ci:** ignore public/slides in eslint flat config ([c7efacb](https://github.com/Michael0520/milo.me/commit/c7efacb6448792be95d256e72adb3e54d462f466))
* **ci:** remove unused AutoTypeTable import that caused fumadocs type error in CI ([4d4ad66](https://github.com/Michael0520/milo.me/commit/4d4ad660b68696b8bc123205903740826e55c693))

## [0.2.0](https://github.com/Michael0520/milo.me/compare/v0.1.0...v0.2.0) (2026-04-06)


### Features

* add animated calligraphic ML logo with SVG stroke animation ([cd04110](https://github.com/Michael0520/milo.me/commit/cd04110040aa233f6fbd67a7ebcbb82db062314a))
* add hat photos, image zoom to carousel, polish blog listing UX ([62e769e](https://github.com/Michael0520/milo.me/commit/62e769e617bfbf87ab18a355861f80401c0e2d85))
* add markdown formatting to about section ([392c2f1](https://github.com/Michael0520/milo.me/commit/392c2f1e34cddd583e02640f69ecb18acd416d94))
* add opening photo, rename hat images to simple numbering ([3d260b4](https://github.com/Michael0520/milo.me/commit/3d260b4d07bd0c02be5b394afec3251306bb4568))
* add portfolio app customized for Michael Lo ([3c5c908](https://github.com/Michael0520/milo.me/commit/3c5c9085598c023ef856d7d822ba52d81c5238e0))
* add shader background, force dark mode, update footer and header ([d641fb9](https://github.com/Michael0520/milo.me/commit/d641fb95d3640f868d07169d78e090e4b28cbfc7))
* **ci:** add Release Please for automated release notes ([c414c50](https://github.com/Michael0520/milo.me/commit/c414c506187d3804fd2c3e3faaf1f378d4f73712))
* hide dev-only features and clean up unused pages ([83aa124](https://github.com/Michael0520/milo.me/commit/83aa124220c2b1b1f6ac59823ca0ebd0f4ac980d))
* migrate personal data from legacy repo ([e98bde9](https://github.com/Michael0520/milo.me/commit/e98bde90ef18c9c727de8f545cba6b1ce37c866f))
* migrate recap-2025 blog post from old blog ([7c2c015](https://github.com/Michael0520/milo.me/commit/7c2c0154466b5f3bbc613601232eb5cc7f13a5ed))
* redesign blog listing, add journal skill, photo carousel, and Noto Sans TC ([8c5c67f](https://github.com/Michael0520/milo.me/commit/8c5c67f563f9bfc34419317004477bb14f98cc8a))
* update about section content ([e390658](https://github.com/Michael0520/milo.me/commit/e3906589fd333dbdded25e14ac9d8e3455e5b10d))


### Bug Fixes

* add prettier-ignore to preserve PhotoCarousel JSX comment in MDX ([e4f107f](https://github.com/Michael0520/milo.me/commit/e4f107fe30cf5213e55550d6ed56b6e94133c1cd))
* clear testimonials data — wall of love not needed ([f30f140](https://github.com/Michael0520/milo.me/commit/f30f140c1e54d37973fc78e9ea61dd051c5730c1))
* disable link prefetch on blog post items to prevent unused preloads ([6a76845](https://github.com/Michael0520/milo.me/commit/6a76845357c686a2442e10825027519a803e46b5))
* improve ML mark animation with unique mask IDs and balanced timing ([bb86ab6](https://github.com/Michael0520/milo.me/commit/bb86ab647b49afa0483215056b6351236fe61632))
* move ML animation CSS into [@layer](https://github.com/layer) components for Tailwind v4 ([d6fb428](https://github.com/Michael0520/milo.me/commit/d6fb4282c2eb4a64b1913dcfaaa4dcd03c9a4eb1))
* move Script to body to resolve console error and remove MDX comment placeholder ([6eb95dd](https://github.com/Michael0520/milo.me/commit/6eb95dd4ded50fe97f9772d6d258804112a2b702))
* remove commented PhotoCarousel from journal to avoid linter escaping issue ([fd94282](https://github.com/Michael0520/milo.me/commit/fd94282c7fd9a3c805880c6036518a6895fd3eb6))
* replace fetchPriority with loading=eager on avatar to prevent cross-page preload ([8803972](https://github.com/Michael0520/milo.me/commit/8803972b870cc6a4f3a13dc2b365aa10823b8900))
* replace raw script tags with Next.js Script component and fix MDX comment syntax ([9a55259](https://github.com/Michael0520/milo.me/commit/9a5525954019e49ff909b344f5e4efa70fc8ce9c))
* resolve OG image font path for monorepo builds ([ad8235d](https://github.com/Michael0520/milo.me/commit/ad8235d9af054feee82c02e792cd1b7c54799ef3))
* responsive year watermark with clamp(), polish hover effects ([dae77c7](https://github.com/Michael0520/milo.me/commit/dae77c719d85f0690dd37c6275c487b115915f06))
* revert staged config changes, use .eslintignore for slides ([522994d](https://github.com/Michael0520/milo.me/commit/522994dc57cae74f0925e9666d097ab7ed9ee4f5))
* use loading=lazy on avatar to prevent cross-page preload hint ([1979a08](https://github.com/Michael0520/milo.me/commit/1979a080f7d32f93700b234fe908c9cf4c76e107))

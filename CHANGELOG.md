# Changelog

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

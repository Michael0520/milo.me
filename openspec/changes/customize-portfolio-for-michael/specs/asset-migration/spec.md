## ADDED Requirements

### Requirement: No references to assets.chanhdai.com

All URLs pointing to `assets.chanhdai.com` SHALL be replaced with local paths under `/images/` or removed entirely.

#### Scenario: No external CDN requests on page load

- **WHEN** the homepage loads
- **THEN** no network request SHALL be made to `assets.chanhdai.com`

#### Scenario: Images use local paths

- **WHEN** any data file references an image URL
- **THEN** the URL SHALL use a local path (e.g., `/images/...`) instead of `assets.chanhdai.com`

### Requirement: next.config.ts image domains updated

The `remotePatterns` in `next.config.ts` SHALL remove `assets.chanhdai.com` and add any domains Michael needs (e.g., `github.com` for GitHub avatars).

#### Scenario: Image config does not reference original CDN

- **WHEN** reviewing next.config.ts remotePatterns
- **THEN** "assets.chanhdai.com" SHALL NOT be listed

## ADDED Requirements

### Requirement: Site config uses Michael's identity

The `src/config/site.ts` SHALL set `GITHUB_USERNAME` to "Michael0520", update `SOURCE_CODE_GITHUB_REPO` and `SOURCE_CODE_GITHUB_URL` to Michael's repository, and update `SPONSORSHIP_URL` or remove it.

#### Scenario: GitHub username is correct in config

- **WHEN** any feature references `GITHUB_USERNAME`
- **THEN** it SHALL resolve to "Michael0520"

#### Scenario: No original author references in site config

- **WHEN** reviewing site config values
- **THEN** no value SHALL reference "ncdai", "chanhdai", or "iamncdai"

### Requirement: Package metadata updated

The `package.json` SHALL update name, description, author, and homepage to reflect Michael Lo's portfolio.

#### Scenario: Package.json reflects new owner

- **WHEN** reading package.json
- **THEN** the author field SHALL contain "Michael Lo" and homepage SHALL be Michael's domain

### Requirement: Third-party analytics removed

OpenPanel, PostHog, and DMCA integrations SHALL be disabled or removed to prevent 401 errors and unnecessary external requests.

#### Scenario: No analytics errors in console

- **WHEN** the site loads in development
- **THEN** there SHALL be no 401 errors from analytics services

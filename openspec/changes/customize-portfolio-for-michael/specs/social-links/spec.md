## ADDED Requirements

### Requirement: Social links point to Michael's accounts

The social links in `src/features/portfolio/data/social-links.ts` SHALL include Michael Lo's GitHub (Michael0520) and website (michaello.me). Other social links SHALL be removed or replaced with Michael's actual accounts.

#### Scenario: GitHub link is correct

- **WHEN** the social links section renders
- **THEN** the GitHub link SHALL point to `https://github.com/Michael0520`

#### Scenario: Website link is correct

- **WHEN** the social links section renders
- **THEN** the website link SHALL point to `https://www.michaello.me/`

#### Scenario: No original author social links remain

- **WHEN** reviewing all social link entries
- **THEN** no link SHALL reference "ncdai", "chanhdai", or "iamncdai"

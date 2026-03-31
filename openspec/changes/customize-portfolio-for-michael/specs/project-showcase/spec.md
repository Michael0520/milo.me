## ADDED Requirements

### Requirement: Projects showcase Michael's repositories

The `src/features/portfolio/data/projects.ts` SHALL list Michael Lo's projects sourced from his GitHub profile: modern-monorepo-template, NextJS13-ecomm-website, react-inventory-manager, and others as available.

#### Scenario: Projects list contains Michael's repos

- **WHEN** the projects section renders
- **THEN** it SHALL display projects owned by Michael0520 on GitHub

#### Scenario: No original author projects remain

- **WHEN** reviewing all project entries
- **THEN** no project SHALL reference "ncdai", "chanhdai", "ZaDark", or "Quaric"

### Requirement: Testimonials and bookmarks cleared

The `testimonials.ts` and `bookmarks.ts` files SHALL contain empty arrays.

#### Scenario: Testimonials section handles empty state

- **WHEN** the testimonials/wall-of-love section renders with empty data
- **THEN** the page SHALL render without errors

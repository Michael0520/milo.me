## ADDED Requirements

### Requirement: Experiences reflect Michael Lo's career

The `src/features/portfolio/data/experiences.tsx` file SHALL contain Michael Lo's work history, or empty arrays if details are not yet available. It MUST NOT contain Nguyen Chanh Dai's employment or education history.

#### Scenario: No original author work history displayed

- **WHEN** the experiences section renders
- **THEN** it SHALL NOT display any work history belonging to Nguyen Chanh Dai (shadcncraft, Quaric, Simplamo, etc.)

#### Scenario: Empty state handled gracefully

- **WHEN** the experiences array is empty or contains placeholder entries
- **THEN** the page SHALL render without errors

### Requirement: Awards and certifications cleared

The `awards.ts` and `certifications.ts` files SHALL contain empty arrays. They MUST NOT contain the original author's awards or certifications.

#### Scenario: Awards section is empty

- **WHEN** the awards section renders with an empty array
- **THEN** the page SHALL render without errors and show no awards

#### Scenario: Certifications section is empty

- **WHEN** the certifications section renders with an empty array
- **THEN** the page SHALL render without errors and show no certifications

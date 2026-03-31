## ADDED Requirements

### Requirement: User profile reflects Michael Lo's identity

The `USER` object in `src/features/portfolio/data/user.ts` SHALL contain Michael Lo's personal information: display name "Michael Lo", username "Michael0520", job title "Web Frontend Engineer", location "Taiwan", timezone "Asia/Taipei" (UTC+08:00), website "https://www.michaello.me/", and bio reflecting his frontend engineering focus.

#### Scenario: Profile displays correct name and title

- **WHEN** the portfolio homepage renders the profile section
- **THEN** it SHALL display "Michael Lo" as the name and "Web Frontend Engineer" as the job title

#### Scenario: Location and timezone are correct

- **WHEN** the profile section renders location and time info
- **THEN** it SHALL show "Taiwan" as location and use "Asia/Taipei" timezone

### Requirement: Avatar uses a local image

The avatar URL SHALL point to a local path under `/images/` in the public directory, not to `assets.chanhdai.com`.

#### Scenario: Avatar loads without external CDN

- **WHEN** the profile avatar renders
- **THEN** the image source SHALL be a local path (e.g., `/images/avatar.webp`)

### Requirement: Contact fields use placeholder values

Email and phone fields SHALL use placeholder or empty values that Michael can update later. They MUST NOT contain the original author's contact info.

#### Scenario: No original author contact info displayed

- **WHEN** the profile renders contact information
- **THEN** it SHALL NOT display any contact info belonging to Nguyen Chanh Dai

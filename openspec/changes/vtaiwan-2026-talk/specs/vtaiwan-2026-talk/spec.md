## ADDED Requirements

### Requirement: Thesis spine

The talk SHALL be organized around the two-axis frame — **repetition** (unchanged) and **errors** (flipping from catching humans to catching AI) — with the three waves (Rust → unification → AI) forming one causal chain that converges on verification.

#### Scenario: Spine is stated and reprised

- **WHEN** the deck is presented
- **THEN** the two-axis frame appears as a dedicated early slide and is reprised in the closing line, and each wave lands a callback to the spine

### Requirement: Beginner-friendly delivery

The talk SHALL stay accessible to a beginner-majority audience: hard knowledge appears only as sign-posted deep dives ("get lost? keep the takeaway"), and the NX segment is framed as reassurance ("you don't need NX"), not a tool comparison.

#### Scenario: Hard knowledge is garnish

- **WHEN** a deep-dive slide is shown
- **THEN** it carries a 路標/signpost and a one-line takeaway, and is skippable without breaking the narrative

### Requirement: Zero live-demo risk

The talk SHALL contain no live demos; every demonstration SHALL be a screenshot or pre-recorded clip.

#### Scenario: No on-stage execution

- **WHEN** any tool output (vp run, ls symlink, code-gen flow) is shown
- **THEN** it is a static screenshot or pre-recorded gif, not executed live

### Requirement: Verified facts

Every factual/numeric claim on a slide SHALL be verified against a primary source before presentation.

#### Scenario: Numbers are sourced

- **WHEN** a benchmark, date, or regulation is stated
- **THEN** it matches a checked source (Oxlint 50–100x; Rolldown 10–30x / −75% mem; VoidZero→Cloudflare 2026-06-04; CRA 2027-12), with no unverified specifics

### Requirement: Ready-to-present definition

The talk SHALL be considered ready only when author-only content is filled, screenshots/recordings are captured, and a timed rehearsal fits within 45 minutes.

#### Scenario: Readiness gate

- **WHEN** assessing whether the talk can be delivered
- **THEN** the 3 case studies have real details, the 4 screenshots/gif exist, and a rehearsal confirms ≤45 min

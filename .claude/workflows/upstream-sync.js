export const meta = {
  name: "upstream-sync",
  description:
    "Sync ncdai/chanhdai.com upstream — fetch new commits, analyze migration value, implement selected changes, open PR",
  whenToUse:
    "Run when the user asks to check upstream, 查看 upstream 有什麼新功能, or sync ncdai/chanhdai.com changes",
  phases: [
    { title: "Discover", detail: "Fetch upstream commits since last checked hash" },
    { title: "Analyze", detail: "Evaluate each commit for migration value in parallel" },
    { title: "Implement", detail: "Create branch and apply selected changes sequentially" },
    { title: "Ship", detail: "Type-check, commit, push, open PR, update memory" },
  ],
};

const DISCOVER_SCHEMA = {
  type: "object",
  properties: {
    lastCheckedHash: { type: "string" },
    latestHash: { type: "string" },
    commits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          hash: { type: "string" },
          shortHash: { type: "string" },
          message: { type: "string" },
          diff: { type: "string" },
        },
        required: ["hash", "shortHash", "message", "diff"],
      },
    },
  },
  required: ["lastCheckedHash", "latestHash", "commits"],
};

const ANALYSIS_SCHEMA = {
  type: "object",
  properties: {
    hash: { type: "string" },
    message: { type: "string" },
    shouldMigrate: { type: "boolean" },
    reason: { type: "string" },
    category: { type: "string" },
    implementationNotes: { type: "string" },
  },
  required: ["hash", "message", "shouldMigrate", "reason", "category"],
};

const IMPL_SCHEMA = {
  type: "object",
  properties: {
    hash: { type: "string" },
    implemented: { type: "boolean" },
    summary: { type: "string" },
    filesChanged: { type: "array", items: { type: "string" } },
    skippedReason: { type: "string" },
  },
  required: ["hash", "implemented", "summary"],
};

// args.dryRun = true  → analyze only, no branch/commit/PR
// args.force  = true  → ship even if type-check fails
const dryRun = args && args.dryRun === true;
const forceShip = args && args.force === true;

// ─── Phase 1: Discover ───────────────────────────────────────────────────────

phase("Discover");

const discovery = await agent(
  `
You are working on the personal blog monorepo at /Users/ming/milo/personal-blog/milo-vite-plus.

Steps:
1. Read /Users/ming/.claude/projects/-Users-ming-milo-personal-blog-milo-vite-plus/memory/reference_upstream.md
   Extract the last checked commit hash from the line "Last checked commit: \`<hash>\`".

2. Run: cd /Users/ming/milo/personal-blog/milo-vite-plus && git fetch upstream 2>&1

3. Run: git log <LAST_HASH>..upstream/main --oneline --no-color
   (Replace <LAST_HASH> with what you read in step 1.)
   If this prints nothing, commits is empty — still return latestHash.

4. For each commit hash in the log (max 20 most recent):
   a. git show <hash> --name-status --no-color -M --first-parent
   b. git show <hash> --no-color -M -- ':(exclude)*.lock' ':(exclude)pnpm-lock.yaml' | head -400
   Combine (a) and (b) as the "diff" field.

5. Get latestHash: git rev-parse upstream/main

Return all structured data.
`,
  { schema: DISCOVER_SCHEMA, phase: "Discover", label: "fetch-upstream" },
);

if (!discovery || !discovery.commits || discovery.commits.length === 0) {
  log("Already up to date — no new upstream commits.");
  return { status: "up-to-date", lastCheckedHash: discovery?.lastCheckedHash };
}

log(`Found ${discovery.commits.length} new commit(s) since ${discovery.lastCheckedHash}`);

// ─── Phase 2: Analyze (parallel) ─────────────────────────────────────────────

phase("Analyze");

const MIGRATION_RULES = `
=== CONTEXT ===
This is Michael Lo's portfolio/blog (milo.me), a Next.js 16 monorepo at apps/portfolio/.
Upstream ncdai/chanhdai.com is the original template. No shared git history.

=== SKIP (shouldMigrate: false) ===
- ncdai personal content: name, bio, avatar, resume, testimonials, sponsors, social links
- Upstream-only dep bumps: shadcn micro-patches, registry-only changes, ncdai-specific packages
- Dev-only showcase/demo components (component-showcase, blocks page)
- ESLint/Prettier/Biome config changes (we use our own lint via vp)
- Pure renames/moves with no logic change
- Workspace config files (pnpm-workspace.yaml, pnpm-lock.yaml inside apps/portfolio/)
- Upstream CI/CD changes (.github/workflows/)

=== MIGRATE (shouldMigrate: true) ===
- UI/UX improvements: layout, spacing, accessibility, responsive design, animations
- New or improved reusable components
- SEO: JSON-LD schemas, meta tags, OG image, sitemap
- Performance: bundle size, lazy loading, caching
- New portfolio features: talks, projects, tech-stack, social links
- Bug fixes in shared logic or components
- Tailwind / CSS utility improvements
- New icons added to icons.tsx
- Type safety improvements

For migrated items, write implementationNotes explaining HOW to reimplement:
upstream src/ path maps to our apps/portfolio/src/.
`;

const analyses = await parallel(
  discovery.commits.map(
    (commit) => () =>
      agent(
        `
${MIGRATION_RULES}

Analyze this upstream commit:

Commit: ${commit.hash} — "${commit.message}"

Diff:
${commit.diff}

Return your analysis.
`,
        { schema: ANALYSIS_SCHEMA, label: `analyze:${commit.shortHash}`, phase: "Analyze" },
      ),
  ),
);

const migratable = analyses.filter(Boolean).filter((a) => a.shouldMigrate);
const skipped = analyses.filter(Boolean).filter((a) => !a.shouldMigrate);

log(`${migratable.length} to migrate, ${skipped.length} skipped`);
if (skipped.length > 0) {
  log("Skipped: " + skipped.map((s) => `"${s.message}"`).join(", "));
}

if (migratable.length === 0) {
  log("Nothing to migrate — updating memory hash.");
  await agent(
    `Update /Users/ming/.claude/projects/-Users-ming-milo-personal-blog-milo-vite-plus/memory/reference_upstream.md.
Find "Last checked commit:" and replace the hash with: ${discovery.latestHash}
Note what was reviewed and skipped: ${skipped.map((s) => s.message).join(", ")}`,
    { phase: "Ship" },
  );
  return {
    status: "no-migrations",
    latestHash: discovery.latestHash,
    skipped: skipped.map((s) => s.message),
  };
}

if (dryRun) {
  log("DRY RUN — skipping implementation.");
  return {
    status: "dry-run",
    migratable: migratable.map((a) => ({
      message: a.message,
      reason: a.reason,
      notes: a.implementationNotes,
    })),
    skipped: skipped.map((s) => s.message),
    latestHash: discovery.latestHash,
  };
}

// ─── Phase 3: Implement ───────────────────────────────────────────────────────

phase("Implement");

const categories = [...new Set(migratable.map((a) => a.category).filter(Boolean))];
const categorySlug = categories.slice(0, 2).join("-") || "changes";
const branchName = `feat/upstream-sync-${categorySlug}-${discovery.latestHash.slice(0, 7)}`;

await agent(
  `In /Users/ming/milo/personal-blog/milo-vite-plus:
  git checkout main && git pull origin main && git checkout -b ${branchName}`,
  { phase: "Implement", label: "create-branch" },
);

const results = [];
for (const item of migratable) {
  const commitData = discovery.commits.find((c) => c.hash === item.hash);
  const result = await agent(
    `
You are implementing an upstream change into Michael Lo's Next.js 16 monorepo at:
  /Users/ming/milo/personal-blog/milo-vite-plus

Target: apps/portfolio/src/  (upstream src/ maps here)

=== CHANGE ===
Commit: ${item.hash} — "${item.message}"
Category: ${item.category}
Why migrate: ${item.reason}
Notes: ${item.implementationNotes || "Apply diff intent, adapting to our structure"}

=== DIFF ===
${commitData ? commitData.diff : "See analysis above"}

=== RULES ===
- Read files before editing
- Do NOT copy ncdai personal data — keep Michael Lo's data in apps/portfolio/src/features/portfolio/data/
- Do NOT create pnpm-workspace.yaml or pnpm-lock.yaml inside apps/portfolio/
- Do NOT commit — only modify files
- If a file doesn't exist in our repo, adapt the intent rather than failing
`,
    { schema: IMPL_SCHEMA, label: `impl:${item.hash.slice(0, 7)}`, phase: "Implement" },
  );
  if (result) results.push(result);
}

const implemented = results.filter((r) => r.implemented);
const failed = results.filter((r) => !r.implemented);

log(`Implemented ${implemented.length}/${migratable.length}`);
if (failed.length > 0) log("Failed: " + failed.map((r) => r.summary).join(", "));

// ─── Phase 4: Ship ────────────────────────────────────────────────────────────

phase("Ship");

const typeCheckResult = await agent(
  `In /Users/ming/milo/personal-blog/milo-vite-plus, run:
  vp run michaello-portfolio#check-types 2>&1
Report PASS or FAIL with any errors.`,
  { phase: "Ship", label: "type-check" },
);

const typeCheckPassed =
  typeCheckResult && typeCheckResult.toString().toLowerCase().includes("pass");

if (!typeCheckPassed && !forceShip) {
  log("Type check failed — fix errors before shipping. Pass args.force=true to override.");
  return {
    status: "type-check-failed",
    branch: branchName,
    typeCheckResult,
    implemented: implemented.map((r) => r.summary),
  };
}

const commitSummary = implemented
  .map((r) => r.summary)
  .filter(Boolean)
  .join(", ")
  .slice(0, 120);

const prBody = [
  "## Upstream sync from ncdai/chanhdai.com",
  "",
  "### Migrated",
  ...implemented.map((r) => `- ${r.summary}`),
  "",
  "### Skipped",
  ...skipped.map((s) => `- ~~${s.message}~~ — ${s.reason}`),
  "",
  `Upstream range: \`${discovery.lastCheckedHash}\` → \`${discovery.latestHash}\``,
].join("\n");

await agent(
  `In /Users/ming/milo/personal-blog/milo-vite-plus on branch ${branchName}:

1. git add -A && git diff --cached --stat
2. git commit -m "feat: migrate upstream ${discovery.latestHash.slice(0, 7)} — ${commitSummary}"
3. git push -u origin ${branchName}
4. gh pr create --title "feat: upstream sync (${discovery.latestHash.slice(0, 7)})" --body "$(cat <<'EOF'
${prBody}
EOF
)"
   If gh pr create fails with GraphQL/permissions, fall back to GitHub REST API:
   curl -s -X POST -H "Authorization: token $(gh auth token)" -H "Content-Type: application/json" \\
     https://api.github.com/repos/Michael0520/milo.me/pulls \\
     -d '{"title":"feat: upstream sync (${discovery.latestHash.slice(0, 7)})","head":"${branchName}","base":"main","body":"Upstream sync"}'
5. Print the PR URL.`,
  { phase: "Ship", label: "commit-push-pr" },
);

await agent(
  `Update /Users/ming/.claude/projects/-Users-ming-milo-personal-blog-milo-vite-plus/memory/reference_upstream.md:
Find "Last checked commit:" and replace hash with: ${discovery.latestHash}
Also note what was migrated and skipped in this pass.
Migrated: ${implemented.map((r) => r.summary).join("; ")}
Skipped: ${skipped.map((s) => s.message).join(", ")}`,
  { phase: "Ship", label: "update-memory" },
);

log("Upstream sync complete.");

return {
  status: "done",
  branch: branchName,
  latestHash: discovery.latestHash,
  migrated: implemented.map((r) => r.summary),
  skipped: skipped.map((s) => s.message),
};

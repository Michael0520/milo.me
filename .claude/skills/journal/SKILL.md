---
name: journal
description: Create a personal journal blog post. Two modes - casual life diary or work/tech sharing. Collects topics, finds the connecting thread, asks follow-up questions, and writes the full MDX post.
metadata:
  author: michaello
  version: "3.0"
---

Create a personal journal blog post in long-form narrative style.

Two modes:

- **Life** (休閒生活) — Travel, hobbies, personal milestones. Emotional, reflective.
- **Work** (工作技術) — Projects, tech learnings, professional sharing. Insight-driven.

The skill collects topics, finds the connecting thread, asks follow-up questions to enrich content, and **writes the full blog post** (not just a skeleton).

---

## Writing Rules (CRITICAL — apply to ALL output)

### Punctuation (正體中文)

- `。` **只出現在每段最後一句**，段落中間用 `，` 連接
- **不使用 `——`（破折號）**，用 `，` 或 `：` 代替
- 問號 `？` 和驚嘆號 `！` 不受此限制
- Blockquote `>` 內的句子可以獨立有 `。`

### Voice & Tone

- 第一人稱，像跟朋友聊天
- **自嘲式幽默** — 括號旁白增加人味，例如 `（對，追星）` `（希望主管不要看到）`
- **短句打點** — 重要的句子獨立成段，製造節奏感。例如：「其實只是愛漂亮？也許吧。」
- **Blockquote 放金句** — 用 `>` 標記最有力量、最值得記住的一句話，每篇 2-3 個
- **自然語言混用** — zh-TW、ja、en 按真實生活語境混用
- Minimal emoji — 這不是社群貼文

### Structure Principles

- **找到連結線** — 所有主題必須有一條共通的線串起來（例如「改變」「節奏」「成長」），不是各自獨立的流水帳
- **前後呼應** — 開頭拋出的問題或主題，結尾要回答或呼應
- **情緒弧線** — 有高有低有喘息，不平鋪直敘
- **每段的核心** — 事件描述 → 個人感受 → 反思/意義
- 用 `---` 分隔 major sections
- 用 `##` 做 section headers

### Content Approach

- **幫使用者寫完整內容**，不只是 placeholder
- 寫完後使用者可以微調語氣和細節
- 保留使用者原文中有個性的用詞（例如「小豬公」「QQ」）
- 如果素材不夠豐富，**主動反問**使用者取得更多細節

---

## Step 0: Choose Mode

If the user's topics clearly lean life or work, infer it. Otherwise ask:

Use **AskUserQuestion**:

> 這篇日記的風格比較偏哪種？

Options:

- **Life (休閒生活)** — 旅行、生活、個人里程碑，情感導向
- **Work (工作技術)** — 專案、技術學習、工作分享，洞見導向

---

## Mode: Life (休閒生活)

### Structure

```
1. Opening     — Set the emotional scene, introduce the theme/question
2. Chapters    — 3-5 topics, each: narrative + reflection + blockquote
3. Closing     — Echo the opening, forward-looking sign-off
```

### Life Mode Rules

- **Opening**: Don't jump straight into topics. Set the emotional scene first — what's different about this period? What question are you trying to answer?
- **Transitions**: Each section should flow into the next. Use the last sentence of a section to bridge to the next topic.
- **Interlude**: If there's a small, contemplative moment (an object, a scene), give it a short standalone section between heavier topics.
- **Closing**: Tie back to the opening question/theme. End with a simple, warm sign-off.

### Cover Title Style

Casual, inviting. Can be a question or statement.

- Examples: 「Hello 2026!」「最近的我，好像不太一樣了」「你也有一個想回去的地方嗎？」

---

## Mode: Work (工作技術)

### Structure

```
1. Opening     — What period, what's the connecting theme
2. Chapters    — 2-4 topics, each: challenge → approach → learning
3. Aside       — Optional lighter moment (0-1)
4. Closing     — Biggest takeaway + what's next
```

### Work Mode Rules

- **Opening**: Brief context — role, time period, why you're writing this.
- **Each chapter**: context/challenge → what you did → what you learned. The learning is the point.
- **Aside**: A funny bug, an unexpected discovery, a human moment. Keeps it from being dry.
- **Closing**: What was the biggest takeaway across all topics? What will you explore next?
- Can reference tools, methodologies, code concepts naturally — but this is a personal record, not a tutorial.

### Cover Title Style

Direct and thematic.

- Examples: 「從零開始做一個 AI 產品的三件事」「這季我學到最重要的技術決策」

---

## Workflow

### Step 1: Collect Material

If the user provides topics upfront, move to Step 2.

Otherwise ask:

> 這篇涵蓋什麼時間？列出想分享的主題（一句話描述即可）。

### Step 2: Find the Connecting Thread

Look at the user's topics and identify what connects them. Present it:

> 我覺得這幾個主題的共通線是「{thread}」— {brief explanation}。你覺得呢？

Use **AskUserQuestion** to confirm or adjust.

### Step 3: Ask Follow-up Questions

For each topic that needs more detail, ask targeted questions. Examples:

- 「你是怎麼做到的？過程中有什麼印象深刻的時刻？」
- 「當時的感受是什麼？有沒有一個瞬間讓你覺得不一樣了？」
- 「這件事對你的意義是什麼？跟其他主題有什麼關聯？」

Collect answers, then proceed to Step 4.

### Step 4: Plan Structure & Confirm

Present the planned structure:

```
連結線：{thread}

1. Opening — {how it sets up the thread}
2. {topic} — {angle, bridge to next}
3. {topic} — {angle, bridge to next}
4. {topic} — {angle}
5. Closing — {echo opening, forward-looking}
```

Use **AskUserQuestion** to confirm.

### Step 5: Write the Full Post

Write to `apps/portfolio/src/features/doc/content/{slug}.mdx`.

**Slug convention**:

- Life: `journal-{year}-{season-or-theme}`
- Work: `notes-{year}-{topic}`

**Frontmatter**:

```yaml
---
title: "{title}"
description: "{one-line description}"
createdAt: "{today YYYY-MM-DD}"
updatedAt: "{today YYYY-MM-DD}"
category: personal # or tech for Work mode
---
```

**No `image` field needed** — blog listing no longer uses cover images.

**Photo handling**: Comment out image tags with `{/* */}` so the user can uncomment when they have photos:

```mdx
{/* ![description](/images/journal/{slug}/photo.jpg) */}
```

**After writing**, tell the user:

1. File created at `src/features/doc/content/{slug}.mdx`
2. Read through and adjust tone/wording to match your voice
3. Uncomment and update photo paths when ready
4. Preview: `pnpm --filter michaello-portfolio dev` → `/daily/{slug}` or `/tech/{slug}`

---

## Step 6: Review & Polish

After the user reads the draft, help them:

- Adjust wording that doesn't sound like them
- Strengthen transitions between sections
- Refine blockquote selections
- Check punctuation rules (。only at paragraph end, no ——)

Repeat until the user is satisfied.

---

## Guardrails

- **Do NOT use `——`（破折號）in any output.**
- **Do NOT put `。` in the middle of a paragraph.** Only at the very end.
- **Do NOT skip the connecting thread step.** Topics without a thread feel like a random list.
- **Do NOT skip follow-up questions.** Richer material = better post.
- **Do NOT use more than 5 chapters (Life) or 4 chapters (Work).**
- **Do NOT include `image` in frontmatter.** Blog listing doesn't use cover images anymore.
- **Blockquotes**: 2-3 per post. Each should be a sentence worth remembering.
- **Work mode**: Personal record, not tutorial. No step-by-step instructions.
- **Always check**: Does the opening and closing echo each other?

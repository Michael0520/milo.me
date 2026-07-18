---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: Modern Monorepo Toolchain - Build Systems, Task Runners & Beyond
author: Michael Lo
keywords: monorepo,toolchain,build-systems,task-runners,nx,turborepo,pnpm,oxlint,ai
description: From tool selection to real-world implementation, how Monorepo becomes core infrastructure for modern frontend teams.
image: https://www.michaello.me/images/jsdc-2025/4.png
date: 2025-11-29
event: JSDC 2025
location: Taiwan
tags: [monorepo, toolchain, nx, turborepo, oxlint, ai]
htmlAttrs:
  lang: zh-TW
fonts:
  sans: Inter
  serif: Playfair Display
  mono: JetBrains Mono
  local: Noto Sans TC
drawings:
  persist: false
vitePlugin:
  icons:
    compiler: vue3
---

<sup opacity-80 font-hand text-4xl>ming</sup>

<!--
各位好，歡迎來到 JSDC 2025！
今天要跟大家分享的主題是 Modern Monorepo Toolchain
我們會從工具鏈的演進開始，一路聊到 AI 賦能的未來
-->

---
layout: intro
class: pl-25
glowSeed: 14
---


<h1 font-serif italic>Michael Lo
<sup opacity-80 font-hand text-4xl>ming</sup>
</h1>

<div class="opacity-80" flex="~ col gap-2">
<div flex="~ gap-3 items-center"><carbon-code class="text-xl" /> <span>Web Developer</span></div>
<div flex="~ gap-3 items-center"><img src="/shared/images/cod4tw-avatar-transparent.png" class="w-5 h-5" /> <span>Code for Taiwan Member</span></div>
</div>

<div mt-4 text-sm op60 font-serif italic>
"Coding is my way of making tomorrow a little lazier."
</div>

<div mt-6 flex="~ gap-2 items-center">
  <ri-global-line class="op50 text-xl" />
  <a href="https://www.michaello.me" target="_blank" class="border-none! font-300">michaello.me</a>
  <ri-github-fill class="op50 text-xl ml4" />
  <a href="https://github.com/Michael0520" target="_blank" class="border-none! font-300">Michael0520</a>
</div>

<img src="/shared/images/avatar.jpg" rounded-full absolute top-38 right-15 w-40 />

<!--
嗨，大家好，我是 Michael Lo
目前是全端工程師，對前端基礎設施特別感興趣

今天很高興能站在這裡跟大家分享 Monorepo 工具鏈的經驗
在開始之前，先讓我介紹一個我參與維護的組織
-->

---
layout: center
glow: top
---

<div flex="~ gap-16 items-center justify-center">
  <!-- Left: Logo + Text -->
  <div flex="~ col items-center gap-6">
    <img src="/shared/images/code4tw-avatar.jpeg" w-32 rounded-2xl shadow-xl />
    <div flex="~ col items-center gap-3">
      <h1 text-4xl font-black tracking-tight>Code for Taiwan</h1>
      <p text-lg op60 font-serif italic>Learn Programming Thinking Together</p>
    </div>
  </div>

  <!-- Right: QR Code -->
  <div flex="~ col items-center gap-4">
    <div bg-white p-4 rounded-2xl shadow-2xl>
      <img src="/shared/images/code4tw-qrcode_bento.me.png" w-48 />
    </div>
    <p text-lg op60>Scan to join us</p>
  </div>
</div>

<!--
Code for Taiwan 是一個公民科技組織
我們的理念是「一起學習程式思維」

掃描 QR code 可以加入我們的社群
-->

---
layout: default
glow: left
---

<div mt-16>
<h1 font-serif italic text-6xl leading-relaxed>Modern Monorepo Toolchain</h1>
<p op60 text-xl mt-2>Build Systems, Task Runners & Beyond</p>

<p op70 text-lg mt-12 leading-relaxed max-w-2xl>
From tool selection to real-world implementation,<br>
how Monorepo becomes <span text-cyan font-bold>core infrastructure</span> for modern frontend teams.
</p>
</div>

<div absolute bottom-8 right-12 text-right>
<div text-xl font-bold tracking-wide>JSDC 2025</div>
<div text-sm op60 mt-1>Nov. 29th 2025</div>
</div>

<!--
這是今天的主題：Modern Monorepo Toolchain

從工具選型到實戰落地
探討 Monorepo 如何成為現代前端團隊的核心基礎設施

接下來會從痛點開始，一步步帶大家了解
-->

---
layout: default
---

# Cross-Project Development Nightmares

<div grid="~ cols-[max-content_min-content_1fr] items-center gap-x-8 gap-y-6" py8>
  <div flex="~ gap-2 items-center" text-red>
    <carbon-warning class="text-2xl" />
    <span font-bold>Dependency Hell</span>
  </div>
  <carbon-arrow-right class="op25" />
  <div op75>Version conflicts everywhere, upgrades feel like defusing bombs</div>

  <div flex="~ gap-2 items-center" text-orange>
    <carbon-renew class="text-2xl" />
    <span font-bold>Reinventing the Wheel</span>
  </div>
  <carbon-arrow-right class="op25" />
  <div op75>Duplicated components, copy-paste CI/CD pipelines</div>

  <div flex="~ gap-2 items-center" text-blue>
    <carbon-user-multiple class="text-2xl" />
    <span font-bold>Inconsistent DX</span>
  </div>
  <carbon-arrow-right class="op25" />
  <div op75>Fragmented UI/UX, divergent coding conventions</div>

  <div flex="~ gap-2 items-center" text-purple>
    <carbon-branch class="text-2xl" />
    <span font-bold>Release Drift</span>
  </div>
  <carbon-arrow-right class="op25" />
  <div op75>Manual cross-repo sync, high risk of version misalignment</div>
</div>

<!--
先聊大家常遇到的痛點

依賴地獄 - 版本衝突到處都是，升級套件像拆炸彈
重複造輪子 - 每個專案都有自己的 date formatter，格式都不一樣
開發體驗不一致 - UI 風格分散，coding convention 各自為政
版本漂移 - 手動同步跨 repo 變更，版本錯位風險高

這些問題有沒有很熟悉？
-->

---
layout: default
---

# Polyrepo vs Monorepo

<div grid="~ cols-2 gap-8" mt-2>
  <div>
    <div flex="~ gap-2 items-center" mb-2>
      <span text-lg font-bold text-orange>Polyrepo</span>
      <span text-xs op50>Multiple repositories</span>
    </div>

```text {style="font-size:0.7em"}
├── app-web/
│   ├── package.json    ← v1.0.0
│   └── node_modules/
├── app-mobile/
│   ├── package.json    ← v2.1.0
│   └── node_modules/
└── lib-shared/
    ├── package.json    ← v0.8.0
    └── node_modules/
```

  </div>
  
  <div>
    <div flex="~ gap-2 items-center" mb-2>
      <span text-lg font-bold text-purple>Monorepo</span>
      <span text-xs op50>Single repository</span>
    </div>

```text {style="font-size:0.7em"}
monorepo/
├── package.json        ← workspace root
├── pnpm-workspace.yaml
├── apps/
│   ├── web/
│   └── mobile/
├── packages/
│   ├── shared/
│   └── ui/
└── node_modules/       ← shared deps
```

  </div>
</div>

<div v-click="1" v-motion :initial="{ y: 100, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 100 } }" grid="~ cols-2 gap-8" mt-4>
  <div class="border border-green-500/30 rounded-lg p-4 bg-green-500/10">
    <div flex="~ gap-2 items-center" text-green mb-3>
      <carbon-thumbs-up class="text-lg" />
      <span font-bold>Pros</span>
    </div>
    <div space-y-2 text-sm>
      <div flex="~ gap-2 items-center"><carbon-checkmark-filled class="text-green flex-none" /> Team autonomy</div>
      <div flex="~ gap-2 items-center"><carbon-checkmark-filled class="text-green flex-none" /> Simple permissions</div>
      <div flex="~ gap-2 items-center"><carbon-checkmark-filled class="text-green flex-none" /> Independent deploys</div>
    </div>
  </div>
  
  <div class="border border-orange-500/30 rounded-lg p-4 bg-orange-500/10">
    <div flex="~ gap-2 items-center" text-orange mb-3>
      <carbon-thumbs-down class="text-lg" />
      <span font-bold>Cons</span>
    </div>
    <div space-y-2 text-sm>
      <div flex="~ gap-2 items-center"><carbon-warning-filled class="text-orange flex-none" /> Dependency hell</div>
      <div flex="~ gap-2 items-center"><carbon-warning-filled class="text-orange flex-none" /> Code duplication</div>
      <div flex="~ gap-2 items-center"><carbon-warning-filled class="text-orange flex-none" /> Cross-repo changes pain</div>
    </div>
  </div>
</div>

<!--
左邊是 Polyrepo，每個專案獨立 repo
好處：團隊自主、權限簡單、獨立部署
代價：依賴地獄、程式碼重複、跨 repo 改動痛苦

[click]
右邊是 Monorepo，所有程式碼放一起
統一 node_modules、共享依賴、統一 CI/CD

關鍵洞察：不只是放在一起，是建立統一的基礎設施
-->

---
layout: two-cols
layoutClass: gap-8
---

<div flex="~ col h-full" justify-center>
  <div flex="~ gap-4 items-center" mb-6>
    <img src="/shared/images/monorepo-icon.png" class="w-16 h-16" />
    <h1 text-5xl font-black tracking-tight>MONOREPO</h1>
  </div>
  
  <div flex="~ gap-4" mb-6>
    <logos-google-icon class="text-3xl" />
    <logos-meta-icon class="text-3xl" />
    <logos-microsoft-icon class="text-3xl" />
  </div>
  
  <div text-sm op60 italic>"Infrastructure decision, not folder structure"</div>
</div>

::right::

<div style="position: relative" flex="~ col gap-5" py-8>
  <!-- 垂直連接線 -->
  <div style="position: absolute; left: 10px; top: 0; bottom: 0; width: 2px; background: rgba(156, 163, 175, 0.3);" />
  
  <div flex="~ gap-3 items-start" style="position: relative; z-index: 10">
    <carbon-checkmark-filled class="text-green text-xl flex-none" />
    <div><span font-bold>Atomic Commits</span><br><span text-sm op50>Cross-package changes in single commit</span></div>
  </div>
  
  <div flex="~ gap-3 items-start" style="position: relative; z-index: 10">
    <carbon-checkmark-filled class="text-green text-xl flex-none" />
    <div><span font-bold>Unified CI/CD</span><br><span text-sm op50>Single pipeline for all packages</span></div>
  </div>
  
  <div flex="~ gap-3 items-start" style="position: relative; z-index: 10">
    <carbon-checkmark-filled class="text-green text-xl flex-none" />
    <div><span font-bold>Large-scale Refactoring</span><br><span text-sm op50>Codemod across entire codebase</span></div>
  </div>
  
  <div flex="~ gap-3 items-start" style="position: relative; z-index: 10">
    <carbon-checkmark-filled class="text-green text-xl flex-none" />
    <div><span font-bold>Cross-team Visibility</span><br><span text-sm op50>Shared code discovery and reuse</span></div>
  </div>
  
  <div flex="~ gap-3 items-start" style="position: relative; z-index: 10">
    <carbon-warning-filled class="text-orange text-xl flex-none" />
    <div><span font-bold>Tooling Required</span><br><span text-sm op50>Needs Nx, Turborepo, or similar</span></div>
  </div>
</div>

<!--
Google、Meta、Microsoft 都在大規模使用 Monorepo

核心優勢：
- Atomic Commits：跨 package 單一 commit
- Unified CI/CD：統一 pipeline
- Large-scale Refactoring：整個 codebase 跑 codemod
- Cross-team Visibility：促進程式碼重用

挑戰：需要工具支援，接下來聊工具選型
-->

---
layout: default
glow: top
---

# Architecture Evolution

<div text-sm op70 mb-4>Scaling Strategy: From Monolith to Monorepo</div>

<div grid="~ cols-[2fr_1fr] gap-6">

<img src="/shared/images/monolith-repo.jpg" class="w-full rounded-lg shadow-xl" />

<div flex="~ col gap-4" mt-2>

<div flex="~ gap-3 items-center" p-3 border="~ blue-500/30" rounded-lg bg-blue-500:10>
<carbon-cube text-xl text-blue flex-none />
<div>
<div font-bold text-blue text-sm>Monolith</div>
<div text-xs op60>Tightly Coupled</div>
</div>
</div>

<div flex="~ items-center justify-center">
<carbon-arrow-down text-lg op30 />
</div>

<div flex="~ gap-3 items-center" p-3 border="~ orange-500/30" rounded-lg bg-orange-500:10>
<carbon-folder text-xl text-orange flex-none />
<div>
<div font-bold text-orange text-sm>Polyrepo</div>
<div text-xs op60>Isolated Silos</div>
</div>
</div>

<div flex="~ items-center justify-center">
<carbon-arrow-down text-lg op30 />
</div>

<div flex="~ gap-3 items-center" p-3 border="~ green-500/30" rounded-lg bg-green-500:10>
<carbon-data-center text-xl text-green flex-none />
<div>
<div font-bold text-green text-sm>Monorepo</div>
<div text-xs op60>Unified Workspace</div>
</div>
</div>

</div>

</div>

<!--
架構演進三階段：

Monolith - 緊密耦合
所有程式碼在一起，但難以擴展
改一個地方可能影響整個系統

Polyrepo - 孤立筒倉
各團隊獨立 repo，但形成資訊孤島
跨團隊協作困難，重複造輪子

Monorepo - 統一工作區
結合兩者優點
統一管理、共享程式碼，同時保持模組邊界
這就是為什麼大公司選擇 Monorepo
-->

---
layout: default
---

## Monorepo Toolchain Evolution

<Timeline mt2 />

- <span class="px-2 py-0.5 rounded bg-orange/20 text-orange">pnpm</span> - Package management infrastructure, the modern Monorepo standard
- <span class="px-2 py-0.5 rounded bg-blue/20 text-blue">Nx</span> - Enterprise-grade build system, took over <span class="px-2 py-0.5 rounded bg-gray/20 text-gray">Lerna</span> maintenance in 2022
- <span class="px-2 py-0.5 rounded bg-pink/20 text-pink">Turborepo</span> - Open-sourced 2021, acquired by Vercel, focused on task orchestration
- <span class="px-2 py-0.5 rounded bg-gray/20 text-gray">Lerna</span> - Unmaintained 2020, now powered by <span class="px-2 py-0.5 rounded bg-blue/20 text-blue">Nx</span> engine (v6+)

<!--
工具鏈演進史

pnpm - 現代 Monorepo 標準套件管理
Nx - 企業級 build system，2022 接手 Lerna
Turborepo - 2021 開源，Vercel 收購，專注 task orchestration
Lerna - 沒有死，被 Nx 吸收，v6+ 底層用 Nx 引擎

現代架構：pnpm + Nx 或 Turborepo
-->

---
layout: default
---

# Nx vs Turborepo

<div class="grid grid-cols-[180px_1fr_1fr] mt-6 border border-gray-500/20 rounded-lg overflow-hidden">
  <!-- Header -->
  <div class="p-3 bg-gray-500/10 border-b border-gray-500/20 op50 text-sm">Feature</div>
  <div class="p-3 bg-gray-500/10 border-b border-l border-gray-500/20 font-bold flex gap-2 items-center text-blue">
    <simple-icons-nx class="text-lg" /> Nx
  </div>
  <div class="p-3 bg-gray-500/10 border-b border-l border-gray-500/20 font-bold flex gap-2 items-center text-pink">
    <simple-icons-turborepo class="text-lg" /> Turborepo
  </div>

  <!-- Caching -->
  <div class="p-3 border-b border-gray-500/20 flex gap-2 items-center">
    <carbon-data-backup class="text-green" /> Caching
  </div>
  <div class="p-3 border-b border-l border-gray-500/20 op80">Local + Remote</div>
  <div class="p-3 border-b border-l border-gray-500/20 op80">Local + Remote</div>

  <!-- Task Orchestration -->
  <div class="p-3 border-b border-gray-500/20 flex gap-2 items-center">
    <carbon-flow class="text-yellow" /> Task Orchestration
  </div>
  <div class="p-3 border-b border-l border-gray-500/20 op80"><code text-xs>dependsOn</code></div>
  <div class="p-3 border-b border-l border-gray-500/20 op80"><code text-xs>^build</code> syntax</div>

  <!-- Code Generation -->
  <div class="p-3 border-b border-gray-500/20 flex gap-2 items-center">
    <carbon-code class="text-purple" /> Code Generation
  </div>
  <div class="p-3 border-b border-l border-gray-500/20 op80"><code text-xs>nx generate</code></div>
  <div class="p-3 border-b border-l border-gray-500/20 op50">—</div>

  <!-- Plugin Ecosystem -->
  <div class="p-3 border-b border-gray-500/20 flex gap-2 items-center">
    <carbon-plug class="text-orange" /> Plugin Ecosystem
  </div>
  <div class="p-3 border-b border-l border-gray-500/20 op80">Rich</div>
  <div class="p-3 border-b border-l border-gray-500/20 op50">Minimal</div>

  <!-- Learning Curve -->
  <div class="p-3 flex gap-2 items-center">
    <carbon-education class="text-cyan" /> Learning Curve
  </div>
  <div class="p-3 border-l border-gray-500/20 op80">Steeper</div>
  <div class="p-3 border-l border-gray-500/20 op80">Gentle</div>
</div>

<div mt-6 text-sm op60 italic>
  <carbon-idea class="text-yellow inline" /> Nx for deep integration, Turborepo for simplicity
</div>

<!--
Nx vs Turborepo 怎麼選？

相同點：都有 Caching 和 Task Orchestration

差異點：
- Code Generation：Nx 有，Turborepo 沒有
- Plugin Ecosystem：Nx 豐富，Turborepo 極簡
- Learning Curve：Nx 較陡，Turborepo 較平緩

結論：Nx 適合企業深度整合，Turborepo 適合快速上手
-->

---
layout: default
---

# Version Control Strategy

<div class="grid grid-cols-[180px_1fr_1fr] mt-6 border border-gray-500/20 rounded-lg overflow-hidden">
  <!-- Header -->
  <div class="p-3 bg-gray-500/10 border-b border-gray-500/20 op50 text-sm">Aspect</div>
  <div class="p-3 bg-gray-500/10 border-b border-l border-gray-500/20 font-bold flex gap-2 items-center text-purple">
    <carbon-locked class="text-lg" /> Fixed Mode
  </div>
  <div class="p-3 bg-gray-500/10 border-b border-l border-gray-500/20 font-bold flex gap-2 items-center text-pink">
    <carbon-unlocked class="text-lg" /> Independent Mode
  </div>

  <!-- Description -->
  <div class="p-3 border-b border-gray-500/20 flex gap-2 items-center">
    <carbon-information class="text-cyan" /> Description
  </div>
  <div class="p-3 border-b border-l border-gray-500/20 op80">All packages share version</div>
  <div class="p-3 border-b border-l border-gray-500/20 op80">Each package has own version</div>

  <!-- Pros -->
  <div class="p-3 border-b border-gray-500/20 flex gap-2 items-center">
    <carbon-checkmark-filled class="text-green" /> Pros
  </div>
  <div class="p-3 border-b border-l border-gray-500/20 op80">Simple management, clear deps</div>
  <div class="p-3 border-b border-l border-gray-500/20 op80">Flexible, granular updates</div>

  <!-- Cons -->
  <div class="p-3 border-b border-gray-500/20 flex gap-2 items-center">
    <carbon-warning-filled class="text-orange" /> Cons
  </div>
  <div class="p-3 border-b border-l border-gray-500/20 op80">Unchanged pkg gets bumped</div>
  <div class="p-3 border-b border-l border-gray-500/20 op80">Complex dep management</div>

  <!-- Best For -->
  <div class="p-3 flex gap-2 items-center">
    <carbon-star class="text-yellow" /> Best For
  </div>
  <div class="p-3 border-l border-gray-500/20 op80">Tightly coupled packages</div>
  <div class="p-3 border-l border-gray-500/20 op80">Independent packages</div>
</div>

<div class="mt-6 p-4 border border-green-500/30 rounded-lg bg-green-500/10">
  <div class="flex gap-3 items-start">
    <carbon-idea class="text-yellow text-xl flex-none mt-1" />
    <div>
      <span class="font-bold text-green">Sprint Teams → Fixed Mode</span>
      <div class="text-sm op70 mt-1">Catch integration issues early, release together at sprint end</div>
    </div>
  </div>
</div>

<!--
版本控制策略兩種模式：

Fixed Mode - 所有 packages 共用版本
適合緊密耦合的 packages，管理簡單

Independent Mode - 每個 package 獨立版本
適合獨立運作的 packages，彈性高

建議：Sprint Teams 用 Fixed Mode
及早發現整合問題，sprint 結束一起發布
-->

---
layout: two-cols
layoutClass: gap-8
---

# CODEOWNERS

<div text-sm op70 mb-4>Permissions & Boundaries</div>

```bash [.github/CODEOWNERS]
# .github/CODEOWNERS

# Default owners for all files
*  @core-infra-team

# UI library owned by Design System
/libs/ui/  @design-system-team

# Data access layer owned by Backend
/libs/data-access/  @backend-guild

# Critical config files require infra review
nx.json  @core-infra-team
```

::right::

<div flex="~ col gap-6" py-8>
  <div flex="~ gap-3 items-start">
    <carbon-security class="text-purple text-2xl flex-none" />
    <div>
      <span font-bold>Prevent Architecture Decay</span>
      <div text-sm op50>Critical code has guardians</div>
    </div>
  </div>

  <div flex="~ gap-3 items-start">
    <carbon-group class="text-blue text-2xl flex-none" />
    <div>
      <span font-bold>Clear Ownership</span>
      <div text-sm op50>Every module has an owner</div>
    </div>
  </div>

  <div flex="~ gap-3 items-start">
    <carbon-lightning class="text-green text-2xl flex-none" />
    <div>
      <span font-bold>Faster Reviews</span>
      <div text-sm op50>Auto-assign reviewers</div>
    </div>
  </div>
</div>

<div class="mt-4 p-3 border border-gray-500/20 rounded-lg bg-gray-500/10 text-sm">
  <carbon-flow class="text-yellow inline" /> PR → Auto Match → Assign → Required Review
</div>

<!--
CODEOWNERS 防止架構腐化

設定範例：
- 所有檔案預設 core-infra-team
- UI library 由 design-system-team
- nx.json 需要 infra review

三大優勢：
1. 關鍵程式碼有守護者
2. 每個模組有負責人
3. 自動分配 reviewer，PR 提交後自動匹配
-->

---
layout: default
---

# Remote Cache: The Ultimate Accelerator

<div text-sm op70 mb-4>
  Don't repeat tasks already completed elsewhere. Your CI and teammates are your most powerful computers.
</div>

<div flex="~ gap-6 items-center justify-center">
  <img src="/shared/images/cache hit.svg" class="h-80" />
  
  <div flex="~ col gap-3">
    <div flex="~ gap-2 items-center">
      <div class="w-2 h-2 rounded-full bg-red-500" />
      <span text-sm op70>Before</span>
      <span text-lg font-bold text-red>45 min</span>
    </div>
    <div flex="~ gap-2 items-center">
      <div class="w-2 h-2 rounded-full bg-green-500" />
      <span text-sm op70>After</span>
      <span text-lg font-bold text-green>8 min</span>
    </div>
    <div class="px-3 py-1.5 rounded-full bg-green-500/20 text-center mt-1">
      <span text-xl font-black text-green>↓ 82%</span>
    </div>
  </div>
</div>

<!--
Remote Cache 是效能終極加速器

核心：不重複執行別人已完成的任務
你的 CI 和隊友的電腦，都是最強大的運算資源

真實案例：
- Before：45 分鐘
- After：8 分鐘
- 效率提升 82%

Monorepo 規模越大，Cache 價值越高
-->

---
layout: default
---

# UI Library Best Practices: Why shadcn/ui?

<div text-center text-sm op70 mb-4>
Why is UI Kit the best gateway to Monorepo? It immediately demonstrates <span text-green font-bold>"Code Sharing"</span> and <span text-purple font-bold>"Consistency"</span> with controlled risk.
</div>

<div grid="~ cols-2 gap-6" mt-2>

<div>
<div flex="~ gap-2 items-center" text-red mb-2>
<carbon-locked text-xl /> <span font-bold>Traditional: Black Box Dependency</span>
</div>

```text {style="font-size:0.7em"}
node_modules/
├── 📦 @mui/material    ← v5.14.0
├── 📦 antd             ← v5.8.0
└── 📦 chakra-ui        ← v2.8.0
    └── 🔒 Cannot modify internal code
```

<div text-xs op70 mt-2 mb-3>
Traditional UI lives in `node_modules` as a black box.<br>
You can't easily customize, and are bound to publisher's release cycle.
</div>

<div space-y-1 text-xs>
<div flex="~ gap-2 items-center"><carbon-close-filled text-red /> Can't customize internal logic</div>
<div flex="~ gap-2 items-center"><carbon-close-filled text-red /> Risky version upgrades</div>
<div flex="~ gap-2 items-center"><carbon-close-filled text-red /> Style overrides are painful</div>
</div>
</div>

<div>
<div flex="~ gap-2 items-center" text-green mb-2>
<carbon-copy text-xl /> <span font-bold>shadcn/ui: Hard Fork Flexibility</span>
</div>

```text {style="font-size:0.7em"}
Registry              Your Project
┌──────────┐          ┌─────────────────┐
│ <Button> │   ───►   │ packages/ui/    │
│ <Dialog> │  (copy)  │ ├── Button.tsx  │
│ <Card>   │          │ ├── Dialog.tsx  │
└──────────┘          │ └── Card.tsx    │
                      └─────────────────┘
                         (Full Control)
```

<div text-xs op70 mt-2 mb-3>
Embrace "copy-paste" hard fork flexibility.<br>
It's not a dependency — it's code you fully own.
</div>

<div space-y-1 text-xs>
<div flex="~ gap-2 items-center"><carbon-checkmark-filled text-green /> <b>Full Ownership:</b> Modify freely, no upstream waiting</div>
<div flex="~ gap-2 items-center"><carbon-checkmark-filled text-green /> <b>Explicit Deps:</b> No hidden peerDependencies</div>
<div flex="~ gap-2 items-center"><carbon-checkmark-filled text-green /> <b>Consistency:</b> Follow your project's code standards</div>
</div>
</div>

</div>

<!--
為什麼 UI Kit 是 Monorepo 最佳入口？
立刻展示 Code Sharing 和 Consistency 的價值

傳統 UI library 是黑盒子，難以客製化
升級版本風險高，樣式覆寫很痛苦

shadcn/ui 採用 hard fork 策略
程式碼直接複製到你的專案，完全擁有
可以自由修改，不用等上游發布
-->

---
layout: two-cols
layoutClass: gap-8
---

# Build Your Own shadcn Registry

<div text-purple font-bold mb-2>Directory Structure</div>

```text {style="font-size:0.7em"}
packages/ui-registry/
├── registry.json        ← Config
└── registry/new-york/
    ├── ui/
    │   ├── button.tsx
    │   └── card.tsx
    ├── chart/
    ├── form/
    └── animation/
```

<div mt-6 space-y-2 text-sm>
<div flex="~ gap-2 items-center"><carbon-checkmark-filled text-green /> Use `@/` alias for portability</div>
<div flex="~ gap-2 items-center"><carbon-checkmark-filled text-green /> Auto-install dependencies</div>
<div flex="~ gap-2 items-center"><carbon-checkmark-filled text-green /> One command install</div>
</div>

::right::

<div text-green font-bold mb-2 mt-8>registry.json</div>

```json {style="font-size:0.65em"}
{
  "name": "action-button",
  "type": "registry:component",
  "registryDependencies": ["button"],
  "files": [{
    "path": "registry/new-york/ui/action-button.tsx",
    "type": "registry:ui"
  }]
}
```

<div mt-6 p-3 border="~ green-500/30" rounded-lg bg-green-500:10>
<div flex="~ gap-2 items-center" text-sm>
<carbon-terminal text-green /> <span font-bold>Install</span>
</div>
<code text-xs mt-1 block>npx shadcn add https://ui.example.com/r/button.json</code>
</div>

<!--
自建 shadcn Registry

目錄結構：registry.json 定義組件元資料
每個組件有自己的 registryDependencies

優勢：
- 使用 @/ alias 確保可移植性
- 自動安裝依賴
- 一個指令安裝：npx shadcn add <url>

集中管理，跨專案一致性
-->

---
layout: two-cols
layoutClass: gap-8
---

# Your UI Ecosystem

<div text-purple font-bold mb-2>Base → Extended Libraries</div>

```text {style="font-size:0.75em"}
shadcn/ui (Base)
    │
    ├── @repo/chart-library
    ├── @repo/form-library
    ├── @repo/map-library
    └── @repo/animation-library
```

<div mt-4 space-y-2 text-sm>
<div flex="~ gap-2 items-center"><carbon-chart-area text-blue /> Charts: AreaChart, BarChart...</div>
<div flex="~ gap-2 items-center"><carbon-document text-green /> Forms: SmartForm, Validation...</div>
<div flex="~ gap-2 items-center"><carbon-map text-orange /> Maps: MapView, Marker...</div>
<div flex="~ gap-2 items-center"><carbon-movement text-pink /> Animation: FadeIn, Parallax...</div>
</div>

<div mt-4 text-xs op60>
<b>Examples:</b> magic-ui, aceternity-ui, shadcn-charts
</div>

::right::

<div text-orange font-bold mb-2 mt-8>Private Registry</div>

```json {style="font-size:0.7em"} [components.json]
{
  "registries": {
    "@internal": {
      "url": "https://ui.company.com/r",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

<div mt-4 space-y-2 text-sm>
<div flex="~ gap-2 items-center"><carbon-locked text-orange /> GitHub Private Repo + PAT</div>
<div flex="~ gap-2 items-center"><carbon-cloud text-blue /> Static hosting, no backend</div>
<div flex="~ gap-2 items-center"><carbon-terminal text-green /> <code>npx shadcn add @internal/button</code></div>
</div>

<!--
建立你的 UI 生態系統

以 shadcn/ui 為基底，延伸領域特定元件庫：
- Chart library
- Form library
- Map library
- Animation library

Private Registry 支援 token 認證
GitHub Private Repo + PAT
靜態託管，不需要後端
-->

---
layout: two-cols
layoutClass: gap-8
---

# AI + MCP: Intelligent Generation

<div text-sm op70 mb-4>
<span text-purple font-bold>shadcn/ui</span> + <span text-green font-bold>Registry</span> + <span text-pink font-bold>MCP</span> = AI-powered development
</div>

<div text-purple font-bold mb-2>What MCP Enables</div>

<div space-y-2 text-sm>
<div flex="~ gap-2 items-center"><carbon-view text-blue /> Browse all components in registries</div>
<div flex="~ gap-2 items-center"><carbon-search text-green /> Cross-registry search by name/function</div>
<div flex="~ gap-2 items-center"><carbon-chat text-pink /> Natural language installation</div>
<div flex="~ gap-2 items-center"><carbon-cloud text-orange /> Multi-registry support (public + private)</div>
</div>

<div mt-4 text-xs op50>
<a href="https://ui.shadcn.com/docs/registry/mcp" target="_blank">ui.shadcn.com/docs/registry/mcp</a>
</div>

::right::

<div text-green font-bold mb-2 mt-8>Setup & Usage</div>

```bash {style="font-size:0.7em"}
# Initialize MCP server
npx shadcn@latest mcp init --client claude
```

<div mt-4 text-sm op70 mb-2>Then ask AI:</div>

<div space-y-2 text-xs>
<div p-2 border="~ gray-500/30" rounded bg-gray-500:10 font-mono>"Add button, dialog, card to my project"</div>
<div p-2 border="~ gray-500/30" rounded bg-gray-500:10 font-mono>"Create a contact form using shadcn"</div>
<div p-2 border="~ gray-500/30" rounded bg-gray-500:10 font-mono>"Show all components from @internal"</div>
</div>

<div v-click mt-4 p-3 border="~ green-500/30" rounded-lg bg-green-500:10 text-center text-sm>
<carbon-idea text-green /> AI understands your <b>Registry</b> context
</div>

<!--
AI + MCP = 智能生成

MCP = Model Context Protocol
讓 AI 理解你的 Registry 上下文

AI 可以：
- 瀏覽所有 registries 的組件
- 用自然語言搜尋和安裝
- 支援多 registry（公開 + 私有）

設定：npx shadcn@latest mcp init --client claude
然後直接問 AI："幫我加 button, dialog, card"
-->

---
layout: center
class: text-center
---

# Bun: One Runtime to Rule Them All

<div mt-8 flex="~ items-center justify-center gap-12">

<!-- Traditional -->
<div flex="~ col items-center">
<div flex="~ items-center gap-2" text-6xl mb-4>
<carbon-tool-box text-gray op40 />
</div>
<div text-2xl font-bold op60>Traditional</div>
<div text-green font-serif italic mt-2>4 tools, 4 configs</div>
</div>

<!-- Arrow -->
<carbon-arrow-right text-4xl op30 />

<!-- Bun -->
<div flex="~ col items-center">
<logos-bun class="text-6xl mb-4" />
<div text-2xl font-bold text-yellow>Bun</div>
<div text-purple font-serif italic mt-2>One Runtime</div>
</div>

<!-- Arrow -->
<carbon-arrow-right text-4xl op30 />

<!-- Ecosystem -->
<div flex="~ col gap-2" text-left>
<div p-2 px-4 rounded-lg border="~ yellow-500/50" bg-yellow-500:10 flex="~ gap-2 items-center">
<carbon-package text-yellow /> <span>Package Manager</span>
</div>
<div p-2 px-4 rounded-lg border="~ blue-500/50" bg-blue-500:10 flex="~ gap-2 items-center">
<carbon-code text-blue /> <span>Native TypeScript</span>
</div>
<div p-2 px-4 rounded-lg border="~ green-500/50" bg-green-500:10 flex="~ gap-2 items-center">
<carbon-box text-green /> <span>Bundler built-in</span>
</div>
<div p-2 px-4 rounded-lg border="~ pink-500/50" bg-pink-500:10 flex="~ gap-2 items-center">
<carbon-chemistry text-pink /> <span>Test Runner</span>
</div>
<div p-2 px-4 rounded-lg border="~ gray-500/30" bg-gray-500:10 flex="~ gap-2 items-center" op60>
<span>...</span>
</div>
</div>

</div>

<div mt-12 flex="~ gap-4 items-center justify-center">
<div p-2 px-4 rounded-full border="~ red-500/30" bg-red-500:10 flex="~ gap-2 items-center">
<logos-npm-icon class="text-lg" /> <span text-red font-bold>33.4s</span>
</div>
<carbon-arrow-right op30 />
<div p-2 px-4 rounded-full border="~ orange-500/30" bg-orange-500:10 flex="~ gap-2 items-center">
<logos-pnpm class="text-lg" /> <span text-orange font-bold>14.6s</span>
</div>
<carbon-arrow-right op30 />
<div p-3 px-5 rounded-full border="~ green-500/50" bg-green-500:20 flex="~ gap-2 items-center" scale-110>
<logos-bun class="text-xl" /> <span text-green font-bold text-xl>2.1s</span>
</div>
</div>

<!--
Bun：一個 Runtime 統一所有

傳統需要 4 個工具、4 套設定
Bun 整合：
- Package Manager
- Native TypeScript
- Bundler built-in
- Test Runner

效能比較：
npm 33.4s → pnpm 14.6s → Bun 2.1s
快 16 倍！
-->

---
layout: center
class: text-center
---

# The Power of Bun <logos-bun class="inline-block ml-2" />

<div op60 mb-8>When extreme performance becomes infrastructure</div>

<div grid="~ cols-2 gap-12" text-left max-w-4xl mx-auto>

<!-- Performance -->
<div>
<div flex="~ gap-2 items-center" mb-4>
<carbon-meter-alt text-xl text-yellow />
<span font-bold>Performance Benchmark</span>
</div>

<div space-y-4>
<div>
<div flex="~ justify-between items-center" mb-1>
<span text-sm flex="~ gap-2 items-center"><logos-npm-icon /> npm</span>
<span text-red font-bold>33.4s</span>
</div>
<div h-3 w-full bg-gray-800 rounded-full overflow-hidden>
<div h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full style="width: 100%"></div>
</div>
</div>

<div>
<div flex="~ justify-between items-center" mb-1>
<span text-sm flex="~ gap-2 items-center"><logos-pnpm /> pnpm</span>
<span text-orange font-bold>14.6s</span>
</div>
<div h-3 w-full bg-gray-800 rounded-full overflow-hidden>
<div h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full style="width: 44%"></div>
</div>
</div>

<div>
<div flex="~ justify-between items-center" mb-1>
<span text-sm flex="~ gap-2 items-center"><logos-bun /> bun</span>
<span text-green font-bold text-lg>2.1s <carbon-flash text-yellow /></span>
</div>
<div h-3 w-full bg-gray-800 rounded-full overflow-hidden>
<div h-full bg-gradient-to-r from-green-500 to-yellow-400 rounded-full style="width: 6%"></div>
</div>
</div>
</div>

<div mt-4 text-xs op50 italic>16x faster than npm</div>
</div>

<!-- Case Study -->
<div>
<div flex="~ gap-2 items-center" mb-4>
<carbon-application text-xl text-purple />
<span font-bold>Case Study: Midjourney</span>
</div>

<div flex="~ gap-6" mb-6>
<div p-4 flex-1 border="~ purple-500/20" rounded-xl bg-purple-500:5 text-center>
<carbon-user-avatar-filled-alt text-3xl text-purple mb-2 />
<div text-2xl font-black text-purple>1M+</div>
<div text-xs op60>Active Users</div>
</div>
<div p-4 flex-1 border="~ green-500/20" rounded-xl bg-green-500:5 text-center>
<carbon-group text-3xl text-green mb-2 />
<div text-2xl font-black text-green>5</div>
<div text-xs op60>Maintainers</div>
</div>
</div>

<div p-3 border-l-4 border-purple-500 bg-purple-500:5 rounded-r-lg>
<div text-xs op50 mb-1>Philosophy</div>
<div text-sm text-purple italic>"Oppose bloat in infrastructure"</div>
</div>
</div>

</div>

<!--
Bun 最佳案例：Midjourney

效能數據：
npm 33.4s → pnpm 14.6s → Bun 2.1s
快 16 倍！

Midjourney：
- 100 萬+ 活躍用戶
- 只有 5 個維護者
- 哲學："Oppose bloat in infrastructure"

當極致效能成為基礎設施
-->

---
layout: center
class: text-center
---

<div flex="~ gap-12 items-center justify-center">
  <img src="/shared/images/voidzero-logo.svg" class="h-12 invert" />
  <carbon-close class="text-3xl op40" />
  <img src="/shared/images/vite-plus-logo.svg" class="h-10" />
</div>

<div mt-12 text-lg op70 font-serif italic>
  "One for all, all for one"
</div>

<!--
VoidZero x Vite+

VoidZero 是 Evan You 創立的公司
專注打造下一代 JavaScript 工具鏈

Vite+ 提供企業級支援
"One for all, all for one"
開源與企業支援的結合
-->

---
layout: center
glow: left
---

<img src="/shared/images/vite-plus.png" class="w-full max-w-4xl mx-auto" style="mix-blend-mode: lighten;" />

<div class="absolute bottom-4 right-8 text-xs op50">
  Ref: <a href="https://talks.antfu.me/2025/vuefes/4" target="_blank" rel="noopener noreferrer">talks.antfu.me/2025/vuefes</a>
</div>

<!--
VoidZero 完整開源工具鏈

這張圖展示 Vite+ 生態系統
從 Vite 延伸出的所有工具：
Vitest, Rolldown, Oxc, Oxlint...

統一的工具鏈願景
圖片參考自 Anthony Fu 的 VueFes 演講
-->

---
layout: default
glow: right
---

<div flex="~ col gap-3" mt-12 ml-20>
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code w-full"><code><span op50>$ </span><span class="text-yellow!">vite</span> <span op75>dev</span> <span v-click="1" class="text-purple!">--ui</span></code></pre>
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code w-full"><code><span op50>$ </span><span class="text-yellow!">vite</span> <span op75>build</span> <span v-click="1" class="text-purple!">--ui</span></code></pre>
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code w-full"><code><span op50>$ </span><span class="text-yellow!">vite</span> <span op75>test</span> <span v-click="1" class="text-purple!">--ui</span></code></pre>
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code w-full"><code><span op50>$ </span><span class="text-yellow!">vite</span> <span op75>lint</span> <span v-click="1" class="text-purple!">--ui</span> <span v-click="2" class="text-pink!">100x faster</span></code></pre>
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code w-full"><code><span op50>$ </span><span class="text-yellow!">vite</span> <span op75>fmt</span> <span v-click="1" class="text-purple!">--ui</span></code></pre>
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code w-full"><code><span op50>$ </span><span class="text-yellow!">vite</span> <span op75>run</span> <span v-click="1" class="text-purple!">--ui</span> <span v-click="2" class="text-pink!">monorepo</span></code></pre>
<pre class="shiki shiki-themes vitesse-dark vitesse-light slidev-code w-full"><code><span op50>$ </span><span class="text-yellow!">vite</span> <span op75>lib</span> <span v-click="1" class="text-purple!">--ui</span></code></pre>
</div>

<!--
Vite+ 統一工具鏈願景

所有指令統一用 vite：
vite dev, build, test, lint, fmt, run, lib

[click] --ui 參數提供視覺化介面

[click] 特別注意：
- lint 100x faster (Oxlint)
- run 支援 monorepo
-->

---
layout: center
class: text-center
---

# Oxlint: 100x Faster Linting <img src="https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/round-bubbles.png" class="inline-block ml-2 w-10 h-10" />

<div op60 mb-8>Rust-powered linter for modern Monorepo</div>

<div grid="~ cols-2 gap-12" text-left max-w-4xl mx-auto>

<!-- Performance -->
<div>
<div flex="~ gap-2 items-center" mb-4>
<carbon-meter-alt text-xl text-yellow />
<span font-bold>Performance Benchmark</span>
</div>

<div space-y-4>
<div>
<div flex="~ justify-between items-center" mb-1>
<span text-sm flex="~ gap-2 items-center"><logos-eslint /> ESLint</span>
<span text-red font-bold>4,116 ms</span>
</div>
<div h-3 w-full bg-gray-800 rounded-full overflow-hidden>
<div h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full style="width: 100%"></div>
</div>
</div>

<div>
<div flex="~ justify-between items-center" mb-1>
<span text-sm flex="~ gap-2 items-center"><img src="https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/round-bubbles.png" class="w-4 h-4" /> Oxlint</span>
<span text-green font-bold text-lg>48 ms <carbon-flash text-yellow /></span>
</div>
<div h-3 w-full bg-gray-800 rounded-full overflow-hidden>
<div h-full bg-gradient-to-r from-green-500 to-yellow-400 rounded-full style="width: 1.2%"></div>
</div>
</div>
</div>

<div mt-4 text-xs op50 italic>85x faster than ESLint</div>
</div>

<!-- Dual-Track Strategy -->
<div>
<div flex="~ gap-2 items-center" mb-4>
<carbon-flow text-xl text-purple />
<span font-bold>Dual-Track Strategy</span>
</div>

<div flex="~ gap-4" mb-4>
<div p-3 flex-1 border="~ orange-500/20" rounded-xl bg-orange-500:5 text-center>
<img src="https://cdn.jsdelivr.net/gh/oxc-project/oxc-assets/round-bubbles.png" class="w-8 h-8 mx-auto mb-2" />
<div text-lg font-black text-orange>90%</div>
<div text-xs op60>Common Rules</div>
</div>
<div p-3 flex-1 border="~ purple-500/20" rounded-xl bg-purple-500:5 text-center>
<logos-eslint class="text-2xl mb-2" />
<div text-lg font-black text-purple>10%</div>
<div text-xs op60>Plugin Rules</div>
</div>
</div>

```json
{ "scripts": { "lint": "oxlint && eslint" } }
```

<div text-xs op50 mt-2>Use <a href="https://github.com/oxc-project/eslint-plugin-oxlint" target="_blank"><code>eslint-plugin-oxlint</code></a> to auto-disable overlapping rules</div>
</div>

</div>

<!--
Oxlint：100 倍快的 Linting

效能對比：
ESLint 4,116ms → Oxlint 48ms
快 85 倍！

雙軌策略：
- Oxlint 處理 90% 常見規則
- ESLint 處理 10% plugin 規則
- 用 eslint-plugin-oxlint 自動關閉重複規則

漸進式遷移，不用一次到位
-->

---
layout: center
class: text-center
---

<a href="https://talks.codefarmer.tw/2024-12-jsdc/1" target="_blank" rel="noopener noreferrer" class="block">
<img src="/shared/images/JSDC2024.webp" class="w-180 mx-auto rounded-lg shadow-2xl border border-gray-500/20 hover:scale-102 transition-transform" />
</a>

<div mt-4 flex="~ gap-3 items-center justify-center">
<carbon-screen text-xl text-green />
<div text-left>
<div font-bold>JSDC 2024 - VoidZero 完整分享</div>
<div text-sm op60>by codefarmer</div>
</div>
<a href="https://talks.codefarmer.tw/2024-12-jsdc/1" target="_blank" rel="noopener noreferrer" class="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-sm font-bold hover:bg-green-500/30 transition-colors inline-flex items-center gap-1">
<carbon-arrow-right /> View
</a>
</div>

<!--
想深入了解 VoidZero？

推薦 JSDC 2024 codefarmer 的完整分享
涵蓋 Vite, Vitest, Rolldown, Oxc 深度解析

點擊圖片可以直接觀看
非常值得一看！
-->

---
layout: two-cols
layoutClass: gap-16
glow: right
---

# Infra Core

<div text-sm op60 mb-6>The Foundation Defines the Height</div>

<img src="/shared/images/infra-mountain.png" class="w-full" />

::right::

<div flex="~ col" mt-16>

<div text-sm op70 mb-6>
  Every config you write, every boundary you define — shapes <span text-purple font-bold>velocity</span> & <span text-green font-bold>stability</span>.
</div>

<div flex="~ col gap-5">
  <div flex="~ gap-3 items-center">
    <carbon-cube class="text-blue text-2xl flex-none" />
    <div>
      <div font-bold>Core Infrastructure</div>
      <div text-sm op50>Build · CI/CD · Cache · DX</div>
    </div>
  </div>
  
  <div flex="~ gap-3 items-center">
    <carbon-apps class="text-orange text-2xl flex-none" />
    <div>
      <div font-bold>Application Layer</div>
      <div text-sm op50>UI · Logic · Features</div>
    </div>
  </div>
  
  <div flex="~ gap-3 items-center">
    <carbon-lightning class="text-green text-2xl flex-none" />
    <div>
      <div font-bold>Scalability & Reliability</div>
      <div text-sm op50>Foundation for 100+ features</div>
    </div>
  </div>
</div>

<div class="mt-6 p-4 border border-purple-500/30 rounded-lg bg-purple-500/10">
  <carbon-idea class="text-purple inline text-lg" /> <span font-bold>Monorepo = Your Infrastructure Foundation</span>
</div>

</div>

<!--
Infra Core: The Foundation Defines the Height
The iceberg model shows the essence of Monorepo
Above: Application Layer - UI, Logic, Features
Below: Core Infrastructure - Build, CI/CD, Cache, DX
Monorepo is your infrastructure foundation
-->

---
layout: center
---

<div font-serif text-3em text-center>All Software</div>

<div text-1.6em text-purple mt-4 text-center><span v-mark="1">Don't over-design, focus on simplicity</span></div>

<!--
Core Philosophy: Don't over-design, focus on simplicity
不要過度設計，專注於化繁為簡
-->

---
layout: center
class: text-center
---

<h1 font-serif text-6xl>Thank You!</h1>

<div op50 mt-4>Slides can be found on <a href="https://www.michaello.me/slides/2025-11-29/" target="_blank">michaello.me</a></div>

<!--
Thank you for listening!
-->

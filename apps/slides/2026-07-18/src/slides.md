---
layout: intro
class: pl-25
glow: left
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: Modern Frontend Infra - A 2026 Toolchain Map
author: Michael Lo
keywords: frontend-infra,vite,rolldown,oxc,oxlint,pnpm,vite-plus,monorepo,ai,rust,idp
description: Why — after the Rust rewrite and the great unification — the real
  battleground is AI's verification.
date: 2026-07-18
event: v-taiwan Meetup
location: Taiwan
tags: [ frontend-infra, vite, rust, oxc, pnpm, ai, idp ]
htmlAttrs:
  lang: en
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

<h1 font-serif text-7xl leading-tight>Modern Frontend Infra</h1>
<p op80 text-3xl mt-6 font-hand>A 2026 toolchain map</p>
<p op40 text-xl mt-4 font-serif italic>the real battleground is <span text-gradient font-bold>AI</span>'s verification</p>

<div abs-br m12 flex="~ col gap-1 items-end" text-right>
  <div font-serif text-2xl tracking-wide>v-taiwan Meetup</div>
  <div op50 text-sm mt-1>Jul. 18th, 2026</div>
</div>

---
layout: intro
class: pl-25
glowSeed: 14
---

<PersonalIntro />

---
layout: center
glow: top
glowHue: 280
---

<div flex="~ col gap-8 items-center">
  <img src="/shared/images/cod4tw-avatar-transparent.png" w-40 />
  <h1 font-serif text-5xl>Code for Taiwan</h1>
</div>

---
layout: center
glow: top
glowHue: 10
---

# Taiwan-Japan Engineer Networking Night

<div flex="~ gap-12 items-center justify-center mt-4">
  <img src="/images/event-twjp-night.png" h-95 rounded-xl border="~ white/10" shadow-xl />
  <div flex="~ col gap-2 items-center">
    <div bg-white p-3 rounded-xl shadow-2xl>
      <img src="/images/event-twjp-qr.png" w-40 />
    </div>
    <span op50 text-sm>Scan to register</span>
  </div>
</div>

---
glow: bottom
---

# Agenda

<div mt-10 flex="~ col gap-5" max-w-3xl>
  <div flex="~ gap-5 items-center" op75>
    <div font-mono op40 text-sm w-6>00</div>
    <div flex-1><b>Inflection</b> <span op60 text-sm>— why 2026 is a turning point</span></div>
  </div>
  <div flex="~ gap-5 items-center">
    <div font-mono text-amber text-sm w-6>01</div>
    <div flex-1><b text-amber>Wave 1 · Cheap</b> <span op60 text-sm>— the Rust rewrite</span></div>
  </div>
  <div flex="~ gap-5 items-center">
    <div font-mono text-lime text-sm w-6>02</div>
    <div flex-1><b text-lime>Wave 2 · Run it all</b> <span op60 text-sm>— the great unification</span></div>
  </div>
  <div flex="~ gap-5 items-center">
    <div font-mono text-blue text-sm w-6>03</div>
    <div flex-1><b text-blue>Wave 3 · Catch AI</b> <span op60 text-sm>— the AI shift, where it all converges</span></div>
  </div>
  <div flex="~ gap-5 items-center">
    <div font-mono op40 text-sm w-6>04</div>
    <div flex-1><b>In practice</b> <span op60 text-sm>— two loops from my own work</span></div>
  </div>
</div>

---
layout: center
glow: top
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>Inflection</span>
  <span font-hand text-3xl mt-2 op75 style="transform: rotate(-2deg)">2026, frontend infra</span>
</div>

---
glow: right
---

# Let's start with a headline

<div mt-8 max-w-3xl p-6 rounded-2xl bg-hex-1a1d27 border="~ white/10" shadow-xl>
  <div flex="~ gap-4 items-center">
    <div relative>
      <img src="/images/evan-you.png" w-14 rounded-full />
      <img src="/images/cloudflare.png" w-8 rounded-full absolute bottom--1 right--2 border="2 hex-1a1d27" />
    </div>
    <div flex="~ col">
      <span text-lg>Evan You <span op40 text-sm>@youyuxi</span></span>
      <span op40 text-sm>2026-06-04</span>
    </div>
    <div i-ph-newspaper-duotone text-2xl text-orange ml-auto />
  </div>
  <p mt-4 text-xl leading-relaxed><b text-orange>Cloudflare acquires VoidZero</b></p>
  <p op60 mt-2>Evan You's team joins Cloudflare · all tools stay open-source</p>
</div>

<div mt-8 text-xl op75 flex="~ gap-2 items-center">
  <div i-ph-question-duotone text-2xl op50 />
  What does this mean for your <code>vite.config.ts</code>?
</div>

---
glow: left
---

# It's not an isolated event

<div grid="~ cols-[max-content_min-content_auto] items-center gap-x-10 gap-y-7" py8 text-lg>
  <div op50 font-mono>2024-10</div>
  <div i-ph-arrow-right-duotone op30 />
  <div flex="~ gap-2 items-center"><img src="/images/evan-you.png" w-5 rounded-full /><span>ViteConf — Evan You announces <b>VoidZero</b></span></div>

  <div op50 font-mono>2025-10</div>
  <div i-ph-arrow-right-duotone op30 />
  <div flex="~ gap-2 items-center"><img src="/shared/images/vite-plus-logo.svg" w-5 /><span>ViteConf — <b>Vite+</b> official CLI announced</span></div>

  <div op50 font-mono>2025-12</div>
  <div i-ph-arrow-right-duotone op30 />
  <div flex="~ gap-2 items-center"><div i-logos-bun text-xl /><span><b>Anthropic acquires Bun</b> — the Claude company buys a JS runtime</span></div>

  <div op50 font-mono>2026-03</div>
  <div i-ph-arrow-right-duotone op30 />
  <div flex="~ gap-2 items-center"><div i-logos-vitejs text-xl /><span><b>Vite 8</b> ships — Rolldown becomes the default bundler</span></div>

  <div op50 font-mono text-orange>2026-06</div>
  <div i-ph-arrow-right-duotone op30 />
  <div text-orange flex="~ gap-2 items-center"><img src="/images/cloudflare.png" w-5 rounded-full /><span><b>Cloudflare acquires VoidZero</b></span></div>
</div>

<div mt-4 text-lg op75 flex="~ gap-2 items-center">
  <div i-ph-lightbulb-duotone text-xl text-amber />
  These tools used to be labors of love — <b>now platform giants pay to own them</b>
</div>

---
glow: bottom
---

# But first, the one thing that matters

<div mt-8 text-xl op75>
You finish a component, <code>git push</code> — then what?
</div>

<div mt-6 flex="~ gap-2 wrap items-center" text-lg>
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-magnifying-glass-duotone text-amber /> lint</div>
  <div i-ph-arrow-right-duotone op30 />
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-typescript-icon /> type check</div>
  <div i-ph-arrow-right-duotone op30 />
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-test-tube-duotone text-orange /> test</div>
  <div i-ph-arrow-right-duotone op30 />
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-package-duotone text-lime /> build</div>
  <div i-ph-arrow-right-duotone op30 />
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-eye-duotone text-purple /> preview</div>
</div>

<div mt-8 text-xl>
All that runs automatically — <b>that's infra</b>. <span op60>You use it every day; you only notice it when it's slow, or when it blocks your merge.</span>
</div>

---
layout: center
glow: full
---

<h1 important-text-4xl font-serif italic>Infra only ever solves two things</h1>

<div mt-12 flex="~ col gap-6" max-w-3xl mx-auto w-full>
  <div flex="~ gap-4 items-center" p-4 rounded-xl border="~ white/10" op55>
    <div i-ph-arrows-clockwise-duotone text-3xl />
    <div flex="~ col">
      <span text-2xl>Repetition</span>
      <span text-sm op75>automate the things you'd do every time — and forget</span>
    </div>
    <div ml-auto px3 py1 rounded-full border="~ white/15" text-sm>unchanged for decades</div>
  </div>

  <div flex="~ gap-4 items-center" p-4 rounded-xl bg-blue:10 border="~ blue/25">
    <div i-ph-shield-warning-duotone text-3xl text-blue />
    <div flex="~ col">
      <span text-2xl text-blue>Errors</span>
      <span text-sm op75>catch problems before they ship</span>
    </div>
    <div ml-auto px3 py1 rounded-full bg-blue:20 text-blue text-sm>flipping right now</div>
  </div>
</div>

<div v-click mt-10 text-center text-xl op85 font-serif italic>
  This whole talk is about the «Errors» axis — how it shifts from catching <b>humans</b> to catching <b text-blue>AI</b>
</div>

<div class="absolute bottom-4 right-8 text-xs op40">
  Ref: <a href="https://oldmo860617.medium.com/%E6%88%90%E7%82%BA%E5%89%8D%E7%AB%AF%E5%BB%BA%E7%AF%89%E5%B8%AB%E5%90%A7-%E9%80%8F%E9%81%8E-frontend-infra-%E7%82%BA%E5%89%8D%E7%AB%AF%E6%87%89%E7%94%A8%E6%89%93%E9%80%A0%E7%A9%A9%E5%81%A5%E4%B8%94%E9%AB%98%E6%95%88%E7%8E%87%E7%9A%84%E9%96%8B%E7%99%BC%E9%AB%94%E9%A9%97-21566b5c95d3" target="_blank" rel="noopener noreferrer">Kyle Mo《成為前端建築師吧》(2023)</a>
</div>

---
glow: bottom
---

# The map: three waves, one target

<div op50 text-sm mb-6>All three attack the same «Errors» axis — from a different layer</div>

<div mt-6 flex="~ col gap-4" max-w-3xl>
  <div p-4 rounded-xl bg-amber:10 border="~ amber/25" flex="~ gap-4 items-center">
    <div text-3xl font-bold text-amber w-8 text-center shrink-0>1</div>
    <div i-ph-arrows-clockwise-duotone text-2xl text-amber shrink-0 />
    <div flex-1><b text-amber>The Rust rewrite</b> <span op60 text-sm>— the native rewrites</span></div>
    <div op80>makes verification <b text-amber>cheap</b></div>
  </div>
  <div p-4 rounded-xl bg-lime:10 border="~ lime/25" flex="~ gap-4 items-center">
    <div text-3xl font-bold text-lime w-8 text-center shrink-0>2</div>
    <div i-ph-puzzle-piece-duotone text-2xl text-lime shrink-0 />
    <div flex-1><b text-lime>The great unification</b> <span op60 text-sm>— one toolchain</span></div>
    <div op80>runs verification as <b text-lime>guardrails</b></div>
  </div>
  <div p-4 rounded-xl bg-blue:10 border="~ blue/25" flex="~ gap-4 items-center">
    <div text-3xl font-bold text-blue w-8 text-center shrink-0>3</div>
    <div i-ph-robot-duotone text-2xl text-blue shrink-0 />
    <div flex-1><b text-blue>The AI shift</b> <span op60 text-sm>— the real battleground</span></div>
    <div op80>points verification at <b text-blue>AI</b></div>
  </div>
</div>

<div v-click mt-8 text-xl op85 font-serif italic text-center>
  Three waves, one word running through them — «<b text-gradient font-bold>verification</b>»
</div>

---
layout: center
glow: top
glowHue: 160
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>Cheap</span>
  <span font-hand text-3xl mt-2 text-amber op90 style="transform: rotate(-2deg)">Wave 1 · the Rust rewrite</span>
</div>

---
glow: right
---

# Ever waited on ESLint?

<div mt-6 max-w-2xl rounded-xl bg-hex-0d0f14 border="~ white/10" overflow-hidden>
  <div flex="~ gap-2 items-center" px-4 py-2 bg-hex-1a1d27>
    <div w-3 h-3 rounded-full bg-red />
    <div w-3 h-3 rounded-full bg-amber />
    <div w-3 h-3 rounded-full bg-green />
    <span op30 text-xs ml-2 font-mono>terminal — a mid-to-large project, daily life (illustrative)</span>
  </div>
  <div p-4 font-mono text-sm flex="~ col gap-1">
    <div><span op50>$ </span>npx eslint .</div>
    <div op40>⠹ Linting 2,847 files...</div>
    <div op40>⠼ Linting 2,847 files...　<span font-hand text-amber text-lg>← went to grab a coffee</span></div>
    <div>✔ Done in <span text-red font-bold>38.2s</span></div>
  </div>
</div>

<div mt-6 flex="~ gap-3 items-center" text-xl>
  <div i-ph-lightning-duotone text-2xl text-lime />
  <span>Same project, Oxlint: <b text-lime>milliseconds</b> <span op50 text-sm>(official benchmark 50–100x)</span></span>
</div>

<div mt-3 flex="~ gap-3 items-center" text-lg op80>
  <div i-ph-check-circle-duotone text-xl text-lime />
  <span>My own monorepo, <code>vp lint</code> (Oxlint): <b text-lime>0.39s</b>, whole workspace <span op50 text-sm>— real capture</span></span>
</div>

---
glow: left
---

# But the point isn't "fast" — it's "cheap"

<img src="/images/ts7-go-10x.webp" class="absolute right-14 bottom-6 w-56 rounded-xl border border-white/10 shadow-xl" style="transform: rotate(-2deg)" />

<div mt-6 grid="~ cols-[max-content_min-content_auto] items-center gap-x-10 gap-y-6" text-xl>
  <div flex="~ gap-2 items-center" text-amber>
    <div i-ph-magnifying-glass-duotone text-2xl />
    <span>Oxlint</span>
  </div>
  <div i-ph-arrow-right-duotone op50 />
  <div text-lg>replaces ESLint — <b>50–100x</b></div>

  <div flex="~ gap-2 items-center" text-orange>
    <div i-ph-package-duotone text-2xl />
    <span>Rolldown</span>
  </div>
  <div i-ph-arrow-right-duotone op50 />
  <div text-lg>replaces Rollup + esbuild — <b>10–30x</b> builds, <b>75%</b> less memory</div>

  <div flex="~ gap-2 items-center" text-blue>
    <div i-logos-typescript-icon text-2xl />
    <span>TypeScript 7</span>
  </div>
  <div i-ph-arrow-right-duotone op50 />
  <div text-lg>compiler rewritten in <b>Go</b> — <b>~10x</b> type-checks <span op50 text-sm>(GA 10 days ago!)</span></div>
</div>

<div mt-6 p-4 rounded-xl bg-amber:10 border="~ amber/25" text-lg>
  Running a full check used to be expensive — compute was <b>scarce</b>. After the native rewrites — <b>Rust, Go</b> — it's <b text-amber>almost free</b>.
</div>

<div v-click mt-4 text-xl op85 font-serif italic flex="~ gap-2 items-center">
  <div i-ph-question-duotone text-2xl op50 />
  So the freed-up compute — do you spend it on «<b>saving money</b>», or «<b text-blue>verifying more</b>»?
</div>

---
glow: bottom
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-ph-tree-structure-duotone text-2xl text-amber />
  <h1 important-text-3xl>Why is it this cheap?</h1>
</div>

<div mt-8 flex="~ col gap-4" text-xl>
  <div flex="~ gap-3 items-center">
    <span op50>Before</span>
    <div flex="~ gap-2 wrap">
      <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-babel /> Babel</div>
      <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-eslint /> ESLint</div>
      <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-prettier /> Prettier</div>
      <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-file-zip-duotone /> Terser</div>
    </div>
    <span op75>— each <b text-red>parses your code separately</b></span>
  </div>
  <div flex="~ gap-3 items-center">
    <span op50>Now</span>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center" text-amber><div i-ph-tree-structure-duotone /> Oxc</div>
    <span op75>— parse once, <b text-lime>one AST feeds every tool</b></span>
  </div>
</div>

<div mt-10 p-4 rounded-xl bg-amber:10 border="~ amber/25" text-lg>
Cheap doesn't come from "Rust faith" — it comes from <b>deleting duplicate work</b>. That's axis one: <b text-amber>kill repetition</b>.
</div>

---
glow: right
---

<div flex="~ gap-2 items-center" mb-4>
  <img src="/images/vize-logo-light.svg" h-8 />
  <h1 important-text-3xl>The honest gap: <span op80>Oxc reads only half your <code>.vue</code></span></h1>
</div>

<div text-lg op75 mb-8>Oxlint eats the <code>&lt;script&gt;</code> half — templates are beyond it. <img src="/images/ubugeeei.png" w-5 rounded-full inline-block mb--1 /> <b>ubugeeei</b> <span op50 text-sm>(Vue core)</span> is filling that gap with <b text-amber>vize</b>, the same idea rebuilt Vue-native:</div>

<div flex="~ gap-8 items-center justify-center" mt-6>
  <div p-5 rounded-xl bg-hex-8881 border="~ white/10" flex="~ col items-center gap-1">
    <div i-logos-vue text-3xl />
    <span font-mono text-lg>App.vue</span>
  </div>
  <div flex="~ col items-center gap-1">
    <div i-ph-arrow-right-duotone text-3xl op50 />
    <span op50 text-xs>reads it once</span>
  </div>
  <div p-5 rounded-xl bg-amber:10 border="~ amber/25" flex="~ col items-center gap-1">
    <img src="/images/vize-logo-light.svg" h-12 />
    <span op60 text-sm>one shared parser</span>
  </div>
  <div flex="~ col items-center gap-1">
    <div i-ph-arrow-right-duotone text-3xl op50 />
    <span op50 text-xs>feeds all five</span>
  </div>
  <div flex="~ col gap-2" text-base>
    <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-ph-gear-duotone text-lime /> compile</div>
    <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-ph-magnifying-glass-duotone text-lime /> lint</div>
    <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-ph-paint-brush-duotone text-lime /> format</div>
    <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-logos-typescript-icon /> type-check</div>
    <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-ph-chat-centered-text-duotone text-lime /> editor (LSP)</div>
  </div>
</div>

<div mt-10 p-4 rounded-xl bg-amber:10 border="~ amber/25" text-lg>
  One parse, five tools — <b text-amber>the same "kill repetition" trick</b>, rebuilt for <code>.vue</code>.
</div>

---
glow: left
---

<div flex="~ gap-2 items-center" mb-4>
  <img src="/images/vize-logo-light.svg" h-8 />
  <h1 important-text-3xl>vize's own numbers <span op60 text-2xl font-normal>— proof of "cheap, not fast"</span></h1>
</div>

<div grid="~ cols-4 gap-3" text-center mt-10>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10">
    <div text-4xl font-bold text-lime>209×</div>
    <div op60 text-sm mt-1>lint</div>
  </div>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10">
    <div text-4xl font-bold text-lime>55×</div>
    <div op60 text-sm mt-1>SFC compile</div>
  </div>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10">
    <div text-4xl font-bold text-lime>68×</div>
    <div op60 text-sm mt-1>format</div>
  </div>
  <div p-4 rounded-xl bg-hex-8882 border="~ white/10">
    <div text-4xl font-bold op60>1.1×</div>
    <div op60 text-sm mt-1>end-to-end build</div>
  </div>
</div>

<div mt-10 p-4 rounded-xl bg-amber:10 border="~ amber/25" text-lg>
  <div>Isolated checks: <b>50–200×</b>. Whole build: <b>~1×</b>.</div>
  <div mt-2>Checking didn't get "fast" — it got <b text-amber>cheap enough to run all the time</b>.</div>
</div>

<div mt-4 op50 text-sm>Still experimental · a serious personal OSS — already a testbed for VOICEVOX &amp; Misskey · numbers are the project's own benchmark (15k SFCs)</div>

---
layout: center
glow: top
glowHue: 220
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>Run it all</span>
  <span font-hand text-3xl mt-2 text-lime op90 style="transform: rotate(-2deg)">Wave 2 · the great unification</span>
</div>

---
glow: left
---

# The 2026 answer: one unified toolchain

<div mt-6 flex="~ col gap-5">
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10">
    <div flex="~ gap-2 items-center" text-lg>
      <img src="/images/evan-you.png" w-6 rounded-full />
      <b>VoidZero</b> <span op50 text-sm>— Evan You's company (2024) · the one Cloudflare just bought</span>
    </div>
    <div mt-3 flex="~ gap-2 items-center wrap" text-base>
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-tree-structure-duotone text-amber /> Oxc <span op40 text-xs>parse</span></div>
      <div i-ph-plus-duotone op30 />
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-magnifying-glass-duotone text-amber /> Oxlint <span op40 text-xs>lint</span></div>
      <div i-ph-plus-duotone op30 />
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-package-duotone text-orange /> Rolldown <span op40 text-xs>bundle</span></div>
      <div i-ph-plus-duotone op30 />
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-vitejs /> Vite <span op40 text-xs>dev</span></div>
      <div i-ph-plus-duotone op30 />
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-vitest /> Vitest <span op40 text-xs>test</span></div>
    </div>
    <div mt-2 op60 text-sm>one team, one core — born compatible, no glue</div>
  </div>

  <div p-4 rounded-xl bg-lime:10 border="~ lime/25">
    <div flex="~ gap-2 items-center" text-lg>
      <img src="/shared/images/vite-plus-logo.svg" w-6 />
      <b>Vite+</b> <span op50 text-sm>(vite-plus) — the CLI that puts it all under one command</span>
    </div>
    <div mt-3 font-mono text-base flex="~ gap-3 items-center wrap">
      <span text-lime>vp run</span><span op40>·</span><span text-lime>vp check</span><span op40>·</span><span text-lime>vp test</span>
      <span op60 font-sans text-sm ml-1>— one CLI for dev / build / test / lint / monorepo</span>
    </div>
  </div>
</div>

<div mt-6 op60 text-sm flex="~ gap-2 items-center">
  <div i-ph-users-three-duotone text-lime />
  <span>Beta since 2026-06 · MIT, free · <b>1,300+ public repos</b> already on it · Astro 7 ships on Vite 8, Nuxt 4 is next</span>
</div>

---
glow: left
---

# Heard these names — and felt the anxiety?

<div mt-10 flex="~ gap-3 wrap" text-xl>
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-simple-icons-nx op90 /> NX</div>
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-logos-turborepo-icon /> Turborepo</div>
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-simple-icons-lerna op90 /> Lerna</div>
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-ph-leaf-duotone text-green /> Bazel</div>
  <div op50>...</div>
</div>

<div mt-12 text-2xl op75 font-serif italic>
"Should I go learn a monorepo tool?"
</div>

<div mt-4 text-xl text-lime>
Decide after this section (spoiler: probably not)
</div>

---
glow: bottom
---

# Two camps, opposite philosophies

<div mt-6 flex="~ col gap-5">
  <div p-4 rounded-xl bg-purple:10 border="~ purple/25">
    <div flex="~ gap-2 items-center" text-lg>
      <div i-ph-buildings-duotone text-2xl text-purple />
      <b>The platform camp</b> <span op60 text-purple text-sm>"one platform runs everything"</span>
    </div>
    <div mt-3 flex="~ gap-2 wrap" text-base>
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-graph-duotone text-purple /> project graph</div>
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-lightning-duotone text-purple /> task caching</div>
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-magic-wand-duotone text-purple /> generators</div>
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-infinity-duotone text-purple /> CI integration</div>
    </div>
    <div mt-2 op60 text-sm>NX — its signature is <code>affected</code>: run only what changed, <b>skip whatever you can</b> (the scarce-compute mindset)</div>
  </div>

  <div p-4 rounded-xl bg-lime:10 border="~ lime/25">
    <div flex="~ gap-2 items-center" text-lg>
      <div i-ph-puzzle-piece-duotone text-2xl text-lime />
      <b>The composable camp</b> <span op60 text-lime text-sm>"small, composable, single-purpose tools"</span>
    </div>
    <div mt-3 flex="~ gap-2 wrap" text-base>
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-pnpm w-5 /> pnpm workspaces</div>
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-magnifying-glass-duotone text-amber /> Oxlint</div>
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><img src="/shared/images/vite-plus-logo.svg" w-5 /> vite-plus</div>
      <div px2 py1 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-ph-flow-arrow-duotone text-lime /> dependency-cruiser</div>
    </div>
    <div mt-2 op60 text-sm>vite-plus — <b>run everything</b>; cache replay makes the unchanged instant (the cheap-compute mindset)</div>
  </div>
</div>

---
glow: right
---

# The CI philosophy flips

<div mt-8 flex="~ col gap-6" text-xl max-w-3xl>
  <div flex="~ gap-4 items-center" op55>
    <div px3 py1 rounded-lg border="~ white/15" font-mono text-sm>Before</div>
    <span>compute expensive → <b>run less, skip, save</b> (NX affected)</span>
  </div>
  <div flex="~ gap-4 items-center">
    <div px3 py1 rounded-lg bg-lime:15 border="~ lime/25" font-mono text-sm text-lime>Now</div>
    <span>compute cheap → <b text-lime>run it all, verify everything, as guardrails</b> (vite-plus)</span>
  </div>
  <div op75 text-base flex="~ gap-2 items-center">
    <div i-ph-arrow-bend-down-right-duotone op50 />
    <span>The nerve to run it all = wave 1's <b>cheap, unified</b> toolchain — waves 1 &amp; 2 meet here</span>
  </div>
  <div flex="~ gap-2 items-center" text-base>
    <div i-ph-check-circle-duotone text-lime />
    <span text-lime>And the NX anxiety? Under ~10 packages, <b>pnpm + Oxlint is already enough</b> — you probably don't need it</span>
  </div>
</div>

<div mt-6 grid="~ cols-2 gap-4" max-w-4xl items-start>

<div>

```yaml
# pnpm-workspace.yaml — declare once,
# categorized deps = documentation
catalogs:
  build:
    vite: ^8.0.0
  lint:
    oxlint: ^1.0.0
```

</div>

<div rounded-xl bg-hex-0d0f14 border="~ white/10" overflow-hidden>
  <div flex="~ gap-2 items-center" px-4 py-2 bg-hex-1a1d27>
    <div w-3 h-3 rounded-full bg-red />
    <div w-3 h-3 rounded-full bg-amber />
    <div w-3 h-3 rounded-full bg-green />
    <span op30 text-xs ml-2 font-mono>2nd run — real capture, my repo</span>
  </div>
  <div p-4 font-mono text-sm flex="~ col gap-1">
    <div><span op50>$ </span>vp run utils#build</div>
    <div op60>✔ Build complete in 112ms</div>
    <div text-lime>vp run: <b>cache hit</b>, 695ms saved.</div>
  </div>
</div>

</div>

---
glow: right
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-ph-tree-structure-duotone text-2xl text-lime />
  <h1 important-text-3xl>The philosophy, running in the wild</h1>
</div>
<div op50 text-sm mb-8>I tore down vite-plus's own repo — all 20 workflows of it</div>

<div grid="~ cols-2 gap-4" max-w-4xl mx-auto>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ gap-4 items-start">
    <div text-4xl font-bold text-lime w-10 text-center leading-none mt-1>7</div>
    <div flex="~ col gap-1">
      <div flex="~ gap-2 items-center"><div i-ph-shield-check-duotone text-lime /> <b>Verify</b></div>
      <span op55 text-sm leading-snug>ci · e2e · security · docker · standalone-install · vp-create · binary size on every PR</span>
    </div>
  </div>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ gap-4 items-start">
    <div text-4xl font-bold text-amber w-10 text-center leading-none mt-1>3</div>
    <div flex="~ col gap-1">
      <div flex="~ gap-2 items-center"><div i-ph-package-duotone text-amber /> <b>Dependencies</b></div>
      <span op55 text-sm leading-snug>upgrade-deps · renovate-lockfiles · node-release-keys</span>
    </div>
  </div>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ gap-4 items-start">
    <div text-4xl font-bold text-blue w-10 text-center leading-none mt-1>1</div>
    <div flex="~ col gap-1">
      <div flex="~ gap-2 items-center"><div i-ph-lightning-duotone text-blue /> <b>Cache</b></div>
      <span op55 text-sm leading-snug>cleanup-cache — a whole workflow just for cache hygiene</span>
    </div>
  </div>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ gap-4 items-start">
    <div text-4xl font-bold text-purple w-10 text-center leading-none mt-1>9</div>
    <div flex="~ col gap-1">
      <div flex="~ gap-2 items-center"><div i-ph-rocket-launch-duotone text-purple /> <b>Release · docs · community</b></div>
      <span op55 text-sm leading-snug>prepare → release → build → human approval · docs deploys · issue bots</span>
    </div>
  </div>
</div>

<div v-click mt-5 p-4 rounded-xl bg-lime:10 border="~ lime/25" text-lg max-w-4xl mx-auto>
  <b>20 workflows.</b> This density used to be unaffordable — <b text-lime>oxc made verification cheap enough to check everything</b>.
</div>

<div class="absolute bottom-4 right-8 text-xs op40">
  Ref: <a href="https://github.com/voidzero-dev/vite-plus/tree/main/.github/workflows" target="_blank" rel="noopener noreferrer">vite-plus workflows</a>
</div>

---
glow: right
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-logos-pnpm text-2xl />
  <h1 important-text-3xl>The quiet backbone: pnpm</h1>
</div>

<div mt-6 flex="~ col gap-4" text-lg>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ gap-3 items-center">
    <div i-ph-book-bookmark-duotone text-2xl text-amber shrink-0 />
    <div><b>Catalogs</b> — declare every version <b>once</b>, the whole workspace follows</div>
  </div>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ gap-3 items-center">
    <div i-ph-lock-key-duotone text-2xl text-lime shrink-0 />
    <div><b>Store + symlinks</b> — one real copy on disk; undeclared deps are <b>physically un-importable</b> <span op50 text-sm>(next slide)</span></div>
  </div>
  <div p-4 rounded-xl bg-blue:10 border="~ blue/25" flex="~ gap-3 items-center">
    <div i-ph-shield-check-duotone text-2xl text-blue shrink-0 />
    <div><b>pnpm 11</b> <span op50 text-sm>(2026-04)</span> — security <b>by default</b>: new packages quarantined <b text-blue>24h</b>, exotic sub-deps blocked</div>
  </div>
</div>

<div mt-6 p-4 rounded-xl bg-amber:10 border="~ amber/25" text-lg>
  Your package manager now ships <b text-amber>guardrails as defaults</b> — remember that 24h quarantine, it comes back in wave 3.
</div>

---
glow: left
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-ph-lock-key-duotone text-2xl text-lime />
  <h1 important-text-3xl>How boundaries get "physically" enforced</h1>
</div>

<div mt-6 max-w-3xl rounded-xl bg-hex-0d0f14 border="~ white/10" overflow-hidden>
  <div flex="~ gap-2 items-center" px-4 py-2 bg-hex-1a1d27>
    <div w-3 h-3 rounded-full bg-red />
    <div w-3 h-3 rounded-full bg-amber />
    <div w-3 h-3 rounded-full bg-green />
    <span op30 text-xs ml-2 font-mono>real capture, my repo</span>
  </div>
  <div p-4 font-mono text-sm flex="~ col gap-1">
    <div><span op50>$ </span>ls -la node_modules <span op40>| grep '^l'</span></div>
    <div op75>lrwxr-xr-x  vite-plus <span text-amber font-bold>→</span> .pnpm/vite-plus@0.2.2_…/node_modules/vite-plus</div>
    <div mt-2><span op50>$ </span>ls node_modules/.pnpm <span op40>| head -3</span></div>
    <div op60>@antfu+install-pkg@1.1.0</div>
    <div op60>@babel+core@7.29.0</div>
    <div op60>…　<span font-hand text-amber text-base>← one real copy in the store, everything else is a symlink</span></div>
  </div>
</div>

<div mt-8 p-4 rounded-xl bg-lime:10 border="~ lime/25" text-lg flex="~ gap-3 items-center">
  <div i-ph-lock-key-duotone text-2xl text-lime />
  <span>Boundaries aren't linted — they're <b>enforced by the filesystem layout</b>. Phantom dependencies can't happen.</span>
</div>

---
layout: center
glow: top
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>Catch AI</span>
  <span font-hand text-3xl mt-2 text-blue op90 style="transform: rotate(-2deg)">Wave 3 · the AI shift</span>
</div>

---
glow: right
---

# Production's solved — now what?

<div mt-8 flex="~ gap-3 items-center" text-lg op75>
  <div px2 py1 bg-amber:15 rounded text-amber>Wave 1 · cheap</div>
  <div px2 py1 bg-lime:15 rounded text-lime>Wave 2 · run-it-all</div>
  <span op60>= writing, bundling, checking — fast, cheap, unified</span>
</div>

<div mt-8 text-2xl flex="~ gap-3 items-center">
  <div i-ph-arrow-bend-down-right-duotone text-2xl op50 />
  <span>The bottleneck moved to <b text-blue>"verification"</b> — and what pushed it there is AI</span>
</div>

<div mt-10 max-w-3xl>
  <div text-xl font-serif italic op85 leading-relaxed>
  AI agents rarely fail from reasoning limits —<br>
  they fail when the <span text-blue>environment is ambiguous</span>.
  </div>
  <div op50 text-sm mt-3>— "harness engineering", the 2026 discipline</div>
</div>

---
glow: left
---

# Where the bottleneck lands: three capabilities

<div mt-8 flex="~ col gap-4" max-w-3xl>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ gap-3 items-center">
    <div i-ph-rocket-duotone text-2xl text-lime shrink-0 />
    <div flex-1><b>Production</b> <span op60 text-sm>— code, design, tests</span></div>
    <div px3 py1 rounded-full bg-lime:15 text-lime text-sm>exploding</div>
  </div>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ gap-3 items-center">
    <div i-ph-eye-duotone text-2xl text-amber shrink-0 />
    <div flex-1><b>Review</b> <span op60 text-sm>— is the architecture intact?</span></div>
    <div px3 py1 rounded-full bg-amber:15 text-amber text-sm>under pressure</div>
  </div>
  <div p-4 rounded-xl bg-blue:10 border="~ blue/25" flex="~ gap-3 items-center">
    <div i-ph-seal-check-duotone text-2xl text-blue shrink-0 />
    <div flex-1><b text-blue>Validation</b> <span op60 text-sm>— are the semantics &amp; risk boundaries right?</span></div>
    <div px3 py1 rounded-full bg-blue:20 text-blue text-sm>the new bottleneck</div>
  </div>
</div>

<div v-click mt-8 text-xl op85 font-serif italic>
  Responsibility shifts: from <b>"who wrote it"</b> to <b text-blue>"who can confirm it's right"</b>
</div>

<div mt-3 op50 text-sm>— Fortes Huang, on AI adoption in engineering teams</div>

---
glow: bottom
---

# Human errors vs AI errors

<div mt-8 grid="~ cols-[max-content_1fr_1fr] gap-x-10 gap-y-6 items-center" text-lg max-w-4xl>
  <div></div>
  <div op50 text-center>Human</div>
  <div text-blue text-center>AI</div>

  <div op60>Volume</div>
  <div op80>low (slow to write)</div>
  <div text-blue><b>floods</b> (sprayed out)</div>

  <div op60>Looks</div>
  <div op80>often visibly off</div>
  <div text-blue><b>all look correct</b></div>

  <div op60>Your gut</div>
  <div op80>you wrote it, you sense it</div>
  <div text-blue><b>you didn't write it — no instinct</b></div>
</div>

<div mt-10 p-4 rounded-xl bg-red:10 border="~ red/25" text-xl flex="~ gap-3 items-center">
  <div i-ph-hand-palm-duotone text-2xl text-red />
  <span>High volume + looks right + not yours → <b text-red>human eyeball review can't keep up</b></span>
</div>

---
glow: left
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-ph-arrows-clockwise-duotone text-2xl text-amber />
  <h1 important-text-3xl>Fuzzy boundaries hurt humans and AI alike</h1>
</div>

<svg class="absolute right-10 bottom-12 w-80" viewBox="0 0 300 190" fill="none">
  <rect x="20" y="60" width="90" height="44" rx="10" stroke="#fbbf24" stroke-width="2" fill="#fbbf2415" />
  <text x="65" y="87" text-anchor="middle" fill="#fbbf24" style="font:15px 'JetBrains Mono', monospace">a.ts</text>
  <rect x="190" y="60" width="90" height="44" rx="10" stroke="#fbbf24" stroke-width="2" fill="#fbbf2415" />
  <text x="235" y="87" text-anchor="middle" fill="#fbbf24" style="font:15px 'JetBrains Mono', monospace">b.ts</text>
  <path d="M 112 66 C 140 40, 160 40, 188 66" stroke="#fb923c" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow)" />
  <path d="M 188 98 C 160 124, 140 124, 112 98" stroke="#fb923c" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow)" />
  <text x="150" y="36" text-anchor="middle" fill="#fb923c" style="font:17px Caveat, cursive">import</text>
  <text x="150" y="142" text-anchor="middle" fill="#fb923c" style="font:17px Caveat, cursive">import ?!</text>
  <text x="150" y="176" text-anchor="middle" fill="#8892a4" style="font:16px Caveat, cursive">bundler: who comes first…? keep it all 😵</text>
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" stroke="#fb923c" stroke-width="1.5" fill="none" />
    </marker>
  </defs>
</svg>

<div grid="~ cols-[max-content_min-content_auto] items-center gap-x-8 gap-y-7" py8 text-lg max-w-3xl>
  <div flex="~ gap-2 items-center" text-amber>
    <div i-ph-arrows-clockwise-duotone text-2xl />
    <span>Circular deps</span>
  </div>
  <div i-ph-arrow-right-duotone op50 />
  <div>bundler can't tell if it's used → <b>keeps everything</b></div>

  <div flex="~ gap-2 items-center" text-orange>
    <div i-ph-package-duotone text-2xl />
    <span>Chunk bloat</span>
  </div>
  <div i-ph-arrow-right-duotone op50 />
  <div>parse time up → <b>LCP degrades</b></div>

  <div flex="~ gap-2 items-center" text-red>
    <div i-ph-warning-duotone text-2xl />
    <span>Same root cause</span>
  </div>
  <div i-ph-arrow-right-duotone op50 />
  <div>hurts bundle, performance, and <b text-blue>AI's judgment</b> alike</div>
</div>

<div mt-2 op75 text-sm font-serif italic>← remember wave 1? <b>Clean structure is what lets machines help.</b></div>

---
glow: bottom
---

# The fix: turn guardrails into a paved road

<div mt-10 flex="~ gap-2 items-center justify-center wrap" text-lg>
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-ph-robot-duotone text-blue /> AI edits code</div>
  <div i-ph-arrow-right-duotone op50 />
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-ph-magnifying-glass-duotone text-amber /> Oxlint</div>
  <div i-ph-arrow-right-duotone op50 />
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-logos-typescript-icon /> TS</div>
  <div i-ph-arrow-right-duotone op50 />
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-ph-package-duotone text-lime /> build</div>
  <div i-ph-arrow-right-duotone op50 />
  <div px3 py1 bg-hex-8882 rounded flex="~ gap-2 items-center"><div i-ph-check-circle-duotone text-purple /> CI</div>
</div>

<div mt-12 flex="~ col gap-4" text-lg>
  <div flex="~ gap-3 items-center">
    <div i-ph-road-horizon-duotone text-2xl text-lime />
    <span>The industry calls it an <b>IDP (Internal Developer Platform)</b> — plainly: <b text-lime>guardrails as a self-serve paved road</b></span>
  </div>
  <div flex="~ gap-3 items-center">
    <div i-ph-file-text-duotone text-2xl text-blue />
    <span><code>CLAUDE.md</code> / <code>AGENTS.md</code> = rules written in a format <b>AI understands</b></span>
  </div>
  <div flex="~ gap-3 items-center">
    <div i-ph-eye-duotone text-2xl text-lime />
    <span>Guardrails must be <b>transparent</b> — Oxlint ships <b text-lime>AI-readable structured diagnostics</b> so AI fixes as it writes</span>
  </div>
  <div flex="~ gap-3 items-center">
    <div i-ph-scales-duotone text-2xl text-amber />
    <span>Not just AI — <b>Shai-Hulud</b> hit <b>500+</b> packages · the EU's <b>CRA</b> demands verifiable supply chains <span op50 text-sm>— that pnpm 24h quarantine? this is why</span></span>
  </div>
</div>

---
glow: left
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-ph-shield-check-duotone text-2xl text-amber />
  <h1 important-text-3xl>security.yml — guardrails as defaults</h1>
</div>
<div op50 text-sm mb-4>the real file, trimmed — three defenses hiding in 12 lines</div>

<div grid="~ cols-[1.2fr_1fr] gap-6" items-center>

```yaml {3,5,10,12,13}
name: Security Analysis
on:
  pull_request:            # every PR, not weekly

permissions: {}            # zero by default

jobs:
  security:
    steps:
      - uses: actions/checkout@9c091bb… # SHA-pinned, never a tag
        with:
          repository: rolldown/rolldown # audits upstream too!
      - uses: oxc-project/security-action@2ac862d…
```

<div flex="~ col gap-5" text-base>
  <div flex="~ gap-3 items-center">
    <div i-ph-scan-duotone text-2xl text-amber shrink-0 />
    <span>Supply-chain scan on <b>every PR</b> — oxc's own <code>security-action</code></span>
  </div>
  <div flex="~ gap-3 items-center">
    <div i-ph-lock-key-duotone text-2xl text-amber shrink-0 />
    <span><code>permissions: {}</code> + <b>commit-SHA pins</b> — hijacked tags can't reach you</span>
  </div>
  <div flex="~ gap-3 items-center">
    <div i-ph-git-fork-duotone text-2xl text-amber shrink-0 />
    <span>Even the <b>pinned upstream Rolldown</b> gets audited — same ruler for suppliers</span>
  </div>
</div>

</div>

<div v-click mt-5 p-4 rounded-xl bg-amber:10 border="~ amber/25" text-lg>
  Remember Shai-Hulud (500+ packages)? These are the defenses — <b text-amber>on by default</b>, not patched in after the fire.
</div>

---
layout: center
glow: top
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>In practice</span>
  <span font-hand text-3xl mt-2 op75 style="transform: rotate(-2deg)">not just theory</span>
</div>

---
glow: bottom
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-ph-robot-duotone text-2xl text-blue />
  <h1 important-text-3xl>Case 1: the official loop — upgrade-deps.yml</h1>
</div>
<div op50 text-sm mb-4>nightly cron · bump <b>every</b> npm + cargo dep → build → <b text-blue>Claude Code repairs it</b></div>

<div grid="~ cols-[1fr_1.4fr] gap-10 items-center" mt-8>

<div flex="~ col gap-4">
  <div p-4 rounded-xl bg-hex-1a1d27 border="~ white/10" font-mono text-base>
    <span op50># the prompt lives in the yaml:</span><br>
    "bring the project back to a<br><span text-lime>fully green state</span>"
  </div>
  <div op50 text-sm>build · test · snapshot all pass before the PR opens</div>
</div>

<svg class="w-full" viewBox="0 0 340 200" fill="none">
  <rect x="10" y="20" width="120" height="40" rx="10" stroke="#fbbf24" stroke-width="2" fill="rgba(251,191,36,0.08)" />
  <text x="70" y="45" text-anchor="middle" fill="#fbbf24" style="font:13px 'JetBrains Mono', monospace">00:00 bump all</text>
  <rect x="210" y="20" width="120" height="40" rx="10" stroke="#ef4444" stroke-width="2" fill="rgba(239,68,68,0.08)" />
  <text x="270" y="45" text-anchor="middle" fill="#ef4444" style="font:13px 'JetBrains Mono', monospace">build breaks</text>
  <rect x="210" y="130" width="120" height="40" rx="10" stroke="#60a5fa" stroke-width="2" fill="rgba(96,165,250,0.08)" />
  <text x="270" y="155" text-anchor="middle" fill="#60a5fa" style="font:13px 'JetBrains Mono', monospace">Claude fixes</text>
  <rect x="10" y="130" width="120" height="40" rx="10" stroke="#4ade80" stroke-width="2" fill="rgba(74,222,128,0.08)" />
  <text x="70" y="155" text-anchor="middle" fill="#4ade80" style="font:13px 'JetBrains Mono', monospace">green → PR</text>
  <path d="M 132 40 L 206 40" stroke="#fb923c" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow2)" />
  <path d="M 270 62 L 270 126" stroke="#fb923c" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow2)" />
  <path d="M 206 150 L 134 150" stroke="#fb923c" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow2)" />
  <text x="170" y="105" text-anchor="middle" fill="#8892a4" style="font:16px Caveat, cursive">every single night</text>
  <text x="70" y="192" text-anchor="middle" fill="#8892a4" style="font:15px Caveat, cursive">human's final look</text>
  <defs>
    <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" stroke="#fb923c" stroke-width="1.5" fill="none" />
    </marker>
  </defs>
</svg>

</div>

---
glow: right
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-ph-robot-duotone text-2xl text-blue />
  <h1 important-text-3xl>Claude, twice — and a human, once</h1>
</div>
<div op50 text-sm mb-8>inside the nightly loop</div>

<div flex="~ col gap-6" text-xl max-w-4xl>
  <div flex="~ gap-4 items-center">
    <div i-ph-wrench-duotone text-3xl text-blue shrink-0 />
    <span>Claude appears <b>twice</b> — repairer <span op60>(fix the build)</span> + scribe <span op60>(read the diff, write the PR)</span></span>
  </div>
  <div flex="~ gap-4 items-center">
    <div i-ph-file-text-duotone text-3xl text-blue shrink-0 />
    <span>Step outcomes injected into the prompt · agent follows <code>.claude/agents/</code> — <b>rules translated for AI</b></span>
  </div>
  <div flex="~ gap-4 items-center">
    <div i-ph-hand-palm-duotone text-3xl text-blue shrink-0 />
    <span>And the release chain keeps a <b>human-approval gate</b></span>
  </div>
</div>

<div v-click mt-10 p-4 rounded-xl bg-blue:10 border="~ blue/25" text-xl font-serif italic text-center max-w-4xl>
  "AI produces, guardrails catch" — <b>the official repo lives this daily.</b> Next: my own version.
</div>

---
glow: bottom
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-ph-git-pull-request-duotone text-2xl text-blue />
  <h1 important-text-3xl>Case 2: my loop — backend-driven code-gen</h1>
</div>
<div op50 text-sm mb-6>the same loop — theirs fixes deps nightly, <b op100>mine syncs API types</b> on every backend change</div>

<div text-lg op75 mb-8 max-w-4xl>The pain: backend changes an API, and the frontend's types, interfaces, and call sites all need manual fixing — repetitive, and it often blows up only in production.</div>

<div grid="~ cols-3 gap-4" text-base>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ col gap-2">
    <div i-ph-git-pull-request-duotone text-2xl op60 />
    <span>backend updates → <b>auto-opens an MR</b> on the frontend repo</span>
  </div>
  <div p-4 rounded-xl bg-hex-8881 border="~ white/10" flex="~ col gap-2">
    <div i-ph-brackets-curly-duotone text-2xl op60 />
    <span><b>auto-generates</b> types via Hey API <span op50 text-sm>(deterministic — same spec in, same code out)</span></span>
  </div>
  <div p-4 rounded-xl bg-blue:10 border="~ blue/25" flex="~ col gap-2">
    <div i-ph-robot-duotone text-2xl text-blue />
    <span><b text-blue>AI figures out</b> what the frontend must change, puts it in the MR</span>
  </div>
</div>

<div mt-8 flex="~ gap-3 items-center justify-center" op75 text-sm>
  <div i-ph-video-duotone /> [pre-recorded gif: backend commit → frontend MR opens, full flow]
</div>

---
glow: right
---

<div flex="~ gap-2 items-center" mb-4>
  <div i-logos-typescript-icon text-2xl />
  <h1 important-text-3xl>What makes it hold: the type chain</h1>
</div>
<div op50 text-sm mb-6>a UI-model boundary turns "did we miss a spot?" into a <b>compile error</b></div>

<svg class="mx-auto mt-2 w-190" viewBox="0 0 760 130" fill="none">
  <rect x="10" y="35" width="140" height="44" rx="10" stroke="#fbbf24" stroke-width="2" fill="rgba(251,191,36,0.08)" />
  <text x="80" y="62" text-anchor="middle" fill="#fbbf24" style="font:13px 'JetBrains Mono', monospace">openapi.yaml</text>
  <rect x="210" y="35" width="150" height="44" rx="10" stroke="#ef4444" stroke-width="2" fill="rgba(239,68,68,0.06)" />
  <text x="285" y="62" text-anchor="middle" fill="#ef4444" style="font:13px 'JetBrains Mono', monospace">generated raw</text>
  <rect x="420" y="35" width="140" height="44" rx="10" stroke="#4ade80" stroke-width="2" fill="rgba(74,222,128,0.08)" />
  <text x="490" y="62" text-anchor="middle" fill="#4ade80" style="font:13px 'JetBrains Mono', monospace">UI model</text>
  <rect x="620" y="35" width="130" height="44" rx="10" stroke="#60a5fa" stroke-width="2" fill="rgba(96,165,250,0.08)" />
  <text x="685" y="62" text-anchor="middle" fill="#60a5fa" style="font:13px 'JetBrains Mono', monospace">components</text>
  <path d="M 152 57 L 206 57" stroke="#fb923c" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow3)" />
  <path d="M 362 57 L 416 57" stroke="#fb923c" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow3)" />
  <path d="M 562 57 L 616 57" stroke="#fb923c" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow3)" />
  <text x="285" y="22" text-anchor="middle" fill="#8892a4" style="font:15px Caveat, cursive">no component touches this</text>
  <text x="490" y="110" text-anchor="middle" fill="#8892a4" style="font:15px Caveat, cursive">the only door — one lint rule guards it</text>
  <defs>
    <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" stroke="#fb923c" stroke-width="1.5" fill="none" />
    </marker>
  </defs>
</svg>

<div mt-6 flex="~ col gap-3" text-lg>
  <div flex="~ gap-2 items-center"><div i-ph-arrows-down-up-duotone text-lime shrink-0 /> <span>spec changes → raw moves → model reds → affected components red — <b text-lime>you can't miss a spot</b></span></div>
  <div flex="~ gap-2 items-center"><div i-ph-robot-duotone text-blue shrink-0 /> <span>types can't see <b>semantic</b> changes — that's where AI + tests + <b text-blue>a human's final look</b> come in</span></div>
</div>

---
layout: center
glow: full
---

<div text-center flex="~ col gap-8 items-center">
  <div flex="~ gap-3 wrap justify-center">
    <div px4 py1 rounded-full border="~ white/15" text-sm op75>kill repetition — auto MR · deterministic types</div>
    <div px4 py1 rounded-full bg-blue:15 text-blue text-sm>catch AI's errors — type chain · guardrails · a final look</div>
  </div>
  <div text-5xl font-serif italic leading-snug>AI produces —<br><span text-gradient font-bold>my infra catches.</span></div>
  <div v-click op60 text-xl font-serif italic>hands-off where the chain holds · human eyes on high-risk semantics</div>
</div>

---
layout: center
glow: top
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>Wrap-up</span>
  <span font-hand text-3xl mt-2 op75 style="transform: rotate(-2deg)">one diagram, one line</span>
</div>

---
glow: right
---

# Not just my classification — the data agrees

<div grid="~ cols-[1.3fr_1fr] gap-8 items-center" mt-6>

<img src="/images/stateofjs-2025.webp" rounded-xl border="~ white/10" shadow-xl />

<div flex="~ col gap-5">
  <div p-4 rounded-xl bg-lime:10 border="~ lime/25">
    <div text-4xl font-bold text-lime>1% → 10%</div>
    <div op70 mt-1>Rolldown usage, in a single year — the Rust wave is real</div>
  </div>
  <div p-4 rounded-xl bg-blue:10 border="~ blue/25">
    <div text-4xl font-bold text-blue>~29%</div>
    <div op70 mt-1>of respondents' code is AI-generated — up ~50% YoY</div>
  </div>
</div>

</div>

<div class="absolute bottom-4 right-8 text-xs op40">
  Ref: <a href="https://2025.stateofjs.com/en-US/libraries/build-tools/" target="_blank" rel="noopener noreferrer">State of JS 2025 · Build Tools</a>
</div>

---
glow: full
---

# Takeaways — for the feature-focused you

<div mt-8 flex="~ col gap-6">
  <div flex="~ gap-4 items-center" text-xl>
    <div i-ph-smiley-duotone text-2xl text-lime shrink-0 />
    <span><b>Don't panic</b> — the half you already know (automating repetition) hasn't changed</span>
  </div>
  <div flex="~ gap-4 items-center" text-xl>
    <div i-ph-compass-duotone text-2xl text-amber shrink-0 />
    <span><b>See the direction</b> — what's flipping is only the «source» of errors: human → AI</span>
  </div>
  <div flex="~ gap-4 items-center" text-xl>
    <div i-ph-shield-check-duotone text-2xl text-blue shrink-0 />
    <span><b>Rethink guardrails</b> — they're not in your way; they're the only reason you can <b text-blue>trust AI's half of the code</b></span>
  </div>
</div>

---
layout: center
glow: full
---

<div text-center font-serif italic leading-loose>
  <div text-xl op60>Infra has always done two things: automate repetition, catch errors.</div>
  <div text-2xl mt-5>Repetition hasn't changed. What changed is —</div>
  <div text-3xl mt-5>we went from catching <span op70>human</span> errors to catching <span text-gradient font-bold>AI</span> errors.</div>
  <div v-click text-xl mt-6 op75>And AI makes too many for anything but machines to catch.</div>
</div>

---
layout: center
glow: top
---

<div flex="~ gap-16 items-center">
  <div flex="~ col">
    <h1 font-serif italic>Thank You!</h1>
    <div mt-10 w-min flex="~ gap-1" items-center>
      <div i-ri-user-3-line op50 ma text-xl />
      <div><a href="https://www.michaello.me" target="_blank" class="border-none! font-300">michaello.me</a></div>
      <div i-ri-github-line op50 ma text-xl ml4 />
      <div ws-nowrap><a href="https://github.com/Michael0520" target="_blank" class="border-none! font-300">Michael0520</a></div>
    </div>
  </div>
  <div flex="~ col gap-3 items-center">
    <div bg-white p-3 rounded-xl shadow-2xl>
      <img src="/images/qr-slides.png" w-36 />
    </div>
    <span op50 text-sm>michaello.me/slides/v-taiwan-2026</span>
  </div>
</div>


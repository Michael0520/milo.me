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

<!--
各位好，歡迎來到 v-taiwan，我是 Michael。

今天分享的主題是是「Modern Frontend Infra」，
這場真正想講的，是副標那件事——真正的難題是 AI 的「驗證」，這句話現在聽起來可能有點抽象。

2026 是 AI native 的一年，許多的事情都正在被顛覆中
那2026 年的前端 Infra 長什麼樣、又為什麼會變成現在這樣，在這篇簡報內會進行分享。
-->

---
layout: intro
class: pl-25
glowSeed: 14
---

<PersonalIntro />

<!--
快速自我介紹一下。我是 Michael，平常大多在寫 web，最著迷的領域是 infra 跟 DX 優化，建置架構以及工具來解決問題這件事，其實我不太喜歡重複造輪子，因為我是很懶惰的一個人，所以我喜歡透過 coding 讓明天的我可以輕鬆一點，也因為這樣所以我在 infra & DX 上的專注度多了一些。

另外我也是 Code for Taiwan 的成員。
-->

---
layout: center
glow: top
glowHue: 280
---

<div flex="~ col gap-8 items-center">
  <img src="/shared/images/cod4tw-avatar-transparent.png" w-40 />
  <h1 font-serif text-5xl>Code for Taiwan</h1>
</div>

<!--
順帶介紹一下我參與的社群——Code for Taiwan，做的事就一句話：普及程式思維，讓大家都能用程式來思考、解決問題。
在 AI、no-code、low-code 這麼發達的時代，很多人能快速做出東西，卻不清楚自己到底在開發什麼——就像在拉角子老虎機、碰運氣。我們想改變這件事，讓你投入開發時是帶著思維邏輯，而不是賭運氣。
所以不管你是剛開始的小白工程師、PM、還是設計師，想學新知都能在這裡找到同伴，一起學習成長。就像我們的名字——Code for Taiwan，願景是讓台灣每個人都能寫出好的 Code。想認識更多，掃畫面的 QR。
-->

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

<!--
另外幫忙宣傳一個活動——台日工程師交流之夜。
8/9 我們的日本夥伴 Engineer Cafe、還有一群來自福岡的工程師，會在 COSCUP 有一整個 track 的交流；不只如此，晚上還辦了這場台日工程師交流之夜，這已經是我們第三年共同舉辦的交流晚宴了。
對日本工程師文化有興趣的都歡迎報名——不會日文沒關係、不會英文也沒關係，你還有程式語言可以用（HTML/CSS 不算 😜）。時間是 8/9 週日晚上七點，如果有去 COSCUP 的可以一起去；地點在 Tempo House；費用只要 100 元——不要懷疑，是福岡市政府贊助的。因場地限制，人數額滿為止，掃畫面的 QR 報名。
-->

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

<!--
在正式開始前，先花十秒給你今天的地圖。
先用「Inflection」暖場，講為什麼 2026 是個轉折點；接著三波——第一波 Rust 化「便宜」、第二波 統一化「全部跑」、第三波 AI 化，也是今天最重要、所有線收攏的一波；最後是我自己的實踐，兩個迴圈。全程沒有 live demo，問題留到最後 Q&A。好，開始。
-->

---
layout: center
glow: top
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>Inflection</span>
  <span font-hand text-3xl mt-2 op75 style="transform: rotate(-2deg)">2026, frontend infra</span>
</div>

<!--
好，進入正題。第一章我叫它「Inflection」——轉折點。因為 2026 年的前端 infra，正好就站在這個點上。
我先從一條新聞講起。
〔開場 7 min〕
-->

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

<!--
這是上個月、六月初的新聞：Cloudflare 把 VoidZero 收購了。
VoidZero 是誰？就是 Vue 跟 Vite 的作者尤雨溪開的公司，專門做下一代的前端工具鏈。也就是說——寫 Vue 的朋友，你每天 npm run dev 跑的那個 Vite——它背後的公司，剛剛被 Cloudflare 買走了。
卡片上還有一行關鍵的字：所有工具照樣開源——所以先別緊張。但畫面下面這個問題還是來了：這對你的 vite.config.ts，到底意味著什麼？是好事還是壞事？先不急著回答——因為這不是一條孤立的新聞。
-->

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

<!--
我把最近兩年的關鍵事件排成一條線，大家順著看下來。
2024 年 10 月，尤雨溪在 ViteConf 宣布成立 VoidZero，要做一整套統一的工具鏈；2025 年 10 月，官方的 Vite+ CLI 亮相；2025 年 12 月，Anthropic——對，就是做 Claude 的那家 AI 公司——把 Bun 買下來了；2026 年 3 月，Vite 8 正式發布，Rolldown 變成預設打包器；然後就是上個月，Cloudflare 收購 VoidZero。
〔停一拍〕看到重點了嗎？半年內，兩樁大收購。以前這些打包器、linter、runtime 是不會被收購的——它們就是開源專案，作者用愛發電。但現在，平台巨頭開始花錢搶著「擁有」它們——就像最下面那行字說的：以前是工程師用愛發電的作品，現在變成巨頭花錢買下來。
這代表前端的「地基」正在大洗牌。而今天這場，就是幫大家畫一張洗牌之後的新地圖。
-->

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

<!--
在進趨勢之前，我先把「infra 到底是什麼」講清楚，因為我猜很多人心裡在想：那不是平台團隊的事嗎，干我什麼事？
我換個方式問你：你今天寫完一個元件，git push 上去——然後呢？
看畫面這一排：lint 幫你檢查風格、type check 幫你看型別、自動跑測試、打包、最後開一個 preview 網址讓同事 review。這一整串，全部是自動跑起來的。
那一坨，就是 infra。你每天都在用它——只是你通常只有在它「很慢」、或者「擋住你不給 merge」的時候，才會注意到它的存在。
-->

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

<!--
這張最重要，整場記住這張就好。
前端 Infra 從頭到尾只解決兩件事。上面「重複性」——每次都要做、很煩又容易漏的事，交給機器；右邊標籤寫著幾十年沒變，你本來就懂。
下面「攔錯誤」——問題進正式環境前先擋下來；它的標籤是「正在反轉」。
〔click〕今天整場就在講這條軸怎麼反轉：從攔「人」的錯，變成攔「AI」的錯——這句一路用到最後。
接下來用三波浪潮：Rust 化、統一化、AI 化，帶你走完它。
（彈藥·被問再講：Kyle 2023《成為前端建築師吧》定義 infra＝為開發效率＋產品品質導入的系統，正是今天對照的「過去」。ref: https://oldmo860617.medium.com/%E6%88%90%E7%82%BA%E5%89%8D%E7%AB%AF%E5%BB%BA%E7%AF%89%E5%B8%AB%E5%90%A7-%E9%80%8F%E9%81%8E-frontend-infra-%E7%82%BA%E5%89%8D%E7%AB%AF%E6%87%89%E7%94%A8%E6%89%93%E9%80%A0%E7%A9%A9%E5%81%A5%E4%B8%94%E9%AB%98%E6%95%88%E7%8E%87%E7%9A%84%E9%96%8B%E7%99%BC%E9%AB%94%E9%A9%97-21566b5c95d3 ）
-->

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

<!--
在下去三波之前，先把整張地圖攤開給你看——我答應要給你一張地圖，就是這張。今天就走三波，而且你會發現，它們其實在攻擊同一個目標：驗證。
第一波 Rust 化，讓驗證變便宜；第二波 統一化，把驗證跑滿、當成護欄；第三波 AI 化，把這片護欄轉過來、對準真正的目標——AI 的錯。
〔click〕記住這條線：三波看起來在講不同工具，骨子裡是同一件事——「驗證」——在不同層次上的展開。好，第一波。
-->

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

<!--
第一波，我叫它「Cheap」——便宜。
大家可能以為 Rust 化的重點是「快」。等一下你會發現，真正的重點是「便宜」——這兩個字的差別，是今天整場的引擎。
〔第一波 8 min〕
-->

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

<!--
先從一個大家一定有感的場景開始：你有沒有等過 ESLint？
看這個終端機（示意畫面）：中大型專案、兩千八百多個檔案，npx eslint 跑下去——轉圈圈，轉到你可以去倒杯咖啡回來。38 秒。這是很多團隊的日常。
下面：同一個專案換成 Oxlint？毫秒級結束，官方 benchmark 是 50 到 100 倍。
最下面這行是我自己的證詞：我的整個 monorepo，vp lint 跑 Oxlint——0.39 秒，全部掃完。這已經不是優化了，是換了一個世界。
-->

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

<!-- 數字已查證：Oxlint 50–100x（oxc bench-linter）、Rolldown 10–30x build + 記憶體 4.8→1.2GB（vite.dev/blog/announcing-vite8）、TS 7.0 GA 2026-07-08（Go 重寫，type-check ~10x、builds 8–12x，官方）。Linear 案例 46s→6s 可口頭補。 -->

<!--
不只 lint，看這三行：Oxlint 取代 ESLint，50–100 倍；Rolldown 取代 Rollup＋esbuild，build 快 10–30 倍、記憶體省 75%；第三行是十天前的大新聞——TypeScript 7.0 發布，微軟用 Go 把編譯器整個重寫，type check 快約 10 倍。
〔停一拍〕注意是 Go、不是 Rust——所以這波的本質不是「Rust 信仰」，是「原生重寫」。連 TypeScript 都被整個重寫，你就知道這波玩真的。
關鍵在中間這個框：機器成本崩跌了。以前跑一次完整檢查很貴、算力稀缺；原生重寫之後，幾乎免費。
〔click，放慢〕那省下來的算力，你要拿去「省錢」，還是「驗證更多」？記住這題——它是整場的引擎，第二波給答案。
-->

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

<!--
這裡多講一層，「為什麼會便宜這麼多」。聽不懂沒關係，把最後一句結論帶走就好。
看上面那排 Before：以前 Babel、ESLint、Prettier、Terser——每一個工具，都要自己重新「讀懂」一遍你的程式碼。同一份檔案，被 parse 四五次。這就是重複勞動。
再看 Now：Oxc 把程式碼 parse 一次，產生一份 AST，所有工具共用這一份。
所以下面這句就是結論：便宜不是來自「Rust 信仰」，是來自「刪掉重複的工作」。欸——這不就是我們的第一條軸嗎？消滅重複。Infra 的原理，用在了 infra 自己身上。
（Q&A 有人追問再講 arena allocator；全場偏長時，這張可以快速帶過。）
-->

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

<!--
講到這裡，大家心裡應該有個問號：剛剛那些 Rust 工具，吃得下我們的 .vue 檔嗎？我誠實講：只吃得下一半。
.vue 裡面 script 那一半，Oxlint 現在可以 lint；但 template 那一半它讀不懂——所以像「變數在 template 用到了卻被判 unused」這種跨兩邊的判斷，通用工具就是做不到。這就是這波浪潮誠實的缺口。
（順帶一提：vize 還做了一個 oxlint plugin，可以掛進 Oxlint 一起跑——兩邊是互補，不是對打。）
但已經有人在補這個洞。Vue core 團隊的 ubugeeei，正在做一個叫 vize 的專案。看畫面這張圖就懂它在幹嘛：一個 .vue 檔進來，vize 只讀一次、拆解一次，然後右邊五件事——編譯、lint、格式化、型別檢查、編輯器提示——全部共用這一次的結果。
是不是很眼熟？這就是上一張 Oxc「parse 一次、大家共用」的同一招，原封不動搬到 Vue 的世界。
-->

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

<!--
那 vize 自己公布的數字，剛好可以拿來驗證今天的主軸。一格一格看。
lint 快 209 倍、SFC 編譯快 55 倍、格式化快 68 倍——哇，都是幾十倍幾百倍。但看最右邊那格：整條 build 從頭跑到尾，只快了 1.1 倍，幾乎沒動。
〔停一拍〕為什麼？因為在一條完整的 build 裡，lint 跟格式化本來就只佔一小段時間——把它們加速一百倍，整條路也不會短多少。
所以這組數字告訴我們的，不是「Rust 讓一切變快」，而是「檢查這件事，從此幾乎不用錢」。不用錢，你就可以隨時跑、每次都跑、全部都跑——這就是「便宜，不是快」的意思，也是等一下第二波的伏筆。
誠實聲明：vize 還在實驗階段、是個人專案，但 VOICEVOX 跟 Misskey 已經拿去當白老鼠了。它展示的是方向，不是叫你現在就換。數字是專案自己的 benchmark（15000 個 SFC、取五次中位數），我沒有自己測過。
-->

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

<!--
第二波，「Run it all」——全部跑起來。
第一波讓驗證變便宜了。便宜了之後，行為會怎麼改變？答案就是這四個字。
我們先看 2026 年給出的答案長什麼樣子，然後再回頭處理你心裡可能有的那個「NX 要不要學」的焦慮。
〔第二波 9 min〕
-->

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

<!--
2026 年的答案就是統一化——把十幾個各自為政的工具收斂成一套。
上面是 VoidZero：尤雨溪 2024 成立、剛被 Cloudflare 收購的那家。整條工具鏈自己做完——Oxc 解析、Oxlint 檢查、Rolldown 打包、Vite 開發、Vitest 測試，同一團隊、共用同一核心。以前你要自己把五個陣營的工具黏起來，現在它們天生一家人。
下面是 Vite+（vite-plus）——架在上面的指揮官，也是我每天在用的：vp run／vp check／vp test，開發、打包、測試、lint、monorepo 全收進一個指令，不用再寫膠水設定。
誠實講：上個月才進 beta，但開源 MIT 免費，已經 1,300＋ 公開 repo 在用；Astro 7 內建 Vite 8、Nuxt 4 也要跟上。方向很清楚，整個生態都往這走。
-->

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

<!--
不過講到 monorepo、講到工具鏈，這些名字你應該在 Twitter 或技術文章的標題看過：NX、Turborepo、Lerna、Bazel⋯⋯
然後心裡冒出這個問題：「我是不是該去學一套 monorepo 工具？不學是不是就落後了？」
先深呼吸，聽完這一段再決定。先爆雷：答案大概率是「不用」。
-->

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

<!--
解決「工具碎片化」，市場上其實分成兩派，哲學正好相反。
上面這張紫色卡是平台派，口號是「一個平台跑所有事」：專案關係圖、任務快取、code generator、CI 整合，全部內建，像全家桶。代表就是 NX，它的招牌功能叫 affected——算出這次改動影響到哪些部分，只跑那些，其他能 skip 就 skip。注意這個思維：這是「算力很貴」年代的省法。
下面這張綠色卡是組合派，口號是「小而專、可組合」：pnpm workspaces、Oxlint、vite-plus、dependency-cruiser，像樂高，要什麼拼什麼。而 vite-plus 的做法跟 NX 正好相反——全部都跑，靠快取讓沒改的部分瞬間完成。這是「算力便宜了」之後的思維。
兩派沒有絕對的對錯——但注意，它們剛好是第一波結尾那個問句的兩種答案。
-->

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

<!--
把剛剛的對比正式收斂成一句：CI 的哲學，反轉了。
第一行，以前：算力貴，所以少跑、能省則省——NX 的 affected 是那個年代的智慧。第二行，現在：算力便宜，乾脆全部跑滿，把每一次驗證當成護欄。
第三行很關鍵：你「敢全部跑」的底氣，正是第一波那套又快又便宜的工具鏈——第一波跟第二波，在這裡扣起來了。
左下角是我 repo 真實的 pnpm-workspace.yaml：所有版本在一個地方宣告，還能分類——build 一類、lint 一類——分類本身就是文件，這是 antfu 的風格。
右下角的終端機，也是我 repo 的真實輸出：同一個 build 跑第二次，vp run 直接回報 cache hit、695ms saved，重播只花 112 毫秒。沒改的東西，跑了等於沒跑——「跑滿但不浪費」就長這樣。
最後一行順便收掉剛剛的焦慮：NX 要不要學？專案在 10 個 package 以下，pnpm 加 Oxlint 就已經夠了——不是 NX 不好，是你還不需要。Vue、Vite、Nuxt 的核心貢獻者（包括 antfu）自己的專案也都不用 NX。
-->

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

<!--
這套「跑滿當護欄」的哲學，不是紙上談兵——我最近把 vite-plus 官方 repo 的 CI/CD 整個拆開來讀，做工具鏈的人自己就是這樣過日子的。
攤開 .github/workflows，四類數一數：驗證七支——連「安裝流程」「create 體驗」「binary 有沒有變胖」都有專屬驗證，每個 PR 都跟 main 比一次；依賴維護三支；快取有專門一支；發布加文件加社群機器人九支。
〔click〕一共二十支。這種密度以前是燒不起的——oxc 讓驗證變便宜之後，這些自動化才從奢侈品變成日常。以前的工具是你自己當膠水黏起來的；這一牆，是自己會跑的護欄。這個 repo 先記著——等一下實踐段還會回來看它最精彩的一支。〔~1 min〕
-->

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

<!--
剛剛說「pnpm + Oxlint 就夠了」，那 pnpm 憑什麼扛這個場面？花一分鐘看它三招。
第一招，Catalogs：整個 workspace 的版本，在一個檔案裡宣告一次，所有 package 都跟著走。要升級 Vite？改一行，全部到位——這就是剛剛 yaml 裡看到的 catalog，分類還能直接當文件用。
第二招，Store 加 symlink：套件在磁碟上只存真正的一份，沒宣告的依賴物理上 import 不到——下一張馬上給你看真實輸出。
第三招是今年四月的 pnpm 11，它把安全變成「預設值」：新發布的套件要先隔離 24 小時才裝得進來，擋的就是「剛上架就有毒」的供應鏈攻擊；奇怪來源的子依賴預設直接擋掉。
最下面是重點：你的套件管理器，現在出廠就內建護欄。記住這個「24 小時隔離」——第三波講供應鏈攻擊的時候，它會回來。
-->

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

<!--
這段有點硬，但一個 ls 指令就講完。畫面是我自己 repo 的真實輸出，不現場敲。
第一個指令：ls node_modules，你會看到 vite-plus 後面有個箭頭——它是一個 symlink、一個捷徑，不是真的資料夾。那實體在哪？第二個指令看 .pnpm：真正的套件都存在這個 store 裡，每個只存一份，其他地方全是捷徑。
這帶來兩件事。第一，不重複存，所以又快又省——又回到「消滅重複」。
第二，更關鍵，看最下面的結論框：你沒有在 package.json 宣告的依賴，物理上就 import 不到。邊界不是靠 lint「檢查」出來的，是被檔案系統「物理強制」的——幽靈依賴直接不可能發生。這是護欄的第一道防線。
-->

---
layout: center
glow: top
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>Catch AI</span>
  <span font-hand text-3xl mt-2 text-blue op90 style="transform: rotate(-2deg)">Wave 3 · the AI shift</span>
</div>

<!--
第三波——今天最重要的一波：「Catch AI」，攔住 AI。
前兩波把工具做便宜、做統一，「生產」這一端解決了。那瓶頸去哪了？看下一張。
〔第三波 10 min，全場收斂〕
-->

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

<!--
先盤點一下。看最上面兩個標籤：第一波「便宜」、第二波「跑滿」——寫程式、打包、檢查，現在又快、又便宜、又統一。「生產」這一端，基本上解決了。
那瓶頸搬去哪？看第二行：搬到「驗證」——而把它推過去的，就是 AI。當寫 code 這件事被 AI 加速十倍，「那段不是你寫的 code，到底對不對」就變成整條流程裡最慢、最貴的一關。
最下面這句話講得很白：AI 失敗，主要不是因為腦子不夠好，是因為「環境太模糊」——它不知道改這裡，會不會弄壞那裡。這是 2026 年一個新興學科「harness engineering」的核心論點，好幾篇文章都在講同一件事。這句話先記著，等一下會回來。
-->

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

<!--
這件事，有人用另一套語言講得很清楚。工程師 Fortes Huang 把團隊的能力拆成三層，跟著卡片一層層看：最上面「產出」——code、設計、測試；中間「審查」——判斷架構有沒有被破壞；最下面「驗證」——確認產品語意、風險邊界對不對。
AI 一進來，最上層產出瞬間暴衝；審查壓力上升；於是瓶頸整個往下擠，卡在最後一層——驗證，變成新瓶頸。
〔click〕他還點出更狠的一句：責任的重心，正從「誰把 code 寫出來」，移到「誰能確認它是對的」。這句話等一下我的案例會活生生演給你看。
-->

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

<!--
可能有人想：錯就錯啊，人也會寫錯，有什麼不一樣？差很多——看這張表，一列一列比。
第一列，量：人寫 code 很慢，錯誤是涓涓細流；AI 是用噴的，錯誤是洪水。
第二列，長相：人寫錯，常常一眼就怪怪的；AI 寫錯，它看起來全都對——漂亮、合理、跑起來沒事，雷藏在裡面。
第三列最關鍵，直覺：自己寫的 code，你會有「這裡可能有鬼」的直覺；AI 寫的不是你寫的——你沒有那個直覺。
三條加起來：量大、看起來都對、你又沒寫過。結論就是最下面紅框這句：人用肉眼 review，根本接不住。所以驗證必須交給機器。
-->

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

<!--
看右邊這張圖，講一個小故事。
a.ts 需要 b.ts，b.ts 又回頭需要 a.ts——繞成一個圈，這叫循環依賴。打包工具看到這種圈圈就頭痛：它分不出哪些 code 是真的沒用到，只好保守處理——全部留下來。
接著看左邊三行：留下來的 code 塞進 chunk，chunk 變肥；肥了 parse 就變久，網頁的 LCP 變差——最後是使用者買單。
但第三行才是今天的重點：同一個根因，傷的不只是 bundle 跟效能——AI 的判斷也一樣被傷害。邊界模糊，AI 就不知道改這裡會不會壞那裡——這就是上上張引用說的「環境太模糊」。
最下面回扣第一波說過的那句：結構乾淨，機器才幫得上忙。而「機器」，現在包含 AI。
-->

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

<!--
怎麼辦？看最上面這條鏈：AI 每改一步，Oxlint、TypeScript、build、CI 就把關一步，每步都有機器判對錯。這條護欄鏈越快，AI 越敢動、你也越敢放手。
把它做成平台，業界叫 IDP（Internal Developer Platform）——白話就是「鋪好的路」：該檢查的自動檢查、該擋的自動擋，你不用自己架、也不用開單等平台團隊。
第二行：規則要寫成 AI 看得懂的格式——CLAUDE.md、AGENTS.md，把團隊的規矩翻譯給 AI 聽。
第三行：護欄不能是黑盒——因為那段 code 不是你寫的，光跳「過／不過」不夠，要看得見錯在哪、憑什麼判、怎麼修。連 Oxlint 都刻意把診斷做成 AI 讀得懂的結構化輸出——位置、上下文、規則文件連結——讓 AI 邊寫邊修。工具鏈自己已經在為「攔 AI」改造了。
第四行旁證：逼我們「驗證更多」的不只 AI。Shai-Hulud 供應鏈蠕蟲第一波就攻陷 500＋ 套件、歐盟 CRA 也要求供應鏈可驗證。還記得 pnpm 11 那個「隔離 24 小時」嗎？就是在防這個。內有 AI、外有攻擊與法規——這是結構轉變，不是炒作。
-->

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

<!--
蠕蟲跟法規不是抽象威脅，看一個「防禦當預設值」的現場——還是 vite-plus 那個 repo，這支 security.yml。三件事：第一，每一個 PR 都跑一次完整的供應鏈掃描，用 oxc 自家的 security-action——以前「每週掃一次就很敬業」，現在每個 PR 都掃，這就是便宜的紅利直接變成安全姿勢。
第二，更狠——連 upstream 都審：把鎖定版本的 Rolldown 原始碼整包抓下來，用同一把尺掃一遍。上游供應鏈也是自己的責任範圍。
第三，細節全是護欄：permissions 開頭先歸零、要用再加回來；所有第三方 action 用 commit SHA 釘死、不用 tag——tag 可以被劫持，SHA 不行。
〔click〕還記得剛剛那隻 Shai-Hulud 嗎？這些就是防它的姿勢——而且是預設值，不是出事之後才補的。〔~1 min〕
-->

---
layout: center
glow: top
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>In practice</span>
  <span font-hand text-3xl mt-2 op75 style="transform: rotate(-2deg)">not just theory</span>
</div>

<!--
講到這裡，都還是趨勢跟觀念。你可能想：「講得很好，但真的有人這樣做嗎？」——有。
接下來給大家看兩個迴圈：第一個是官方的——vite-plus 每天晚上真實在跑的；第二個是我自己造的——同一個哲學、跑在我每天的工作裡。先聲明：我不教實作，只想讓你看到「現在的 infra 可以做到什麼程度」——看個感覺、被啟發就好。
〔實踐 8 min：官方迴圈 3 min、我的迴圈 5 min〕
-->

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

<!--
案例一，官方的迴圈。前面你已經看過他們的二十支 workflows 跟 security.yml——現在看整個 repo 最讓我愣住的這支：upgrade-deps。看這個循環：每天午夜，自動把 npm 跟 cargo 的依賴全部升到最新，試著 build——壞掉呢？讓 Claude Code 去修。修完 build、test、snapshot 全跑一遍，變綠了才開 PR，給人看最後一眼。
〔click〕下面這個框是 yaml 裡給 AI 的目標，原文就寫得這麼直白：bring the project back to a fully green state。它怎麼用 AI 的細節，下一張。〔~1 min〕
-->

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

<!--
三個細節。第一，Claude 在這條線上出場兩次——修理工＋文書：一次把 build 修回綠燈，一次讀 git diff 幫 PR 寫 commit message 跟描述。
第二，prompt 就直接寫在 yaml 裡，前面步驟的成敗會動態塞進去給 AI 當上下文，agent 還要照 repo 裡 .claude/agents/ 的規矩辦事——這不就是剛剛說的「把規矩翻譯給 AI 聽」。
第三，發版鏈仍然留一個人工核可的關卡——連官方都是「高風險的地方，人看最後一眼」。
〔click，橋接〕所以「AI 負責生產、護欄負責接住」，不是我腦補的未來——官方 repo 每天都在這樣過日子。而我自己，也造了一條同樣哲學的 pipeline——下一個案例。〔~1 min〕
-->

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

<!--
案例二，我的迴圈——跟剛剛官方那個迴圈同一個形狀：他們每晚修依賴，我在後端每次改動時同步 API 型別。這是我自己造的「AI 生產、護欄接住」。
先講痛點，大家應該都痛過：後端改了一個 API 欄位，前端的型別、介面、呼叫的地方，全部要手動跟著對——又煩、又重複、又常常上線才爆。（可以舉手互動：有遇過的舉手？）
我做的系統，看這三張卡，由左到右：CI 盯著後端的 openapi.yaml，一有變動——第一，自動發一個 MR 到前端 repo；第二，用 Hey API 自動重新產生型別——注意「確定性」三個字：同一份 spec 進去，每次出來的 code 都一樣，型別永遠單一來源；第三，最關鍵的——讓 AI 分析「這次後端的改動，前端哪些地方要跟著調」，直接把改動放進那個 MR。
〔預錄 gif：後端 commit → 前端 MR 自動開出來，全流程〕
那這條 pipeline 為什麼站得住？下一張。〔數字帶入：本來手動對 API 花 X，現在幾分鐘自動開好 MR〕〔~2 min〕
-->

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

<!--
這條 pipeline 站得住，關鍵在前端的架構。看這條鏈：生成出來的型別（raw）我不讓元件直接用，中間疊一層 UI model——整個前端只有這一層碰 raw，這扇門還有一條 lint 規則守著，禁止繞過去直接 import。
為什麼要多疊這層？因為依賴乾淨、單向——spec 一改，raw 動、model 先紅、用到的元件跟著紅，TypeScript 會把每一個受影響的點標出來，想漏改都難。還記得第一波那句「結構乾淨，機器才幫得上忙」嗎？就是在這裡兌現的。
第二行是誠實的邊界：型別看不見「語意」的改變——欄位型別沒變、意思變了，TS 不會紅——這種就交給 AI 判斷＋測試＋人看最後一眼。〔~2 min〕
-->

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

<!--
把案例二收起來。它同時打中今天的兩條軸——上面兩個標籤：自動 MR、確定性型別，是「消滅重複」；型別鏈＋護欄＋人看最後一眼，是「攔錯誤」，而且攔的是 AI 自己的錯。
一句話：AI 負責生產，我做的 infra 負責接住它——這就是整場的縮影，活生生跑在我每天的工作裡。
〔click〕我的信任策略也一句話：型別鏈接得住的我放手；高風險的語意改動，人看最後一眼——人的角色，從「寫」退到「驗證」。〔~1 min〕
-->

---
layout: center
glow: top
transition: slide-up
---

<div flex="~ col gap-2 items-center" relative>
  <span text-5em font-serif italic>Wrap-up</span>
  <span font-hand text-3xl mt-2 op75 style="transform: rotate(-2deg)">one diagram, one line</span>
</div>

<!--
最後，幫大家把今天收起來——一張圖、一句話。
〔收尾 3 min〕
-->

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

<!--
如果你覺得這只是我一個人在腦補分類，State of JS 2025 的數據給了佐證。
左邊是官方報告把 Rolldown 選為年度亮點的段落；右邊兩個數字：底層是 Rust 的 Rolldown，一年內用量從 1% 跳到 10%——Rust 化是真的在發生；受訪者產出的 code 有將近三成是 AI 生成、比前一年多了快一半——AI 化也是。
我只是把這兩波，串成一條因果鏈。出處在右下角，會後可以自己查。
-->

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


<!--
給平常專心寫 feature 的你，三句話帶回家，跟著畫面一行一行走。
第一，別焦慮：你本來就懂的那一半——自動化重複——完全沒變。
第二，看懂方向：真正在翻轉的，只有「錯誤的來源」——從人，變成 AI。
第三，最重要的：重新理解護欄。lint、測試、CI 不是來擋你麻煩的——在 AI 時代，它們是你敢相信「AI 幫你寫的那一半 code」的唯一理由。
-->

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

<!--
今天最想送大家的一句話，就是這張，我念一遍。
Infra 一直在做兩件事：自動化重複、攔截錯誤。重複那件事，沒有變。變的是——我們從攔「人」的錯，變成了攔「AI」的錯。
〔click，停一拍〕而 AI 的錯，多到只有機器攔得住。
這，就是 2026 年前端 infra 的新地圖。
-->

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
      <img src="/images/qr-slides.svg" w-36 />
    </div>
    <span op50 text-sm>michaello.me/slides/v-taiwan-2026</span>
  </div>
</div>

<!--
謝謝大家！投影片掃右邊的 QR code 就有，歡迎會後找我聊。
〔Q&A 10 min・預備彈藥〕
- vite-plus「全部跑」vs NX「affected」差在哪（最常被追問）
- vite-plus 還在 beta，敢用在 production？——開源 MIT、方向確定，我自己吃自己的狗糧
- Bun 是 Zig、TypeScript 7 是 Go——所以這波是「原生重寫」潮，不是「Rust 信仰」
- pnpm 11 的 24h 隔離會不會擋到急用的新版？——可以按套件調整設定
- 彈藥庫：nx-vs-vite-ecosystem.html 的 Q&A 風險評估區
-->

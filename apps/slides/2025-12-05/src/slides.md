---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: In the Age of AI, Development Workflows Are Being Redefined
author: Michael Lo
keywords: ai,coding-agent,context-engineering,react-grab,developer-workflow
description: From Traditional Debugging to Context Engineering - The Changing Role of Engineers
image: https://www.michaello.me/images/meetup-2025/cover.png
date: 2025-12-05
event: Code for Taiwan Summit 2025
location: Taiwan
tags: [ai, react-grab, context-engineering, developer-workflow]
htmlAttrs:
  lang: en
fonts:
  sans: Inter
  serif: Playfair Display
  mono: JetBrains Mono
drawings:
  persist: false
vitePlugin:
  icons:
    compiler: vue3
---

<sup opacity-80 font-hand text-4xl>ming</sup>

<!--
大家好，歡迎來到 Code for Taiwan Summit！
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
我是 Michael Lo，目前是全端工程師
也是 Code for Taiwan 的成員

今天想跟大家分享一些關於 AI 工具的觀察
-->

---
layout: default
glow: left
---

<div mt-16>
<h1 font-serif italic text-6xl leading-relaxed>In the Age of AI</h1>
<p op60 text-xl mt-2>Development Workflows Are Being Redefined</p>

<p op70 text-lg mt-12 leading-relaxed max-w-2xl>
From traditional debugging to Context Engineering,<br>
how <span text-purple font-bold>precise context</span> transforms developer workflows.
</p>
</div>

<div absolute bottom-8 right-12 text-right>
<div text-xl font-bold tracking-wide>Code for Taiwan Summit 2025</div>
<div text-sm op60 mt-1>Dec. 5th 2025</div>
</div>

<!--
今天的主題是「在 AI 時代下，開發流程正在被重新定義」

我們會從傳統的開發痛點開始
聊到一個叫做 Context Engineering 的新概念
最後用一個實際案例來說明
-->

---
layout: default
glow: top
---

# The Pain of Traditional Debugging

<div text-sm op70 mb-6>How much time do you spend "finding code" vs "fixing code"?</div>

<div grid="~ cols-2 gap-8" mt-4>

<div flex="~ col gap-4">
  <div flex="~ gap-3 items-start" p-4 border="~ red-500/30" rounded-lg bg-red-500:10>
    <carbon-warning class="text-red text-2xl flex-none mt-1" />
    <div>
      <div font-bold text-red>Legacy Code</div>
      <div text-sm op70 mt-1>No docs, confusing names, git blame says "fix bug"</div>
    </div>
  </div>

  <div flex="~ gap-3 items-start" p-4 border="~ orange-500/30" rounded-lg bg-orange-500:10>
    <carbon-folder-details class="text-orange text-2xl flex-none mt-1" />
    <div>
      <div font-bold text-orange>Large Codebase</div>
      <div text-sm op70 mt-1>Hundreds of files, button logic scattered across 4 places</div>
    </div>
  </div>
</div>

<div flex="~ col items-center justify-center" p-6 border="~ gray-500/20" rounded-xl bg-gray-500:5>
  <div text-6xl font-black text-purple mb-2>60%</div>
  <div text-sm op60 text-center>of engineer's time<br/>spent on "finding where code is"</div>
  <div mt-4 text-xs op40>instead of "solving problems"</div>
</div>

</div>

<div mt-6 p-4 border="~ purple-500/30" rounded-lg bg-purple-500:10 text-center>
  <carbon-idea class="text-purple inline text-xl" />
  <span font-bold>Why senior engineers are valuable: They have a mental map</span>
</div>

<!--
先來聊聊傳統開發最大的痛點

其實不是寫程式碼，而是「找程式碼在哪裡」

面對 Legacy Code 和大型 codebase
研究顯示工程師 60% 的時間都花在搜尋上
而不是真正解決問題

這就是為什麼資深工程師很值錢
因為他們腦中有一張 mental map
但這張地圖要花好幾個月甚至幾年才能建立
-->

---
layout: default
---

# AI Has Arrived, Now What?

<div text-sm op70 mb-4>Tool Evolution: From Q&A to Collaboration</div>

<div grid="~ cols-4 gap-4" mt-4>
  <div p-4 border="~ gray-500/20" rounded-xl class="bg-gradient-to-b from-gray-800/50 to-gray-900/50" text-center shadow-lg>
    <div text-2xl font-light op60 mb-2>2022</div>
    <div font-bold text-green text-lg>ChatGPT</div>
    <div text-xs op40 mt-3>Basic Q&A<br/>Doc lookup</div>
  </div>

  <div p-4 border="~ gray-500/20" rounded-xl class="bg-gradient-to-b from-gray-800/50 to-gray-900/50" text-center shadow-lg>
    <div text-2xl font-light op60 mb-2>2023</div>
    <div font-bold text-blue text-lg>Copilot</div>
    <div text-xs op40 mt-3>Autocomplete<br/>Less typing</div>
  </div>

  <div p-4 border="~ gray-500/20" rounded-xl class="bg-gradient-to-b from-gray-800/50 to-gray-900/50" text-center shadow-lg>
    <div text-2xl font-light op60 mb-2>2024</div>
    <div font-bold text-purple text-lg>AI IDE</div>
    <div text-xs op40 mt-3>Cursor<br/>Claude Code</div>
  </div>

  <div p-4 border="~ yellow-500/30" rounded-xl class="bg-gradient-to-b from-yellow-500/15 to-yellow-500/5" text-center shadow-xl>
    <div text-2xl font-light text-yellow mb-2>2025</div>
    <div font-bold text-yellow text-lg>Agentic</div>
    <div text-xs op50 mt-3>Autonomous<br/>Multi-step tasks</div>
  </div>
</div>

<div mt-6 grid="~ cols-2 gap-4">
  <div flex="~ gap-3 items-center" p-4 border="~ green-500/20" rounded-xl bg-green-500:8>
    <carbon-checkmark-filled class="text-green text-xl flex-none" />
    <div text-sm>API lookup: <span op50>10 min</span> → <span text-green font-bold>30 sec</span></div>
  </div>
  <div flex="~ gap-3 items-center" p-4 border="~ green-500/20" rounded-xl bg-green-500:8>
    <carbon-checkmark-filled class="text-green text-xl flex-none" />
    <div text-sm>Boilerplate: <span op50>copy-paste</span> → <span text-green font-bold>one sentence</span></div>
  </div>
</div>

<!--
然後 AI 來了

2022 年 ChatGPT 問世，可以查文件、問問題
2023 年 Copilot，自動補全、少打字
2024 年 AI IDE 像 Cursor、Claude Code
2025 年進入 Agentic 時代，可以自主完成多步驟任務

這些工具確實幫了大忙
API 查詢從 10 分鐘變 30 秒
樣板程式碼一句話就搞定

聽起來很棒對吧？但問題來了...
-->

---
layout: center
class: text-center
---

# The New Dilemma

<div mt-6 flex="~ gap-4 items-center justify-center">

<div flex="~ col items-center" p-5 border="~ orange-500/30" rounded-2xl class="bg-gradient-to-b from-orange-500/15 to-orange-500/5" w-52 shadow-lg>
  <div w-12 h-12 rounded-full bg-orange-500:20 flex="~ items-center justify-center" mb-3>
    <carbon-warning-alt class="text-orange text-2xl" />
  </div>
  <div font-bold text-lg text-orange>Vibe Coding</div>
  <div text-xs op50 mt-2 text-center leading-relaxed>AI-written code that works<br/>Don't care about details</div>
</div>

<div flex="~ col items-center gap-1" op40>
  <carbon-add class="text-2xl" />
</div>

<div flex="~ col items-center" p-5 border="~ red-500/30" rounded-2xl class="bg-gradient-to-b from-red-500/15 to-red-500/5" w-52 shadow-lg>
  <div w-12 h-12 rounded-full bg-red-500:20 flex="~ items-center justify-center" mb-3>
    <carbon-error class="text-red text-2xl" />
  </div>
  <div font-bold text-lg text-red>Legacy Code</div>
  <div text-xs op50 mt-2 text-center leading-relaxed>Already hard to understand<br/>Historical code</div>
</div>

<div flex="~ col items-center gap-1" op40>
  <span class="text-2xl">=</span>
</div>

<div flex="~ col items-center" p-5 border="~ purple-500/40" rounded-2xl class="bg-gradient-to-b from-purple-500/20 to-purple-500/10" w-52 shadow-xl>
  <div w-12 h-12 rounded-full bg-purple-500:30 flex="~ items-center justify-center" mb-3>
    <carbon-help class="text-purple text-2xl" />
  </div>
  <div font-bold text-lg text-purple>Double Black Box</div>
  <div text-xs op50 mt-2 text-center leading-relaxed>Debugging difficulty<br/>Exponentially harder</div>
</div>

</div>

<div mt-6 p-3 px-6 rounded-full bg-gray-500:10 border="~ gray-500/20" inline-block>
  <carbon-bot class="text-lg op50 inline mr-2" />
  <span op70>AI doesn't remember what it wrote 3 days ago</span>
</div>

<!--
現在流行 Vibe Coding
就是讓 AI 寫，只要能動就好，不管細節

但當這些程式碼出 bug
再加上原本就難懂的 Legacy Code
你就得到一個 Double Black Box

因為 AI 不記得三天前自己寫了什麼
問它可能還會給你完全錯誤的答案
-->

---
layout: default
glow: left
---

# From Prompt to Context

<div text-sm op70 mb-6>A Shift in Thinking</div>

<div grid="~ cols-2 gap-8" mt-4>

<div>
  <div flex="~ gap-2 items-center" mb-4>
    <carbon-chat class="text-blue text-2xl" />
    <span font-bold text-xl>Prompt Engineering</span>
  </div>
  <div p-4 border="~ blue-500/20" rounded-lg bg-blue-500:5>
    <div text-sm op70 mb-2>What we learned in recent years:</div>
    <div space-y-2 text-sm>
      <div flex="~ gap-2 items-center"><carbon-arrow-right class="text-blue" /> How to ask questions</div>
      <div flex="~ gap-2 items-center"><carbon-arrow-right class="text-blue" /> How to get better AI answers</div>
      <div flex="~ gap-2 items-center"><carbon-arrow-right class="text-blue" /> Various prompting techniques</div>
    </div>
  </div>
</div>

<div>
  <div flex="~ gap-2 items-center" mb-4>
    <carbon-data-structured class="text-purple text-2xl" />
    <span font-bold text-xl>Context Engineering</span>
  </div>
  <div p-4 border="~ purple-500/20" rounded-lg bg-purple-500:5>
    <div text-sm op70 mb-2>What the industry is talking about now:</div>
    <div space-y-2 text-sm>
      <div flex="~ gap-2 items-center"><carbon-arrow-right class="text-purple" /> How to give AI enough context</div>
      <div flex="~ gap-2 items-center"><carbon-arrow-right class="text-purple" /> How to give "just enough" info</div>
      <div flex="~ gap-2 items-center"><carbon-arrow-right class="text-purple" /> Tokens cost money, precision matters</div>
    </div>
  </div>
</div>

</div>

<div mt-8 p-4 border="~ yellow-500/30" rounded-lg bg-yellow-500:10>
  <div flex="~ gap-3 items-center">
    <carbon-warning class="text-yellow text-xl" />
    <div>
      <span font-bold>Core Problem: </span>
      <span op80>How do you know which files and lines are "just enough"?</span>
    </div>
  </div>
</div>

<!--
這帶出一個重要的思維轉變

過去幾年我們學的是 Prompt Engineering
怎麼問問題、怎麼讓 AI 給更好的答案

現在業界在談的是 Context Engineering
怎麼給 AI 足夠的上下文
怎麼給「剛剛好」的資訊
因為 token 要錢，精準很重要

但核心問題是：你怎麼知道哪些檔案是「剛剛好」？
這又回到原本的問題，你要先知道東西在哪裡
-->

---
layout: center
---

# Case Study: React Grab

<div text-sm op60 mb-4>Let AI know exactly where the code is, no guessing</div>

<img src="/coding-agent-demo.gif" max-w-2xl rounded-xl shadow-2xl border="~ gray-700/50" />

<div mt-4 text-xs op40>
  <a href="https://www.react-grab.com" target="_blank" class="border-none!">react-grab.com</a>
</div>

<!--
這就是 React Grab 在解決的問題

看這個 Demo
點擊畫面上的元素，就能知道程式碼在哪裡
不用再翻檔案了
-->

---
layout: default
---

# Workflow

<div text-sm op60 mb-4>Click Element → Auto-generate Structured Prompt → Enter Command</div>

<div grid="~ cols-2 gap-6" mt-4>

<div>
<img src="/react-grab-prompt.png" w-full rounded-xl shadow-2xl border="~ gray-700/50" />
</div>

<div flex="~ col gap-4" mt-2>

<div p-4 border="~ blue-500/30" rounded-xl bg-blue-500:10>
  <div flex="~ gap-2 items-center" mb-2>
    <carbon-cursor-1 class="text-blue" />
    <span font-bold>1. Click Element</span>
  </div>
  <div text-sm op70>Hover and click any UI element</div>
</div>

<div p-4 border="~ purple-500/30" rounded-xl bg-purple-500:10>
  <div flex="~ gap-2 items-center" mb-2>
    <carbon-code class="text-purple" />
    <span font-bold>2. Auto-generate Context</span>
  </div>
  <div text-sm op70>HTML Frame + Code Location</div>
</div>

<div p-4 border="~ green-500/30" rounded-xl bg-green-500:10>
  <div flex="~ gap-2 items-center" mb-2>
    <carbon-send class="text-green" />
    <span font-bold>3. Enter Command</span>
  </div>
  <div text-sm op70>AI knows exactly what to change, no guessing</div>
</div>

</div>

</div>

<!--
這是 React Grab 的工作流程

第一步：點擊你想修改的元素
第二步：系統自動產生結構化的 Prompt，包含 HTML 結構和程式碼位置
第三步：你只需要輸入「要做什麼」，AI 就知道要改哪裡

這就是 Context Engineering 的實踐
-->

---
layout: center
---

# Real Case Comparison

<div text-sm op60 mb-4>Without vs With React Grab</div>

<img src="/benchmark-comparison.png" max-w-4xl rounded-xl shadow-2xl border="~ gray-700/50" />

<div mt-6 grid="~ cols-2 gap-8" max-w-2xl mx-auto text-sm>
  <div flex="~ gap-2 items-center" p-3 border="~ gray-500/20" rounded-lg bg-gray-500:5>
    <carbon-time class="text-gray op50" />
    <span op70>Without: ~13.6s, 5 tool calls</span>
  </div>
  <div flex="~ gap-2 items-center" p-3 border="~ green-500/30" rounded-lg bg-green-500:10>
    <carbon-flash class="text-green" />
    <span text-green>With: ~6.9s, 1 tool call</span>
  </div>
</div>

<!--
來看實際對比

沒有 React Grab：AI 需要 5 次工具呼叫，讀 4 個檔案，花 13.6 秒
有 React Grab：直接拿到位置，1 次呼叫，只要 6.9 秒

單一查詢就省下 50% 的時間
-->

---
layout: center
---

# Performance Comparison

<div text-sm op70 mb-4>shadcn/ui dashboard benchmark (20 test cases)</div>

<img src="/benchmark-chart.png" w-full max-w-4xl rounded-xl shadow-2xl />

<div mt-6 p-4 border="~ purple-500/30" rounded-xl bg-purple-500:10 max-w-2xl mx-auto>
  <div flex="~ gap-3 items-center justify-center">
    <carbon-idea class="text-purple text-xl" />
    <span>Precise Context lets AI skip guessing, jump directly to target line</span>
  </div>
</div>

<!--
來看官方的 benchmark 數據

這是用 shadcn/ui dashboard 測試 20 個案例的結果

時間：16.8 秒降到 5.7 秒，快了 65%
成本：0.72 美元降到 0.29 美元，省了 60%
工具呼叫：5.3 次降到 0.3 次，減少 93%

這就是 Context Engineering 的威力
當你給 AI 精準的位置資訊，它就不用浪費時間猜測
-->

---
layout: center
---

# Full Test Results

<div text-sm op70 mb-4>20 UI Element Test Cases</div>

<img src="/benchmark-results.png" w-full max-w-5xl rounded-xl shadow-2xl />

<!--
這是完整的 20 個測試案例

可以看到大部分案例的工具呼叫從 1-6 次變成 0
因為 AI 根本不需要搜尋，它已經知道位置了
-->

---
layout: center
class: text-center
---

<div>
  <div text-5xl font-black mb-4>Let <span text-purple>Machines</span> Find the Location</div>
  <div text-3xl op70>Humans Focus on <span text-green font-bold>Decisions</span></div>
</div>

<div mt-10 grid="~ cols-3 gap-5" text-left max-w-4xl mx-auto>
  <div p-5 border="~ gray-500/20" rounded-xl class="bg-gradient-to-br from-gray-800/50 to-gray-900/50" shadow-lg>
    <div text-xs uppercase tracking-wider op40 mb-3>Past</div>
    <div flex="~ col gap-1" text-sm>
      <div flex="~ gap-2 items-center"><carbon-user class="text-gray op50" /><span>Human finds</span></div>
      <div flex="~ gap-2 items-center"><carbon-user class="text-gray op50" /><span>Human understands</span></div>
      <div flex="~ gap-2 items-center"><carbon-user class="text-gray op50" /><span>Human fixes</span></div>
    </div>
  </div>

  <div p-5 border="~ blue-500/20" rounded-xl bg-blue-500:5 shadow-lg>
    <div text-xs uppercase tracking-wider op40 mb-3>Early AI</div>
    <div flex="~ col gap-1" text-sm>
      <div flex="~ gap-2 items-center"><carbon-user class="text-blue" /><span>Human describes</span></div>
      <div flex="~ gap-2 items-center"><carbon-bot class="text-blue" /><span text-blue>AI guesses</span></div>
      <div flex="~ gap-2 items-center"><carbon-bot class="text-blue" /><span text-blue>AI fixes</span></div>
    </div>
  </div>

  <div p-5 border="~ green-500/30" rounded-xl bg-green-500:10 shadow-lg>
    <div text-xs uppercase tracking-wider text-green op80 mb-3>Current Trend</div>
    <div flex="~ col gap-1" text-sm>
      <div flex="~ gap-2 items-center"><carbon-tools class="text-green" /><span text-green>Tool locates</span></div>
      <div flex="~ gap-2 items-center"><carbon-bot class="text-green" /><span text-green>AI understands</span></div>
      <div flex="~ gap-2 items-center"><carbon-user class="text-green" /><span text-green font-bold>Human decides</span></div>
    </div>
  </div>
</div>

<!--
這是我今天最想強調的重點

開發流程正在被重新定義

過去：人找、人理解、人修
早期 AI：人描述、AI 猜、AI 修
現在趨勢：工具定位、AI 理解、人決策

人的角色從執行者變成決策者
-->

---
layout: default
---

# Three Takeaways

<div mt-6 space-y-5>

<div flex="~ gap-5 items-center" p-5 border="~ blue-500/30" rounded-2xl class="bg-gradient-to-r from-blue-500/10 to-blue-500/5" shadow-lg>
  <div flex="~ items-center justify-center" w-14 h-14 rounded-xl bg-blue-500:20 text-blue flex-none>
    <carbon-education class="text-2xl" />
  </div>
  <div flex-1>
    <div font-bold text-xl>Context Engineering is the New Must-Learn</div>
    <div text-sm op70 mt-1>How you give AI precise context determines your efficiency and cost</div>
  </div>
</div>

<div flex="~ gap-5 items-center" p-5 border="~ purple-500/30" rounded-2xl class="bg-gradient-to-r from-purple-500/10 to-purple-500/5" shadow-lg>
  <div flex="~ items-center justify-center" w-14 h-14 rounded-xl bg-purple-500:20 text-purple flex-none>
    <carbon-connect class="text-2xl" />
  </div>
  <div flex-1>
    <div font-bold text-xl>Use Tools to Bridge "Visual" and "Code"</div>
    <div text-sm op70 mt-1>React Grab is just one example, more to come</div>
  </div>
</div>

<div flex="~ gap-5 items-center" p-5 border="~ green-500/30" rounded-2xl class="bg-gradient-to-r from-green-500/10 to-green-500/5" shadow-lg>
  <div flex="~ items-center justify-center" w-14 h-14 rounded-xl bg-green-500:20 text-green flex-none>
    <carbon-flow class="text-2xl" />
  </div>
  <div flex-1>
    <div font-bold text-xl>Rethink Your Development Workflow</div>
    <div text-sm op70 mt-1>Don't use AI as a faster typist, redesign your entire workflow</div>
  </div>
</div>

</div>

<!--
三個重點帶走

第一，Context Engineering 是新的必學技能
你怎麼給 AI 精準的上下文，決定了你的效率和成本

第二，善用工具來連接「視覺」和「程式碼」
React Grab 只是一個例子，未來會有更多

第三，重新思考你的開發流程
不要把 AI 當成打字更快的工具
而是重新設計整個工作流程
-->

---
layout: center
class: text-center
---

<h1 font-serif text-6xl>Thank You!</h1>

<div op50 mt-4>Slides can be found on <a href="https://www.michaello.me/talks/2025-12-05/" target="_blank">michaello.me</a></div>

<!--
開發流程正在被重新定義
這不是未來式，是現在進行式

謝謝大家！
-->

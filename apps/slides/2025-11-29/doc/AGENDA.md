# JSDC 2025 簡報議程 (Agenda)

**主題**：Modern Monorepo Toolchain - Build Systems, Task Runners & Beyond  
**講者**：Michael Lo  
**總時長**：40 分鐘  
**地點**：JSDC 2025 • 柏拉圖廳, Taiwan  
**日期**：2025.11.29

---

## 📋 完整議程

### 【開場】2-3 分鐘

**內容**：

- 封面：Modern Monorepo Toolchain
- 自我介紹：Michael Lo（Web 開發、工具製作愛好者）
- 主題預告：從架構選型到 AI 賦能
- 暖身問答：現場 Monorepo 使用情況調查

**重點**：

- 建立親切感，與觀眾連結
- 了解觀眾背景，調整後續內容深度

---

### 【Code for Taiwan】5 分鐘

**內容**：

- 我們是誰：Code for All 成員、官網、GitHub
- 使命與目標：🌐 公民參與｜🔓 透明度｜⚡ 效率
- 主要專案：開放資料平台、公民參與工具、社會議題解決、資料視覺化
- 組織運作：志願者 → 黑客松/工作坊 → 開源專案 → 社會影響
- 與主題連結：多專案協作、程式碼共享、版本管理

**重點**：

- 交代自己的社群背景與影響力
- 自然銜接到 Monorepo：這些痛點就是今天要談的主題
- 邀請聽眾關注／參與（每月第三個星期三 YouTube 直播）

---

### 【第一章：破題 - 為什麼需要 Monorepo？】6-7 分鐘

**內容**：

1. **跨專案開發的典型災難** (2 分鐘)
   - 依賴地獄：版本衝突頻繁
   - 重新發明輪子：formatDate 經典案例
   - 體驗不一致：UI/UX 不統一
   - 發布不同步：下游專案延遲升級

2. **典範轉移：Polyrepo vs Monorepo** (2 分鐘)
   - Polyrepo：獨立性高，但協作成本高
   - Monorepo：統一基礎設施，原子化提交
   - **關鍵洞察**：Monorepo 不是把程式碼放在一起，而是建立統一的基礎設施

3. **誰在用 Monorepo？** (2-3 分鐘)
   - Google（2B+ LOC）、Meta（100M+ LOC）、Microsoft（300GB）
   - 大廠選擇 Monorepo 的原因

**重點**：

- 用 formatDate 案例引起共鳴
- 強調「統一基礎設施」核心概念
- 用大廠案例建立可信度

---

### 【第二章：工具鏈選型 - 決策的藝術】9-11 分鐘 ⭐ 核心章節

**內容**：

1. **工具鏈演進：從能用到好用** (2 分鐘)
   - Lerna（2016~）：老牌王者，現由 Nx 管理
   - pnpm Workspaces（2018~）：極致的依賴管理，70% less disk space
   - Intelligent Build Systems（2020~）：Nx 與 Turborepo

2. **智慧對決：Nx vs Turborepo** (5-6 分鐘)
   - 快取機制：Nx Cloud vs Vercel Remote Cache
   - 任務編排：dependsOn vs ^build 語法
   - 依賴視覺化：互動式圖表 vs 靜態圖表
   - 程式碼生成：nx generate vs 不支援
   - 插件生態：豐富插件 vs 專注核心
   - **選擇建議**：大型團隊選 Nx，追求簡潔選 Turborepo

3. **決策樹：選擇適合的工具** (2-3 分鐘)
   - 小型團隊 → Turborepo
   - 大型團隊 → Nx 或 pnpm + Turbo
   - 考慮因素：技術棧整合度、學習曲線、未來擴展性

**重點**：

- 這是核心章節，需要詳細說明
- Nx vs Turborepo 的對比是重點
- Oxlint 移至「未來展望」章節（與 Vite+ 一起介紹）

---

### 【第三章：團隊治理與架構設計】6-7 分鐘

**內容**：

1. **版本控管策略** (2 分鐘)
   - Fixed Mode：統一版本，適合高度耦合的套件
   - Independent Mode：獨立版本，適合相對獨立的套件
   - **個人偏好**：Fixed Mode（及早發現問題、微小迭代）

2. **權限與邊界：CODEOWNERS** (2 分鐘)
   - 防止架構腐化、明確責任歸屬、加速審查流程
   - 自動化審查流程：PR 創建 → 自動匹配 → 指派審查 → 強制審查
   - **AI 時代特別重要**：防止 AI 不小心改到別人的程式碼

3. **遠端快取：終極加速器** (2-3 分鐘)
   - 核心理念："不要在你的機器上重複已完成的任務"
   - **實際效能數據**：45 分鐘 → 8 分鐘（效率提升 82%）
   - 實施範例：Nx Cloud / Turborepo Remote Cache
   - 注意事項：費用控管、cacheable 規則調整

**重點**：

- 版本策略要根據團隊規模選擇
- CODEOWNERS 在 AI 時代特別重要
- 遠端快取的效益是真實案例，很有說服力

---

### 【第四章：實戰應用 - UI Library 與 AI 的化學反應】8-9 分鐘 ⭐ 亮點章節

**內容**：

1. **UI Library 最佳實踐：shadcn/ui 的啟示** (3-4 分鐘)
   - 傳統方法：黑盒子依賴（無法客製化、版本升級風險）
   - shadcn/ui 方法：硬分叉靈活性（完全控制、零依賴）
   - 安裝流程對比：`npm install` vs `npx shadcn@latest add`
   - **核心洞察**：shadcn/ui 是程式碼片段集合，不是傳統依賴包

2. **AI 賦能：從復用到智慧生成** (4-5 分鐘)
   - **Step 1**: Monorepo as Context（Component Registry、Design Tokens、Business Logic）
   - **Step 2**: AI + MCP Protocol（Model Context Protocol 連接）
   - **Step 3**: Intelligent Assembly（AI 智慧組裝與生成）
   - **實際應用範例**：建立使用者管理介面（DataTable + Dialog + Form + Select + Badge）
   - **演進路徑**：手動複製貼上 → 組件復用 → AI 智慧生成

**重點**：

- shadcn/ui 的硬分叉策略是重點
- AI 賦能是亮點，要強調實際應用範例
- 強調從復用到智慧生成的演進

---

### 【第六章：未來展望 - 下一代基礎設施】5-7 分鐘

**內容**：

1. **Bun：從 Runtime 層開始整合** (2 分鐘)
   - 目前的工具鏈：npm/pnpm + tsc/babel + webpack/vite + nx/turbo
   - Bun 的整合：bun install + 原生 TypeScript + bun build + Workspace
   - **效能對比**：npm (33.4s) → pnpm (14.6s) → bun (2.1s)
   - 回歸初衷：更少的配置、更少的依賴、更快的速度
   - **案例：Midjourney 全面使用 Bun**（百萬用戶、5 人維護）

2. **Vite+：從工具鏈層開始整合** (2 分鐘)
   - Evan You 在 ViteConf 2025 宣布
   - 七個內建命令：`vite new/test/lint/fmt/lib/run/ui`
   - 內建 Oxlint、Vitest、Rolldown
   - `vite run`：內建 monorepo 任務執行器，類似 Turborepo
   - 預計 2026 年初公開預覽

3. **兩種未來：Bun vs Vite+** (1 分鐘)
   - Bun：Runtime 層整合（bottom-up）
   - Vite+：工具鏈層整合（top-down）
   - 共同目標：**終結工具鏈碎片化**

4. **Oxlint：現在就能用的效能提升** (1-2 分鐘)
   - 傳統 ESLint：~5 分鐘檢查 200+ packages
   - Oxlint：~3 秒，Rust 打造，最高提速 100 倍
   - **雙軌策略**：Oxlint（90% 常規規則）+ ESLint（專案特有規則）
   - 實作範例：`eslint-plugin-oxlint`

**重點**：

- Bun 強調簡化（Midjourney 案例是亮點）
- Vite+ 是重磅消息（Evan You 在 ViteConf 2025 宣布）
- Oxlint 現在就能用，不需要等 Vite+

---

### 【第七章：Infra Core 思維】2-3 分鐘

**內容**：

1. **冰山模型** (1 分鐘)
   - 水面上：UI 組件、Business Logic、新功能
   - 水面下：Build System、CI/CD、Dependency Graph、Cache、Code Generation

2. **核心觀念** (1 分鐘)
   - **地基決定建築的高度**
   - 讓開發者專注在產品，把基礎設施的複雜度封裝起來
   - 前端工程師也需要具備 Infra 思維

3. **工具選擇的本質** (30 秒)
   - 不管選 Bun、Vite+、Nx、Turborepo
   - 核心思維都一樣：**終結工具鏈碎片化**

**重點**：

- 這是整場演講的「昇華」環節
- 用冰山模型視覺化 Monorepo 的隱藏價值
- 為 Recap 做好鋪墊

---

### 【第八章：總結 - Recap】2-3 分鐘

**內容**：

1. **三個核心實踐** (1 分鐘)
   - 選對工具：Nx、Turborepo、Bun、Vite+
   - 訂好規則：CODEOWNERS、版本策略、DDD 架構設計
   - 善用 AI：Monorepo as Context、MCP Protocol、智慧組件生成

2. **三個關鍵要點** (1 分鐘)
   - Monorepo 是基礎設施決策（不只是資料夾結構）
   - 效能是關鍵（遠端快取 80%+、Oxlint 100 倍提速）
   - 擁抱簡化（Midjourney：「過度效能優化是被禁止的」）

3. **核心理念** (30 秒)
   - **"Don't over-design, focus on simplicity"**
   - 地基穩了，上面才能蓋得高

**重點**：

- 快速回顧，用「三個」結構讓聽眾容易記住
- 呼應 Infra Core 章節的「地基」觀念
- 為結尾做好鋪墊

---

### 【結尾】1 分鐘

**內容**：

- Thank You!
- 聯絡資訊：michaello.me、@Michael0520、@michaello.dev
- Code for Taiwan 社群邀請
- JSDC 2025 • Taiwan • 2025.11.29

---

## ⏱️ 時間分配總覽

| 章節               | 時間         | 重點                         |
| ------------------ | ------------ | ---------------------------- |
| 開場               | 2-3 分鐘     | 建立連結、了解觀眾           |
| Code for Taiwan    | 5 分鐘       | 社群介紹、與主題連結         |
| 第一章：破題       | 6-7 分鐘     | 痛點、典範轉移               |
| 第二章：工具鏈選型 | 9-11 分鐘    | ⭐ **核心章節**，Nx vs Turbo |
| 第三章：團隊治理   | 5-6 分鐘     | 版本策略、CODEOWNERS         |
| 第四章：快取優化   | 5-6 分鐘     | 遠端快取、效能數據           |
| 第五章：實戰應用   | 8-9 分鐘     | ⭐ **亮點章節**，AI 賦能     |
| 第六章：未來展望   | 5-7 分鐘     | Bun、Vite+、Oxlint           |
| 第七章：Infra Core | 2-3 分鐘     | 冰山模型、地基觀念           |
| 第八章：總結       | 2-3 分鐘     | 重點回顧                     |
| 結尾               | 1 分鐘       | 感謝與聯絡                   |
| **總計**           | **~50 分鐘** | 預留 10 分鐘緩衝             |

## 🎯 演講重點提醒

### 核心訊息

1. **Monorepo 是基礎設施**，不只是資料夾結構
2. **效能是關鍵**，遠端快取可以大幅提升效率
3. **簡化原則**，不要過度設計

### 互動時機

- 開場：Monorepo 使用情況調查
- 第三章：可以問觀眾是否有遇到版本管理的問題
- 第四章：AI 應用經驗分享

### 時間控制

- 第二章是核心，可以多花時間
- 第五章可以快速帶過，如果時間不夠可以精簡
- 預留 6-10 分鐘給 Q&A

## 📝 備註

- 所有逐字稿都在對應的 `.md` 檔案中
- 可以根據現場反應調整內容深度
- 重點案例：formatDate、shadcn/ui、AI 賦能、遠端快取效益

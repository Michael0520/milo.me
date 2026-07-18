# 第六章：未來展望 - 下一代基礎設施

## 時間分配

5-7 分鐘

## 內容大綱

### 1. Bun：從 Runtime 層開始整合 (2 分鐘)

- **目前的工具鏈**
  - npm/pnpm (Package Manager)
  - tsc/babel (Transpiler)
  - webpack/vite (Bundler)
  - nx/turbo (Task Runner)
- **Bun 的整合**
  - bun install（更快的包管理）
  - 原生 TypeScript（無需編譯）
  - bun build（內建打包器）
  - Workspace（原生支援）
- **效能對比**
  - npm install: 33.4s
  - pnpm install: 14.6s
  - bun install: 2.1s
- **回歸初衷**
  - 更少的配置
  - 更少的依賴
  - 更快的速度
  - "不要過度設計，專注於化繁為簡"
- **案例：Midjourney 全面使用 Bun**
  - 超過百萬用戶，只有 5 個全職員工維護
  - 從伺服器端路由、執行環境、前端打包、腳本全都用 Bun
  - 「過度的效能優化是被禁止的」
  - 堅決反對基礎設施上的臃腫

### 2. Vite+：從工具鏈層開始整合 (2 分鐘)

- **什麼是 Vite+**
  - Evan You 在 ViteConf 2025 宣布
  - 不只是 Vite 的升級，而是完整的統一工具鏈
  - 預計 2026 年初公開預覽
- **內建命令**
  - `vite new` — 專案腳手架，特別針對 monorepos 優化
  - `vite test` — 單元測試（Vitest）
  - `vite lint` — 程式碼檢查（Oxlint，比 ESLint 快 100 倍）
  - `vite fmt` — 程式碼格式化（Oxfmt）
  - `vite lib` — 函式庫打包（tsdown + Rolldown）
  - `vite run` — 內建 monorepo 任務執行器，智慧快取
  - `vite ui` — GUI devtools
- **核心價值**
  - 所有命令開箱即用，無需複雜配置
  - 底層用 Rust 實現（parser、resolver、transformer、minifier、bundler）
  - 已被 Framer、Linear、Atlassian、Shopify 採用
- **解決的問題**
  - JavaScript 工具鏈碎片化
  - 多團隊各自使用不同工具
  - 依賴組合越來越難同步
  - 「讓團隊專注在產品，而不是浪費時間在評估、配置、除錯工具鏈」

### 3. Oxlint：現在就能用的效能提升 (1 分鐘)

- **傳統 ESLint 的痛點**
  - 大型 Monorepo 執行緩慢
  - 數百個套件需要數分鐘檢查
  - ~5 分鐘檢查 200+ packages
- **Oxlint 的優勢**
  - 由 VoidZero（尤雨溪創立）開發
  - Rust 打造，極致效能
  - 最高提速 100 倍
  - 零配置，開箱即用
  - ~3 秒檢查 200+ packages
- **雙軌策略：最佳實踐**
  - Oxlint：處理 90% 常規規則
  - ESLint：專案特有規則
  - Result：快速且完整
- **實作範例**
  ```json
  {
    "scripts": {
      "lint": "oxlint && eslint .",
      "lint:oxlint": "oxlint",
      "lint:eslint": "eslint ."
    }
  }
  ```
- **Pro Tip**：使用 `eslint-plugin-oxlint` 自動關閉重複規則

### 4. 兩種未來：Bun vs Vite+ (1 分鐘)

- **Bun：從 Runtime 層整合**
  - 優勢：單一工具包、原生 TS、極致的安裝速度、內建 bundler
  - 考量：生態系統仍在發展、部分套件相容性待驗證
  - 適合：追求極致簡化、願意擁抱新技術的團隊
- **Vite+：從工具鏈層整合**
  - 優勢：統一的命令介面、內建 monorepo 支援、Rust 效能、成熟生態
  - 考量：預計 2026 年初才公開預覽、商業授權模式
  - 適合：需要完整工具鏈、大型專案、多團隊協作的組織
- **選擇建議**
  - 兩種方向都指向同一個目標：**終結工具鏈碎片化**
  - Bun 從 Runtime 層開始整合（bottom-up）
  - Vite+ 從工具鏈層開始整合（top-down）
  - 選擇取決於團隊的風險承受度與專案需求

## 完整逐字稿

接下來我們進入第六章：**未來展望 - 下一代基礎設施**。

前面我們談了 Monorepo 的「現在」——工具鏈選型、團隊治理、快取優化、AI 賦能。這一章，我想帶大家看看「未來」。

有兩股力量正在改變前端工具鏈的格局：**Bun** 和 **Vite+**。它們代表了兩種不同的整合策略，但目標一致——**終結工具鏈碎片化**。

---

### Bun：從 Runtime 層開始整合

首先是 **Bun**，它代表的是「終極簡化」的理念。

讓我們先回顧一下目前 Monorepo 的工具鏈現況。不管你用的是 Nx 還是 Turborepo，通常都需要四層工具：

1. **Package Manager**：npm 或 pnpm，負責依賴管理
2. **Transpiler**：TSC 或 Babel，負責將 TypeScript 編譯成 JavaScript
3. **Bundler**：webpack 或 Vite，負責打包產出
4. **Task Runner**：Nx 或 Turborepo，負責任務編排與快取

這四層工具各司其職，但也意味著你需要維護四套配置、處理四套版本相容性。

**Bun 的野心是把這四層整合成一個工具**。

`bun install` 取代 npm/pnpm，速度快到驚人；Bun 原生執行 TypeScript，不需要額外的編譯步驟，直接取代 ts-node 和 TSC；`bun build` 是內建的 bundler；而且 Bun 也原生支援 Workspace，可以用 `--filter` 來執行特定專案的任務。

**效能數據**非常直觀：

- npm install：33.4 秒
- pnpm install：14.6 秒
- bun install：2.1 秒

這不是百分比的差距，而是數量級的差距。

最近有一個非常有說服力的案例：**Midjourney 全面使用 Bun**。

Midjourney 的工程師分享，他們的應用端技術棧已經全面遷移到 Bun。從伺服器端路由、執行環境、前端打包、腳本、即時生成預覽，全都用 Bun。

有趣的是，Midjourney 的網頁應用有**超過百萬用戶**，但只有 **5 個全職員工**維護。在前端的部分，除了原生的 React 外，沒有使用任何框架，也沒有使用任何狀態管理套件。

當有人問「在用 Bun 時是否遇到什麼挑戰」，他們的回答很值得深思：

> 「**過度的效能優化**在 Midjourney 是被禁止的。現代機器其實跑得夠快了，除非做了一些奇怪的事，不然效能通常不會是問題。所以比起去效能優化，不如先把那些奇怪的事移除。」

他們也提到，Midjourney 在 Bun 早期階段就採用了。當初選擇的原因，是因為團隊**堅決反對基礎設施上有任何的臃腫**（例如各類依賴），而因為這個技術決策，反而很輕鬆地能相容 Bun 的整體設計。

這個案例告訴我們：**更少配置、更少依賴、更快速度**——回歸工程的本質。

當然，Bun 目前還在快速發展中，部分舊套件的相容性還在完善。但如果你的團隊願意擁抱新技術、追求簡化，Bun 絕對值得關注。

---

### Vite+：從工具鏈層開始整合

如果說 Bun 是從 Runtime 層開始整合，那 **Vite+** 則是從工具鏈層開始整合。

這是 **Evan You**（Vue.js 和 Vite 的創作者）在 **ViteConf 2025** 上宣布的重磅消息。

**Vite+ 不只是 Vite 的升級版，而是一個完整的統一工具鏈**——而且它內建了我們接下來要談的 **Oxlint**。

想像一下，除了 `vite dev` 和 `vite build`，你現在還可以執行：

- `vite new` — 專案腳手架，**特別針對 monorepos 優化**
- `vite test` — 單元測試，由 **Vitest** 驅動
- `vite lint` — 程式碼檢查，用 **Oxlint**，比 ESLint **快 100 倍**
- `vite fmt` — 程式碼格式化，用 **Oxfmt**
- `vite lib` — 函式庫打包，用 **tsdown** 和 **Rolldown**
- `vite run` — **內建的 monorepo 任務執行器**，具有智慧快取。類似 Turborepo，但不需要告訴系統如何失效快取
- `vite ui` — GUI devtools，模組分析、bundle size 分析

**所有這些命令開箱即用，不需要複雜的配置或相容性處理。**

整個工具鏈的底層用 **Rust** 實現——從 parser、resolver、transformer、minifier 到 bundler——每一層都做了極致的效能調優。

這些基礎設施是開源的，已經被 **Framer**、**Linear**、**Atlassian**、**Shopify** 等公司採用。

Vite+ 試圖解決的問題，正是我們今天一直在談的：**JavaScript 工具鏈的碎片化**。

> 「讓團隊專注在產品，而不是浪費時間在評估、配置、除錯工具鏈。」

授權方面，Vite+ 對**個人、開源專案、小型企業免費**，大型企業則採用商業授權。所有底層的開源專案（Vite、Vitest、Rolldown、Oxc）會**永遠保持 MIT 開源**。

Vite+ 預計 **2026 年初**公開預覽，目前正在尋找早期採用者。

---

### 兩種未來：Bun vs Vite+

這兩種方向都指向同一個目標：**終結工具鏈碎片化**。

但它們的切入點不同：

**Bun** 是從 **Runtime 層**開始整合（bottom-up）：

- ✅ 單一工具包，配置簡單
- ✅ 原生 TypeScript，無需編譯步驟
- ✅ 極致的安裝速度
- ⚠️ 生態系統仍在發展
- ⚠️ 部分套件相容性待驗證
- 👉 **適合**：追求極致簡化、願意擁抱新技術的團隊

**Vite+** 是從**工具鏈層**開始整合（top-down）：

- ✅ 統一的命令介面（`vite new/test/lint/fmt/lib/run/ui`）
- ✅ 內建 monorepo 支援（`vite run` 類似 Turborepo）
- ✅ Rust 效能 + 成熟生態
- ⚠️ 預計 2026 年初才公開預覽
- ⚠️ 商業授權模式（對個人、開源、小型企業免費）
- 👉 **適合**：需要完整工具鏈、大型專案、多團隊協作的組織

選擇取決於團隊的風險承受度與專案需求。

---

### Oxlint：現在就能用的效能提升

剛才提到 Vite+ 內建了 Oxlint。但好消息是，**你不需要等到 Vite+ 發布，現在就可以單獨使用 Oxlint**。

在 Monorepo 裡，隨著專案越來越多——五個、十個、甚至十五個以上的 APP——程式碼行數暴增，ESLint 的執行時間也跟著拉長。在 CI/CD 或 pre-commit hook 裡，可能一跑就是五分鐘，嚴重影響開發節奏。

過去這個問題很難優化，直到 **Oxlint** 出現。

Oxlint 是由 **VoidZero**（尤雨溪創立的公司）開發，用 **Rust** 打造的 Linter。它的效能數據非常驚人：

- ESLint 檢查 200+ packages：**約 5 分鐘**
- Oxlint 檢查 200+ packages：**約 3 秒**

這是 **100 倍**的效能差距。

但 ESLint 還是有它的價值——專案特有的規則、自訂規則、以及一些 Oxlint 還沒覆蓋到的檢查。

所以最佳實踐是**雙軌策略**：

1. 先用 **Oxlint** 處理 90% 的常規規則（語法錯誤、最佳實踐等）
2. 再用 **ESLint** 檢查專案特有規則（import 順序、自訂規則等）

oxc 官方提供了 `eslint-plugin-oxlint`，可以自動關閉 ESLint 中與 Oxlint 重疊的規則，避免重複檢查。

這樣既能享受 Oxlint 的速度，又能保留 ESLint 的彈性。實際用起來，CI/CD 時間從 5 分鐘降到幾秒，開發體驗提升非常明顯。

---

好，這就是未來工具的三個方向：Bun 從 Runtime 層整合、Vite+ 從工具鏈層整合、Oxlint 提供現在就能用的效能提升。

不管你選擇哪個方向，它們的目標都是一樣的：**終結工具鏈碎片化，讓開發者專注在產品**。

接下來，我想用一個觀念來為今天的分享做個總結。

## 講者備註

### 整體節奏

- 這章是「展望未來」，語氣可以輕鬆一點，帶有期待感
- 用「---」分隔線讓三個主題有清楚的切換點
- 每個主題都有核心訊息：Bun = Runtime 整合、Vite+ = 工具鏈整合、Oxlint = 現在就能用的效能提升
- **Vite+ 是重磅消息**，Evan You 在 ViteConf 2025 宣布，可以多花時間講

### 重點強調

- **效能數據是關鍵**：npm 33.4s → pnpm 14.6s → bun 2.1s（數量級差距）
- **Oxlint 的 100 倍提速**：5 分鐘 → 3 秒，這個對比非常有衝擊力
- **Midjourney 案例是亮點**：百萬用戶、5 人維護、全面使用 Bun
- **「過度效能優化是被禁止的」**：這句話很有衝擊力，可以停頓讓聽眾消化
- **Vite+ 的七個命令**：`vite new/test/lint/fmt/lib/run/ui`，這是統一工具鏈的具體體現
- **`vite run` 類似 Turborepo**：內建 monorepo 任務執行器，不需要配置快取失效
- **Bun vs Vite+ 的切入點差異**：Runtime 層 vs 工具鏈層（bottom-up vs top-down）

### 避免的陷阱

- 不要過度推崇 Bun，要客觀提到「仍在發展中」
- 不要把 Bun 和 Vite+ 對立，強調「兩者都指向終結工具鏈碎片化」
- Vite+ 預計 2026 年初才公開預覽，要提醒聽眾這是「未來」
- Vite+ 商業授權要說清楚：對個人、開源、小型企業免費
- Oxlint 不是要取代 ESLint，而是「雙軌策略」（但在 Vite+ 中已經內建）

### 收尾

- 用「終結工具鏈碎片化，讓開發者專注在產品」收尾
- 為下一章（Infra Core 思維）做好鋪墊

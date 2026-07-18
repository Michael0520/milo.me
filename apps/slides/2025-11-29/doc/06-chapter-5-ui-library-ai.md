# 第五章：實戰應用 - UI Library 與 AI 的化學反應

## 時間分配

8-9 分鐘（亮點章節）

## 內容大綱

### 1. UI Library 最佳實踐：shadcn/ui 的啟示 (3-4 分鐘)

- **傳統方法：黑盒子依賴**
  - 將 UI 庫作為 node_modules 的一部分
  - 無法客製化內部實現
  - 版本升級風險高
  - 樣式覆蓋困難
- **shadcn/ui 方法：硬分叉靈活性**
  - 不是傳統依賴包，而是程式碼片段集合
  - 透過 `npx shadcn@latest add` 安裝
  - 直接複製程式碼到專案
- **優勢**
  - ✓ 完全控制程式碼
  - ✓ 零依賴，無版本衝突
  - ✓ 自由客製化樣式
- **安裝流程對比**
  - 傳統方式：`npm install @ui-library/components`（增加 package.json 依賴）
  - shadcn/ui 方式：`npx shadcn@latest add button`（直接複製程式碼到專案）
- **核心洞察**
  - shadcn/ui 不是傳統的依賴包，而是一個程式碼片段集合
  - 在 Monorepo 環境下，這種模式讓團隊能夠完全掌控 UI 組件
  - 實現真正的架構一致性

### 2. AI 賦能：從復用到智慧生成 (4-5 分鐘)

- **Step 1: Monorepo as Context**
  - 將 Monorepo 轉化為 AI 的知識庫
  - Component Registry
  - Design Tokens
  - Business Logic
- **Step 2: AI + MCP Protocol**
  - 透過 Model Context Protocol 連接
  - 讓 AI 知道有哪些 component 可用
  - 結構化的元件資訊
- **Step 3: Intelligent Assembly**
  - AI 智慧組裝與生成
  - 不只是執行指令，而是理解上下文
- **實際應用範例**
  - **Prompt to AI**：
    ```
    "建立一個使用者管理介面，包含：
    - 使用者列表 (DataTable)
    - 新增/編輯對話框 (Dialog + Form)
    - 權限管理 (Select + Badge)
    使用我們的 shadcn/ui 組件庫"
    ```
  - **AI Generated**：
    - 自動生成完整的 UserManagement 組件
    - 使用專案中現有的 shadcn/ui 組件
    - 遵循團隊的編碼規範
    - 包含完整的類型定義與業務邏輯
- **演進路徑**
  - 過去：手動複製貼上
  - 現在：組件復用
  - 未來：AI 智慧生成
- **核心價值**
  - 這將「復用」提升到「智慧生成」的新高度
  - 讓 AI 不需再開發，而是在你的專案裡直接取用與生成
  - 在 Monorepo 統一結構的支持下，大幅降低學習與整合成本

## 完整逐字稿

接下來我們進入第五章：**實戰應用 - UI Library 與 AI 的化學反應**。

今天我想分享我自己在 Monorepo 中的實戰經驗，特別是 UI Library 和 AI 的結合應用。

因為我目前還是會接觸前端開發，所以難免會遇到一些前端相關的問題：UI Library 那麼多，CSS 依賴問題、package 管理、還有資源整合等等。

那我這邊想推薦一套是 **shadcn/ui**，我想大家一定都知道，它現在的 GitHub 星標數量是數一數二的。

那為什麼 UI Library 會是 Monorepo 的最佳實踐呢？因為它能實現程式碼共享和一致性的核心價值，同時做到及時的管控。

傳統的 UI Library 安裝方式，比如那些老牌的 UI 庫，都是把一個黑盒子依賴裝在 `node_modules` 裡面。所以我們大多只能看官方文檔來了解怎麼使用，或者必須深入研究底層實現。只要有一個 breaking change，一個版本更動，我們就得處理大量的 breaking change。如果我們的 APP 非常多的話，就會遇到很大量的 breaking change。而且我們無法輕易客製化內部的邏輯，還會受到發布週期的限制。

**shadcn/ui 的比較有趣的點就是硬分叉的靈活性**。它不是傳統的依賴項，而是你可以直接把相關程式碼 copy 到專案的 components 裡面。

所以你會擁有三個優勢：

第一，**完全的所有權**。你把相關的程式碼 copy 過來了，可以非常自由地更改這些組件，來滿足業務上的需求。你不需要等待上游的更新，不需要等待作者發布更新的週期。

第二，**零依賴**。所有元件、所有依賴都在你的 project 中，不會有任何隱藏的 package dependency，它是非常乾淨的一種 style，或是一個 UI library。

第三，**架構一致性**。因為我們所有組件都在 Monorepo 中，我們可以把它拆得非常乾淨，確保遵循我們的程式碼風格和標準，用 ESLint 等方式，把它統一做一個非常漂亮的一致性。

接下來談 **AI 賦能**。AI 現在非常流行，我自己在工作上也非常大量在使用 AI，尤其是在前端開發上。因為我不是非常厲害的前端工程師，所以有時候會遇到一些問題。

**shadcn/ui 有內建提供 MCP（Model Context Protocol）的方式**，這讓 AI 賦能變得非常強大。

流程是這樣的：

**Step 1: Monorepo as Context**。我們把 Monorepo 轉化為 AI 的知識庫，包含 Component Registry、Design Tokens、Business Logic。

**Step 2: AI + MCP Protocol**。透過 Model Context Protocol 連接，讓 AI 知道有哪些 component 可用，取得結構化的元件資訊。

**Step 3: Intelligent Assembly**。AI 智慧組裝與生成，不只是執行指令，而是理解上下文。

**實際應用範例**：比如我們想要建立一個表單，表單裡面有三個欄位，再搭配一個 submit 的 button。我們可以把相關的需求丟給 LLM（比如 Claude），Claude 可以 call 這個 MCP，去取得 component data、component demo 等等，然後就可以拿到非常足夠的元件上下文。

透過 AI 的方式去幫我們把這些元件組裝到我們指定的畫面裡面。因為它有足夠的上下文，所以也不用擔心 props 或 parameter 使用錯誤。

整個流程就是：Monorepo 和我們的 project 作為 context，call 我們的 libraries 裡面的 UI library，接著 call MCP，MCP 會讀取我們的程式碼，理解每個元件的 API，取得 component demo，然後我們透過 AI 下一個 prompt，比如「幫我建立個表單」，AI 會帶著這些上下文，call MCP 函數，並且正確地在我們 Monorepo 裡面匯入組件，達到最終的 UI。

**核心價值**：Monorepo 一直在確保穩定性和復用性達到最高層次。這整個解決方式可以把「復用」提升到「智慧生成」的新高度。AI 不再只是猜測，我們可以把它建立在我們的基礎設施之上，來進行創造，確保這件事情是足夠完整，並且也有穩定性的。

## 講者備註

- shadcn/ui 的硬分叉策略是重點，要講清楚與傳統 UI Library 的差異
- 三個優勢（完全所有權、零依賴、架構一致性）要逐一說明
- AI 賦能是亮點，要強調實際應用範例
- MCP 的三個步驟要講清楚，讓聽眾理解整個流程
- 強調從復用到智慧生成的演進
- 實際案例要講得具體（表單範例）
- 強調 Monorepo 作為基礎設施的重要性

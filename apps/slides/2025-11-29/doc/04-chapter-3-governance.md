# 第三章：團隊治理與架構設計

## 時間分配

5-6 分鐘

## 內容大綱

### 1. 版本控管策略 (2 分鐘)

- **Fixed Mode：統一版本**
  - 特點：所有 packages 共用一個版本號
  - 優點：版本管理簡單、依賴關係清晰、易於理解和追蹤
  - 缺點：未修改的包也會升版、版本號消耗快
  - 最適合：高度耦合的套件、Scrum 團隊
  - 個人偏好：Fixed Mode（及早發現問題、微小迭代）
- **Independent Mode：獨立版本**
  - 特點：每個 package 維護自己的版本
  - 優點：版本靈活輕量、更新彈性高、精確的版本控制
  - 缺點：依賴管理複雜、可能造成版本混亂
  - 最適合：相對獨立的套件、多團隊協作
- **實際範例**
  - Fixed Mode：所有套件都是 v1.2.0
  - Independent Mode：package-a: v1.2.0, package-b: v2.0.1, package-c: v0.9.0

### 2. 權限與邊界：CODEOWNERS (3-4 分鐘)

- **代碼共享的雙面刃**
  - ✅ 好處：遵循 DRY 原則，減少重複代碼
  - ❌ 問題：過度共享會導致架構腐化
- **過度共享的三個問題**
  1. **開發者修改其他團隊的代碼**：其他團隊為了滿足單一需求，可能增加你維護代碼的複雜度
  2. **外部開發者使用內部代碼**：內部 API 被外部使用，導致變更困難，團隊被鎖定在特定 API
  3. **項目依賴錯誤的庫**：UI 組件庫誤用數據層代碼、Angular 項目誤用 React 代碼、團隊 A 誤用團隊 B 的專屬代碼
- **CODEOWNERS 解決方案**
  - 🛡️ 防止架構腐化：確保關鍵代碼有人守護
  - 👥 明確責任歸屬：每個模組都有負責團隊
  - ⚡ 加速審查流程：自動指派合適的審查者
- **CODEOWNERS 範例**

  ```ini
  # Default owners for all files
  * @core-infra-team

  # UI library is owned by the Design System team
  /libs/ui/ @design-system-team
  /libs/shared/ui-components/ @design-system-team @frontend-guild

  # Data access layer is owned by the Backend Guild
  /libs/data-access/ @backend-guild
  /apps/api/ @backend-guild

  # Critical config files require infra team review
  *.json @core-infra-team
  *.yaml @core-infra-team
  nx.json @core-infra-team @tech-lead
  ```

- **Nx 的 enforce-module-boundaries 規則**
  - 強制使用 `index.ts` 作為公開 API：只有從 `index.ts` 導出的代碼才能被其他項目使用
  - 使用 tags 定義邊界：防止 UI 組件庫使用數據層、防止 Angular 項目使用 React 代碼
  - 自動化檢查：在 lint 階段就會報錯，不需要等到 runtime
- **CODEOWNERS 範例（文檔更新場景）**

  ```ini
  # React generators require React team review
  /packages/react/src/generators/** @nrwl/nx-react-reviewers

  # Documentation updates require docs team review
  /docs/** @nrwl/nx-docs-reviewers
  ```

- **自動化審查流程**
  1. PR 創建（開發者提交變更）
  2. 自動匹配（根據 CODEOWNERS）
  3. 指派審查（通知相關團隊）
  4. 強制審查（必須通過才能合併）
- **最佳實踐與維護建議**
  - **CODEOWNERS 文件維護**
    - 定期更新：團隊成員變動時，及時更新 CODEOWNERS
    - 明確粒度：避免過粗或過細的路徑規則，推薦按功能模組劃分
    - 註釋說明：為複雜規則添加註釋，方便後續維護
  - **審核流程優化**
    - 結合 Nx Cloud 實現審核任務的智能分配
    - 在 CONTRIBUTING.md 中明確審核標準和響應時間
    - 使用 Nx Console 可視化查看代碼所有權關係
  - **新人上手指南**
    - 引導新人通過 CODEOWNERS 了解模組負責人
    - 推薦從 examples/ 目錄的示例專案開始貢獻
    - 參考 docs/getting-started/ 文檔熟悉貢獻流程

## 完整逐字稿

接下來我們進入第三章：團隊治理與架構設計。

在團隊治理這件事情上，我們其實建立在架構的穩定性。因為我們有這麼多 APP，把它們打包在一起，就是為了確保它們足夠穩定，並且沒有不必要的依賴性。

先談**版本控管策略**。有兩種模式：**Fixed Mode** 和 **Independent Mode**。

Fixed Mode 是所有 packages 共用一個版本號。Independent Mode 則是每個 package 維護自己的版本。

兩種方式各有優缺點。我個人比較傾向 **Fixed Mode**。如果公司跑 Scrum，可能是每兩個禮拜一個 sprint。當 Monorepo 的量非常大，dependency 和 package 數量很多時，最好用最快的速度去迭代版本號。

所以我會習慣用 Fixed Mode，去及早發現問題、做微小迭代，確保這些變更都能被記錄下來。

但如果你們的工作環境比較特殊，比如軟硬體不是那麼頻繁迭代，或者你想要做內部 release，那 Independent Mode 可能比較適合。每個 package 可以維護自己的版本，各自管理各自的時程。

不過要特別留意：package 之間的依賴關係要非常清晰，你可以用任何官方文件方式去管理這麼多個版本號碼。但依賴管理會變得非常複雜，要盡早處理這些相對應的版本，不然會出現版本不一致，到後來 sync 來 sync 去，會非常難處理。

接下來談**CODEOWNERS**，這是 Monorepo 中非常重要的權限管理機制。

Monorepo 最大的好處就是可以輕鬆共享代碼，遵循 DRY 原則。但代碼共享也是一把雙刃劍，過度共享會導致三個問題：

第一個問題是**開發者修改其他團隊的代碼**。其他團隊為了滿足單一需求，可能會增加你維護代碼的複雜度，這會增加你的負擔，也讓代碼難以適配其他使用場景。

第二個問題是**外部開發者使用內部代碼**。其他團隊可能使用了你專案內部的代碼，現在如果你要改動那部分代碼，他們的專案就會壞掉。所以你要麼被鎖定在特定 API，要麼就得去修其他團隊的專案。

第三個問題是**項目依賴錯誤的庫**。UI 組件庫可能誤用數據層代碼、Angular 項目可能誤用 React 代碼、團隊 A 可能誤用團隊 B 的專屬代碼。

這些問題都可以用 **CODEOWNERS** 來解決。CODEOWNERS 文件可以明確定義哪些人需要審查特定區域的代碼變更。GitHub 原生支援 CODEOWNERS，當 PR 觸及特定區域時，會自動指派對應的審查者。

Nx 還提供了 `enforce-module-boundaries` lint 規則，可以強制使用 `index.ts` 作為公開 API。只有從 `index.ts` 導出的代碼才能被其他項目使用，這樣 `index.ts` 就成為該函式庫的明確公開 API。

另外，Nx 還可以用 tags 來定義邊界規則，防止 UI 組件庫使用數據層、防止 Angular 項目使用 React 代碼。這些規則會在 lint 階段就報錯，不需要等到 runtime。

在 AI 時代，CODEOWNERS 特別重要。AI 工具可能會不小心改到別人的程式碼，CODEOWNERS 可以在第一層就做把關，減少不必要的錯誤，也讓知識產權更清晰。

接下來分享一些**最佳實踐與維護建議**。

首先是 **CODEOWNERS 文件維護**。團隊成員變動時，要及時更新 CODEOWNERS，避免審查者已經離職但規則還在。路徑規則的粒度要明確，避免過粗或過細，推薦按功能模組劃分。對於複雜規則，記得加註釋說明，方便後續維護。

**審核流程優化**方面，可以結合 Nx Cloud 實現審核任務的智能分配。在 CONTRIBUTING.md 中明確審核標準和響應時間，讓大家知道什麼時候會收到審查。還可以使用 Nx Console 可視化查看代碼所有權關係，這對新人特別有用。

對於**新人上手指南**，可以引導新人通過 CODEOWNERS 了解模組負責人，知道遇到問題該找誰。推薦從 examples/ 目錄的示例專案開始貢獻，風險比較低。參考 docs/getting-started/ 文檔熟悉貢獻流程，這樣可以減少新人犯錯的機會。

接下來談**架構設計模式**。在 Monorepo 中，我們要避免「分散式單體」的問題。

我自己很推薦用 **DDD（Domain-Driven Design）思維**來劃分 package 邊界。根據業務領域來組織程式碼，而不是根據技術棧。每個 domain 內部應該高內聚、低耦合，把依賴關係解開。

因為 Monorepo 會包含非常大量的檔案，如果出現依賴循環，可能會產生不必要的問題。比如你在傳資料的時候遇到問題，或者在檔案重構時，如果有些元件被註銷掉，但還有依賴關係存在，就會產生後續的依賴循環，造成網站故障或 bug。

## 講者備註

- 版本策略要根據團隊規模選擇
- CODEOWNERS 在 AI 時代特別重要（防止 AI 不小心改到別人的程式碼）
- 強調 DDD 思維的重要性
- 最佳實踐要講得具體，讓聽眾知道怎麼落地

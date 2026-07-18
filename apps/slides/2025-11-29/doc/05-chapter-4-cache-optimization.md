# 第四章：遠端快取優化 - 終極加速器

## 時間分配

5-6 分鐘

## 內容大綱

### 1. 核心理念 (30 秒)

- **核心概念**："不要在你的機器上重複已完成的任務"
- **快取流程**
  - Developer A → Upload → Remote Cache → Cache Hit → Developer B
  - Nx Cloud / Turborepo Remote Cache / S3

### 2. 實際效能數據 (1 分鐘)

- **Before**：45 分鐘（CI 平均運行時間）
- **After**：8 分鐘（引入遠端快取後）
- **效率提升 82%**
- 隨著專案量增加，效益會越來越明顯

### 3. 遠端快取的選擇方案 (1-2 分鐘)

- **官方內建服務（最推薦）**
  - **Nx Cloud**（Nx）
    - ✅ 設定簡單，幾分鐘內完成
    - ✅ 無需自行維護基礎設施
    - ✅ 內建分析和監控工具
    - ✅ 官方支援，穩定可靠
    - ⚠️ 免費版有使用限制，企業級功能需要付費
  - **Vercel Remote Cache**（Turborepo）
    - ✅ 與 Vercel 完美整合
    - ✅ 設定最簡單，自動連結即可
    - ✅ 免費方案對大多數團隊足夠
    - ✅ 官方維護，持續更新
- **自托管方案（預算有限時考慮）**
  - **S3 自托管**
    - ✅ 設定相對簡單
    - ✅ 快取存取時間僅需 15 秒
    - ✅ 成本可控，維護成本低
    - ⚠️ 需要自行維護基礎設施
    - 使用 `@pellegrims/nx-remotecache-s3`（Nx）或自托管服務（Turborepo）
  - **AWS ECS 自托管**
    - ✅ 完全掌控快取機制和資料
    - ❌ 設定和維護成本高
    - ❌ 平均快取存取時間約 1 分 30 秒
    - ⚠️ 不推薦，除非有特殊需求
  ```json
  {
    "tasksRunnerOptions": {
      "default": {
        "runner": "@pellegrims/nx-remotecache-s3",
        "options": {
          "cacheableOperations": ["build", "lint", "test", "e2e"],
          "s3Options": {
            "region": "ap-northeast-1",
            "bucketName": "your-nx-cache-bucket"
          }
        }
      }
    }
  }
  ```

### 4. Turborepo 的遠端快取與按需建置 (1 分鐘)

- **Turborepo 的核心機制**
  - **Remote Caching**：將建置產物儲存在遠端快取，團隊共享
  - **On-Demand Builds**：只建置受影響的專案，跳過未變更的部分
- **實施方式**
  - **Vercel 整合**：最簡單，自動連結 Vercel 團隊即可使用
  - **自托管**：支援 AWS S3、Google Cloud Storage 等
  ```json
  // turbo.json
  {
    "pipeline": {
      "build": {
        "dependsOn": ["^build"],
        "outputs": ["dist/**", ".next/**"],
        "cache": true
      }
    }
  }
  ```
- **工作原理**
  1. 圖譜分析：構建依賴圖
  2. 指紋計算：基於輸入計算唯一指紋
  3. 快取查找：先查本地，再查遠端
  4. 執行或恢復：命中則恢復，否則執行並儲存
- **實際效益**
  - 只修改 `apps/web`：只建置 `apps/web`，`packages/ui` 從快取獲取
  - 只修改 `packages/ui`：建置 `packages/ui` 和依賴它的 `apps/web`，其他從快取獲取

### 5. Module Federation 與快取的關聯 (30 秒)

- **Micro Frontend 架構的特殊挑戰**
  - 獨立建置多個應用，總時間可能超過整體建置
  - 開發環境中運行多個服務消耗大量資源
- **快取的解決方案**
  - 避免重複建置：未修改的微前端直接從快取獲取
  - 加速 CI/CD：只需建置修改過的微前端
  - 實際案例：建置時間從 15 分鐘降到 3-4 分鐘（減少 75%+）

### 6. 效能案例研究 (30 秒)

- **React 元件庫建置時間比較**
  - 無快取：45 秒
  - Nx Cloud：12 秒
  - AWS ECS：23 秒
  - S3 快取：8 秒（最快）
- **多專案建置場景**
  - 無快取：15 分鐘
  - Nx Cloud：4 分鐘
  - AWS ECS：6 分 30 秒
  - S3 快取：3 分 15 秒（最快）

### 7. 注意事項與最佳實踐 (1 分鐘)

- **費用控管**
  - Nx Cloud 會產生 cloud 費用
  - S3 自托管成本相對較低
  - 需要明確控管預算
- **規則優化**
  - 觀察並適當微調 cacheable 規則
  - 設定 `parallel` 充分利用多核 CPU
  - 使用 `nx affected` 只建置受影響的專案
  - 定期檢查 cache hit rate

## 完整逐字稿

接下來我們進入第四章：**遠端快取優化**。

這是 Monorepo 的終極加速器，核心理念很簡單：「不要在你的機器上重複已完成的任務」。

如果 Developer A 已經建置過某個專案，Developer B 就可以直接從遠端快取下載結果，不需要重新建置。這樣可以大幅縮短 CI/CD 時間。

**實際效能數據**，以我的經驗，導入遠端快取後，CI 平均時間從 45 分鐘降到 8 分鐘，效率提升 82%。而且隨著專案量越來越多，這個效益會越來越明顯。這個差距非常明顯，對開發體驗來說是巨大的提升。

**遠端快取的選擇方案**，我建議優先考慮官方內建服務。

對於 **Nx**，最推薦的是 **Nx Cloud**。設定簡單，幾分鐘內就能完成，無需自行維護基礎設施，還有內建的分析和監控工具。官方支援，穩定可靠。雖然免費版有使用限制，企業級功能需要付費，但對大多數團隊來說，這是性價比最高的選擇。

對於 **Turborepo**，最推薦的是 **Vercel Remote Cache**。與 Vercel 完美整合，設定最簡單，自動連結即可。免費方案對大多數團隊足夠，而且官方維護，持續更新。

如果預算真的有限，或者有特殊的安全需求，可以考慮**自托管方案**。

**S3 自托管**是個不錯的選擇。使用 `@pellegrims/nx-remotecache-s3`（Nx）或自托管服務（Turborepo），設定相對簡單，快取存取時間僅需 15 秒，成本可控，維護成本也低。但需要自行維護基礎設施，這點要考慮清楚。

**AWS ECS 自托管**我們也試過，雖然完全掌控快取機制和資料，但設定和維護成本高，平均快取存取時間約 1 分 30 秒。除非有特殊需求，否則不推薦。

總結來說，**最推薦的還是直接使用官方內建的服務**，如果真的預算有限，或者有特殊需求，再考慮自托管方案。

接下來談 **Turborepo 的遠端快取與按需建置**。

Turborepo 有兩個核心機制：**Remote Caching** 和 **On-Demand Builds**。

Remote Caching 可以將建置產物儲存在遠端快取，讓整個團隊共享。On-Demand Builds 則是只建置受影響的專案，跳過未變更的部分。這兩個機制配合起來，效果非常好。

實施方式有兩種。**Vercel 整合**最簡單，如果你的 monorepo 在 Vercel 上，自動連結 Vercel 團隊就可以使用遠端快取。或者你也可以**自托管**，支援 AWS S3、Google Cloud Storage 等，彈性比較大。

Turborepo 的工作原理是這樣的：首先進行圖譜分析，構建依賴圖；然後計算指紋，基於輸入（源文件、依賴、環境變數等）計算唯一指紋；接著查找快取，先查本地，再查遠端；最後執行或恢復，如果命中就恢復，否則執行並儲存。

實際效益很明顯。如果你只修改 `apps/web`，Turborepo 只會建置 `apps/web`，`packages/ui` 會從快取獲取。如果你只修改 `packages/ui`，它會建置 `packages/ui` 和依賴它的 `apps/web`，其他專案從快取獲取。這樣 CI/CD 就不需要在每次 commit 時重建所有東西，省下很多時間。

**Module Federation 與快取的關聯**特別重要。在 Micro Frontend 架構中，每個微前端都是獨立建置的，如果沒有快取機制，獨立建置的總時間可能超過整體建置時間。遠端快取可以避免重複建置，未修改的微前端直接從快取獲取，加速 CI/CD。實際案例顯示，建置時間從 15 分鐘降到 3-4 分鐘，減少 75% 以上。這個效益在 Micro Frontend 架構中特別明顯。

**效能案例研究**，以 React 元件庫建置為例：無快取要 45 秒，Nx Cloud 要 12 秒，AWS ECS 要 23 秒，S3 快取只要 8 秒。在多專案建置場景中，S3 快取也表現最好：無快取要 15 分鐘，Nx Cloud 要 4 分鐘，AWS ECS 要 6 分 30 秒，S3 快取只要 3 分 15 秒。這些數字很直觀，S3 快取在各種場景下都是最快的。

**最佳實踐**，建議設定 `parallel` 充分利用多核 CPU，使用 `nx affected` 或 `turbo run build --filter` 只建置受影響的專案，定期觀察 cache hit rate，適當微調 cacheable 規則。如果使用 Nx Cloud 會產生 cloud 費用，S3 自托管成本相對較低，但都需要明確控管預算。

遠端快取是 Monorepo 效能優化的關鍵，建議大家一定要導入。無論你選 Nx 還是 Turborepo，遠端快取都能帶來巨大的效能提升。

**選擇建議**：最推薦直接使用官方內建的服務（Nx Cloud 或 Vercel Remote Cache），設定簡單、穩定可靠、官方支援。如果真的預算有限，或者有特殊的安全需求，再考慮自托管方案。但記住，自托管需要額外的維護成本，要評估清楚。

## 講者備註

- 遠端快取的效益是真實案例，很有說服力
- 強調實際數據（45 分鐘 → 8 分鐘，S3 快取 15 秒 vs ECS 1 分 30 秒）
- **重點：最推薦官方內建服務（Nx Cloud、Vercel Remote Cache）**
- 只有在預算有限或特殊需求時才考慮自托管方案
- Turborepo 的 Remote Caching 和 On-Demand Builds 要分開說明，讓聽眾理解兩種機制
- Turborepo 的按需建置範例要具體（只修改 apps/web vs 只修改 packages/ui）
- Module Federation 與快取的關聯是重點，特別適合 Micro Frontend 架構
- 效能案例研究用具體數字比較，讓聽眾有明確概念
- 提醒費用控管的重要性，但強調官方服務的性價比
- Nx 和 Turborepo 的遠端快取方案可以對比，幫助聽眾選擇

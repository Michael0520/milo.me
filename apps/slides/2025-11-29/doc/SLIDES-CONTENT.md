# 簡報內容摘要（精簡版）

適合直接放在投影片上的重點內容。

---

## 00 - 封面

```
Modern Monorepo Toolchain

Build Systems, Task Runners & Beyond

從架構選型到 AI 賦能
打造現代化前端核心基礎設施

JSDC 2025 • Taiwan
```

---

## 00 - 自我介紹

```
Michael Lo

• Web 開發
• 工具製作
• 開發流程優化

@Michael0520
```

---

## 01 - Code for Taiwan

### Slide 1: 標語

```
Code for Taiwan

一起學習程式思維
Where We Build Programming Thinking
```

### Slide 2: 核心理念

```
AI 時代的盲點

✓ 產出程式碼的門檻降低
✗ 像玩吃角子老虎機
✗ 不知道為什麼成功
✗ 無法複製成功

↓

概念優於工具
避坑勝過速成
```

### Slide 3: 社群資訊

```
每月第三個星期三
20:00 - 21:00
YouTube 線上小聚

完全免費 🆓
```

---

## 02 - 第一章：為什麼需要 Monorepo？

### Slide 1: 痛點

```
跨專案開發的典型災難

😱 依賴地獄
   專案各自鎖版本，升級像拆炸彈

🔄 重新發明輪子
   formatDate 有 10+ 版本

🎨 體驗不一致
   A 用 Tailwind，B 用 Tailwind CSS

⏰ 發布不同步
   有人 v3，有人 v2.5
```

### Slide 2: 典範轉移

```
Monolith → Polyrepo → Monorepo

┌─────────────────────────────────────────┐
│ Monolith   │ 集中管理 │ 建置成本爆炸     │
├─────────────────────────────────────────┤
│ Polyrepo   │ 團隊獨立 │ 同步流程複雜     │
├─────────────────────────────────────────┤
│ Monorepo   │ 統一基礎 │ 仰賴成熟工具鏈   │
└─────────────────────────────────────────┘
```

### Slide 3: 核心洞察

```
Monorepo 不是把程式碼塞進同一個資料夾

而是把協作成本變成系統層面的能力
```

### Slide 4: 誰在用？

```
Google    20 億行 | 86TB | 900 萬檔案
Meta      1 億行  | Mercurial Monorepo
Microsoft 300GB   | Windows + Office

✓ 原子化提交
✓ 大規模重構
✓ 統一 CI/CD
✓ 跨團隊協作可視化
```

### Slide 5: 核心觀念

```
" Monorepo 是一個基礎設施決策
  不是一個資料夾結構 "
```

---

## 03 - 第二章：工具鏈選型

### Slide 1: 演進

```
工具鏈演進：從能用到好用

2016  Lerna        多套件發布（已非主流）
2018  pnpm         極致依賴管理（-70% 空間）
2020  Nx/Turbo     智慧型構建系統
```

### Slide 2: Nx vs Turborepo 對比

```
              Nx              Turborepo
─────────────────────────────────────────
快取機制      Nx Cloud         Vercel Remote Cache
任務編排      dependsOn        ^build 語法
依賴視覺化    互動式 (nx graph) 靜態 (Graphviz)
程式碼生成    nx generate      ✗ 不支援
插件生態      豐富             專注核心
```

### Slide 3: 如何選擇？

```
需要深度整合？ → Nx
追求簡潔配置？ → Turborepo

小型團隊 (< 10人)  快速啟動 → Turborepo
大型團隊 (> 10人)  程式碼生成 → Nx
```

---

## 04 - 第三章：團隊治理

### Slide 1: 版本策略

```
Fixed Mode          vs       Independent Mode
─────────────────────────────────────────────
所有 packages               每個 package
共用一個版本號              維護自己的版本

✓ 版本管理簡單              ✓ 版本靈活
✓ 依賴關係清晰              ✓ 更新彈性高
✗ 版本號消耗快              ✗ 依賴管理複雜

適合：Scrum 團隊            適合：多團隊協作
```

### Slide 2: 過度共享的問題

```
代碼共享 = 雙面刃

❌ 問題 1：修改其他團隊的代碼
   增加維護複雜度

❌ 問題 2：外部使用內部代碼
   被鎖定在特定 API

❌ 問題 3：依賴錯誤的庫
   UI 誤用 Data Layer
```

### Slide 3: CODEOWNERS

```
# CODEOWNERS

* @core-infra-team

/libs/ui/           @design-system-team
/libs/data-access/  @backend-guild
*.json              @core-infra-team
nx.json             @core-infra-team @tech-lead
```

### Slide 4: CODEOWNERS 價值

```
🛡️ 防止架構腐化
👥 明確責任歸屬
⚡ 加速審查流程

+ Nx enforce-module-boundaries
  → lint 階段就報錯
```

---

## 05 - 第四章：遠端快取優化

### Slide 1: 核心概念

```
" 不要在你的機器上
  重複已完成的任務 "

Dev A → Upload → Remote Cache → Cache Hit → Dev B
```

### Slide 2: 效能數據

```
Before    45 分鐘
After      8 分鐘
─────────────────
提升       82% ⬆️
```

### Slide 3: 方案選擇

```
✅ 最推薦：官方服務
─────────────────────────────
Nx Cloud          設定簡單，幾分鐘完成
Vercel Cache      與 Vercel 完美整合

⚠️ 預算有限時：自托管
─────────────────────────────
S3 自托管         15 秒存取，成本可控
AWS ECS           1分30秒，不推薦
```

### Slide 4: Turborepo 機制

```
Remote Caching + On-Demand Builds

1. 圖譜分析：構建依賴圖
2. 指紋計算：基於輸入計算唯一指紋
3. 快取查找：先本地，再遠端
4. 執行或恢復：命中則恢復，否則執行
```

### Slide 5: 效能案例

```
React 元件庫建置

無快取      45 秒
Nx Cloud    12 秒
S3 快取      8 秒 ⚡
```

---

## 06 - 第五章：UI Library 與 AI

### Slide 1: 傳統 vs shadcn/ui

```
傳統 UI Library        shadcn/ui
────────────────────────────────────
npm install            npx shadcn add
黑盒子依賴             直接複製程式碼
無法客製化             完全控制
版本升級風險           零依賴
```

### Slide 2: shadcn/ui 三大優勢

```
1️⃣ 完全所有權
   自由更改，不等上游

2️⃣ 零依賴
   無隱藏的 package dependency

3️⃣ 架構一致性
   統一程式碼風格和標準
```

### Slide 3: AI 賦能流程

```
Step 1: Monorepo as Context
        → Component Registry
        → Design Tokens
        → Business Logic

Step 2: AI + MCP Protocol
        → 結構化元件資訊

Step 3: Intelligent Assembly
        → AI 智慧組裝
```

### Slide 4: 演進路徑

```
過去    手動複製貼上
現在    組件復用
未來    AI 智慧生成 ✨
```

---

## 07 - 第六章：未來展望

### Slide 1: 兩種整合策略

```
終結工具鏈碎片化

Bun     從 Runtime 層整合   (bottom-up)
Vite+   從工具鏈層整合      (top-down)
```

### Slide 2: 目前的工具鏈

```
4 層工具，4 套配置

npm/pnpm     Package Manager
tsc/babel    Transpiler
webpack/vite Bundler
nx/turbo     Task Runner
```

### Slide 3: Bun 效能

```
bun install

npm     33.4 秒
pnpm    14.6 秒
bun      2.1 秒 ⚡

數量級差距
```

### Slide 4: Midjourney 案例

```
Midjourney 全面使用 Bun

百萬用戶 👥
5 人維護 👨‍💻

" 過度的效能優化是被禁止的 "
" 堅決反對基礎設施上的臃腫 "
```

### Slide 5: VoidZero 是什麼？

```
VoidZero

尤雨溪 2024 年成立的公司
打造完整的開源工具鏈

┌─────────────────────────────────────┐
│  Vite      建構工具 (Build Tool)    │
│  Vitest    單元測試框架             │
│  Rolldown  打包工具 (Bundler)       │
│  Oxc       底層編譯工具             │
└─────────────────────────────────────┘

JS 生態系的瑞士刀 🇨🇭
```

> 參考：[JSDC 2024｜一起探索 VoidZero 為 JS 生態系準備的瑞士刀](https://www.codefarmer.tw/blog/jsdc-2024-notes) by CK

### Slide 6: Vite+ 內建命令

```
vite new     腳手架（monorepo 優化）
vite test    單元測試（Vitest）
vite lint    程式碼檢查（Oxlint 100x faster）
vite fmt     格式化（Oxfmt）
vite lib     函式庫打包（Rolldown）
vite run     monorepo 任務執行器 ⚡
vite ui      GUI devtools

2026 年初公開預覽
```

### Slide 7: Bun vs Vite+

```
              Bun              Vite+
─────────────────────────────────────────────
策略          Runtime 整合      工具鏈整合
TS 支援       原生執行          需編譯
生態          發展中            成熟
適合          追求簡化          大型專案
```

### Slide 8: Oxlint

```
ESLint    5 分鐘  (200+ packages)
Oxlint    3 秒    (200+ packages)
─────────────────────────────────
提升      100x ⚡

雙軌策略：
Oxlint (90%) + ESLint (10%)
```

---

## 08 - 第七章：Infra Core 思維

### Slide 1: 冰山模型

```
          ┌─────────────────┐
水面上    │  UI 組件開發     │
          │  Business Logic │
          │  新功能、新頁面  │
          └────────┬────────┘
                   │
          ┌────────┴────────┐
水面下    │  Build System    │
          │  CI/CD Pipeline  │
          │  Dependency Graph│
          │  Cache Management│
          │  Code Generation │
          └─────────────────┘
```

### Slide 2: 核心觀念

```
" 地基決定建築的高度 "

開發者專注在產品
基礎設施由 Monorepo 自動處理
```

### Slide 3: 前端工程師的 Infra 思維

```
你寫的每一行配置
定義的每一個邊界

都是在為未來的數百位開發者
為團隊的開發速度和穩定性
打下基礎
```

---

## 09 - 第八章：總結

### Slide 1: 這是經驗分享

```
不是「你一定要用 Monorepo」

而是分享我的實踐與思考
```

### Slide 2: 三個問題

```
❓ 你的團隊真的需要 Monorepo 嗎？
❓ 你的專案規模適合嗎？
❓ 你的團隊準備好了嗎？

適合你的才是最好的
```

### Slide 3: 如果決定採用

```
選對工具    Nx / Turborepo / Bun / Vite+
訂好規則    CODEOWNERS / 版本策略 / DDD
善用 AI     Monorepo as Context / MCP
```

### Slide 4: 核心提醒

```
謹慎思考技術架構

不是每個專案都需要 Monorepo
過度設計比沒有設計更糟糕
```

### Slide 5: 核心理念

```
" Don't over-design,
  focus on simplicity "

不要過度設計
專注於化繁為簡
```

### Slide 6: 收尾金句

```
" 地基穩了，上面才能蓋得高。

  但前提是——
  你真的需要蓋那麼高。"
```

---

## 10 - 結尾

```
Thank You!

🌐 michaello.me
👨‍💻 @Michael0520
📸 @michaello.dev

JSDC 2025 • Taiwan • 2025.11.29
```

---

## 📊 投影片統計

| 章節               | 投影片數量 |
| ------------------ | ---------- |
| 00 封面/自介       | 2          |
| 01 Code for Taiwan | 3          |
| 02 第一章          | 5          |
| 03 第二章          | 3          |
| 04 第三章          | 4          |
| 05 第四章          | 5          |
| 06 第五章          | 4          |
| 07 第六章          | 8          |
| 08 第七章          | 3          |
| 09 第八章          | 6          |
| 10 結尾            | 1          |
| **總計**           | **~44 張** |

---

## 🎨 設計建議

1. **數據要大**：效能數據、時間對比放大顯示
2. **對比要清楚**：用表格或並列方式呈現
3. **金句要突出**：核心理念用大字體
4. **圖示輔助**：冰山模型、流程圖等視覺化
5. **留白空間**：精簡風格，不要塞太多文字

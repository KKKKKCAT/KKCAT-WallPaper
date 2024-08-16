# 📱 KKCAT WallPaper：部署你的終極壁紙網站

輕鬆創建並部署高品質的壁紙網站！無論你偏好簡單的靜態版本，還是需要後端支持的高級動態版本，KKCAT WallPaper 都能滿足你的需求。

![](https://raw.githubusercontent.com/KKKKKCAT/KKCAT-WallPaper/main/img/kkcat-wallpaper-01.webp)

## 使用說明

- [English](README.md) - [繁體中文](README_zh-TW.md) - [简体中文](README_zh-CN.md) - [日本語](README_ja.md) - [한국어](README_ko.md)

## 🌟 功能特色

### 靜態版本
- **快速且簡單的部署**：只需不到 10 分鐘，即可使用 Cloudflare Workers 部署靜態版本，無需複雜的設置或本地工具。
- **完全靜態**：整個網站以靜態 HTML 提供，確保快速加載和簡單維護。
- **可自定義**：直接修改 HTML 和 CSS 來滿足你的需求，無需後端配置。

### 帶後端的動態版本
- **數據庫驅動的內容**：通過後端數據庫動態管理壁紙，輕鬆進行更新和擴展。
- **管理界面**：內建的管理面板，用於上傳、編輯和刪除壁紙，讓你完全掌控內容。
- **安全且私密**：動態版本的源碼不對外公開，確保你的數據和應用程序的安全性。

## 🚀 線上展示

探索你自己的壁紙網站的潛力：
- **靜態版本**： [查看展示](https://free-wallpaper.kkcat.blog)
- **動態版本**： [查看展示](https://wallpaper.kkcat.blog)

## ⭐ 為何選擇 KKCAT WallPaper？

- **靜態版本開源**：完全開源，適合想要快速上線且不需要後端支持的用戶。
- **可擴展的動態版本**：動態版本非常適合需要後端功能的用戶，提供更強大的解決方案。
- **現代設計**：響應式且視覺吸引力強的佈局，完美展示高品質壁紙。
- **互動畫廊**：動態畫廊帶有懸停效果和分頁功能，提供引人入勝的用戶體驗。

## ⚡ 快速開始

### 靜態版本

1. **登入 Cloudflare**：進入你的 Cloudflare 賬戶。
2. **創建一個新 Worker**：導航至 Workers & Pages 部分。
3. **部署**：將靜態 HTML 代碼複製到 Worker 編輯器中，保存並部署。

欲查看源碼，請訪問 [靜態版本倉庫](https://github.com/KKKKKCAT/KKCAT-WallPaper/blob/main/wallpaper-free-worker.js)。

### 帶後端的動態版本

![](https://raw.githubusercontent.com/KKKKKCAT/KKCAT-WallPaper/main/img/kkcat-wallpaper-02.webp)

1. **配置環境**：在你的環境中配置數據庫憑證和認證令牌。
2. **部署後端**：使用你喜歡的服務（如 Vercel 或 AWS Lambda）來部署後端代碼。
3. **管理內容**：通過管理界面動態管理壁紙。

> **注意**：為了確保安全性和隱私性，動態版本的源碼不對外公開，如欲購買可聯絡作者。

## 📄 API 文檔

對於動態版本，提供了一個 API 用於以 JSON 格式檢索壁紙數據。

### 示例響應：
```json
{
  "id": "101",
  "url": "https://example.com/image1.jpg",
  "description": "美麗的山間日落",
  "timestamp": "2024-08-16T12:34:56Z"
}
```

## 未來功能（TODO）

- [ ] 擴展多語言支持
- [x] 開發安全的管理員登入系統
- [x] 實現動態壁紙管理
- [ ] 增加用戶賬號功能，支持個性化壁紙收藏
- [ ] 集成流行的雲存儲解決方案

## 參與貢獻

歡迎任何形式的貢獻！如有重大更改，請先開啟 Issue 討論你的想法，然後再提交 Pull Request。

## 👤 作者

**KKCAT**

- [![Telegram](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t.me/kkkkkcat)
- [![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat&logo=twitter)](https://x.com/kcat88888)

---

使用 KKCAT WallPaper，讓你的網站如虎添翼，簡單與強大並存，唯一的限制就是你的創意。🚀

---

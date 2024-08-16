# 📱 KKCAT WallPaper：部署你的终极壁纸网站

轻松创建并部署高品质的壁纸网站！无论你偏好简单的静态版本，还是需要后端支持的高级动态版本，KKCAT WallPaper 都能满足你的需求。

![](https://raw.githubusercontent.com/KKKKKCAT/KKCAT-WallPaper/main/img/kkcat-wallpaper-01.webp)

## 使用说明

- [English](README.md) - [繁体中文](README_zh-TW.md) - [简体中文](README_zh-CN.md) - [日本语](README_ja.md) - [한국어](README_ko.md)

## 🌟 功能特色

### 静态版本
- **快速且简单的部署**：只需不到 10 分钟，即可使用 Cloudflare Workers 部署静态版本，无需複杂的设置或本地工具。
- **完全静态**：整个网站以静态 HTML 提供，确保快速加载和简单维护。
- **可自定义**：直接修改 HTML 和 CSS 来满足你的需求，无需后端配置。

### 带后端的动态版本
- **数据库驱动的内容**：通过后端数据库动态管理壁纸，轻松进行更新和扩展。
- **管理界面**：内建的管理面板，用于上传、编辑和删除壁纸，让你完全掌控内容。
- **安全且私密**：动态版本的源码不对外公开，确保你的数据和应用程序的安全性。

## 🚀 线上展示

探索你自己的壁纸网站的潜力：
- **静态版本**： [查看展示](https://free-wallpaper.kkcat.blog)
- **动态版本**： [查看展示](https://wallpaper.kkcat.blog)

## ⭐ 为何选择 KKCAT WallPaper？

- **静态版本开源**：完全开源，适合想要快速上线且不需要后端支持的用户。
- **可扩展的动态版本**：动态版本非常适合需要后端功能的用户，提供更强大的解决方案。
- **现代设计**：响应式且视觉吸引力强的佈局，完美展示高品质壁纸。
- **互动画廊**：动态画廊带有悬停效果和分页功能，提供引人入胜的用户体验。

## ⚡ 快速开始

### 静态版本

1. **登入 Cloudflare**：进入你的 Cloudflare 账户。
2. **创建一个新 Worker**：导航至 Workers & Pages 部分。
3. **部署**：将静态 HTML 代码複製到 Worker 编辑器中，保存并部署。

欲查看源码，请访问 [静态版本仓库](https://github.com/KKKKKCAT/KKCAT-WallPaper/blob/main/wallpaper-free-worker.js)。

### 带后端的动态版本

![](https://raw.githubusercontent.com/KKKKKCAT/KKCAT-WallPaper/main/img/kkcat-wallpaper-02.webp)

1. **配置环境**：在你的环境中配置数据库凭证和认证令牌。
2. **部署后端**：使用你喜欢的服务（如 Vercel 或 AWS Lambda）来部署后端代码。
3. **管理内容**：通过管理界面动态管理壁纸。

> **注意**：为了确保安全性和隐私性，动态版本的源码不对外公开，如欲购买可联络作者。

## 📄 API 文档

对于动态版本，提供了一个 API 用于以 JSON 格式检索壁纸数据。

### 示例响应：
```json
{
  "id": "101",
  "url": "https://example.com/image1.jpg",
  "description": "美丽的山间日落",
  "timestamp": "2024-08-16T12:34:56Z"
}
```

## 未来功能（TODO）

- [ ] 扩展多语言支持
- [x] 开发安全的管理员登入系统
- [x] 实现动态壁纸管理
- [ ] 增加用户账号功能，支持个性化壁纸收藏
- [ ] 集成流行的云存储解决方案

## 参与贡献

欢迎任何形式的贡献！如有重大更改，请先开启 Issue 讨论你的想法，然后再提交 Pull Request。

## 👤 作者

**KKCAT**

- [![Telegram](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t.me/kkkkkcat)
- [![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat&logo=twitter)](https://x.com/kcat88888)

---

使用 KKCAT WallPaper，让你的网站如虎添翼，简单与强大并存，唯一的限制就是你的创意。🚀

---

# 📱 KKCAT WallPaper: 궁극의 배경화면 웹사이트 배포하기

고품질의 배경화면 웹사이트를 손쉽게 만들고 배포하세요! 단순한 정적 버전을 원하시든 백엔드 지원이 포함된 고급 동적 버전을 원하시든, KKCAT WallPaper가 모든 것을 해결해 드립니다.

![](https://raw.githubusercontent.com/KKKKKCAT/KKCAT-WallPaper/main/img/kkcat-wallpaper-01.webp)

## README

- [English](README.md) - [繁體中文](README_zh-TW.md) - [简体中文](README_zh-CN.md) - [日本語](README_ja.md) - [한국어](README_ko.md)

## 🌟 기능

### 정적 버전
- **빠르고 쉬운 배포**: 복잡한 설정이나 로컬 도구가 필요 없이 Cloudflare Workers를 사용하여 10분 이내에 정적 버전을 배포할 수 있습니다.
- **완전한 정적**: 전체 웹사이트가 정적 HTML로 제공되어 빠른 로드 시간과 쉬운 유지관리가 가능합니다.
- **커스터마이징 가능**: HTML과 CSS를 직접 수정하여 백엔드 설정 없이도 필요에 맞게 조정할 수 있습니다.

### 백엔드가 포함된 동적 버전
- **데이터베이스 기반 콘텐츠**: 백엔드 데이터베이스를 통해 배경화면을 동적으로 관리하여 손쉬운 업데이트와 확장이 가능합니다.
- **관리자 인터페이스**: 배경화면을 업로드, 편집 및 삭제할 수 있는 내장 관리자 패널이 제공되어 콘텐츠를 완벽하게 제어할 수 있습니다.
- **안전하고 비공개**: 동적 버전의 소스 코드는 공개되지 않으며, 데이터와 애플리케이션의 보안을 보장합니다.

## 🚀 라이브 데모

자신만의 배경화면 웹사이트의 잠재력을 탐구해보세요:
- **정적 버전**: [데모 보기](https://free-wallpaper.kkcat.blog)
- **동적 버전**: [데모 보기](https://wallpaper.kkcat.blog)

## ⭐ KKCAT WallPaper를 선택해야 하는 이유

- **정적 버전은 오픈 소스**: 완전히 오픈 소스로 제공되며, 백엔드가 필요 없는 경우 빠르게 시작하기에 이상적입니다.
- **확장 가능한 동적 버전**: 백엔드 기능이 필요한 사용자에게 더 강력한 솔루션을 제공합니다.
- **모던한 디자인**: 반응형이고 시각적으로 매력적인 레이아웃으로, 고품질 배경화면을 표시하기에 완벽합니다.
- **인터랙티브 갤러리**: 호버 효과와 페이지네이션을 포함한 동적 갤러리를 통해 몰입감 있는 사용자 경험을 제공합니다.

## ⚡ 빠른 시작

### 정적 버전

1. **Cloudflare에 로그인**: Cloudflare 계정에 접근합니다.
2. **새로운 Worker 생성**: Workers & Pages 섹션으로 이동합니다.
3. **배포**: 정적 HTML 코드를 Worker 에디터에 복사하여 저장하고 배포합니다.

소스 코드는 [정적 버전 리포지토리](https://github.com/KKKKKCAT/KKCAT-WallPaper/blob/main/wallpaper-free-worker.js)를 방문하세요.

### 백엔드가 포함된 동적 버전

![](https://raw.githubusercontent.com/KKKKKCAT/KKCAT-WallPaper/main/img/kkcat-wallpaper-02.webp)

1. **환경 설정**: 데이터베이스 자격 증명 및 인증 토큰으로 환경을 구성합니다.
2. **백엔드 배포**: Vercel 또는 AWS Lambda와 같은 선호하는 서비스를 사용하여 백엔드를 배포합니다.
3. **콘텐츠 관리**: 관리자 인터페이스를 사용하여 배경화면을 동적으로 관리합니다.

> **참고**: 보안과 프라이버시를 보장하기 위해 동적 버전의 소스 코드는 공개되지 않습니다. 구매에 관심이 있으시면 저자에게 문의하세요.

## 📄 API 문서

동적 버전의 경우 JSON 형식으로 배경화면 데이터를 검색할 수 있는 API가 제공됩니다.

### 응답 예시:
```json
{
  "id": "101",
  "url": "https://example.com/image1.jpg",
  "description": "산 위로 펼쳐지는 아름다운 일몰",
  "timestamp": "2024-08-16T12:34:56Z"
}
```

## 향후 기능 (TODO)

- [ ] 다국어 지원 확대
- [x] 보안 관리 로그인 시스템 개발
- [x] 동적 배경화면 관리 구현
- [ ] 개인화된 배경화면 컬렉션을 위한 사용자 계정 추가
- [ ] 인기 있는 클라우드 스토리지 솔루션과 통합

## 기여하기

기여는 언제나 환영합니다! 큰 변경 사항이 있을 경우, 아이디어를 논의하기 위해 먼저 이슈를 열고 나서 Pull Request를 제출해 주세요.

## 👤 저자

**KKCAT**

- [![Telegram](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat-square&logo=telegram&logoColor=white)](https://t.me/kkkkkcat)
- [![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat&logo=twitter)](https://x.com/kcat88888)

---

KKCAT WallPaper로 웹사이트를 향상시키세요. 단순함과 강력함이 만나 창의력만이 한계가 됩니다. 🚀

---

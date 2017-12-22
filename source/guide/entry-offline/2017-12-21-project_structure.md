---
layout: page
title: 프로젝트 구조
type: guide
category: 'Entry Offline'
order: 1
---

엔트리 오프라인은 electron 중에서도 electron-forge라는 라이브러리를 사용하여 프로그램을 개발하였습니다. 엔트리 오프라인 프로젝트의 기본 구조도 electron-forge를 기반으로 구성되어 있습니다.

## 기본구조
```text
entry-offline/
├─ src/
│  ├─ icon/
│  ├─ main/
│  ├─ renderer/
│  │  └─ entry_offline.html
│  └─ entry_offline.js
├─ build/
└─ test/
```

### 주요 소스 (src/)
엔트리 오프라인의 모든 소스가 이곳에 있습니다.

### 빌드 소스 (build/)
엔트리 오프라인 윈도우 버전 설치 파일을 만드는 빌드 소스가 여기에 있습니다.

### 테스트 소스 (test/)
테스트 소스입니다. 샘플코드만 작성되어 있습니다.
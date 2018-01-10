---
layout: page
title: 프로젝트 구조
type: guide
category: 'Entry Offline'
order: 2
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

### 엔트리소스 (src/entry_offline.js)
프로그램 첫 구동시 수행되는 소스입니다. 메인프로세스 소스이기도 하며, 프로그램 구동과 관련된 내용이 작성되어 있습니다.

### 메인 프로세스 소스(src/main/)
메인 프로세스의 소스 입니다.

### 렌더러 프로세스 소스(src/renderer/)
렌더러 프로세스 소스입니다. 엔트리 워크스페이스를 구현하기 위한 소스 입니다.

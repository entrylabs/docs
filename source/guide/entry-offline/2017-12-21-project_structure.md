---
layout: page
title: 프로젝트 구조
type: guide
category: 'Entry Offline'
order: 2
---

Electron 의 프로세스 구조에 따라, 엔트리 오프라인은 크게 main process 와 renderer process 디렉토리로 나뉘어져 있습니다. 
[Electron Documentation](https://electronjs.org/docs/tutorial/application-architecture#electron-application-architecture) 를 참고해주세요.

아래의 구조는 주요 디렉토리를 정리한 트리입니다.

```text
entry-offline/
├─ build/
├─ (out/)
└─ src/
   ├─ icon/
   ├─ main/
   ├─ renderer/
   │  ├─ bower_components/
   │  │  ├─ entryjs/
   │  │  └─ entry-hw/
   │  ├─ lang/
   │  ├─ node_modules/
   │  │  ├─ entryjs/
   │  │  └─ entry-hw/
   │  ├─ resource_map/
   │  ├─ src/
   │  └─ entry_offline.html
   └─ entry_offline.js
```

### 빌드용 파일 (build/)
nsis 관련 파일이 파일이 들어있습니다. 이 파일들은 윈도우 버전 설치파일 빌드시에 사용됩니다.   

### 패키징 결과 디렉토리 (out/)
electron-forge 의 package 기능을 통해 생길 수 있는 폴더입니다.  
nsis 를 통한 설치파일 생성시 해당 위치에 생긴 디렉토리를 기준으로 빌드 합니다.

### 주요 소스 (src/)
엔트리 오프라인의 주요 코드가 위치합니다.

#### 메인 프로세스 소스 (src/main/)
- 메인 프로세스에서 동작하는 코드들이 있습니다.

#### 렌더러 프로세스 소스 (src/renderer/)
- 렌더러 프로세스 소스입니다. 엔트리 워크스페이스를 구현하기 위한 소스 입니다.

#### bower 설치 결과물 (src/renderer/bower_components)
- `bower install` 명령어를 통해 설치된 외부 라이브러리입니다. 이곳에는 entryjs, entry-hw 가 포함되어 있습니다.  
entryjs 는 특별하게 빌드된 결과가 들어가 있으며, entry-hw 는 일반 소스가 들어가 있습니다.  

#### 리소스 맵 (src/renderer/resource_map/)
- 오브젝트 및 사운드 등의 데이터베이스 덤프입니다. 해당 위치에서 오브젝트를 관리합니다.

#### 렌더러 메인 소스 (src/renderer/src/)
- 렌더되는 메인 페이지에서 사용되는 angularjs controller 및 기타 import 되는 소스입니다.

#### 엔트리 오프라인 렌더링 메인소스 (src/renderer/entry_offline.html)
- 엔트리 오프라인의 메인 윈도우가 되는 html 소스입니다. 

### 엔트리 오프라인 메인 프로세스 구동 파일 (src/entry_offline.js)
프로그램 첫 구동시 수행되는 파일입니다. 메인프로세스 소스이기도 하며, 프로그램 구동과 관련된 내용이 작성되어 있습니다.


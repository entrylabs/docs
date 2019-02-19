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
아래 구조는 지속적으로 변경될 수 있습니다.

```text
entry-offline/
├─ build/
└─ src/
   ├─ main/
   │  ├─ electron/
   │  ├─ static/
   │  └─ views/
   │
   └─ renderer/
      ├─ actions/
      ├─ reducers/
      ├─ components/
      ├─ resources/
      │  ├─ db/
      │  ├─ fonts/
      │  ├─ images/
      │  ├─ lang/
      │  ├─ modal/
      │  └─ uploads/
      │
      ├─ helper/
      └─ bower_components/
         ├─ entryjs/
         └─ entry-hw/
```

### 빌드용 파일 (build/)
윈도우, 맥 빌드에 필요한 파일이 들어있습니다.   

### 주요 소스 (src/)
엔트리 오프라인의 주요 코드가 위치합니다.
- main.js, main.html
  - 기본이 되는 윈도우 html 및 엔트리 오프라인 엔트리포인트 입니다.

#### 메인 프로세스 소스 (src/main/)
메인 프로세스에서 동작하는 코드들이 있습니다.
- electron : 일렉트론 구동시 필요한 파일들입니다.
- static : static file 다운로드시 필요한 파일들을 모아둔 디렉토리 입니다.
- views : 일렉트론 윈도우를 다루는 객체 및 html 이 들어있습니다.
+ fileUtils.js : 파일 시스템에 관한 로직들이 담긴 파일입니다.
+ mainUtils.js : 실제 비즈니스로직을 담당하고 있는 파일입니다.
+ ipcMainHelper.js : 렌더러 프로세스에서 오는 ipc 이벤트를 처리하는 곳입니다. MVC 의 컨트롤러와 흡사합니다. 

#### 렌더러 프로세스 소스 (src/renderer/)
렌더러 프로세스 소스입니다. 엔트리 워크스페이스를 구현하기 위한 소스 입니다.

- initEntry.js : 엔트리를 구성하기전 필요한 코드를 세팅하는 파일입니다.
- renderEntry.js : 리액트 컴포넌트를 렌더링하는 파일입니다.
- nativeMenu.js : 언어가 설정된 후 일렉트론의 메뉴 및 숏컷을 설정하는 파일입니다. 

##### 리액트 컴포넌트 및 리덕스 구성요소 (actions, reducers, components)
엔트리 워크스페이스는 리액트로 구성되었습니다. react-redux 를 구현하기 위한 기본 구성요소입니다.  

##### 리소스 맵 (resources)
데이터베이스 정보, 이미지, 모달 등의 정보를 가지고 있습니다.
- db : 엔트리에서 사용되는 기본 리소스들에 대한 데이터베이스 덤프 정보를 가집니다.
- uploads : 실제 기본 리소스들 (스프라이트 이미지, 사운드)이 담긴 위치입니다.
- lang : 언어 정보 데이터입니다.
+ static.js / static_mini.js : 엔트리를 구동하는데 필요한 특별한 정보 파일입니다. 실과형모드에는 static_mini.js 를 참조합니다.

##### 유틸 파일 (helper)
렌더러 프로세스의 비즈니스 로직을 담당합니다.

- entry : 엔트리 코드와 밀접한 연관이 있는 파일입니다. (엔트리 내부 프로토타입 몽키패치, 오브젝트 조작 등)
+ databaseManager.js : 리소스맵의 db 를 가져와 출력하는 Data Access Object 역할을 하는 파일입니다.
+ storageManager.js : 로컬스토리지를 다루는 파일입니다.
+ rendererUtils.js : 렌더러 프로세스의 일반적인 비즈니스 로직을 담당하는 파일입니다.
+ ipcRendererHelper.js : 메인 프로세스와의 ipc 통신을 위한 파일입니다.

##### 정적 라이브러리 (bower_components)
entryjs, entry-hw 등 정적라이브러리를 모은 디렉토리입니다. `bower.json` 파일을 참고해주세요. 

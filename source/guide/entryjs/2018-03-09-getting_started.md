---
layout: page
title: 시작하기
type: guide
category: 'Entry JS'
order: 1
---

`Entry JS` 는 엔트리에 사용되는 블록과 워크스페이스를 만들기위한 라이브러리 입니다.  
하드웨어 업체에서는 하드웨어 블록을 추가하는 용도로 사용됩니다.

## 개발 환경 세팅

### 프로젝트 포크
엔트리 개발시 엔트리의 원본 프로젝트에 직접 작업은 허용되지 않습니다.  
그러므로 프로젝트를 복사하는 `fork` 작업을 거쳐야 합니다.  
먼저, [EntryJS GitHub 페이지](https://github.com/entrylabs/entryjs)에 접속 합니다.  

사이트 접속 후 우측 상단에 있는 Fork 버튼을 클릭합니다.
![Fork](/docs/images/entry-hw/fork.png)  

이후, 복사한 레포지토리를 git clone으로 내 로컬 컴퓨터에 다운 받아 개발 가능한 상태로 만듭니다.  

### 클론

fork 를 통해 원격 저장소를 복사하였으면, 로컬로 저장소를 가져와야 합니다.  
`git clone` 을 수행하여 로컬에 해당 소스를 받습니다. 기본 브랜치인 `develop-hw` 를 기본브랜치로 가져오기 위해선 아래와 같이 입력합니다.
``` bash
$ git clone -b develop-hw https://github.com/(본인의 Repository)/entryjs.git
```

### 브랜치 변경

EntryJS 는 브랜치를 통해 작업내역을 관리중입니다. 
자세한 설명은 [Git - 브랜치란 무엇인가?](https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%3F)를 참고하세요.  

엔트리 팀 내부에서 개발 시 사용되는 브랜치는 develop 입니다.  
**하드웨어 개발시** 사용되는 브랜치는 `develop-hw` 입니다.

기본 브랜치를 먼저 `develop-hw` 로 수정해주세요. 현재 브랜치가 `develop-hw` 라면 수정할 필요 없습니다.
``` bash
$ git checkout develop-hw
```

### 의존성 모듈 설치  
```bash
$ npm install
```

### 테스트용 워크스페이스 페이지 로드

단순 블록 개발의 경우, 내장되어있는 dev-server 를 실행하여 워크스페이스를 확인해 볼 수 있습니다.  
아래의 명령어를 통해 `localhost:8080` 서버를 띄울 수 있습니다.

```bash
$ npm run serve
```

### 빌드

일반 개발시에는 빌드작업이 필요없습니다. 하지만 빌드 결과물이 필요한 경우 (오프라인 프로젝트 및 기타 위치에서 사용) 유효합니다.

``` bash
$ npm run dev # 개발모드로 실행 (파일 수정시 실시간으로 빌드 파일이 생성됨)
$ npm run dist # 프로덕션 빌드파일 생성
```

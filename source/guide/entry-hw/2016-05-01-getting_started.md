---
layout: page
title: 시작하기
type: guide
category: 'Entry Hw'
order: 1
---

Entry Hardware는 엔트리에서 개발한 엔트리와 하드웨어를 연동하기 위한 프로그램입니다.  
엔트리에 신규 하드웨어를 등록하기 위해서는 Entry Hardware 에 하드웨어 모듈을 추가해야합니다.

## 엔트리 하드웨어 추가 순서
1. 하드웨어 등록 신청서 작성 및 제출([상세안내](./2017-05-16-enroll_entry-hw.html))
2. [하드웨어 모듈 추가하기](.//2016-05-03-add_module.html)
3. 하드웨어와 연동되는 [엔트리 블록 만들기](..//entryjs/2016-05-22-add_new_blocks.html)
4. 실행하여 테스트하기
5. 테스트코드 [GitHub의 Pull Request로 전달](../etc/2016-05-03-git_fork.html)하기
6. 하드웨어 ID 발급 받기
7. 엔트리 서비스 정기 반영을 통한 하드웨어 추가

Entry Hardware는 1.5.0 부터 [Electron](https://electron.atom.io/)기반으로 동작 합니다. 정확한 사용법은 Electron 사이트를 참조 하시기 바랍니다.

## 개발환경 세팅

### 프로젝트 포크
엔트리 개발시 엔트리의 원본 프로젝트에 직접 작업은 허용되지 않습니다.  
그러므로 프로젝트를 복사하는 `fork` 작업을 거쳐야 합니다.  
먼저, Entry-HW GitHub 페이지에 접속 합니다.  

> [https://github.com/entrylabs/entry-hw](https://github.com/entrylabs/entry-hw)  

사이트 접속 후 우측 상단에 있는 Fork 버튼을 클릭합니다.
![Fork2](../../images/entry-hw/fork2.png)  

Fork를 통하여 본인 계정으로 해당 Repository를 복사합니다. 복사한 레포지토리를 git clone으로 내 로컬 컴퓨터에 다운 받아 개발 가능한 상태로 만듭니다.

### 클론

fork 를 통해 원격 저장소를 복사하였으면, 로컬로 저장소를 가져와야 합니다. `git clone`을 수행하여 로컬에 해당 소스를 받습니다.
``` bash
$ git clone https://github.com/(본인의 Repository)/entry-hw.git
```

#### Node-gyp 설치

엔트리 하드웨어는 시리얼포트 통신을 위해 [node-serialport](https://github.com/node-serialport/node-serialport) 라이브러리를 사용합니다.
해당 라이브러리를 사용하기 위해서는 C++, python 빌드 환경과 [node-gyp](https://github.com/nodejs/node-gyp) 라이브러리가 필요합니다.  
빌드에 대한 자세한 사항은 [node-gyp#installation](https://github.com/nodejs/node-gyp#installation) 을 참고해 주세요.

이 글에선 윈도우를 기준으로 설명하도록 하겠습니다.

먼저 빌드 환경 구성을 위해 아래의 명령어로 파이썬, 윈도우 C++ 관련 툴을 설치해주세요. (관리자 모드 프롬프트에서 입력하세요)
```bash
npm install --global --production windows-build-tools
```

그 다음 빌드 라이브러리인 node-gyp 을 설치해주세요.
```bash
npm install --global node-gyp
``` 

> 만약 하드웨어 선택시 프로그램이 멈춘다면,
> `npx electron-build` 명령으로 재빌드 해보시길 바랍니다.

### 의존성 모듈 설치  
``` bash
$ npm install || yarn
```

### 실행  
``` bash
$ npm run start || yarn start
```

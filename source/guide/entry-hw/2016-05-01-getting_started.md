---
layout: page
title: 시작하기
type: guide
category: 'Entry Hw'
order: 1
---

Entry Hardware는 엔트리에서 개발한 엔트리와 하드웨어를 연동하기 위한 프로그램입니다. 엔트리 사이트에 접속하시면 엔트리를 사용한 블록코딩 환경과 하드웨어를 연동하는 모습을 확인해 볼 수 있으며, 엔트리에 신규 하드웨어를 등록하기 위해서는 Entry Hardware 에 하드웨어 모듈을 추가함으로써 가능합니다.

## 엔트리 하드웨어 추가 순서
1. 하드웨어 등록 신청서 작성 및 제출([상세안내](./2017-05-16-enroll_entry-hw.html))
2. [하드웨어 모듈 추가하기](.//2016-05-03-add_module.html)
3. 하드웨어와 연동되는 [엔트리 블록 만들기](..//entryjs/2016-05-22-add_new_blocks.html)
4. 실행하여 테스트하기
5. 테스트코드 [GitHub의 Pull Request로 전달](../etc/2016-05-03-git_fork.html)하기
6. 하드웨어 ID 발급 받기
7. 엔트리 서비스 정기 반영을 통한 하드웨어 추가

Entry Hardware는 1.5.0 부터 [Electron](https://electron.atom.io/)기반으로 동작 합니다. 정확한 사용법은 Electron 사이트를 참조 하시기 바랍니다. 현재 엔트리 하드웨어 연결 프로그램은 Windows와 macOS를 지원합니다.

## 개발환경 세팅

### 클론
클론을 먼저 하기 전에 Git Fork기능으로 현재 Entrylabs의 Repository를 복사하여 자신의 Repository를 만듭니다. 이후 `Git Clone`을 수행하여 자신의 로컬에 해당 소스를 받습니다.
``` bash
$ git clone https://github.com/(본인의 Repository)/entry-hw.git
```

### 의존설 모듈 설치  
``` bash
$ npm install
// yarn으로도 똑같이 설치가 가능합니다.
$ yarn
```

### 실행  
``` bash
// 디버그 모드로 실행됨 (추천)
$ npm start
```

> Nwjs -> Electron 변경  
기존의 Nw.js 환경에서 Electron 환경으로 변경 하였습니다.
프레임워크 교체에 따라 초기 실행 및 소스 세팅등의 일부 사항이 변경되었으나 기본적인 개발방식인 모듈추가는 기존과 똑같이 되도록 변경하였습니다.

## 하드웨어 모듈 추가
하드웨어 모듈인 `.js` `.json` `.png` 파일 3개를 추가합니다. 해당 파일 3개 추가만으로도 하드웨어 프로그램에서 특정 하드웨어를 선택 할수 있게 됩니다.

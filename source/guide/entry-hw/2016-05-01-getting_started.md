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

## 개발 환경 설정

### 프로젝트 포크
엔트리 개발시 엔트리의 원본 프로젝트에 직접 작업은 허용되지 않습니다.
그러므로 프로젝트를 복사하는 `fork` 작업을 거쳐야 합니다.
먼저, Entry-HW GitHub 페이지에 접속 합니다.

> [https://github.com/entrylabs/entry-hw](https://github.com/entrylabs/entry-hw)

사이트 접속 후 우측 상단에 있는 Fork 버튼을 클릭합니다.
![Fork2](../../images/entry-hw/fork2.png)

Fork를 통하여 본인 계정으로 해당 Repository를 복사합니다. 복사한 레포지토리를 git clone으로 내 로컬 컴퓨터에 다운 받아 개발 가능한 상태로 만듭니다.

### 클론
클론을 먼저 하기 전에 Git Fork기능으로 현재 Entrylabs의 Repository를 복사하여 자신의 Repository를 만듭니다. 이후 `Git Clone`을 수행하여 자신의 로컬에 해당 소스를 받습니다.
``` bash
$ git clone https://github.com/(본인의 Repository)/entry-hw.git
```

### 의존성 모듈 설치
``` bash
$ npm install
// yarn으로도 똑같이 설치가 가능합니다.
$ yarn
```

### 실행
``` bash
$ npm start
```
---
layout: page
title: 시작하기
type: guide
category: 'Entryjs'
order: 1
---

Entry JS는 엔트리에 사용되는 블록과 블록조립소를 만들기위한 라이브러이 입니다. 기본적으로 하드웨어 업체에서는 하드웨어 블록을 추가하는 용도로 사용되고 있으며 엔트리 하드웨어 프로그램과 통신하기 위한 제반 환경을 제공하고 있습니다.

## 개발 환경 세팅

### 클론
클론을 먼저 하기 전에 Git Fork기능으로 현재 Entrylabs의 Repository를 복사하여 자신의 Repository를 만듭니다. 이후 `Git Clone`을 수행하여 자신의 로컬에 해당 소스를 받습니다.
``` bash
$ git clone https://github.com/(본인의 Repository)/entryjs.git
```

### 의존성 모듈 설치  
``` bash
$ npm install
```

### 빌드  
``` bash
// 글로벌 설치 빌드
$ grunt build
// 로컬 설치 빌드
$ npm run build
```

## 하드웨어 등록
`hw.js`파일의 수정과 `block_(하드웨어명).js`파일을 추가하여 하드웨어 프로그램에 대응하는 Entry JS영역을 만들수 있습니다.

## 블록추가
블록을 기본적으로 `block_entry.js`파일에 추가됩니다. 다만 앞으로 하드웨어 블록의 경우 분리 등록이 가능하도록 처리될 예정입니다. 이와 관련된 내용은 [이 문서]()를 참고해 주세요.

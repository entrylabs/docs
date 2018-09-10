---
layout: page
title: 시작하기
type: guide
category: 'Entryjs'
order: 1
---

Entry JS는 엔트리에 사용되는 블록과 블록조립소를 만들기위한 라이브러리 입니다. 기본적으로 하드웨어 업체에서는 하드웨어 블록을 추가하는 용도로 사용되고 있으며 엔트리 하드웨어 프로그램과 통신하기 위한 환경을 제공하고 있습니다.

## 개발 환경 세팅

### 클론
클론을 먼저 하기 전에 Git Fork기능으로 현재 Entrylabs의 Repository를 복사하여 자신의 Repository를 만듭니다. 이후 `Git Clone`을 수행하여 자신의 로컬에 해당 소스를 받습니다.
``` bash
$ git clone https://github.com/(본인의 Repository)/entryjs.git
```

### 의존성 모듈 설치  
``` bash
$ npm install
// 또는
$ yarn
```

### 빌드  
``` bash
// 글로벌 설치 빌드
$ npm run dist
// 또는
$ yarn dist
```

## 하드웨어 블록 등록
`block_(하드웨어명).js`파일을 추가하여 하드웨어 프로그램에 대응하는 블록 파일을 만들 수 있습니다.

일반적인 블록 또한 `block_(종류).js` 와 같은 이름을 가지고 있습니다. ex) `block_calc.js`
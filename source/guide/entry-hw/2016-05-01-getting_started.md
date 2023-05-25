---
layout: page
title: 시작하기
type: guide
category: 'Entry HW'
order: 1
---

Entry Hardware 는 엔트리에서 개발한 엔트리와 하드웨어를 연동하기 위한 프로그램입니다.  
엔트리에 신규 하드웨어를 등록하기 위해서는 Entry Hardware 에 하드웨어 모듈을 추가해야합니다.

## 엔트리 하드웨어 추가 순서
1. 하드웨어 등록 신청서 작성 및 제출([상세안내](/guide/entry-hw/2017-05-16-enroll_entry-hw.html))
2. [하드웨어 모듈 추가하기](/guide/entry-hw/2016-05-03-add_module.html)
3. 하드웨어와 연동되는 [엔트리 블록 만들기](/guide/entryjs/2016-05-22-add_new_blocks.html)
4. 실행하여 테스트하기
5. 테스트코드 [GitHub의 Pull Request로 전달](/guide/etc/2016-05-03-git_fork.html)하기
6. 하드웨어 ID 발급 받기
7. 엔트리 서비스 정기 반영을 통한 하드웨어 추가

## 개발환경 세팅

### NOTICE
**[개발환경설정](/guide/basic/setting_environment.html)에 사전에 필요한 환경설정이 안내되어 있습니다. 먼저 보시는 것을 추천드립니다.**

### 프로젝트 포크

엔트리 개발시 엔트리의 원본 프로젝트에 직접 작업은 허용되지 않습니다.  
그러므로 프로젝트를 복사하는 `fork` 작업을 거쳐야 합니다.  
먼저, [Entry-HW GitHub](https://github.com/entrylabs/entry-hw) 페이지에 접속 합니다.  

사이트 접속 후 우측 상단에 있는 Fork 버튼을 클릭합니다.  
![Fork2](/images/entry-hw/fork2.png)  

이후, 복사한 레포지토리를 git clone으로 내 로컬 컴퓨터에 다운 받아 개발 가능한 상태로 만듭니다.

### 클론

fork 를 통해 원격 저장소를 복사하였으면, 로컬로 저장소를 가져와야 합니다.  
`git clone` 을 수행하여 로컬에 해당 소스를 받습니다. 기본 브랜치인 `develop-hw` 를 기본브랜치로 가져오기 위해선 아래와 같이 입력합니다.
``` bash
$ git clone -b develop-hw https://github.com/(본인의 계정)/entry-hw.git
```

### Node-gyp 설치

[SerialPort 라이브러리 빌드 환경 설치](/guide/basic/setting_environment.html#SerialPort-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%B9%8C%EB%93%9C-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%B9%98) 를 참고해주세요.

### 의존성 모듈 설치  

``` bash
$ npm install
```

### 웹팩 번들링

시리얼포트 라이브러리 빌드 및 webpack 번들링을 합니다. 각 명령어를 따로 실행해도 되지만 `npm run setting` 으로 한번에 실행하실 수도 있습니다.

```bash
$ npm run setting # npm run rebuild && npm run webpack:dev
```

### 실행

``` bash
$ npm run start
```

---
layout: page
title: 개발환경 세팅
type: guide
category: 'Entry Hw'
order: 2
---

## 기본 환경 세팅  
엔트리 하드웨어 프로그램을 개발하기 위해 기본적으로 [node.js](https://nodejs.org/en/)가 설치되어 있어야 하며, 의존성 관리를 위해 `yarn`을 설치 해 사용할수도 있습니다. 또한, 필요에의해 라이브러리들을 컴파일을 수행하기 위에 visual studio의 설치가 필요할수 있습니다.  

## Node.js의 설치  
Node.js는 엔트리 개발에 있어 가장 필수 적인 프레임워크 입니다. 엔트리의 모든 소스 및 라이브러리는 Node.js를 기반으로 하고 있으며 `npm`으로 의존성 라이브러리를 관리합니다.
> 2017-07-25일 기준 현재 Node.js의 6.11.1 버전의 사용을 권장합니다.

## Git 설치하기
Git은 소스코드를 관리하기 위한 버전관리 도구 입니다. 일반적으로 많은 오픈소스들이 [Github](https://www.github.com)를 통해서 소스가 공개되어 지고 관리가 되고 있습니다. 저희의 Entry Hardware와 EntryJS의 경우에도 Github를 통해서 관리되고 있는 상태입니다. Github의 소스를 다운받고 수정한 소스를 반영하기위해서 Git Client 설치가 필수적입니다.

### Git terminal 설치
Git terminal은 다음 [설치방법](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)을 참조 바랍니다.

### Git GUI Tool
Git사용이 익숙치 않은 사용자들을 위해 GUI툴들이 제공되고 있습니다. 이 중에서 사용하기 괜찮은 툴은 Github Desktop과 SourceTree 두가지를 추천합니다. 멀티 플렛폼도 지원하니 한번 확인보길 바랍니다.

> [Github Desktop](https://desktop.github.com/)  
> [SourceTree](https://www.sourcetreeapp.com/)

### Git 자료
Git관련 자료는 Etc. 탭의 [Git 사용방법](../etc/2016-05-03-git_fork.html)에 문서를 작성해 놓왔으니 해당 문서를 확인해 주시기 바랍니다.

## Electron 설치
기존 문서에서는 Electron을 글로벌로 설치하여 관리하였지만 이제는 글로벌 설치가아닌 로컬설치 이후 `npm start`명령어로 실행하는 것을 공식적인 방식으로 변경하였습니다.

## Entry Hardware 세팅하기    

### Entry Hardware Fork하기  
Entry Hardware를 수정하고 차후에 반영하기 위해서는 Fork하는 과정이 필요합니다.  
먼저, Entry-HW GitHub 페이지에 접속 합니다.  

> [https://github.com/entrylabs/entry-hw](https://github.com/entrylabs/entry-hw)  

사이트 접속 후 우측 상단에 있는 Fork 버튼을 클릭합니다.
![Fork2](../../images/entry-hw/fork2.png)  

Fork를 통하여 본인 계정으로 해당 Repository를 복사합니다. 복사한 레포지토리를 git clone으로 내 로컬 컴퓨터에 다운 받아 개발 가능한 상태로 만듭니다.  

### Entry Hardware의 의존성모듈 설치
Entry-HW를 실행하고 빌드 하기 위한 의존성 모듈을 설치가 필요합니다. 해당 의존설을 설치하면 굳이 electron를 글로벌 설치 하지 않으셔도 하드웨어 연결프로그램을 실행시킬수 있습니다.
``` bash
$ npm install
// app폴더 안에도 추가로 설치해야할 의존성 모듈이 있습니다.
// 해당 폴더에서도 npm install을 수행해야 합니다.
$ cd app
$ npm install
// npm install 대신 yarn으로 설치 할 수도 있다.
```

### Entry Hardware 실행하기
Entry Hardware는 Electron기반으로 프로그램이 작성되어 있습니다. 가장 최상위 폴더는 Application을 빌드와 실행 및 프로젝트를 관리하는 위치이고 실질적인 소스코드는 app폴더에 들어있습니다. 실행은 가장최상위 위치에서 `npm start`를 콘솔에서 수행하면 됩니다.
``` bash
$ npm start
```

## 마무리
위와 같은 과정을 거치면 Entry-HW의 모듈을 추가하는 환경과 EntryJS의 블록을 추가하는 개발환경을 구성할수 있다.

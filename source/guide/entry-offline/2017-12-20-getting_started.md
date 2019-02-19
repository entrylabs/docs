---
layout: page
title: 시작하기
type: guide
category: 'Entry Offline'
order: 1
---

## 엔트리 오프라인은?

엔트리 오프라인은 [엔트리 웹 사이트](https://playentry.org/)에 접속할 수 없는 오프라인 환경에서도 엔트리를 사용할 수 있도록 제작된 프로그램입니다.  
엔트리 오프라인은 [Electron](https://electronjs.org/) 기반으로 만들어졌으며,
[entryjs](https://github.com/entrylabs/entryjs) 와 [entry-hw](https://github.com/entrylabs/entry-hw) 프로젝트를 [bower](https://bower.io/) 를 통해 내장하고 있습니다. 

엔트리 오프라인은 [Electron-builder](https://github.com/electron-userland/electron-builder) 를 통해 빌드가 이루어지므로, 빌드로직에 관한 이해는 해당 라이브러리 문서를 참고해 주세요. 

## 개발 환경 설정

### 필수 프로그램 설치
#### Node.js
Node.js 는 개발 전반을 위해 반드시 설치가 되어야하는 프레임워크입니다. 작업 전 가장 먼저 설치합니다.
> https://nodejs.org 
  
#### Yarn(optional)
엔트리 오프라인은 yarn 을 통해 의존성을 관리 중입니다. npm 을 사용해도 문제는 없습니다.
```bash
npm install --global yarn
```

#### Bower
엔트리 오프라인의 정적 라이브러리들은 `bower` 를 통해 관리 합니다.
```bash
npm install --global bower
```

#### Node-gyp
엔트리 오프라인에 포함된 엔트리 하드웨어는 [node-serialport](https://github.com/node-serialport/node-serialport) 를 사용합니다.  
해당 라이브러리를 사용하기 위해서는 C++, python 빌드 환경과 [node-gyp](https://github.com/nodejs/node-gyp) 라이브러리가 필요합니다.  
빌드에 대한 자세한 사항은 [node-gyp#installation](https://github.com/nodejs/node-gyp#installation) 을 참고해 주세요.

먼저 빌드 환경을 구성해야 합니다.  
윈도우의 경우, 관리자 권한 명령 프롬프트에서
```bash
npm install --global --production windows-build-tools
```
로 한번에 설치할 수 있습니다. [Windows-Build-Tools](https://github.com/felixrieseberg/windows-build-tools) 를 참고해 주세요.

```bash
npm install --global node-gyp
```

> 사이트 : https://yarnpkg.com

### node.js native addon build 환경 설정

엔트리 오프라인은 엔트리 하드웨어를 포함합니다.  
엔트리 하드웨어의 시리얼포트 통신을 담당하는 라이브러리는 시스템 환경에 종속되므로, 설치시 추가적인 빌드가 필요합니다.  
빌드에 대한 자세한 사항은 [node-gyp](https://github.com/nodejs/node-gyp#installation) 을 참고해주세요.

windows os 는 관리자모드로 cmd 혹은 powershell 에서 아래의 명령어로 쉽게 환경설정이 가능합니다.  
`npm install --global --production windows-build-tools`

### 소스코드 다운로드
엔트리 오프라인은 소스코드를 직접 다운받아서 개발하거나 Git을 통하여 개발을 시작할 수 있습니다.
만약에 Git을 통해 개발을 시작한다면 Fork 작업을 먼저 하시고 작업을 진행하시는 것을 추천 드립니다.
```bash
# create a directory of your choice, and copy template using curl
mkdir entry-offline && cd entry-offline
curl -fsSL https://github.com/entrylabs/entry-offline/archive/master.tar.gz | tar -xz --strip-components 1

# or copy template using git clone
git clone https://github.com/entrylabs/entry-offline.git
cd entry-offline
```

### 의존성 라이브러리 설치
소스코드가 다운로드되고 난뒤 `yarn`과 `bower`를 이용하여 의존성 패키지를 설치합니다.
```bash
npm install || yarn
bower install
```

## 실행

엔트리 오프라인은 Webpack build 가 필요한 프로젝트입니다.
먼저 빌드 명령을 통해 번들링 된 코드가 있어야 정상 실행 됩니다.

```bash
# 한번만 빌드하는 경우
npm run webpack:dev

# 코드 변경점을 지속적으로 감시할 경우
npm run watch
```

```bash
# 일렉트론 실행
npm run start
```

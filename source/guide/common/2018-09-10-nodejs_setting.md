---
layout: page
title: Node.js 개발 환경 설정
type: guide
category: 'Common'
order: 1
---

#### Node.js 설치 및 확인

엔트리 프로젝트를 개발하기 위해 기본적으로 [Node.js](https://nodejs.org/en/)가 설치되어 있어야 합니다.

Node.js와 함께 설치되는 라이브러리 관리 도구인 npm을 사용하면 엔트리 구동에 필요한 라이브러리를 설치할 수 있습니다.

설치가 완료되면 명령 프롬프트 창에서 다음 명령어를 입력해 정상적으로 설치되었는지 확인합니다.

```bash
npm --version
node --version
```

정상적으로 설치되었다면 다음과 같은 결과가 출력됩니다. 버전은 다를 수 있습니다.

![tutorial03](/docs/images/tutorial/tutorial03.png)

#### entry-hw 필수 환경설정

엔트리 하드웨어는 시리얼포트 통신을 위해 [node-serialport](https://github.com/node-serialport/node-serialport) 라이브러리를 사용합니다.
해당 라이브러리를 사용하기 위해서는 C++, python 빌드 환경과 [node-gyp](https://github.com/nodejs/node-gyp) 라이브러리가 필요합니다.  
빌드에 대한 자세한 사항은 [node-gyp#installation](https://github.com/nodejs/node-gyp#installation) 을 참고해 주세요.

윈도우의 경우는 아래의 명령을 통해 파이썬, 윈도우 C++ 관련 툴을 설치해주세요. (관리자 모드 프롬프트에서 입력하세요)
```bash
npm install --global --production windows-build-tools
```

그 다음 빌드 라이브러리인 node-gyp 을 설치해주세요.
```bash
npm install --global node-gyp
```

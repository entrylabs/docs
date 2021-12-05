---
layout: page
title: 개발 환경 세팅
type: guide
category: 'Basic'
order: 1
---

## Git 설치

> 연관 페이지 : [Git 사용 방법](/guide/etc/2016-05-03-git_fork.html)

엔트리의 오픈소스 프로젝트는 Git을 사용하여 관리합니다.
Git을 사용하여 코드를 기록하고 반영하므로 반드시 Git을 설치해야 합니다.

- macOS, Windows 사용자는 [Git - Downloads](https://git-scm.com/downloads)에서 Git 설치 파일을 다운로드하여 실행합니다.
- Linux 사용자는 [Git - Git 설치](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)를 참고하여 Git을 설치합니다.

---

Git 사용이 익숙치 않다면, Git GUI 도구를 사용하는 것도 좋습니다. (선택사항)  
아래의 도구를 사용하여 좀 더 쉽게 Git 작업을 하실 수 있습니다.

> [Github Desktop](https://desktop.github.com/)
> [SourceTree](https://www.sourcetreeapp.com/)

## NodeJS 설치

엔트리 프로젝트를 개발하기 위해 기본적으로 [Node.js](https://nodejs.org/en/)가 설치되어 있어야 합니다.

Node.js와 함께 설치되는 라이브러리 관리 도구인 npm을 사용하면 엔트리 구동에 필요한 라이브러리를 설치할 수 있습니다.

설치가 완료되면 명령 프롬프트 창에서 다음 명령어를 입력해 정상적으로 설치되었는지 확인합니다.

```bash
npm --version
node --version
```

정상적으로 설치되었다면 다음과 같은 결과가 출력됩니다. 버전은 다를 수 있습니다.

![tutorial03](/images/tutorial/tutorial03.png)

## SerialPort 라이브러리 빌드 환경 설치

엔트리 하드웨어는 시리얼포트 통신을 위해 [node-serialport](https://github.com/node-serialport/node-serialport) 라이브러리를 사용합니다.
해당 라이브러리를 사용하기 위해서는 C++, python 빌드 환경과 [node-gyp](https://github.com/nodejs/node-gyp) 라이브러리가 필요합니다.  
빌드에 대한 자세한 사항은 [node-gyp#installation](https://github.com/nodejs/node-gyp#installation) 을 참고해 주세요.

C++ 빌드 라이브러리인 node-gyp 을 설치해주세요.
```bash
npm install --global node-gyp
```

**윈도우의 경우**는 아래의 명령을 통해 파이썬, 윈도우 C++ 관련 툴을 설치해주세요. (관리자 모드 프롬프트에서 입력하세요)
```bash
npm install --global --production windows-build-tools
```


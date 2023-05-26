---
layout: page
title: 개발 환경 세팅
type: guide
category: 'Basic'
order: 1
---

> NOTICE! 개발 중 문제가 발생하면 [자주 발생하는 오류](/guide/basic/2023-05-25-common_problem.html) 페이지를 참고해 주시기 바랍니다.

### Git 설치 및 GitHub 회원 가입

#### Git 설치

> 연관 페이지: [Git 사용 방법](/guide/etc/2016-05-03-git_fork.html)

엔트리의 오픈소스 프로젝트는 Git을 사용하여 관리합니다. Git을 사용하여 코드를 기록하고 오픈소스에 반영하므로 반드시 Git을 설치해야 합니다.

* macOS, Windows 사용자는 [Git - Downloads](https://git-scm.com/downloads)에서 Git 설치 파일을 다운로드하여 실행합니다.
* Linux 사용자는 [Git - Git 설치](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)를 참고하여 Git을 설치합니다.


---
#### GitHub 회원 가입

[GitHub](https://github.com/)은 Git을 사용해 관리할 수 있는 원격 저장소입니다.
엔트리 프로젝트 또한 GitHub에 저장소가 있습니다.
다음과 같은 정보를 입력하여 쉽게 GitHub에 회원 가입할 수 있습니다.

![tutorial01](/images/tutorial/tutorial01.png)

### Node.js, Node-gyp 개발 환경 설정


---
#### Node.js 설치

Node.js를 설치하려면 [Node.js](https://nodejs.org/ko/)에서 설치 파일을 다운로드하여 실행합니다.

> 현재 엔트리 개발팀은 16.19.0 버전을 사용 중입니다(2022.05.25 기준). 최소 14이상의 버전 사용을 추천드립니다.

Node.js를 설치하면 npm이 함께 설치됩니다.
npm을 이용하여 라이브러리를 설치하고 관리할 수 있습니다.

설치가 완료되면 명령 프롬프트 창에서 다음 명령어를 입력해 정상적으로 설치되었는지 확인합니다.

```bash
npm --version
node --version
```

정상적으로 설치되었다면 다음과 같은 결과가 출력됩니다. 버전은 다를 수 있습니다.
윈도우 OS에서 Node.js를 설치했지만 node 명령어 사용이 되지 않는다면 환경변수를 확인해 주시기 바랍니다.

![tutorial03](/images/tutorial/tutorial03.png)


---
#### Yarn 설치

엔트리 팀은 패키지 매니저로 yarn 을 사용합니다. 그러므로 yarn 을 통해 의존성 관리를 하는 것을 추천드립니다.  
**yarn 설치가 필수사항은 아니지만, 패키지의 세부버전들이 yarn.lock에 맞추어져 있습니다. npm을 그대로 사용하실 경우 package-lock.json을 제거하시고 사용하시는 것을 추천드립니다.**

yarn 을 설치한 경우, `npm install` 및 `npm run` 명령어는 `yarn` 으로 대체됩니다.  
(`npm install -> yarn`, `npm run start -> yarn start`)

```bash
npm install --global yarn
```


---
#### Node-gyp 설치

엔트리 하드웨어는 시리얼포트 통신을 위해 [node-serialport](https://github.com/node-serialport/node-serialport) 라이브러리를 사용합니다.
해당 라이브러리를 사용하기 위해서는 C++, python 빌드 환경과 [node-gyp](https://github.com/nodejs/node-gyp) 라이브러리가 필요합니다.  
빌드에 대한 자세한 사항은 [node-gyp ReadMe](https://github.com/nodejs/node-gyp#installation)와 [자주 발생하는 에러](/guide/basic/2023-05-25-common_problem.html) 을 참고해 주세요.

**윈도우의 경우**는 아래 방법중 1가지로 window build tools를 설치해 주세요. 엔트리팀은 2017버전(15.9.50)을 사용중입니다.
- visual studio installer를 사용해서 visual studio와 함께 설치 [설치](https://visualstudio.microsoft.com/ko/vs/older-downloads/)**(추천)**
- chocolatey를 사용해서 [설치](https://community.chocolatey.org/packages/visualstudio2017buildtools)
- ~~npm을 사용해서 설치~~ (2023.05.25일 기준으로, npm에 등록된 window build tools 이미지에 문제가 있어 정상 동작하지 않습니다.)

그 다음 빌드 라이브러리인 node-gyp 을 설치해주세요.
```bash
yarn global add node-gyp
//or
npm install --global node-gyp
```


### 엔트리 프로젝트 설치


---
#### 원격 저장소의 데이터를 자신의 원격 저장소에 복사

엔트리 하드웨어 개발에는 다음과 같은 엔트리 프로젝트가 필요합니다.

* [Entry Js](https://github.com/entrylabs/entryjs): 엔트리 워크스페이스와 블록을 개발할 수 있는 라이브러리
* [Entry Hardware](https://github.com/entrylabs/entry-hw): 엔트리에 아두이노 등 여러 하드웨어를 연결할 수 있도록 도와주는 프로그램

엔트리 하드웨어 개발은 두 개의 프로젝트를 자신의 원격 저장소에 그대로 복사(fork)하여 작업한 후 작업 내역을 합병 요청하는 방식으로 이루어집니다.

두 저장소에 접속한 후 오른쪽 위의 **Fork**를 클릭하여 자신의 원격 저장소로 복사합니다.

![tutorial04](/images/tutorial/tutorial04.png)


---
#### 자신의 원격 저장소 데이터를 자신의 컴퓨터로 복사

다음 명령어를 실행하여 자신의 원격 저장소 데이터를 자신의 컴퓨터로 복사(clone)합니다. 이 명령은 명령 프롬프트 또는 Git Bash에서 실행할 수 있습니다.

```bash
git clone https://github.com/[사용자명]/entry-hw.git
git clone https://github.com/[사용자명]/entryjs.git
```


---
#### 브랜치 변경

하드웨어 블록을 개발하는 경우 **`develop-hw`**라는 브랜치를 사용해야 합니다.  
develop-hw 브랜치는 하드웨어 관련 PR 이 모여서, 배포전에 develop 에 merge 되는 용도로 사용 중입니다.  
(**develop 브랜치는 엔트리 개발팀에서 이슈 처리를 하는 브랜치 입니다.**) 

> Git은 작업 내역을 분할/관리하기 위해 브랜치라는 개념을 사용합니다.
> 자세한 설명은 [Git - 브랜치란 무엇인가?](https://git-scm.com/book/ko/v1/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%3F)를 참고하세요.

각 프로젝트의 디렉토리에서 다음 명령어를 실행하여 develop-hw 브랜치를 사용하게 설정합니다.

```bash
git checkout develop-hw
```

브랜치를 변경하면 다음과 같은 결과가 출력됩니다.

![tutorial15](/images/tutorial/tutorial15.png)

> 결론적으로는,  
> entryjs, entry-hw 모두 develop-hw 브랜치에서 작업하시면 됩니다.

---
#### 의존성 라이브러리 설치하기

엔트리 프로젝트를 실행하려면 추가 라이브러리가 필요합니다. npm을 이용하여 필요한 라이브러리를 설치할 수 있습니다.

> entryjs 디렉터리에서 다음 명령어를 실행합니다.

```bash
yarn
//or
npm install
```

> entry-hw 디렉터리에서 다음 명령어를 실행합니다.

```bash
yarn
yarn setting
//or
npm install
npm run setting
```

각 명령어를 실행하면 다음과 같은 화면이 출력됩니다.

![tutorial16](/images/tutorial/tutorial16.png)

---

#### 실행해서 정상 설치 확인하기

마지막으로 각 프로젝트를 실행해서 정상적으로 설치 되었는지 확인합니다.

> entryjs 디렉터리에서 다음 명령어를 실행합니다.

```bash
yarn serve
//or
npm run serve
```

> entry-hw 디렉터리에서 다음 명령어를 실행합니다.

```bash
yarn start
// or
npm run start
```

각 명령어를 실행하면 다음과 같은 화면이 출력됩니다.
![entryjs result](/images/entryjs/serve_result.png)
![entryhw result](/images/entry-hw/start_result.png)
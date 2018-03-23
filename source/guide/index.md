---
layout: page
title: 시작하기
type: guide
category: 'START'
order: 1
---

## 이 문서는 무엇인가요?
이 문서는 오픈소스로 되어 있는 Entry Js, Entry Hardware 등을 보다 쉽게 개발하는데 도움이 되기 위하여 작성한 문서입니다. 하지만 이 문서는 Entry의 모든 기능을 구현하기 위한 내용을 담고 있지 않고, 최대한 하드웨어 모듈을 어떻게 개발하는지와 개발된 모듈을 엔트리와 어떻게 연동하는지에 초점이 맞춰져 있습니다. 이 문서는 100% 최신 사항을 반영하고 있지 않기 때문에 실제와 다른 부분이 있을 수 있습니다. 혹시 이상한 점이 발견되면 [이슈 리포트](https://github.com/entrylabs/docs/issues) 또는 엔트리 개발자에게 문의 바랍니다.

## 기본 개발 절차
엔트리 하드웨어 개발을 위해서는 기본적으로 Entry Hardware 프로그램에 모듈을 추가 하고 Entry Js에 이에 대응하는 블록을 개발하여 적용하는 것으로 개발이 완료됩니다. 또한, 개발 전반에 걸쳐 소스의 공유와 개발 그리고 반영에 이르기 까지 모든 절차에 [GitHub](https://www.github.com)을 사용합니다. 그러기 때문에 개발하기 전에 먼저 깃 사용법을 익히고 개발을 진행 하는 것을 권장합니다.

> [Git 사용방법 문서로 이동](/docs/guide/etc/2016-05-03-git_fork.html)

### 엔트리 하드웨어 연결프로그램에 하드웨어 추가
가장먼저 Entry Hardware 소스를 Git Fork를 수행합니다.
> 주소: https://github.com/entrylabs/entry-hw  

이후에 System Dependencies를 추가 합니다. Dependencies 정보는 아래와 같습니다.
``` text
package.json
```
`package.json`의 `Dependencies`는 `npm install` 또는 `yarn`으로 설치 가능합니다.
> 설치및 사용방법은 아래 문서들을 이용해 주세요.
[npm 문서로](https://docs.npmjs.com/getting-started/what-is-npm)
[yarn 문서로](https://yarnpkg.com/en/docs/getting-started)

주의 할 점은 `package.json`파일이 2개입니다. 최상위에 `package.json`과 `app`폴더 내에 `package.json`이 있습니다. 두 곳 모두 설치해 주셔야 합니다. Dependencies 설치가 완료되었으면 하드웨어 모듈을 추가 합니다.
> [모듈 추가 방법](./entry-hw/2016-05-03-add_module.html)

모듈 추가가 완료되었으면 하드웨어 프로그램 실행하여 하드웨어와 연결되는지 확인합니다.
자세한 내용은 Entry HW탭의 문서를 확인해 주세요.

### 엔트리 서비스(Entry Js)에 블록추가  
Entry Js도 Entry Hardware와 마찬 가지로 Github의 Repository를 Fork하는것 부터 시작합니다.
> 주소 : https://github.com/entrylabs/entryjs

그리고 마찬가지로 `EntryJs`에도 `Dependencies`를 추가합니다. `Entry-HW`와 마찬가지로 `package.json`에 정의 되어 있습니다. `npm`또는 `yarn`으로 설치 하시면 됩니다.

가장 먼저 해야할 일은 하드웨어 블록 정보를 만드는 것입니다. `(your path)/playground/blocks/`경로 밑에 `block_(하드웨어명).js`파일을 만들어야 합니다.

이미 `(your path)/playground/blocks/`다른 소스들이 포함되어 있으니 해당 소스를 참고해 만드시는 것을 추천드립니다. 아두이노 확장모드 소스 파일이 표준입니다. 이후에는 실제 블록을 추가합니다. 2018년 3월 이후로 블록 추가는 `(your path)/playground/blocks/`밑의 `block_(하드웨어).js` 파일에서 작성과 관리가 이루어 집니다. 다국어도 마찬가지로 기존의 `(your path)/extern/util/`위치에 `ko.js`, `en.js`등의 파일에서 관리하던것을 `block_(하드웨어).js`으로 옮겼습니다.

블록 추가가 완료되었다면, 하드웨어 오브젝트를 실제 하드웨어 목록에 포함될수 있도록 추가해줘야 합니다.. ~~해당 기능은 `(your path)/src/hw.js`에서 처리합니다.~~ `hw.js` 관리되던 내용이 `(your path)/playground/blocks/index.js`로 변경되었습니다.

하드웨어 추가는 [하드웨어 추가하기](/docs/guide/entryjs/2018-03-14-add_hardware.html) 에서 확인해 주세요.

하드웨어 추가가 완료되었다면 `(your path)/extern/util/static.js`에 실제 사용 할 블록을 등록해 줘야 합니다. `EntryStatic.getAllBlocks`함수 안에 `arduino` 카테고리에 작성한 블록명칭을 작성하면 됩니다.

개발이 완료되면 `entry.js`파일을 빌드해야 합니다. 기존에는 `grunt`라는 툴을 사용하여 빌드를 수행하였으나 이제는 `webpack`을 사용하여 빌드 처리하고 있습니다. `webpack`의 실행은 `package.json`의 `script`에 정의해 사용합니다. 빌드 방법은 [EntryJS 빌드하기](/docs/guide/entryjs/2016-12-26-setting_environments.html#EntryJS-%EB%B9%8C%EB%93%9C%ED%95%98%EA%B8%B0)를 참고하시기 바랍니다.

빌드까지 완료 되었다면 최종적으로 테스트를 수행해야 합니다. 확인은 `(your path)/example/example.html`을 크롬으로 실행해서 확인 가능합니다. `example.html`은 오직 블록 테스트를 위한 파일이므로 하드웨어 블록 테스트 이외의 목적으로 활용 하시기 힘듭니다. 하지만 하드웨어 블록 동작 테스트 용도로는 기능상 큰 문제없이 제공 가능합니다.

> Chrome 65부터 example.html파일을 바로 확인이 불가능해 졌습니다. CROS문제로 인해 하드웨어 프로그램에 접속이 안되는 문제가 발견되었습니다. 테스트는 [하드웨어 블록 테스트하기](/docs/guide/entryjs/2018-03-23-test_hardware.html)문서를 참고해 주세요.

## Entry Hardware
엔트리 하드웨어를 개발하기 위해 필요한 내용을 알려드립니다.
[엔트리 하드웨어 개발 가이드](/docs/guide/entry-hw/2016-05-01-getting_started.html)

## Entry Js
엔트리 하드웨어를 대응하는 블록을 개발하기 위해 필요한 내용을 알려드립니다.
[엔트리 블록 개발 가이드](/docs/guide/entryjs/2016-12-26-setting_environments.html)

## Entry Offline
엔트리 오프라인 프로그램 개발을 위해 필요한 내용을 알려드립니다.
[엔트리 오프라인 개발 가이드](/docs/guide/entry-mini/2016-12-12-getting_started.html)

## 기타
저희 소스를 개발하기 이전에 알아두셔야할 내용을 간단하게 정리하였습니다. 실제 개발하기 이전에 한번 문서를 읽어보고 진행하시면 개발하시는데 도움이 많이 되실겁니다.

---
layout: page
title: 시작하기
type: guide
category: 'START'
order: 1
---

## 이 문서는 무엇인가요?
이 문서는 오픈소스로 되어 있는 Entry Js, Entry Hardware 등을 보다 개발하는데 도움이 되기 위하여 작성한 문서입니다. 하지만 이 문서는 Entry의 모든 기능을 구현하기 위한 내용을 담고 있지 않고, 최대한 하드웨어 모듈을 어떻게 개발하는지와 개발된 모듈을 엔트리와 어떻게 연동하는지에 초점이 맞춰져 있습니다. 이 문서는 100% 최신 사항을 반영하고 있지 않기 때문에 실제와 다른 부분이 있을 수 있습니다. 혹시 이상한 점이 발견되면 [이슈 리포트](https://github.com/entrylabs/docs/issues) 또는 엔트리 개발자에게 문의 바랍니다.

## 기본 개발 절차
엔트리 하드웨어 개발을 위해서는 기본적으로 Entry Hardware 프로그램에 모듈을 추가 하고 Entry Js에 이에 대응하는 블록을 개발하여 적용하는 것으로 개발이 완료됩니다. 또한, 개발 전반에 걸쳐 소스의 공유와 개발 그리고 반영에 이르기 까지 모든 절차에 [GitHub](https://www.github.com)을 사용합니다. 그러기 때문에 개발하기 전에 먼저 깃 사용법을 익히고 개발을 진행 하는 것을 권장합니다.

### 엔트리 하드웨어 연결프로그램에 하드웨어 추가
가장먼저 Entry Hardware 소스를 [Git Fork](https://github.com/entrylabs/entry-hw/wiki/Git-Fork-%EB%B0%A9%EB%B2%95)를 수행합니다.
> 주소: https://github.com/entrylabs/entry-hw  

이후에 System Dependencies를 추가 합니다. Dependencies 정보는 아래와 같습니다.
``` text
package.json
app/package.json
```
package.json의 Dependencies는 `npm install` 또는 `yarn`으로 설치 가능합니다.
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

그리고 마찬가지로 Entry Js에도 System Dependencies를 추가합니다. Entry Js는 하드웨어와는 다르게 Dependencies가 `bower.json`과 `package.json`의 두가지 종류로 되어 있습니다. `package.json`의 설치는 Entry HW와 똑같이 `npm`또는 `yarn`으로 설치 가능하지만 `bower.json`파일은 `bower`로 설치 가능합니다.
> [bower 문서로](https://bower.io/)

가장 먼저 해야할 일은 하드웨어 블록 정보를 만드는 것입니다. `(your path)/src/blocks/`경로 밑에 `block_(하드웨어명).js`로 만드는 것을 권장합니다.
> 현재 블록 정보와 하드웨어 정보가 분리되어 있으나 곧 `block_(하드웨어명).js` 파일에 블록 정보와 하드웨어 정보가 통합될 예정입니다.
조만간 추가 될 아두이노 확장모드 소스 `block_arduino_ext.js`를 참고하시면 됩니다.
[미리보기](https://github.com/entrylabs/entryjs/blob/0b85e744296d5610083f3a72a6c21ea0f2f1779b/src/blocks/block_arduino_ext.js)

이미 `(your path)/src/blocks/`다른 소스들이 포함되어 있으니 해당 소스를 참고해 만드시는 것을 추천드립니다. 아두이노 확장모드 소스가 가장 표준입니다. 이후에는 실제 블록을 추가합니다. 블록 추가와 관련된 내용은 Entryjs 탭을 확인해 주세요. 블록 작성시에 다국어 지원이 필요합니다. 다국어는 기본적으로 `(your path)/extern/util/`위치에 `ko.js`, `en.js`등 으로 언어들이 나뉘어져 있습니다. 이 부분에 필요한 언어를 추가해 주세요.

> 블록파일과 마찬가지로 관리의 어려움 때문에 `block_(하드웨어명).js`에서도 언어를 관리하도록 하였습니다. 이와 관련된 내용은 역시 `block_arduino_ext.js`를 참고하시면 됩니다.

블록 추가가 완료되었다면, 하드웨어와 블록을 실제로 매핑해야 합니다. 해당 기능은 `(your path)/src/hw.js`에서 처리합니다. 매핑과 관련된 자세한 내용은 Entryjs탭을 확인해 주세요.

매핑이 완료되었다면 `(your path)/extern/util/static.js`에 실제 사용 할 블록을 등록해 줘야 합니다. `EntryStatic.getAllBlocks`함수 안에 `arduino` 카테고리에 작성한 블록명칭을 작성하면 됩니다.

소스 수정이 완료되었다면 자바스크립트 빌드를 수행합니다. 저희쪽에서 사용하는 방식은 `google-closure-compiler`라이브러리를 `grunt`를 이용하여 빌드합니다.
> [google-closure-compiler 문서로](https://developers.google.com/closure/compiler/)
[grunt 문서로](https://gruntjs.com/)

사용법은 단순합니다. Dependencies가 설치된 상태에서 아래와 같이 shell에서 명령어를 실행합니다.
``` bash
$ grunt build
//또는
$ npm run build - 추가 예정입니다.
// 또는
$ grunt
```
> `grunt build`가 가장 목적에 맞는 수행입니다. `grunt`만 수행 할경우 testcase 통과 등 여러가지 절차를 더 수행합니다. 이 때문에 정상적으로 build가 수행되지 못하는 것으로 오해하시는 경우가 많아 `grunt build`로 빌드만 따로 수행할수 있도록 처리 하였습니다.
현재는 `npm run build`가 추가되어 있지 않지만 추가되면 `npm run build`로 명령어를 수행하시는 것을 가장 권장 합니다.

빌드까지 완료 되었다면 최종적으로 테스트를 수행해야 합니다. 확인은 `(your path)/example/example.html`을 크롬으로 실행해서 확인 가능합니다. `example.html`은 오직 블록 테스트를 위한 파일이므로 하드웨어 블록 테스트 이외의 목적으로 활용 하시기 힘듭니다. 하지만 하드웨어 블록 동작 테스트 용도로는 기능상 큰 문제없이 제공 가능합니다.

## Entry Hardware
엔트리 하드웨어를 개발하기 위해 필요한 내용을 알려드립니다.
[엔트리 하드웨어 개발 가이드](/docs/guide/entry-hw/2016-05-01-getting_started.html)

## Entry Js
엔트리 하드웨어를 대응하는 블록을 개발하기 위해 필요한 내용을 알려드립니다.
[엔트리 블록 개발 가이드](/docs/guide/entryjs/2016-12-26-setting_environments.html)

## Entry Mini
엔트리 실과버전 개발을 위해 필요한 내용을 알려드립니다.
[엔트리 오프라인 미니 개발 가이드](/docs/guide/entry-mini/2016-12-12-getting_started.html)

## 기타
저희 소스를 개발하기 이전에 알아두셔야할 내용을 간단하게 정리하였습니다. 실제 개발하기 이전에 한번 문서를 읽어보고 진행하시면 개발하시는데 도움이 많이 되실겁니다.

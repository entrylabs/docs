---
layout: page
title: 시작하기
type: guide
category: 'Entry Mini'
order: 2
---

### Entryjs로 개발하기  
기존의 하드웨어 블록을 개발하기 위하여 entryjs/example/example.js를 지원해 왔습니다. 실과형(엔트리 미니)에서는 entryjs/example/example_mini.js를 제공하고 있습니다.  

이 문서는 기존적으로 엔트리 하드웨어 블록생성 및 하드웨어를 추가하는 가이드를 숙지 했다는 가정하에 설명을 진행합니다.  

이 문서를 보시기 전에 하드웨어 가이드 및 블록 개발 가이드를 보시고 진행하시길 바랍니다.

fork 및 repository clone에 대해서는 Etc. 가이드를 참고하세요.

---

#### 1. branch checkout
현재 offline_mini는 feature/offline_mini에 관리되고 있습니다. git 터미널에서 다음과 같이 명령어를 실행합니다.

``` bash
$ git checkout -b feature/offline-mini origin/feature/offline-mini
```

> GUI툴을 사용하시면 기존에 사용하셨던 방법 그대로 feature/offline-mini 브랜치를 checkout하시기 바랍니다.


---

#### 2. npm install & build
의존성 모듈 설치를 위하여 npm install 을 수행합니다.

``` bash
$ npm install 또는 npm i
```

빌드는 기존과 같이 grunt를 이용해서 빌드 합니다. 다만, 최신 closure-compiler 가 compiler.jar에 날짜를 붙이고 있어서 곧바로 수행이 되지 않는 경우가 있습니다. 이경우 node_modules/closurecompiler/compiler/compiler(날짜).jar 파일을 compiler.jar 로 파일 명칭을 수동 변경해 주시기 바랍니다.

``` bash
$ grunt
// 빌드 수행완료시 dist 폴더에 entry.js entry.min.js entry.css가 생성됨
// 이미 생성된 entry.js entry.min.js entry.css가 포함되어 있으며
// 수정 이후 빌드가 필요한 경우 grunt 수행해야함.
```


---

#### 3. example_mini.html 실행
기본적으로 기존 example.html 사용법과 같습니다. 그래그앤 드랍 또는 더블릭으로 chrome 브라우저에서 실행하시면 됩니다.
![크롬에서 실행하기](/docs/images/entry_mini/2016-12-12_15-56-59.gif)


---

#### 4. 블록 생성하기
블록 생성방법은 기존 하드웨어 가이드 문서에 작성된 가이드와 동일 합니다. 다만 관리와 기존 Entry Workspace와의 분리를 위하여 작성하는 파일이 위치만 변경되었습니다.

> 블록 개발 가이드는 [하드웨어 개발 가이드](https://entrylabs.github.io/entry-hw)를 참고해 주세요.

먼저 블록의 위치는 entryjs/src/workspace/block_entry_mini.js 입니다. block_entry.js 파일에도 수정하면 내용이 반영되나 git PR merge시에 reject사유가 될 수 있으니 작업은 block_entry_mini.js에 부탁드립니다.  

또한 isNotFor 요소가 중요하게 사용되오니 꼭 작성 부탁드립니다.

---  

#### 5. 블록 등록하기  
블록생성 종료 되었으면 실제 Workspace에 포함시켜야 합니다. 기존에는 entryjs/extern/util/static.js 의 arudino 카테고리에 포함시켰는데 실과형(Entry-mini)에서는 entryjs/extern/util/static_mini.js 에 작성하고 arduino카테고리가 아닌 성격에 맞는 카테고리에 포함시키고 있습니다.

![사용되는 카테고리](/docs/images/entry_mini/2016-12-12_16-20-37.png)  
![사용되는 카테고리2](/docs/images/entry_mini/2016-12-12_16-23-32.png)  

현재 사용되는 있는 카테고리는 위와 같으며, 현재로선 다른 카테고리를 허용하지는 않습니다. 다만 다른카테고리가 필요하신경우 엔트리에 문의 부탁드립니다.  

---  

#### 6. 실과형 로봇 등록하기
실과형에서는 실과형인지 기존의 하드웨어인지 구분하는 1가지 옵션이 추가로 생겼습니다. static_mini.js에 추가되어 있으며 명칭은 hwMiniSupportList입니다.  
hwMiniSupportList는 Array로 되어 있으며 하드웨어의 명칭을 추가 하시면 자동으로 Mini에서 사용되는 하드웨어로 취급되어 정상적으로 카테고리가 동작하게 됩니다.  
해당 속성이 빠져 있을경우 기존의 하드웨어 블록이 그대로 사용되니 이점 주의 부탁드립니다.


---

추가 문의 사항 및 오류 건의는 메일 또는 댓글로 남겨 주시면 답변 드리도록 하겠습니다. 이상입니다.

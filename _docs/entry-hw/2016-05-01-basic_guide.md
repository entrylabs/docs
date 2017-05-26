---
layout: post
title: 기본 개발 절차
category: 'Entry Hw'
order: 3
---

#### 엔트리 하드웨어 연결프로그램에 하드웨어 추가
* [Git Fork](https://github.com/entrylabs/entry-hw/wiki/Git-Fork-%EB%B0%A9%EB%B2%95) (https://github.com/entrylabs/entry-hw)
* System Dependencies 추가
    - bower.json 확인
    - package.json 확인
* [모듈 추가](https://github.com/entrylabs/entry-hw/wiki/%EB%AA%A8%EB%93%88-%EC%B6%94%EA%B0%80)
    - 기본적인 방법은 README.md 참고
    - (your path)/modules 내에 있는 파일 참고
* 하드웨어 프로그램 실행하여 단말이 연결되는지 확인.  

#### 엔트리 서비스에 블록추가([상세방법](https://github.com/entrylabs/entry-hw/wiki/%EB%B8%94%EB%A1%9D%EC%B6%94%EA%B0%80))  
* Git Fork(https://github.com/entrylabs/entryjs)
* System Dependencies 추가
    - bower.json 확인
    - package.json 확인
* Entryjs의 기본적인 정보는 README.md 참고
* workspace확인 (디버깅)
    - (your path)/example/example.html 확인 및 실행
    - 로컬로 간단히 확인가능하나 Cross Domain 문제로 일부 기능이 정상작동하지 않습니다.
        - 하드웨어 연결 테스트는 문제 없습니다.
    - 모든 기능을 확인하고 싶으시면 간단한 웹서버로 띄워서 확인하시기 바랍니다.(권장)
        - 간단한 웹서버로는 locally가 있고, apache나 nginx와 같은 통상적 웹서버도 관계없습니다.
        - locally를 이용한 웹서버 테스트 항목은 하단의 다. 항목을 참고 해주시기 바랍니다.
* block javascript 추가
    - (your path)/src/blocks 에 자바스크립트 추가(빌드시 자동 반영됨)
    - 해당 소스들 참고
    - ~~Blocky.Blocks과 Entry.block 1:1 매칭 되도록 블록 추가~~
        - ~~해당 블록들은 아래의 static.js에 추가되어 있어야 합니다.~~
        - ~~Blocky.Blocks은 사용자에게 보여지는 블록 모양을 정의 합니다.~~
        - ~~Entry.block은 해당 블록의 동작을 정의 합니다.~~
    - ~~블록에 사용되는 언어는 일반적으로 Lang이라는 다국어로 관리합니다.~~
        - ~~Lang.Blocks 으로 시작되는 부분으로 테스트시에는 하드코딩으로 확인가능합니다.~~
    - 새 블록라이브러리가 적용된에 따라 블록 기능 명세는 (your path)/src/workspace/block_entry.js 에서 처리 합니다.
    - (your path)/src/blocks/에 추가되는 하드웨어 들은 해당하드웨어 Object정의만 있으면 됩니다.
        - block_arduino.js를 참고해 주세요.(여러 하드웨어가 포함되어 있어서 적절한 예제 입니다)
* block 매칭 작업
    - (your path)/src/hw.js 확인
    - this.hwInfo 부분에 해당 기기 추가 (30 Lines)
    - 왼쪽의 숫자 (ex. ’11')
        - 엔트리 하드웨어 추가 할때의 하드웨어ID
        - ‘010201’ 으로 설정했을 경우 앞의 4개를 확인하여 ’12’가 됩니다.
        - 마찬 가지로 ’61’ 과 같은 경우를 만들고 싶은경우 하드웨어 연결프로그램에서 JSON생성이 060101과 같은 형식으로 만듭니다.
    - 오른쪽 오브젝트 (ex. Entry.Arduino)
        - block javascript에서 추가했던 오브젝트를 넣습니다.
* static.js 블럭모양 추가
    - (your path)/extern/util.static.js
    - EntryStatic.getAllBlocks 의 category가 arduino 인 요소에 해당 블록명 추가
    - ~~EntryStatic.blockInfo 에 블록명에 해당하는 실제 블록 모양추가~~
        - ~~xml = 실제 블럭모양~~
        - ~~isNotFor = 블록 Alias~~
        - ~~usage = 하드웨어의 경우 arduino 고정~~
        - ~~class = 블록타입 설정(엔트리 화면에서 블록구분선을 만들때 사용.)~~
    - 블록 라이브러리 변경으로 인해 blockInfo는 필요가 없어졌습니다. category만 등록해 주세요.
* 언어추가 
    - (your path)/extern/util/ 확인
    - ko, en, code 3개의 js파일 로 구성됩니다.
    - example.html의 기본 요소는 ko.js 로 설정되어 있습니다.
        - 언어 변경시 해당언어로 변환 됩니다.
        - example.html에는 해당 기능 구현되어 있지 않습니다.
    - 해당 파일에 원하는 값을 추가하면 전역변수 Lang에 언어 데이터 들어감.
* 빌드하기 
    - grunt 실행
    - 빌드 output은 dist폴더에 있습니다.  
    
#### locally로 서비스 실행하기
* locally설치 
    - npm install -g locally 로 설치가능합니다.
    - 자세한 사항은 [https://github.com/rhiokim/locally](https://github.com/rhiokim/locally) 를 참고해 주시기 바랍니다.
* locally 실행 
    - 원하는 위치에서 locally수행하시면 해당 path가 root가 되는 간단한 웹서버가 구동됩니다.
    - Entry를 init과정에서 entryjs가 prefix된 경로가 들어가니 locally를 수행해 주실때 꼭 entryjs의 폴더내가 아닌 상위폴더에서 실행하시기 바랍니다.
* example.html 소스 수정. 
    - 구성하신 상황에 따라 javascript path의 구성이 바뀔수 있습니다. 
    - ko.js / static.js / entry.min.js / entry.css 의 4가지 요소에 대해 path를 변경하시면 됩니다.
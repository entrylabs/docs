---
layout: page
title: 기본 개발 절차
type: guide
category: 'Entry Hw'
order: 3
---

#### 엔트리 하드웨어 연결프로그램에 하드웨어 추가
* [Git Fork](https://github.com/entrylabs/entry-hw/wiki/Git-Fork-%EB%B0%A9%EB%B2%95) (https://github.com/entrylabs/entry-hw)
* System Dependencies 추가
    - bower.json 확인
    - package.json 확인
    - app/package.json 확인
* [모듈 추가](../2016-05-03-add_module/)
    - 기본적인 방법은 README.md 참고
    - (your path)/modules 내에 있는 파일 참고
* 하드웨어 프로그램 실행하여 하드웨어와 연결되는지 확인.  

#### 엔트리 서비스에 블록추가  
* Git Fork(https://github.com/entrylabs/entryjs)
* System Dependencies 추가
    - bower.json 확인
    - package.json 확인
* Entryjs의 기본적인 정보는 README.md 참고
* workspace확인 (디버깅)
    - (your path)/example/example.html 확인 및 실행
    - 일부 엔트리 본기능이 동작하지 않으나 하드웨어 연결확인에는 문제가 없습니다.
* block javascript 추가
    - (your path)/src/blocks 에 자바스크립트 추가(빌드시 자동 반영됨)
    - 해당 소스들 참고
    - 새 블록라이브러리가 적용된에 따라 블록 기능 명세는 (your path)/src/workspace/block_entry.js 에서 처리 합니다.
    - (your path)/src/blocks/에 추가되는 하드웨어 들은 해당하드웨어 Object정의만 있으면 됩니다.
        - block_arduino.js를 참고해 주세요.(여러 하드웨어가 포함되어 있어서 적절한 예제 입니다)
* block 매칭 작업
    - (your path)/src/hw.js 확인
    - this.hwInfo 부분에 해당 기기 추가 (30 Lines)
    - 왼쪽의 숫자 (ex. ’1.1')
        - 엔트리 하드웨어 추가 할때의 하드웨어ID
        - ‘010201’ 으로 설정했을 경우 앞의 4개를 확인하여 ’1.2’가 됩니다.
        - 마찬 가지로 ’6.1’ 과 같은 경우를 만들고 싶은경우 하드웨어 연결프로그램에서 JSON생성이 060101과 같은 형식으로 만듭니다.
    - 오른쪽 오브젝트 (ex. Entry.Arduino)
        - block javascript에서 추가했던 오브젝트를 넣습니다.
* static.js 블럭모양 추가
    - (your path)/extern/util.static.js
    - EntryStatic.getAllBlocks 의 category가 arduino 인 요소에 해당 블록명 추가
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

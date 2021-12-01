---
layout: page
title: 블록 명세 작성
type: guide
category: 'Entry JS'
order: 3
---
## 블록 명세 작성  

### 블록 구현 위치

블록파일의 위치는 다음과 같습니다.  

- src/playground/block_entry.js : 과거 블럭 (legacy)
- src/playground/blocks ..
  - block_start.js : 시작 블록
  - block_flow.js : 흐름 블록
  - block_moving.js : 움직임 블록
  - block_looks.js : 생김새 블록
  - block_brush.js : 붓 블록
  - block_sound.js : 소리 블록
  - block_judgement.js : 판단 블록
  - block_calc.js : 계산 블록
  - block_variable.js : 자료 블록
  - block_func.js : 함수 생성 관련
  - block_expansion_*.js : 확장블록 관련 블록
  
> 하드웨어 블록은 `src/playground/blocks/hardware/block_(하드웨어명).js` 파일에서 관리 됩니다.  
> 이에 따른 블록 생성정보는 [하드웨어 블록 개발](/docs/guide/entryjs/2016-07-08-add_new_blocks4.html#하드웨어-블록-개발) 문서를 참고해 주세요.

### 블록 생성 위치

블록은 각 위치에서 만들어지고, Entry.block 오브젝트에 모든 블럭이 합쳐지게 됩니다.  
Entry.block 은 src/playground/block_entry.js 에서 초기화됩니다.  

block_entry.js 내에서는 과거 블럭과 파일단위로 쪼개진 블럭이 Entry.block 에 할당되는 로직이 포함되어 있습니다.

### 블록 생성 방법

아래의 내용은 블록 구성에 필요한 정보 입니다.

``` js
Entry.block = {
    "sample_block": { // (1)
        "parent": "", // (2)
        "color": "", // (3)
        "fontColor": "", // (4)
        "skeleton": "", // (5)
        "statement": [], // (6)
        "params": [], // (7)
        "events": {}, // (8)
        "def": {}, // (9)
        "paramsKeyMap": {}, // (10)
        "class": "", // (11)
        "isNotFor": [], // (12)
        "func": function() {} // (13)
    }
}
```
1. `sample_block` : 블록 명칭입니다.
2. `parent`  
특정 블록의 정보를 상속 받아 사용할 경우 사용하는 속성 입니다.
즉, `sample_block`이라는 블록을 생성할때 `sample_mother_block`이라는 블록의 과 똑같은 모양과 역할을 하는 블록으로 만들고자 할때는 `parent` 부분에 `sample_mother_block`이라는 값을 작성 함으로써 할당이 가능해 집니다.  
다만 `parent`만 설정하면 `parent`와 단순히 똑같은 블록이 하나더 생일 뿐입니다.
`parent`를 상속 받은후 `def`속성 에서 다른 블록이라는 것을 명시해 주어야 합니다.

    그 예는 다음과 같습니다.  

    ``` json
    "sample_block": {
        "parent": "sample_mother_block",
        "def": {
            "params": [
                {
                    type: 'number',
                    params: ['10'],
                },
                null,
            ],
            "type": "sample_block",
        }
    }
    ```

3. `color` : 블록의 색상을 RGB 코드로 지정 합니다.  
  하드웨어 블록의 경우 아래와 같은 블록 색상으로 고정입니다.
  ```javascript
  {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE, 
  }
  ```

4. `fontColor` : 블록의 글자 색상을 지정 합니다. 생략가능합니다.

5. `skeleton` : 블록의 모양을 결정 합니다. 해당블록의 모양은 차후에 생성되는 문서를 참고해 주세요.  
현재 기본적으로 사용가능한 `skeleton`은 `basic`, `basic_create`, `basic_event`, `basic_loop`, `basic_define`, `pebble_event`, `pebble_loop`, `pebble_basic`, `basic_string_field`, `basic_boolean_field`, `basic_param`, `basic_button`, `basic_without_next`, `basic_double_loop`가 있습니다.  

6. `statement` : 블록 안에 블록을 넣을수 있는 블록의 타입을 설정 합니다. 기본적으로 `"accept": "basic"`을 사용 합니다.

7. `params` : 블록에 추가될 파라미터들입니다. 기본적으로는 indicator 를 추가하며, 파라미터가 필요한 경우 추가합니다.

8. `events` : 특정 상황에서의 이벤트를 처리할 수 있습니다.  
현재 사용할 수 있는 이벤트는 `viewAdd`, `dataAdd`, `viewDestory`, `dataDestroy`, `mousedown`, `dblclick` 이 있습니다.

9. `def` : 블록을 정의 합니다. type 요소의 경우에는 특수한 경우가 아니면 블록 명칭과 동일하게 작성하면 됩니다.  
    params의 경우는 params에 정의한 parameter에서 초기값등을 설정 할수 있습니다.
    ``` json
    def: {
        "params": [
            {
                type: 'number',
                params: ['10'],
            },
            null,
        ],
        "type": "sample_block",
    }
    ```

10. `paramsKeyMap` : `params`에 정의한 `parameter`에 대한 `key`값을 지정합니다. `key` 는 0부터 시작되는 index 값입니다.  
    아래 예의 경우에는 params 의 첫번째 값이 VALUE 라는 `key`로 매핑되는 경우입니다.
    ```json
        paramsKeyMap: {
            VALUE: 0,
        }
    ```

11. `class` : 블록 단위의 모음을 설정합니다. `class`끼리 묶이고 `class`가 다른 경우 가로줄로 구분되어 사용자에게 보여지게 됩니다.

12. `isNotFor` : 엔트리는 존재하는 모든블럭을 로딩하고 숨김처리하는 방식으로 필요한 블럭만 보여주는 형태를 취하고 있습니다.  
    이와 같은 작업에 필요한 속성입니다.
    일반적으로 변수의 존재여부에 따른 블럭 숨김 및 하드웨어 연결시 해당 하드웨어 블록만 노출 등에 활용중입니다.  
    **하드웨어 개발에서는 모든 블럭이 해당 하드웨어명과 동일하게 작성되어야 합니다.**

13. `func` : 실질적인 블록의 로직을 담당합니다. 일반 순차블록의 경우 return 값이 없으면 암시적으로 다음블록으로 진행합니다.  
    문법상 자세한 사항은 [블록 모양별 개발 방법](./2016-05-26-add_new_blocks3.html)을 참고하시는 것을 추천드립니다.

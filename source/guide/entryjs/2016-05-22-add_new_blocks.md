---
layout: page
title: 블록 명세 작성
type: guide
category: 'Entryjs'
order: 2
---

### 신규 엔트리 블록
엔트리 블록 라이브러리가 변경되었습니다. 기존에 사용하던 구글 Blockly에서 자체개발 Block라이브러리로 변경 되었고 변경과 함께 개발 방법또한 변경되었습니다. 이 문서에서는 변경된 블록 라이브러리를 이용하여 개발을 수행하는 방법에 대해서 설명합니다.

### 블록 명세 작성  

#### 블록 작성  
기존의 블록 작성 방식과 다르게 신규 블록은 block_entry.js의 하나의 파일에서 관리 하고 있습니다. 해당 파일에 블록의 모양과 기능을 정희 하면 블록을 만들수 있게 됩니다. 아래의 내용은 블록 구성에 필요한 정보 입니다.  

``` js
Entry.block = {
    "sample_block": {
        "parent": "",
        "color": "",
        "fontColor": "",
        "skeleton": "",
        "statement": [],
        "params": [],
        "events": {},
        "def": {},
        "paramsKeyMap": {},
        "class": "",
        "isNotFor": [],
        "func": function() {}
    }
}
```  

위와 같은 구성으로 이루어 집니다. 하나씩 어떻게 만들어 지는지 설명을 드리겠습니다.

``` js
Entry.block = {}
```  
전체 엔트리 블록을 관리하는 오브젝트 입니다.  

```text
"sample_block": {}
```  
sample_block 이라는 블록의 설정을 나타냅니다. sample_block이라는 명칭 대신 넣고 싶은 블록의 이름을 사용하면 됩니다. 실제로 엔트리에서 관리되어지는 블록의 이름을 뜻합니다.  

```text
"parent": ""
```  
특정 블록의 정보를 상속 받아 사용할 경우 사용하는 속성 입니다. 즉, sample_block이라는 블록을 생성할때 sample_mother_block이라는 블록의 과 똑같은 모양과 역할을 하는 블록으로 만들고자 할때는 따로 작성할 필요 없이 "parent" 부분에 "sample_mother_block"이라는 값을 작성 함으로써 할당이 가능해 집니다. 다만 "parent"만 설정하면 "parent"와 단순히 똑같은 블록이 하나더 생일 뿐입니다. "parent"를 상속 받은후 "def"속성 에서 다른 블록이라는 것을 명시해 주어야 합니다.  

그 예는 다음과 같습니다.  

```text
"sample_block": {
    "parent": "sample_mother_block",
    "def": {
        "type": "sample_block"
    }
}
```   

```text
"color": ""
```   
블록의 색상을 지정 합니다. 하드웨어 블록은 기본적으로 <code>#00979D</code>색상 값을 사용합니다. 색상값은 RGB코드 값을 넣어 주면 됩니다.  

```text
"fontColor": ""
```   
블록의 글자 색상을 지정 합니다. 하드웨어 블록은 기본적으로 없거나<code>#FFFFFF</code>색상 값을 사용합니다. 색상값은은 RGB코드 값을 넣어 주면 됩니다.  

```text
"skeleton": ""
```   
블록의 모양을 결정 합니다. 해당블록의 모양은 차후에 생성되는 문서를 참고해 주세요.  
현재 기본적으로 사용가능한 skeleton은 "basic", "basic_create", "basic_event", "basic_loop", "basic_define", "pebble_event", "pebble_loop", "pebble_basic", "basic_string_field", "basic_boolean_field", "basic_param", "basic_button", "basic_without_next", "basic_double_loop"가 있습니다.  

```text
"statement": []
```   
블록 안에 블록을 넣을수 있는 블록의 타입을 설정 합니다. 기본적으로 <code>"accept": "basic"</code>을 사용 합니다.

```text
"params": ""
```   
"param"은 블록에 추가 적으로 넣을 요소 입니다. 기본적으로 블록의 특색을 나타내는 이미지를 넣어 주고 기타 데이터가 필요한 경우를 해당 블록을 설정 합니다.

```text
"events": {}
```   


```text
"def": ""
```   
블록을 정의 합니다. type요소의 경우에는 특별한 일이 ㅇ벗다면 유니크 하게 작성되고 params의 경우는 params에 정의한 parameter에서 초기값등을 설정 할수 있습니다.

```text
"paramsKeyMap": ""
```   
"params"에 정의한 parameter에 대한 key값을 지정합니다.

```text
"class": ""
```   
블록 단위의 모음을 설정합니다. class끼리 묶이고 class가 다른 경우 가로줄로 구분되어 사용자에게 보여지게 됩니다.

```text
"isNotFor": ""
```   


```text
"func": ""
```   
블록의 기능을 정의 합니다. 실질적인 블록의 로직을 담당합니다. 사용방법은 기존의 블록 방식과 같습니다.

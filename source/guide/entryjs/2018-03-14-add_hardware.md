---
layout: page
title: 하드웨어 추가하기
type: guide
category: 'Entryjs'
order: 8
---

예전에는 `hw.js`파일에서 하드웨어 추가 작업을 하였으나 2018년 3월 이후 하드웨어 블록 분리 작업이후 `(your path)/playground/blocks/index.js`에서 하드웨어 블록 등록을 처리하고 있습니다. 다음과 같이 등록하시면 됩니다.

## 하드웨어 추가 소스 예제

`index.js`
``` javascript
'use strict';

//... require에서 만들어둔 하드웨어 오브젝트파일을 추가한다.
require('./block_arduino');
require('./block_(하드웨어 이름)');
// ...

Entry.HARDWARE_LIST = {
    '1.1': Entry.Arduino,
    '하드웨어 아이디': Entry.SAMPLE //만들어둔 하드웨어의 오브젝트 명을 그대로 넣어준다. 
}
```

## 하드웨어 아이디 작성방법
하드웨어 아이디는 실제 배포전에 요청주시면 발급드립니다. 일반적으로 6자리의 16진수로 된 아이디를 발급해 드립니다.

> 발급 예 : EF0101

6자리의 숫자는 다시 2자리 잘라서 내부적으로 이렇게 관리됩니다.

> 앞의 2자리 : company  
중간 2자리 : model  
마지막 2자리 : device

`HARDWARE_LIST`에 등록되는 번호의 경우는 `company`와 `model`을 합친 내용입니다. `company.model`이라고 보시면 됩니다. 만약에 발급받은 아이디가 `EF0101`이라면 `EF.1`이 되는것입니다. 앞의 0은 생략됩니다. 가령 아두이노의 경우는 `010101`인데 이경우 `1.1`이 됩니다.
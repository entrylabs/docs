---
layout: page
title: 블록 모양별 개발 방법
type: guide
category: 'Entryjs'
order: 5
---
## 비동기 블록 처리

### 왜 추가되었나?

------

기존의 엔트리 블럭은 값이 정상적으로 처리될때까지 기다릴 수 없었습니다.

그래서 n초간 동작해야 하는 블럭, 혹은 데이터가 정상적으로 돌아왔는지 기다려야 하는 경우에는 특정 플래그를 만들고, 블럭을 계속 동작시키면서 확인하였습니다.

이와 같이 '모든 코드가 비동기로 동작하는 동안, 특정 로직을 기다려야 하는 경우' 에 대해 효율적으로 처리하게끔 만들기 위해 비동기 블록 처리 방식이 추가되었습니다.

### 비동기 블록 적용 방법 
------
변경된 코드에서는 async, await 이라는 키워드를 사용합니다. async, await 그리고 promise 를 통한 개발방식은 이해가 어려울 수 있으므로

[async/await](https://www.zerocho.com/category/ECMAScript/post/58d142d8e6cda10018195f5a) 블로그 포스트를 참고해주세요.

#### 값 블록

코드의 수정이 필요한 부분은 아래와 같습니다.

- 블록의 func: 에 아래의 함수가 하나 이상 포함된 경우
  - getValue()
  - getStringValue()
  - getNumberValue()
  - getBooleanValue()

해당 함수가 포함된 경우, 아래와 같은 형태로 코드를 변경해주셔야 합니다.

- 하나의 값블록이 포함된 경우

```javascript
// 함수는 비동기를 뜻하는 async 키워드가 붙습니다
func: async function (sprite, script) {
    // get(...)Value 함수는 블록에서 데이터를 가져올때 씁니다.
    // get(...)Value 의 앞은 await 을 붙이게 됩니다.
    const value = await script.getNumberValue("LEFTHAND", script);
    return value;
}
```

- 두개 이상의 값블록이 포함된 경우

```javascript
func: async function (sprite, script) {
    const [value1, value2] = await Promise.all([
        script.getNumberValue("VALUE1", script),
        script.getNumberValue("VALUE2", script)
    ]);
    ...
}
```

> await Promise.all([]) 은 여러개의 비동기 코드를 동시에 실행시키고, 결과가 전부 완료될때까지 기다립니다.
>
> 만약 Promise.all을 사용하지 않고 각 위치에서 getValue() 를 실행하면, 해당 위치마다 데이터를 기다리게 됩니다.

#### 대기가 필요한 로직

코드를 작성하다보면 'n 초간 30 의 값으로 출력' 등으로 해당 블록이 일정 시간 대기를 해야 하는 로직이 필요할 수 있습니다.

이와 같은 경우 기존에 실질적으로 사용되던 로직은 아래와 같습니다.

```javascript
func: ...

if (!script.isStart) {
    script.isStart = true;
    script.timeFlag = 1;
    // 시작 로직
    var timer = setTimeout(function() {
        script.timeFlag = 0;
        removeTimeout(timer);
    }, timeValue);
    return script;
} else if (script.timeFlag == 1) {
    // 아직 데이터가 끝나지 않은 경우 현재 블록 계속 반복
    return script;
} else {
    // n 초가 끝난 후 종료 로직
    delete script.isStart;
    delete script.timeFlag;
    Entry.engine.isContinue = false;
    Entry.hw.sendQueue[port] = {
        id: Math.floor(Math.random() * 100000, 0),
        type: Entry.EV3.motorMovementTypes.Power,
        power: 0,
    };
    return script.callReturn();
}
```

변경된 로직은 아래와 같습니다. 더이상 플래그를 사용하지 않습니다.

```javascript
//파일 최상단에 해당 코드를 작성
const PromiseManager = require('@core/promiseManager');
const pm = new PromiseManager();

...
func: async function(sprite, script) {
    //시작 로직
    let [time, value] = await Promise.all([
        script.getValue('TIME', script),
        script.getValue('VALUE', script),
    ]);
    ...
    
    // await 을 붙여주어야 합니다.
    // 블록은 반복하지 않고, 해당 코드에서 멈춥니다.
    await pm.sleep(time * 1000);
    
    // 종료 로직.
    ...
},
```

## 값 블록

값 블록은 동그란 형태의 블록으로, 기본적으로 다른 블록에 끼워 넣어서 사용하는 블록입니다. 들어가는 값은 숫자와 문자의 형태의 데이터 입니다.

### 기본 블록

![기본 블록](/docs/images/entryjs/block_create/default_value.png)

기존에 정의된 값만을 반환하는 블록입니다. 유사 블록으로는 초시계, 소리값 이 있습니다.

 `skeleton`은 미리 정의된 블록 모양을 정하는 프로퍼티입니다.  이 예제에서는 `basic_string_field` 를 사용하였습니다.
`fontColor`를 통해 블록 내 글자색을 변경할 수 있습니다.
`template`프로퍼티로 블록이 보여지는 명칭을 변경할 수 있습니다.

> template 프로퍼티는 작성되지 않은 경우, Lang.template 위치에서 블록 명칭과 동일한 값이 있는지 확인합니다. 여기에도 없는 경우 프로젝트 자체가 로드되지 않으므로 주의해주세요.
>
> 또한 하드웨어 블록 개발시에는 다국어 템플릿 작성방법이 따로 명시되어있으므로, 해당 부분을 참고해주세요.

``` js
Entry.block = {
    default_value: {
        //블록 생상
        color: "#FFD974",
        // 폰트색상 basic_string_field는 기본 색상이 검정색(#000) 입니다.
        fontColor: "#000",
        // 블록 모양 정의
        skeleton: "basic_string_field",
        // 블록 텍스트
        template: "test",
        // 보여질 블록 정의
        def: {
            type: "default_value"
        },
        class: "test",
        // 블록 기능정의
        func: function (sprite, script) {
            return "value";
        }
    }
}
```

### 기본 사용자 입력 블록

![기본 블록](/docs/images/entryjs/block_create/default_input_value.png)

사용자에게 직접 값을 입력받을 수 있는 블록입니다. 다른 블록의 파라미터로 주로 사용됩니다.

해당 블록에서는 template 값이 중요합니다.
`template`의 에서 `%1`, `%2` 와 같은 값이 사용자 입력란으로 치환됩니다.
템플릿은 0번째 index, 1번째 index ... 순으로 치환됩니다.
치환된 index 번호는 paramsKeyMap 에서 활용되니 코드를 확인해주세요.

``` js
Entry.block = {
    default_input_value: {
        color: "#FFD974",
        skeleton: "basic_string_field",
        // 블록 텍스트 - %1은 0번째 파라미터를 뜻 합니다.
        template: "%1",
        // 블록에 사용할 파라미터
        params: [
            {
                type: "TextInput",
                value: 0
            }
        ],
        def: {
            type: "default_input_value"
        },
        // 파라미터를 사용 할때 쓰는 Key값 정의
        paramsKeyMap: {
            // VALUE라는 key에 0번째 파라미터를 정의 하였습니다.
            VALUE: 0
        },
        class: "test",
        func: function (sprite, script) {            
            // 해당 값을 getField로 가져오고
            // 가져 올때 paramsKeyMap에서
            // 정의한 VALUE라는 키값으로 데이터를 가져옵니다.
            return script.getField("VALUE", script);
        }
    }
}
```

### 중첩 사용자 입력 블록

![기본 블록](/docs/images/entryjs/block_create/default_multi_input_value.png)

자료 계산시 또는 하드웨어 아날로그 값을 처리할때 많이 사용하는 블록 형태 입니다. 

해당 블록에서 핵심은 단일 입력 블록을 만들 때와는 다르게 `type: "Block"`를 사용해서 값을 가져오는 것과 `def > params`를 통해 초기값을 세팅한다는 점을 꼼꼼히 봐야 합니다.

``` js
Entry.block = {
    default_multi_input_value: {
        color: "#FFD974",
        skeleton: "basic_string_field",
        // 블록 텍스트
        // 파라미터가 2개 사용되기 때문에 %1 %2 두개를 사용하였습니다.
        template: "%1 + %2",
        params: [
            {
                // 중첩되는 Value블록을 만들경우에는
                // TextInput이 아닌 Block타입으로 생성합니다.
                // Block type에는 string, boolean, param
                // 3가지 종류의 accept가 존재 합니다.
                type: "Block",
                accept: "string"
            },
            {
                type: "Block",
                accept: "string"
            }
        ],
        events: {},
        def: {
            // def의 params의 경우는 초기값을 지정할수 있습니다.
            // TextInput의 경우에도 def > params을 통해 값을 지정할수 있습니다.
            params: [
                {
                    type: "number",
                    params: [ "0" ]
                },
                {
                    type: "number",
                    params: [ "10" ]
                }
            ],
            type: "default_multi_input_value"
        },
        paramsKeyMap: {
            LEFTHAND: 0,
            RIGHTHAND: 1
        },
        class: "test",
        func: async function (sprite, script) {
            // type이 Block의 경우에는 Field가 아닌 Value로 취급해서 가져 옵니다.
            // 일반적으로는 getValue로 값을 가져오고
            // 명시적으로 숫자형으로 가져오고 싶을때에는 getNumberValue를 사용합니다.
            const [leftValue, rightValue] = await Promise.all([
                script.getNumberValue("LEFTHAND", script),
                script.getNumberValue("RIGHTHAND", script) 
            ]);
            return leftValue + rightValue;
        }
    }
}
```

### 중첩 사용자 입력 블록 - 드롭다운 적용

![기본 블록](/docs/images/entryjs/block_create/default_dropdown_input_value.png)

사용자 키보드 타이핑 입력이 아닌 정해진 값을 선택해서 입력받는 방식으로 드롭다운 블록을 이용할 수 있습니다.

기본적으로 드롭다운은 `Key`, `Value`방식으로 동작하고 `Key`는 사용자 에게 보여주는 값이며, `Value`는 내부적으로 사용되는 값 입니다.  

``` js
Entry.block = {
    default_dropdown_input_value: {
        color: "#FFD974",
        skeleton: "basic_string_field",
        template: "%1 x %2",
        params: [
            {
                type: "Block",
                accept: "string"
            },
            {
                type: "Dropdown",
                // Dropdown 생성 기준은
                // [["key1", "value1"], ["key2", "value2"]]
                // 처럼 구성이 됩니다.
                options: [
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                    ["9", "9"]
                ],
                fontSize: 11,
                // 기본 컬러는 EntryStatic.ARROW_COLOR_VARIABLE 입니다.
                arrowColor: "#FFD974"
            }
        ],
        def: {
            params: [
                {
                    type: "number",
                    params: [ "2" ]
                },
                // Dropdown 값의 경우 Value를 세팅하면 초기값이 처리 됩니다.
                "1"
            ],
            type: "test1"
        },
        paramsKeyMap: {
            LEFTHAND: 0,
            RIGHTHAND: 1
        },
        class: "test",
        func: async function (sprite, script) {
            // Dropdown의 경우 getField로 값을 가져오고
            // 명식적으로 숫자형으로 가져올땐 getNumberField를 사용해서 가져 옵니다.
            // 가져온 데이터는 Dropdown Option설정시에 지정하였던 Value값 입니다.
            const leftValue = await script.getNumberValue("LEFTHAND", script);
            const rightValue = script.getNumberField("RIGHTHAND", script);
            
            return leftValue * rightValue;
        }
    }
}
```

## 판단 블록  

판단 블록은 육각형 형태의 블록으로 다른블록에 끼워 넣어서 사용하는 블록입니다. 들어가는 값은 `TRUE`, `FLASE`의 `Boolean`값이 들어가게 됩니다.

### 기본 판단 블록

![기본 판단 블록](/docs/images/entryjs/block_create/default_boolean.png)

IF문 등을 사용할때 사용하는 파라미터 블럭 입니다. 기본적으로 디지털 값 등 `true`, `false`두가지 형태로 나누어지는 데이터에 대해서 구성되어지는 기본 블록입니다

``` js
Entry.block = {
    default_boolean: {
        // 판단 블록 색생
        // 기본 색상은 #AEB8FF
        color: "#AEB8FF",
        // 판단 블록은 skeleton이 basic_boolean_field 입니다.
        skeleton: "basic_boolean_field",
        // template에 기본적으로 텍스트를 작성하면 해당 바로 텍스트가 표현되나
        // 아래와 같이 type: "Text" 로도 마찬가지로 설정할수 있습니다.
        template: "%1",
        params: [
            {
                type: "Text",
                // 보여질 텍스트
                text: "판단 블록",
                // 텍스트의 색상
                color: "#3D3D3D"
            }
        ],
        def: {
            type: "default_boolean"
        },
        class: "test",
        func: function (sprite, script) {
            // 판단 블록은 리턴값이 true, false이어야 합니다.
            return true;
        }
    }
}
```

### 중첩 사용자 입력 판단 블록

![중첩 사용자 입력 판단 블록](/docs/images/entryjs/block_create/default_input_boolean.png)

사용자에게 입력을 받아 값을 비교해 boolean값으로 반환 받는 블록입니다. 하드웨어 센서 값들을 비교해서 처리하는데 이용할 수 있습니다. 다만 단순 값비교는 이미 존재하는 판단블록으로도 처리가 가능합니다.

``` js
Entry.block = {
    default_input_boolean: {
        color: "#AEB8FF",
        skeleton: "basic_boolean_field",
        template: "%1 == %2",
        params: [{
            type: "Block",
            accept: "string"
        }, {
            type: "Block",
            accept: "string"
        }],
        def: {
            params: [{
                type: "number",
                params: [ "10" ]
            }, {
                type: "number",
                params: [ "33" ]
            }],
            type: "default_input_boolean"
        },
        paramsKeyMap: {
            LEFTHAND: 0,
            RIGHTHAND: 1
        },
        class: "test",
        func: async function (sprite, script) {
            const [leftValue, rightValue] = await Promise.all([
                script.getNumberValue("LEFTHAND", script),
                script.getNumberValue("RIGHTHAND", script) 
            ]);
            return (leftValue === rightValue);
        }
    }
}
```

### 중첩 사용자 드롭다운 판단 블록

![중첩 사용자 드롭다운 판단 블록](/docs/images/entryjs/block_create/default_dropdown_boolean.png)

정해진 목록내에서 입력 값을 받으려면 드롭다운을 사용할 수 있습니다. 주로 하드웨어의 디지털 입력을 처리 할때 많이 사용합니다.

``` js
Entry.block = {
    default_dropdown_boolean: {
        color: "#AEB8FF",
        skeleton: "basic_boolean_field",
        template: "%1이 참이면",
        params: [
            {
                type: "Dropdown",
                options: [
                    [ "첫번째", "0" ],
                    [ "두번째", "1" ],
                    [ "세번째", "2" ]
                ],
                fontSize: 11
            }
        ],
        def: {
            params: [
                "0"
            ],
            type: "default_dropdown_boolean"
        },
        paramsKeyMap: {
            VALUE: 0
        },
        class: "test",
        func: function (sprite, script) {
            const value = script.getNumberField("VALUE", script);
            let result;
            switch(value) {
                case 0:
                    result = true;
                    break;
                case 1:
                    result = false;
                    break;
                case 2:
                    result = false;
                    break;
            }

            return result;
        }
    }
}
```

## 순차 블록
순차로 실행되는 블록으로 정해진 기능을 수행하는 블록입니다. 엔트리에서 가장 많이 사용됩니다.

### 기본 순차 블록

![기본 순차 블록](/docs/images/entryjs/block_create/default_block.png)

순차 블록중에서도 가장 기본적인 블록입니다. 아무런 `parameter`없이 정해진 기능만을 수행합니다.

``` js
Entry.block = {
    default_block: {
        // 하드웨어 기본 색상
        color: "#00979D",
        skeleton: "basic",
        // 순차블록은 마지막에 이미지가 들어가도록 되어 있습니다.
        // 이미지도 parameter로 관리 됨으로 %1값이 마지막에 들어갑니다.
        template: "변수 A값에 1더하기 %1",
        params: [
            {
                type: "Indicator",
                // hardware_03.png가 하드웨어 아이콘 입니다.
                img: "block_icon/hardware_03.png",
                size: 12
            }
        ],
        events: {},
        def: {
            type: "default_block"
        },
        class: "test",
        isNotFor: [],
        func: function (sprite, script) {
            Entry.test.A++;
            // return 이 없는 경우는 별다른 값을 반환하지 않고, 다음블럭으로 진행됩니다.
            // return script.callReturn() 은 과거코드로, 생략가능합니다.
        }
    }
}
```

### 사용자 입력 순차 블록  

![사용자 입력 순차 블록](/docs/images/entryjs/block_create/default_input_block.png)

유저 입력을 받아서 처리하는 순차 블록. 기본적인 생성방법은 기존의 블록들과 다르지 않습니다.

``` js
Entry.block = {
    default_input_block: {
        color: "#00979D",
        skeleton: "basic",
        template: "변수 A값에 %1더하기 %2",
        params: [{
            type: "Block",
            accept: "string"
        }, {
            type: "Indicator",
            img: "block_icon/hardware_03.png",
            size: 12
        }],
        events: {},
        def: {
            params: [{
                type: "number",
                params: [ "1" ]
            },
                null
            ],
            type: "default_input_block"
        },
        class: "test",
        paramsKeyMap: {
            VALUE: 0
        },
        func: async function (sprite, script) {
            const value = await script.getNumberValue("VALUE", script);
            Entry.test.A += value;
        }
    }
}
```

### 드롭다운 입력 순차 블록

![드롭다운 입력 순차 블록  ](/docs/images/entryjs/block_create/default_dropdown_block.png)

이전의 드롭다운 블록과 동일합니다.

``` js
Entry.block = {
    default_dropdown_block: {
        color: "#00979D",
        skeleton: "basic",
        template: "변수 A값에 %1더하기 %2",
        params: [{
            type: "Dropdown",
            options: [
                [ "1", "1" ],
                [ "2", "2" ],
                [ "3", "3" ]
            ],
            fontSize: 11
        }, {
            "type": "Indicator",
            "img": "block_icon/hardware_03.png",
            "size": 12
        }],
        def: {
            "params": [ "1", null ],
            "type": "default_dropdown_block"
        },
        class: "test",
        paramsKeyMap: {
            VALUE: 0
        },
        func: function (sprite, script) {
            const value = script.getNumberField("VALUE", script);
            Entry.test.A += value;
        }
    }
}
```

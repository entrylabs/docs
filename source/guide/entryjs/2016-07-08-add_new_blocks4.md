---
layout: page
title: 하드웨어 블록 만들기
type: guide
category: 'Entryjs'
order: 6
---
## 하드웨어 블록 개발

하드웨어 블록은 `src/playground/blocks/block_(하드웨어명).js` 의 명칭으로 파일을 만드셔야 합니다.  
하드웨어 블록 파일은 아래와 같은 구성요소를 가집니다. 실제 코드는 `src/playground/blocks/block_arduino.js` 를 참고하는 것을 추천드립니다.

예)
``` js
'use strict';

Entry.SAMPLE = {
    name: 'SAMPLE', // isNotFor 속성과 대소문자까지 정확하게 매치되어야 합니다.
    url: 'http://www.arduino.cc/', // 생략 가능합니다. 엔트리 사이트에서 홍보시 사용됩니다.
    imageName: 'arduino.png', // images/hardware 폴더 내에 존재하는 이미지입니다. 엔트리 사이트에서 홍보시 사용됩니다.
    title: {
        'ko': '하드웨어명',
        'en': 'HardwareName'
    },
    setZero: function () {
        // 엔트리 정지시 하드웨어 초기화 로직
    },
};

// 언어 적용
Entry.SAMPLE.setLanguage = function () {
    return {
        ko: {
            // ko.js에 작성하던 내용
            template: {
                sample_block: '%1',
            }
        },
        en: {
            // en.js에 작성하던 내용
            template: {
                sample_block: '%1',
            }
        }
    }
};

// 블록 생성
Entry.SAMPLE.getBlocks = function () {
    return {
        sample_block: {
            color: '#FFD974',
            skeleton: 'basic_string_field',
            fontColor: '#fff',
            params: [
                {
                    type: 'TextInput',
                    value: 0
                }
            ],
            def: {
                type: 'sample_block'
            },
            paramsKeyMap: {
                VALUE: 0
            },
            class: 'test',
            func: function (sprite, script) {
                return script.getField('VALUE', script);
            }
        }
    }
};
```

## 하드웨어 개발시 유의사항

하드웨어 블록은 기본적으로 일반 블록과 생성 및 사용법이 같으나 몇가지 특징이 있습니다.

### 하드웨어 첫 등록시 홍보용 이미지 추가

![about01](/docs/images/entryjs/about01.png)

하드웨어 블록파일의 프로퍼티에는 imageName, url 이 있습니다.  
이 정보는 엔트리의 '엔트리는?' 페이지(상단 참조) 의 '연결되는 하드웨어' 리스트 추가용으로 사용됩니다.  
그러므로 처음 하드웨어를 추가요청 하실 경우, entryjs/images/hardware 아래에 imageName 과 동일한 명칭의 이미지 파일을 추가해 주시기 바랍니다.

### 블록색상 고정

하드웨어 블록은 현재는 `#00979D`로 고정해서 사용하도록 강제하고 있습니다. 이점 양해부탁드리며 앞으로 소스 개발시 해당 부분 변동 없이 처리 부탁드립니다.

### 하드웨어 연결프로그램에 값 읽고 쓰기

#### 1. Entry.hw.sendQueue (값 보내기)

[블록 명세](./2016-05-22-add_new_blocks.html)를 보면 `func`에 블록의 기본 행동을 정의하도록 되어 있습니다.  
엔트리는 하드웨어 프로그램과 통신하는데 있어 `socket.io`을 통해 하드웨어에 데이터를 송신합니다. 이때 전달하는 값이 `Entry.hw.sendQueue`의 값입니다.   
어떠한 `text` 형태의 값을 보내도 하드웨어에서 처리할 수 있지만, `json 형태의 key-value map` 로 보내는 것을 추천드립니다.  
또한 성능이슈가 발생할 수 있으므로, 가능한 한 적은 양의 데이터를 보내는 것을 권장합니다.

예)
``` js
function (sprite, script) {
    // Port 라는 key에 '1'이라는 데이터를 하드웨어 프로그램에 보냄.
    Entry.hw.sendQueue['Port'] = '1';
}
```

#### 2. Entry.hw.portData (값 읽기)

엔트리는 하드웨어 통신간 하드웨어의 센서 및 상태값을 읽기 위해, 모든 데이터를 주기적으로 받아 처리합니다.  
`Entry.hw.portData`는 하드웨어에서 수신한 `data`값 입니다. 값을 읽어서 화면에 표기해야 하는 블록의 경우 해당 값을 읽어서 처리해야 합니다.  
하드웨어 프로그램에서 처리하여 보내준 데이터가 그대로 들어오도록 구성되어 있으니 하드웨어 모듈 개발시 염두하시기 바랍니다.

예)
``` js
function (sprite, script) {
    // Port 라는 key값을 가진 정보를 읽는다.
    var result = Entry.hw.portData['Port'];
    // 값을 전달함.
    return result;
}
```

### 하드웨어 초기값 설정

엔트리 프로그램을 주기적으로 시작하기와 정지하기를 사용자가 수행하게 되고 정지하는 순간 엔트리 작품의 상태가 초기로 돌아가도록 되어 있습니다.  
개발방향에 따라 엔트리가 정지한 경우, 하드웨어의 초기화가 필요한 경우 아래의 로직을 통해 하드웨어에 초기화를 요청할 수 있습니다.

#### Entry.(하드웨어명).setZero

`src/playground/blocks/block_(하드웨어명).js` 위치에 setZero를 정의하도록 합니다. 실제 코드는 `block_arduino.js` 를 참고하시기 바랍니다.  
해당 소스에는 `Entry.hw.sendQueue`에 초기값을로 동작할 데이터를 세팅 하고 `Entry.hw.update()`를 실행시켜서 하드웨어쪽으로 데이터를 보내도록 정의하면 됩니다.

block_arduino.js 를 통한 예)
``` js
Entry.Arduino = {
    name: 'arduino',
    url: 'http://www.arduino.cc/',
    imageName: 'arduino.png',
    title: {
        'ko': '아두이노',
        'en': 'Arduino'
    },
    setZero: function() {
        Entry.hw.sendQueue.readablePorts = [];
        for (var port = 0; port < 20; port++) {
            // 0 ~ 19 번 port 를 전부 off 상태로 변경요청
            Entry.hw.sendQueue[port] = 0;
            Entry.hw.sendQueue.readablePorts.push(port);
        }
        Entry.hw.update(); // 해당 데이터를 하드웨어에 전달한다.
    },
    // ...
```

### isNorFor와 Class의 활용

`isNotFor`와 `Class`는 사용자에게 블록을 알맞게 보여주는 역할을 합니다.

#### Class  

`Class`의 경우에는 블록들간의 구분선을 보여주는 역할을 합니다.  
예를 들어 `센서 데이터 읽기`, `센서 데이터 쓰기` 등으로 블럭을 구분짓고 싶을 때 활용하실 수 있습니다.

`extren/util/static.js` 의 EntryStatic.getAllBlocks() 내 의 `category`에 등록된 블록 순서대로 블록이 표현되며 
해당 `class`가 변경될때마다 구분선이 생기므로 `static.js`에 `category`를 넣어주실때 순서를 잘 생각하고 작성해주시면 됩니다.

#### isNotFor

하드웨어 블럭에서 `isNotFor`의 역할은 해당 하드웨어가 연결되었을때만 해당 하드웨어를 사용자에게 보여주는 역할을 하게 되어있습니다.  
`isNotFor`에 적힐 데이터는 `Entry.(적성한 하드웨어 오브젝트).name` 이 매칭되도록 되어 있습니다. **해당 명칭이 대소문자 까지 정확히 매칭**되어야 해당 하드웨어가 연결되었을때 정확히 표현할 수 있습니다. 
**하드웨어 블록 개발에서는 해당 정보가 일치하지 않는 경우 PR reject 사유가 되니** 꼭 확인하시길 바랍니다.


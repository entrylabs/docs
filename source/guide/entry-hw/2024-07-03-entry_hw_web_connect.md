---
layout: page
title: 브라우저로 연결하기에 하드웨어 등록
type: guide
category: 'Entry HW'
order: 6
---

## 브라우저로 연결하기란?
'브라우저로 연결하기'이하 '하드웨어 웹연결'은 [web serial api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API)을 사용하여 브라우저와 하드웨어 기기를 직접 연결하는 기능입니다.
기존의 엔트리 하드웨어는 "사용자 기기 <=> [Entry HW 프로그램](https://playentry.org/download/hardware) <=> [엔트리 만들기 웹 페이지](https://playentry.org/ws/new)" 의 구조를 가지고 있습니다.
하드웨어 웹연결은 Entry HW 프로그램을 사용하지 않고 "사용자 기기 <=> 엔트리 만들기 웹 페이지"의 구조를 가집니다.

사용자 입장에서는 사용이 간편하고, 개발자 입장에서도 [entry-js](https://github.com/entrylabs/entryjs)의 코드만 관리하면 된다는 장점이 있습니다.
하지만, 펌웨어와 드라이버 제공이 불가능하기에 하드웨어 제조사에서 별도의 안내를 해야하고 실험적이 기능이기에 연결이 불안정할 수도 있습니다

<br>

## 유의사항
- 반드시 **자사 하드웨어 관련 파일만 수정**을 부탁드립니다. hw_Lite.js 나 기타 공용파일들 수정은 반영이 어렵습니다.
- 하드웨어 웹연결에서는 기본적으로 펌웨어를 제공하지 않습니다. WS의 '펌웨어 다운로드' 버튼은 .hex파일을 다운로드하여 사용자가 직접 펌웨어 업데이트가 가능한 기기를 위한 기능입니다.
- 하드웨어 웹연결 기능은 개발 초기 단계로 추후 **제공 함수나 연결 라이프사이클이 변경될 수 있습니다**. 경우에 따라서는 제조사측 코드를 수정해야 할 수 있으므로 미리 유의 부탁드립니다.

<br>

## PR 파일 간략 설명
![HwLite_select1](/images/entry-hw/HwLite_select1.png)

이 단원에서는 최종적으로 제조사가 entryjs에 PR해야할 파일 작성시 유의사항과 간략한 역할을 기술합니다.
하드웨어 웹연결을 지원하기 위해선 아래 3종류의 파일이 필수적으로 추가되어야 합니다. 아래 3파일을 작성후 entryjs의 develop-hw로 PR부탁드립니다.

### block_모듈명 _lite.js
- 반드시 entryjs > src > playground > blocks > hardwareLite 하위에 위치해야합니다.
- 파일명은 반드시 block_ 모듈명 _lite.js 이어야 합니다.
- 이 파일에서 하드웨어 웹연결에 필요한 정보를 담고있는 모듈클래스를 정의하게 됩니다.
- 기존 하드웨어 연결에서 entryjs의 block_모듈명.js와 entry-hw의 모듈명.js의 역할을 모두 가지고 있습니다.

### metadata_모듈명 _lite.json
- 반드시 entryjs > src > playground > blocks > hardwareLite 하위에 위치해야합니다.
- 파일명은 반드시 metadata_ 모듈명 _lite.json 이어야 합니다.
- 웹연결 모듈에 대한 메타데이터를 가지고 있습니다.
- 이 파일의 moduleId와 block_ 모듈명 _lite.js 의 클래스 내 id는 반드시 일치해야 합니다.(포맷이 다르므로 다른 하드웨어 웹연결 파일들을 예시로 참고해 주세요.)
- 이 파일의 title, description은 WS에서 '브라우저로 연결하기' 클릭시 나타나는 위의 이미지화면에서 모듈카드의 정보를 가지고 있습니다.

### 모듈명.png
- 반드시 entryjs > images > hw_lite 하위에 위치해야 합니다.
- '브라우저로 연결하기' 클릭시 나타나는 위의 이미지화면에서 보여지는 이미지 파일입니다.
- 파일명은 block_ 모듈명 _lite.js 에서 정의한 클래스 생성자의 this.imageName과 일치해야 합니다.

<br>

## block_ 모듈명 _lite.js 구조 설명
WS가 실행되었을경우, Entry.모듈클래스 를 추가하는 함수가 즉시 실행됩니다.
이 파일에 정의되는 모듈클래스 구조와 역할은 다음과 같습니다.

### 모듈클래스

``` javascript
'use strict';

(function () {
    Entry.ArduinoLite = new (class ArduinoLite {
        constructor() {
            this.id = '010101'; // id는 6자리 모두 입력해야 합니다.
            this.name = 'ArduinoLite';
            this.url = 'http://www.arduino.cc/';
            this.imageName = 'arduinolite.png';
            this.title = {
                ko: '아두이노 우노',
                en: 'Arduino Uno',
            };
            this.duration = 32; // 엔트리js에서 기기와 통신하는 함수를 호출하는 duration 간격입니다.
            this.blockMenuBlocks = [
                'arduinolite_get_number_sensor_value',
                'arduinolite_get_digital_value',
            ];
            this.portData = {
                baudRate: 9600,
                duration: 32, // web serial api에서 기기와 통신하는 duration 간격입니다.
                dataBits: 8,
                parity: 'none',
                stopBits: 1,
                bufferSize: 512,
                constantServing: true,
            };
            this.readablePorts = [];
            this.setZero();
        }

        setZero() {
            this.port = new Array(14).fill(0);
            this.digitalValue = new Array(14).fill(0);
            this.remoteDigitalValue = new Array(14).fill(0);
            this.analogValue = new Array(6).fill(0);
            this.readablePorts = _range(0, 19);

            if (Entry.hwLite && Entry.hwLite.serial) {
                Entry.hwLite.serial.update();
            }
        }

        // 디바이스에서 값을 읽어옵니다.
        handleLocalData(data) {}

        //디바이스에 값을 씁니다.
        requestLocalData() {
            const queryString = [];
            // ...
            return queryString;
        }

        setLanguage() {
            return {
                ko: {
                    template: {
                        arduinolite_text: '%1',
                        arduinolite_get_sensor_number: '%1',
                        arduinolite_get_port_number: '%1',
                    },
                    Device: {
                        arduinolite: '아두이노',
                    },
                    Menus: {
                        arduinolite: '아두이노',
                    },
                },
                en: {
                    template: {
                        arduinolite_text: '%1',
                        arduinolite_get_sensor_number: '%1',
                        arduinolite_get_port_number: '%1',
                    },
                    Device: {
                        arduinolite: 'arduinolite',
                    },
                    Menus: {
                        arduinolite: 'ArduinoLite',
                    },
                },
            };
        }

        getBlocks() {
            return {
                arduinolite_get_sensor_number: {
                    color: EntryStatic.colorSet.block.default.HARDWARE,
                    outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
                    skeleton: 'basic_string_field',
                    statements: [],
                    params: [
                        {
                            type: 'Dropdown',
                            options: [
                                ['0', 'A0'],
                                ['1', 'A1'],
                                ['2', 'A2'],
                                ['3', 'A3'],
                                ['4', 'A4'],
                                ['5', 'A5'],
                            ],
                            value: 'A0',
                            fontSize: 11,
                            bgColor: EntryStatic.colorSet.block.darken.HARDWARE,
                            arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                        },
                    ],
                    events: {},
                    def: {
                        params: [null],
                    },
                    paramsKeyMap: {
                        PORT: 0,
                    },
                    func(sprite, script) {
                        return script.getStringField('PORT');
                    },
                },
                // ...
            };
        }
    })();
})();

module.exports = Entry.ArduinoLite;



```

- constructor
    - imageName : 샘플파일 이미지와 이름이 같아야 합니다
    - portData : web-serial api를 사용해 브라우저로 기기와 통신하기위한 세팅값입니다. 연결이 불안정한경우가 아니라면 가급적 수정하지 않는것을 추천드립니다.
    - duration : 기기와 통신하는 간격입니다.(ms단위)
    - blockMenuBlocks : 블럭명세 정보입니다.

- get monitorTemplate() : WS에서 하드웨어 연결시 좌측 ''오브젝트 추가하기'' 하단의 4번째 탭에 보여지는 센서 모니터링 툴을 사용하기 위한 함수입니다. 초기값 세팅 역할을 합니다.

- getMonitorPort() : monitorTemplate()와 마찬가지로 모니터링 툴용 함수입니다. 실시간 값 갱신을 위한 함수입니다.

- setZero() : 연결시작 및 연결해제시 기기상태를 초기화하기 위한 함수입니다.

- handleLocalData(data) : 기기로부터 값을 읽어서 WS에 반영하는 함수입니다. (기기로부터 값 읽음) this.portData.constantServing일 경우 사용합니다.

- requestLocalData() : WS의 블록동작의 명령을 기기에게 쓰는 함수입니다. (기기에 값 쓰기) this.portData.constantServing일 경우 사용합니다.

- getBlocks() : 블럭 상세 정보 및 로직을 반환하는 함수입니다.



<br>

## 통신방법
디바이스와 통신하는 방법에는 아래 2가지가 있습니다.

### 지속 통신
- 사용자 액션(블럭 실행)이 없어도 항상 지정된 duration간격만큼 지속통신하는 방법입니다.
- block_ 모듈명 _lite.js 의 생성자에서 this.duration값을 지정하고, this.portData.constantServing 를 true로 세팅하게되면 handleLocalData(data)함수와 requestLocalData() 함수가 자동으로 실행되게 됩니다.
- ex. [block_arduino_lite.js](https://github.com/entrylabs/entryjs/blob/develop/src/playground/blocks/hardwareLite/block_arduino_lite.js), [block_sensorboard_lite](https://github.com/entrylabs/entryjs/blob/develop/src/playground/blocks/hardwareLite/block_sensorboard_lite.js), [block_hamster_lite](https://github.com/entrylabs/entryjs/blob/develop/src/playground/blocks/hardwareLite/block_hamster_lite.js)

### 단건 통신
- 사용자 액션(블럭 실행)이 있을때만 통신하는 방법입니다.
- 필요할 때만 통신하므로 일반적으로 지속통신방법보다 부하가 적지만, '계속 반복하기' 블럭 안에서 하드웨어 블럭을 사용하는 것처럼(초당 60번 호출) 단기간에 많은 통신을 할 경우 문제가 발생할 수도 있습니다.
- Entry.hwLite.serial.sendAsyncWithThrottle(기기에 입력할 값 : buffer | string, 리턴값 여부 | boolean)으로 호출할 수 있습니다. 첫번째 파라미터에는 기기에 입력할 버퍼, 두번째 파라미터를 false로 할 경우 기기로부터 받는 응답값을 받지 않습니다. 상세구조는 Entry.hwLite.serial.sendAsync() 함수를 확인 부탁드립니다.
- ex. [block_microbit2_lite](https://github.com/entrylabs/entryjs/blob/develop/src/playground/blocks/hardwareLite/block_microbit2_lite.js)

#### Entry.hwLite.serial.sendAsyncWithThrottle
- Return : 기기로부터 리턴된 value값

| 파라미터   | 타입             | 선택적 | 설명                                                         |
| ---------- | ---------------- | ------ | ------------------------------------------------------------ |
| data       | Buffer \| string |        | 기기에 송신할 데이터입니다. string 타입일경우 utf8로 인코딩되어 송신됩니다. |
| isResetReq | boolean          | ✔️      | 데이터를 송신한 이후에 기기로부터 응답을 받지 않고 함수를 종료합니다. |
| callback   | Function         | ✔️      | 함수가 존재할경우, 송수신 완료 후 callback(value)값을 리턴합니다. |


<br>

## 기타 웹연결 관련 함수들
### Entry.playground.addHardwareLiteModule
웹연결에 사용할 모듈을 선택하는 함수입니다.
파라미터로 Entry.모듈명(ex. Entry.Neobot)을 넣으면 해당 하드웨어가 선택됩니다.
실제 운영 엔트리WS에서는 '브라우저로 연결하기' => '팝업에서 모듈 선택 후 불러오기' 까지 진행하면 자동으로 이 함수가 실행되지만, entryjs만 사용한 개발환경에서는 위 팝업을 사용할 수 없기 때문에 직접 함수를 실행시켜주셔야 합니다.



| 파라미터 | 타입                                                         | 선택적 | 설명                            |
| -------- | ------------------------------------------------------------ | ------ | ------------------------------- |
| module   | [EntryHardwareBlockModule](https://github.com/entrylabs/entryjs/blob/edb5380602a0f035fb2b20eb9d2b7c8f1247f15d/types/index.d.ts#L180) |        | 웹연결에 사용할 모듈객체입니다. |



### Entry.hwLite.connect
웹연결 연결실행 함수입니다.

### Entry.hwLite.disconnect
웹연결 연결해제 함수입니다. 가급적 직접 호출보다는 '연결 해제하기' 버튼을 사용해주세요.

### Entry.hwLite.serial.handleConnectErrorInEngineRun
연결중 기기가 멈추거나 화면이 멈추는 등, 강제종료가 필요한 상황에 사용하는 함수입니다.

### Entry.hwLite.getConnectFailedMenu
연결실패화면을 출력해야 할 때 사용합니다.

![HwLite_failedMenu1](/images/entry-hw/HwLite_failedMenu1.png)

<br>

## 커스텀 프롬프트 모달 사용하기
기기를 연결하고 사용할때, 사용자로부터 입력값을 받아야 하는 경우가 있습니다.
하드웨어 웹연결에서는 커스텀 프롬프트 모달을 통해 기기연결전에 사용자로부터 입력값을 받아와 `Entry.hwLite.customPromptPayload`에 저장하고 언제든 읽어올 수 있습니다.

### 모듈클래스 파일에 설정값 추가하기
커스텀 프롬프트 모달을 사용하기 위해서는 모듈클래스.js 파일에 설정값을 추가해 주어야 합니다.

``` javascript
'use strict';

(function () {
    Entry.ArduinoLite = new (class ArduinoLite {
        constructor() {
            this.id = '010101'; // id는 6자리 모두 입력해야 합니다.
            this.name = 'ArduinoLite';
            this.title = {
                ko: '핑퐁 G2',
                en: 'PingPong G2',
            };
            ...
            // INFO: 하드웨어 연결 전, 사용자에게 값을 받아올 커스텀 프롬프트 설정
            this.customPrompt = {
                // 모달의 상단 타이틀 문구
                title: '그룹 번호 입력',
                // 모달의 중앙 콘텐츠 문구
                description:
                    '연결할 기기의 그룹 번호를 입력해 주세요.\n 별도로 지정하지 않았다면 00을 입력합니다.',
                // 기본값
                defaultValue: '00',
                // 좌측 취소 버튼 문구
                negativeButtonText: '취소',
                // 우측 확인 버튼 문구
                positiveButtonText: '설정',
            };
            ...
        }
    })();
})();

module.exports = Entry.ArduinoLite;

```

각 속성의 코드상 내용은 [customPropmt 타입 정의](https://github.com/entrylabs/entryjs/blob/bdd47a4d300a83d5ad70aba333e81eb61f088aba/types/index.d.ts#L217)에서 확인 할 수 있습니다.

설정값을 추가한 뒤, 사용자가 모듈을 선택하고 나면 아래와 같은 프롬프트 창이 나타나게 됩니다.
![HwLite_customPrompt1](/images/entry-hw/HwLite_customPrompt1.png)

이 프롬프트에서 사용자에게 입력받은 값은 `Entry.hwLite.getCustomPromptPayload()`함수로 호출해서 불러올 수 있습니다.

### entryjs 단독으로 테스트하기
이 프롬프트 모듈을 사용하기 위해선, entry-tool 라이브러리를 사용해야 합니다.
하지만 많은 하드웨어 개발사에서 entryjs만을 사용해 개발&테스트를 진행하기에 좀 더 간단한 테스트방법이 있습니다.

f12키로 브라우저 콘솔을 띄운 후, `Entry.hwLite.testCustomPromptPayload()` 함수를 호출하면 임시 프롬프트를 사용할 수 있습니다. 이 프롬프트에 입력한 값은 위와 동일하게 저장되어 `Entry.hwLite.getCustomPromptPayload()`함수로 호출할 수 있습니다.

![HwLite_customPrompt2](/images/entry-hw/HwLite_customPrompt2.png)

실제 유저가 사용할때는, 모듈을 선택한 뒤 나타나는 창을 콘솔로 임의호출하는 것이기 때문에 `Entry.playground.addHardwareLiteModule(Entry.모듈클래스명)` 함수를 호출해 모듈설정을 완료한 후에 사용이 가능합니다.

<br>

## 테스트하기
다음 2가지 방법으로 테스트하실수 있습니다.

A. entryjs와 entry-tool을 함께 적용하고 계시다면 어려움없이 하드웨어 탭에서 '브라우저로 연결하기' > 모듈선택 > 포트선택으로 테스트하실수 있습니다.
B. entryjs에서 yarn serve만으로 테스트하고 계시다면, 아래 순서로 진행해주세요
- 크롬 개발자도구에서 `Entry.playground.addHardwareLiteModule(Entry.모듈클래스명);`를 입력합니다. 사용자가 팝업창에서 해당모듈을 선택했을때 실행되는 동작입니다.
- 크롬 개발자도구에서 `Entry.hwLite.connect();`를 입력합니다. 사용자가 연결하기 버튼을 클릭할때 실행되는 동작입니다.
- 모듈이 연결된 포트를 선택하고 완료를 누르면 블록이 출력됩니다.

혹시 연결이 정상적으로 진행되지 않는다면 Entry.모듈명과 Entry.HARDWARE_LITE_LIST['모듈ID'] 이 존재하는지 확인 부탁드립니다, 둘중 하나라도 없다면 정상동작하지 않습니다. 모듈의 name, id 등을 체크해주세요.


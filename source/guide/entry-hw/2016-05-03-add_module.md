---
layout: page
title: 하드웨어 모듈 추가하기
type: guide
category: 'Entry Hw'
order: 3
---

엔트리에 하드웨어를 추가하기 위한 가장 기본적인 단계 입니다. 하드웨어 모듈을 추가 함으로써 엔트리와 통신할수 있게 됩니다.

## 모듈의 위치
`(your path)/app/modules/`밑에 해당 모듈들이 추가되야 합니다. `(your path)/app/next_modules/`의 경우에는 시험적인 하드웨어 모듈 또는 차기 버전에 적용될 하드웨어 모듈이 들어 있습니다. `next_modules`안에 있는 모듈은 실제로 동작하지는 않습니다.

## 모듈의 구성
모듈은 `모듈명.js`, `모듈명.json`, `모듈명.png`의 3가지로 구성됩니다.  
![모듈의 구성](../../images/entry-hw/modules.png)

## 모듈 추가하기
하드웨어를 추가하는 기본적인 과정은 다음과 같습니다.
1. .js 파일생성
1. .json 파일생성
1. 이미지 삽입
1. 필요에 따라 드라이버 및 펌웨어 추가

알맞게 파일이 생성되면 실제 하드웨어 화면에 추가한 하드웨어가 표시되어 테스트가능 상태가 됩니다. 하드웨어 모듈은 [ArduinoExt 모듈 소스](https://github.com/entrylabs/entry-hw/tree/master/app/modules)를 참고하시고 작성하시면 좋습니다.
### `.js` 파일생성  
``` js
// 모듈 생성
function Module() {
    //초기설정
}

// 초기설정
Module.prototype.init = function(handler, config) {
};

// 초기 송신데이터(필수)
Module.prototype.requestInitialData = function() {
};

// 초기 수신데이터 체크(필수)
Module.prototype.checkInitialData = function(data, config) {
};

// 하드웨어에 전달할 데이터
Module.prototype.requestLocalData = function() {
};

// 하드웨어 데이터 처리
Module.prototype.handleLocalData = function(data) {
};

// Web Socket 데이터 처리
Module.prototype.handleRemoteData = function(handler) {
};

// Web Socket(엔트리)에 전달할 데이터
Module.prototype.requestRemoteData = function(handler) {
};

// Web Socket 종료후 처리
Module.prototype.reset = function() {
};

// 이외 필요한 함수가 있을경우 임의로 추가 가능
...

module.exports = new Module();
```

### `.json` 파일생성  
``` json
{
    "id": "하드웨어ID(엔트리와 사전규약 필요. ex.'010101')",
    "name": {
        "en": "English Name",
        "ko": "한글명"
    },
    "platform": ["사용 할 운영체제(win32 | darwin)", "복수 선택 가능"],
    "icon" : "이미지(.png(권장) | .jpg | .gif ...)",
    "module": "모듈(.js)",
    "driver": {
        "win32-ia32": "윈도우32비트 하드웨어 드라이버(여러 드라이버 등록가능)",
        "win32-x64": "윈도우64비트 하드웨어 드라이버(여러 드라이버 등록가능)",
        "darwin-x64": "맥(Osx) 64비트 하드웨어 드라이버(여러 드라이버 등록가능)"
    },
    "url": "회사 홈페이지",
    "email": "고객센터 Email(필수)",
    "reconnect" : "재접속 시도여부 (true | false)",
    "firmware": "펌웨어(board) 여러 펌웨어 등록 가능",
    "firmwareBaudRate" : "펌웨어 업로드시 동작할 Baud Rate 값",
    "select_com_port": "Com Port 선택창 여부 (true | false)",
    "entry": {
        "protocol": "데이터규격(json)"
    },
    "hardware": {
        "type": "타입(serial | bluetooth)",
        "control": "동작방식(slave | master)",
        "duration": "slave 사용시 duration(32 ...)",
        "vendor": ["하드웨어 벤더명(ex.Arduino)"],
        "firmwarecheck": "펌웨어 자동체크여부 (true | false)",
        "baudRate": "baudRate(115200(최대), 57600, 38400, 19200, 9600, 4800, 2400, 1800, 1200, 600, 300, 200, 150, 134, 110, 75, 50)",
        "parity" : "parity('none', 'even', 'mark', 'odd', 'space')",
        "dataBits" : "dataBits(8, 7, 6, 5)",
        "stopBits" : "stopBits(1, 2)",
        "bufferSize" : "bufferSize(255 ...)",
        "delimiter" : "delimiter(ex '\r')",
        "flowControl" : "flowControl(ex. 'hardware')"
    }
}
```

### 이미지 삽입
이미지는 찌그러짐을 방지하기 위하여 정사각형의 이미지 이어야 하며 배경색이 투명색한 `.png` 파일이어야 합니다. 또한, 용량문제 때문에 너무 큰 이미지는 사용을 자제해 주시고, 적당한 크기의 이미지를 최대한 압축 및 최적화 후 넣어 주시면 됩니다.

> https://tinypng.com/ 사이트 에서 간단하게 무료로 `.png`파일을 최적화 할 수 있습니다.

### 펌웨어 추가
`모듈.json`파일에서 등록한 펌웨어이름와 똑같은 `.hex`파일을 `(your path)/app/custom_modules/flasher/` 위치에 넣어 주면 이후에 하드웨어 프로그램에서 자동적으로 해당 펌웨어를 업로드 합니다. 현재 펌웨어는 업로드는 아두이노 계열인 `UNO`와 `NANO`보드만 지원하고 있습니다. `NANO`보드에 펌웨어를 올리기 위해선 `firmwareBaudRate`속성의 값을 `57600`으로 설정해야 정상적으로 업로드가 가능합니다.

### 드라이버 추가
드라이버는 기본적으로 운영체제 별로 따로 설정하도록 되어 있으며, 해당 운영체제에 맞는 드라이버가 없는경우 드라이버 설치 버튼이 표시되지 않습니다. 드라이버 옵션에 작성한 경로에 맞추어 `(your path)/app/drivers/`폴더에 드라이버를 넣어 주면 됩니다.

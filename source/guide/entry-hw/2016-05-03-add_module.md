---
layout: page
title: 모듈 추가 방법
type: guide
category: 'Entry Hw'
order: 4
---

#### 모듈추가
엔트리에 하드웨어를 추가하기 위해서 수반되는 가장 기본적인 단계 입니다.

#### 모듈의 위치
엔트리가 Electron이 적용됨에 따라 모듈의 위치도 변경되었습니다.  
기존 상위폴더/modules에서 상위폴더/app/modules로 변경되었습니다.

#### 모듈의 구성
모듈은 모듈명.js, 모듈명.json, 모듈명.png의 3가지로 구성됩니다.  
![모듈의 구성](https://raw.githubusercontent.com/entrylabs/entry-hw/gh-pages/wiki-image/module/default.PNG)

##### 모듈명.json 구조
하드웨어 ID의 경우 반영 전 발급을 원칙으로 하고 있습니다.  
따라서 테스트 단계에서는 테스트용 ID인 999999를 활용해주시길 바랍니다.
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

##### 모듈명.js의 구조  
``` js
function Module() {
//모듈의 constructor
}

//필요시 Handler Data 초기값 설정
Module.prototype.init = function(handler, config) {
};

//필요시 연결직후 Hardware에 보내는 초기값 설정
Module.prototype.requestInitialData = function() {
};

//연결직후 Hardware에서보내는 Inital데이터의 Vaildation
Module.prototype.checkInitialData = function(data, config) {
};

//Hardware에서 보내는 모든 데이터의 Vaildation
Module.prototype.validateLocalData = function(data) {
};

// 서버에서 보내온 데이터 세팅
Module.prototype.handleRemoteData = function(handler) {
};

// Hardware에서 보내온 데이터 세팅
Module.prototype.handleLocalData = function(data) { // data: Native Buffer
};

// 서버에 보낼 데이터 세팅
Module.prototype.requestRemoteData = function(handler) {
};

// Hardware에 보낼 데이터 세팅
Module.prototype.requestLocalData = function() {
};

// 서버 Connect 종료시 값 세팅
Module.prototype.reset = function() {
};

module.exports = new Module();
```

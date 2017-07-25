---
layout: page
title: 시작하기
type: guide
category: 'Entry Hw'
order: 1
---

entry-hw는 엔트리 교육연구소에서 개발한 엔트리와 하드웨어를 연동하기 위한 프로그램입니다.
엔트리 사이트에 접속하시면 엔트리를 사용한 블록코딩 환경과 하드웨어를 연동하는 모습을 확인해 볼 수 있으며,
엔트리에 신규 하드웨어를 등록하기 위해서는 entry-hw 에 하드웨어 모듈을 추가함으로써 가능합니다.

#### 엔트리 하드웨어 추가 순서

1. 하드웨어 등록 신청서 작성 및 제출([상세안내](https://entrylabs.github.io/docs/entry-hw/2017-05-16-enroll_entry-hw/))
2. [하드웨어 모듈 추가하기](https://entrylabs.github.io/docs/entry-hw/2016-05-03-add_module/)
3. 하드웨어와 연동되는 [엔트리 블록 만들기](https://entrylabs.github.io/docs/entryjs/2016-05-22-add_new_blocks/)
4. 실행하여 테스트하기
5. 테스트코드 [GitHub의 Pull Request로 전달](https://entrylabs.github.io/docs/etc/2016-05-03-git_fork/)하기
6. 하드웨어 ID 발급 받기
7. 엔트리 서비스 정기 반영을 통한 하드웨어 추가


---

Entry-HW는 1.5.0 부터 [Electron](https://github.com/electron/electron/tree/master/docs-translations/ko-KR)기반으로 동작 합니다.  
정확한 사용법은 Electron 사이트를 참조 하시기 바랍니다.  
현재 엔트리 하드웨어 연결 프로그램은 Windows와 macOS를 지원합니다.

#### 클론  
``` bash
$ git clone https://github.com/entrylabs/entry-hw.git
```

#### 의존설 모듈 설치  
``` bash
$ npm install
//Electron을 사용하기 위해 아래 패키지를 -g 옵션으로 설치.
$ npm install -g electron
```

#### 실행  
``` bash
//디버그 모드로 실행됨 (추천)
$ npm start

//또는
$ electron -d app

//-d 옵션을 제거하면 디버그 모드 없이 실행가능
```

#### Nwjs -> Electron 변경  
기존의 Nw.js 환경에서 Electron 환경으로 변경함.  
프레임워크 교체에 따라 초기 실행 및 소스 세팅등의 일부 사항이 변경되었으나 기본적인 개발방식인 모듈추가는 기존과 똑같이 되도록 변경하였음.  

### 써드파티 라이브러리
 * jQuery : http://jquery.com/download/ (MIT)
 * Node Serialport : https://github.com/voodootikigod/node-serialport (MIT)
 * WebSocket : https://github.com/theturtle32/WebSocket-Node (Apacahe 2.0)
 * Node localize : https://github.com/dfellis/node-localize (MIT)

### 하드웨어 추가하기
    1. .js 파일생성
    2. .json 파일생성
    3. 이미지 삽입
    4. 실행

#### `.js` 파일생성  
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

// 이외 필요한 모듈이 있을경우 임의로 추가 가능
...

module.exports = new Module();
```

#### `.json` 파일생성  
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

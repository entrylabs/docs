---
layout: page
title: 하드웨어 모듈 추가하기
type: guide
category: 'Entry Hw'
order: 2
---

엔트리에 하드웨어를 추가하기 위한 가장 기본적인 단계 입니다. 하드웨어 모듈을 추가 함으로써 엔트리와 통신할수 있게 됩니다.

## 모듈의 위치
`app/modules/`밑에 해당 모듈들이 추가되야 합니다. `app/next_modules/`의 경우에는 시험적인 하드웨어 모듈 또는 차기 버전에 적용될 하드웨어 모듈이 들어 있습니다. `next_modules`안에 있는 모듈은 실제로 동작하지는 않습니다.

## 모듈의 구성
모듈은 `모듈명.js`, `모듈명.json`, `모듈명.png`의 3가지로 구성됩니다.  
아두이노를 예를 들면 아래와 같습니다.

> arduino.js : 실제 하드웨어 로직  
> arduino.json : 하드웨어의 접속방식 및 속성 등의 메타데이터  
> arduino.png : 하드웨어 프로그램에서 표기될 이미지  

## 모듈 추가하기
하드웨어를 추가하는 기본적인 과정은 다음과 같습니다.
- .js 파일생성
- .json 파일생성
- 이미지 삽입
- 필요에 따라 드라이버 및 펌웨어 추가

알맞게 파일이 생성되면 실제 하드웨어 화면에 추가한 하드웨어가 표시되어 테스트가능 상태가 됩니다. 
개발시 현재 엔트리에 등록되어있는 [하드웨어 모듈 목록](https://github.com/entrylabs/entry-hw/tree/master/app/modules)를 참고하시는 것을 추천합니다.

### `.js` 파일생성  
> 기존 자바스크립트 모듈화 기법에서, [ES6 문법인 class](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes) 를 활용하는 방법으로 개선되었습니다.  
> 타 모듈의 과거 방식으로 개발하여도 무방하지만, 아래의 방법을 추천드립니다.  
> 아래의 방식은 기존에 필수적으로 구현해야했던 함수들이 상단에 구현되어있으므로, 생략시 초기값을 따르게 됩니다.  
> 초기값은 BaseModule 을 참고해주세요. 

> 실제 적용되어있는 모듈의 예시로는 ev3 를 참고해주세요.

``` js
const BaseModule = require('./baseModule');

class [모듈명] extends BaseModule {
    
    // 클래스 내부에서 사용될 필드들을 이곳에서 선언합니다.
    constructor() {
        super();
        
        this.foo = 0;
        // ...
    }
    
    // 초기 설정
    init(handler, config) {
        this.handler = handler;
        this.config = config;
    }
    
    // 연결 후 초기에 송신할 데이터가 필요한 경우 사용합니다.
    requestInitialData() {
        // return true;
    }
    
    // 연결 후 초기에 수신받아서 정상연결인지를 확인해야하는 경우 사용합니다.
    checkInitialData(data, config) {
        // return true;
    }
    
    // optional. 하드웨어에서 받은 데이터의 검증이 필요한 경우 사용합니다.
    validateLocalData(data) {
        // return true;
    }
    
    // 하드웨어 기기에 전달할 데이터
    requestLocalData() {
        // 하드웨어로 보낼 데이터 로직
    }
    
    // 하드웨어에서 온 데이터 처리
    handleLocalData(data) {
        // 데이터 처리 로직
    }
    
    // 엔트리로 전달할 데이터
    requestRemoteData(handler) {
        // handler.write(key, value) ...
    }
    
    // 엔트리에서 받은 데이터에 대한 처리
    handleRemoteData(handler) {
        // const value = handler.read(key) ...
    }
}

module.exports = new [모듈명]();
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
`모듈.json`파일에서 등록한 펌웨어 이름과 똑같은 `.hex`파일을 `app/custom_modules/flasher/` 위치에 넣어 주면 이후에 하드웨어 프로그램에서 자동적으로 해당 펌웨어를 업로드 합니다. 현재 펌웨어는 업로드는 아두이노 계열인 `UNO`와 `NANO`보드만 지원하고 있습니다. `NANO`보드에 펌웨어를 올리기 위해선 `firmwareBaudRate`속성의 값을 `57600`으로 설정해야 정상적으로 업로드가 가능합니다.

### 드라이버 추가
드라이버는 기본적으로 운영체제 별로 따로 설정하도록 되어 있으며, 해당 운영체제에 맞는 드라이버가 없는경우 드라이버 설치 버튼이 표시되지 않습니다. 드라이버 옵션에 작성한 경로에 맞추어 `app/drivers/`폴더에 드라이버를 넣어 주면 됩니다.

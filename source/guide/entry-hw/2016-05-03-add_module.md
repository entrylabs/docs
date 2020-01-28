---
layout: page
title: 하드웨어 모듈 추가하기
type: guide
category: 'Entry HW'
order: 2
---

## 모듈의 위치

엔트리 하드웨어에서, 각 파일들의 위치는 아래와 같습니다.

- 모듈 파일 : `app/modules/`
- 펌웨어 파일 : `app/firmwares/`
- 드라이버 파일 : `app/drivers/`

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
    
    /*
    최초에 커넥션이 이루어진 후의 초기 설정.
    handler 는 워크스페이스와 통신하 데이터를 json 화 하는 오브젝트입니다. (datahandler/json 참고)
    config 은 module.json 오브젝트입니다.
    */
    init(handler, config) {
        this.handler = handler;
        this.config = config;
    }
    
    /*
    연결 후 초기에 송신할 데이터가 필요한 경우 사용합니다.
    requestInitialData 를 사용한 경우 checkInitialData 가 필수입니다.
    이 두 함수가 정의되어있어야 로직이 동작합니다. 필요없으면 작성하지 않아도 됩니다.
    */
    requestInitialData() {
        // return true;
    }
    
    // 연결 후 초기에 수신받아서 정상연결인지를 확인해야하는 경우 사용합니다.
    checkInitialData(data, config) {
        // return true;
    }
    
    // 주기적으로 하드웨어에서 받은 데이터의 검증이 필요한 경우 사용합니다.
    validateLocalData(data) {
        // return true;
    }
    
    /*
    하드웨어 기기에 전달할 데이터를 반환합니다.
    slave 모드인 경우 duration 속성 간격으로 지속적으로 기기에 요청을 보냅니다.
    */
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
    "category": "해당 기기의 카테고리 분류(robot, module, board)",
    "platform": ["사용 할 운영체제(win32 | darwin)", "복수 선택 가능"],
    "icon" : "이미지(.png(권장) | .jpg | .gif ...)",
    "module": "모듈(.js)",
    "driver": {
        "win32-ia32": "윈도우32비트 하드웨어 드라이버(여러 드라이버 등록가능)",
        "win32-x64": "윈도우64비트 하드웨어 드라이버(여러 드라이버 등록가능)",
        "darwin-x64": "맥(Osx) 64비트 하드웨어 드라이버(여러 드라이버 등록가능)"
    },
    "url": "회사 홈페이지",
    "email": "고객센터 Email",
    "reconnect": "연결 lost시 재접속 시도여부 (true | false)",
    "firmware": "아두이노 hex 혹은 hex 파일 업로드 타입 전용. 해당 펌웨어 명",
    "firmwareBaudRate" : "펌웨어 업로드시 동작할 Baud Rate 값 기본 115200",
    "firmwareMCUType" : "펌웨어 업로드시 동작할 MCUType. 기본 m328p",
    "tryFlahserNumber" : "펌웨어 업로드 실패시 재시도 회수. 기본 10",
    "select_com_port": "Com Port 선택창 여부 (true | false)",
    "entry": {
        "protocol": "json"
    },
    "hardware": {
        "type": "타입(serial | bluetooth)",
        "control": "동작방식(slave | master)",
        "duration": "slave 모드일 경우 통신이 끊겼을 경우 재접속을 시도할 ms. 기본 1000",
        "comName": "['COMPortName'] 존재하는 경우 해당 속성이 일치하는 COMPort 선택",
        "vendor": "['하드웨어 벤더명(ex.Arduino)'] 존재하는 경우 해당 속성이 일치하는 COMPort 선택",
        "pnpId": "['pnpId'] 존재하는 경우 해당 속성이 일치하는 COMPort 선택",
        "scanType": "deprecated 되었습니다.", 
        "firmwarecheck": "checkInitialData 3초간 실패시 펌웨어 자동 업로드여부 (true | false)",
        "lostTimer": "연결 성사 후 일정시간동안 통신이 없는 경우 lost 처리할 ms. 기본 500",
        "advertise": "{number} 하단 참고",
        "softwareReset: "{boolean} 하단 참고",
        "baudRate": "baudRate(115200(최대), 57600, 38400, 19200, 9600, 4800, 2400, 1800, 1200, 600, 300, 200, 150, 134, 110, 75, 50)",
        "parity" : "parity('none', 'even', 'mark', 'odd', 'space')",
        "dataBits" : "dataBits(8, 7, 6, 5)",
        "stopBits" : "stopBits(1, 2)",
        "bufferSize" : "bufferSize(255 ...)",
        "flowControl" : "flowControl('hardware' | 'software')"
        "delimiter" : "{string} delimiter(ex '\r')",
        "byteDelimiter" : "{string|number[]} delimiter(ex '\r')",
    }
}
```

몇가지 속성에 대해 추가 설명 드립니다.

- comName, vendor, pnpId : COMPort 스캔시 사용되는 속성입니다. 해당 속성과 매치되는 경우 바로 해당 COMPort 를 선택합니다.
- control : slave, master 중 하나를 선택해야 합니다. 이 둘은 통신방식이 다릅니다.  
  - 최초 checkInitialData & requestInitialData (HandShake) 시
    - master : 마스터 속성인 경우 기기쪽에서 먼저 데이터가 올때까지 기다립니다.
    - slave : duration 속성만큼의 간격으로 기기쪽으로 먼저 데이터를 보냅니다.
  - 연결 성사 후 데이터 통신시
    - master : 기기에서 데이터를 받으면 그다음 기기로 requestLocalData 송신
    - slave : requestLocalData 를 duration 속성만큼 주기적으로 전송
 - advertise : 연결 성사 후 마지막으로 handler 에 작성한 데이터(엔트리로 전송할 데이터) 를 변경없이 advertise 속성 만큼의 간격으로 서버에 전송합니다.
 - softwareReset : true 인 경우, 최초 연결 후 시리얼포트에 dtr 플래그를 1초간 off 합니다. 그 후 다시 flag on 합니다.
 
 SerialPort 관련
 - baudRate ~ bufferSize : 시리얼포트 라이브러리 오픈시 필요한 옵션입니다. 자세한 사항은 [Serialport Docs](https://serialport.io/docs/en/api-stream#openoptions) 를 참고해주세요.  
 - flowControl : hardware, software 로 나뉩니다. hardware 선택시 rtscts 플래그 / software 시 xon, xoff 플래그가 on 입니다.
 - delimiter | byteDelimiter : 둘중 한 프로퍼티만 적용됩니다. 기기에서 전달받는 데이터의 파서를 선택합니다.  
 delimiter 인 경우 결과값을 string 으로, byteDelimiter 의 경우 byteArray(ex. [255, 83, 13, 10]) 로 전달받습니다.
 byteDelimiter 는 해당 delimiter 를 포함한 결과값을 받게 됩니다.

### 이미지 삽입

이미지는 찌그러짐을 방지하기 위해 정사각형의 이미지를 추천드립니다. (100px * 100px)  
또한 배경색이 투명색한 `.png` 파일이어야 합니다.  
용량문제 때문에 너무 큰 이미지는 사용을 자제해 주시고, 적당한 크기의 이미지를 최대한 압축 및 최적화 후 넣어 주시면 됩니다.  
용량이 너무 크다고 판단되는 경우 임의로 리사이징을 할 수 있습니다.

> https://tinypng.com/ 사이트 에서 간단하게 무료로 `.png`파일을 최적화 할 수 있습니다.

### 펌웨어 추가

`모듈.json` 파일의 firmware 프로퍼티에 작성한 값을 통해 펌웨어를 찾습니다.  
`[펌웨어명].hex`파일을 `app/firmwares/` 위치에 넣어 주면 이후에 하드웨어 프로그램에서 자동적으로 해당 펌웨어를 업로드 합니다.  
현재 펌웨어는 업로드는 아두이노 계열인 `Uno`와 `Nano` 보드만 지원하고 있습니다. `Nano` 보드에 펌웨어를 올리기 위해선 `firmwareBaudRate` 속성의 값을 `57600`으로 설정해야 정상적으로 업로드가 가능합니다.

### 드라이버 추가

드라이버는 기본적으로 운영체제 별로 따로 설정하도록 되어 있으며, 해당 운영체제에 맞는 드라이버가 없는경우 드라이버 설치 버튼이 표시되지 않습니다. 드라이버 옵션에 작성한 경로에 맞추어 `app/drivers/`폴더에 드라이버를 넣어 주면 됩니다.

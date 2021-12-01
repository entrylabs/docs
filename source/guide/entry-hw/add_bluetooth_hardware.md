---
layout: page
title: 블루투스 하드웨어 추가하기
type: guide
category: 'Entry HW'
order: 3
---

엔트리에서는 블루투스 프로파일중 Serial Port Profile(이하 SPP)만 지원합니다.  
Bluetooth Low Energy(이하 BLE) 타입의 블루투스는 현재로선 지원하지 않습니다.

> BLE 는 현재 개발중 단계이며, 업체의 개발은 아직 허용되지 않았습니다.
> 만약 필요하신 경우, [develop#BLE](https://github.com/entrylabs/entry-hw/tree/develop/app/src/main/core/ble) 를 를 참고해주세요. 

## 모듈에 블루투스 설정하기

일단 블루투스를 사용하기 위해서는 `.json`파일에 블루투스 정보를 추가해야 합니다.
``` json
{
    "hardware": {
        "type": "bluetooth",
    }
}
```
하드웨어 타입이 블루투스인 경우에는 자동으로 COM Port 선택창이 나오게 되어있습니다.  
블루투스 연결시 COM Port(Serial Port)를 선택해야 하는 이유는 SPP로 연결 할때 쌍으로 연결이 되기 때문입니다.  
SPP연결 후에는 송신포트와 수신포트가 생기는데 실제는 송신포트로만 실제 사용하게 됩니다. 
또한, 벤더명이 블루투스 동글의 드라이버명을 따라가기 때문에, 실제 어떠한 하드웨어인지를 자동으로 알기가 힘든 부분이 있습니다.  
이 때문에 강제적으로 사용자가 COM Port 리스트에서 송신포트를 선택하도록 하고 있습니다. 기타 나머지 설정 및 코드는 블루투스이긴 하지만 실제로는 Serial Port와 동일하게 동작하기 때문에 똑같이 설정 하시면 됩니다.

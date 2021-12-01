---
layout: page
title: 블록 사용 등록
type: guide
category: 'Entry JS'
order: 4
---

## 블록 등록

엔트리는 현재 EntryStatic.getAllBlocks() 를 통해 모든 블록정보를 가져온 후, 
해당 정보를 활용해 실제 블록을 만들어내는 프로세스를 가지고 있습니다.  
블록을 만들었다고 하더라도 이 위치에 구현한 블록명을 등록하지 않으면 블록이 보여지지 않습니다.

해당 파일의 위치는 extern/util/static.js 입니다.  

**블록의 기록 순서는 실제 블록의 순서에 영향을 줍니다. (동일한 순서입니다.)**    


```js
EntryStatic.getAllBlocks = function() {
    return [
        {
            category: 'start',
            blocks: [
                'when_run_button_click',
                // ...
            ]
        }
    ]
}
```


## 하드웨어 블록 등록

하드웨어 블록도 동일하게 static.js 파일을 수정하는 것으로 블록을 등록하였었습니다.  
하지만 각 개발사들이 같은 파일을 수정하면서 충돌이 잦아, 각 하드웨어 블록 파일에서 수정할 수 있도록 개선하였습니다.

```js
Entry.Arduino.blockMenuBlocks = [
    'arduino_get_number_sensor_value',
    'arduino_get_digital_value',
    'arduino_toggle_led',
    'arduino_toggle_pwm',
    'arduino_convert_scale',
];

Entry.Arduino.getBlocks = function() {
    return {
        arduino_text: {
        //...
```

Entry.하드웨어명.blockMenuBlocks = [] 에 등록하고자 하는 블록명을 차례대로 작성해 주시면 됩니다.

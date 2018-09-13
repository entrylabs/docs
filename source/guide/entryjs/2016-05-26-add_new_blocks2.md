---
layout: page
title: 블록 사용 등록
type: guide
category: 'Entryjs'
order: 4
---

## 블록 등록

엔트리는 현재 EntryStatic.getAllBlocks() 를 통해 모든 블록정보를 가져온 후, 
해당 정보를 활용해 실제 블록을 만들어내는 프로세스를 가지고 있습니다.  
블록을 만들었다고 하더라도 이 위치에 구현한 블록명을 등록하지 않으면 블록이 보여지지 않습니다.

해당 파일의 위치는 extern/util/static.js 입니다.  

**블록의 기록 순서는 실제 블록의 순서에 영향을 줍니다. (동일한 순서입니다.)**    

> 하드웨어 블록의 경우, category 명은 arduino 입니다.  
> 기존 등록된 블록의 형태를 참고하시고 추가하시기 바랍니다.

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

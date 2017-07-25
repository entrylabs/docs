---
layout: page
title: 블록 사용 등록
type: guide
category: 'Entryjs'
order: 3
---

### 블록 사용 등록
기존에는 static.js에 EntryStatic.getAllBlocks와 EntryStatic.blockInfo 두 가지를 설정했지만
blockInfo의 경우 block_entry.js에 포함되었습니다. getAllBlocks에만 사용 할 블록을 등록하면 해당 블록이 나오게 되어있습니다.
작성 방법은 기존과 같습니다.

#### 하드웨어 블록 등록
하드웨어 블록은 EntryStatic.getAllBlocks에 block_entry.js에 작성한 블록의 명칭을 등록하면 됩니다. 하드웨어 블록은 arduino 카테고리에 포함됩니다.  

예)
``` javascript
{
    type: guide
category: "arduino",
    blocks: [
        //... 기존 존재하는 블록
        "생성한 블록 명"
    ]
}
```

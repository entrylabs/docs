---
layout: page
title: 하드웨어 블록 번역작업
type: guide
category: 'Entryjs'
order: 7
---

기존에는 `(root)/extern/lang/` 밑에 있는 `ko.js`, `en.js` 등을 수정해서 다국어를 적용 하였습니다. 이제 하드웨어 블록은 각 하드웨어 블록 파일에서 적용 하도록 변경 되었습니다.

## 다국어 추가하기
일단 하드웨어 별로 다국어는 `(root)/src/playground/blocks/block_(하드웨어명).js` 파일에 추가합니다.

예)

``` js
'use strict';

// 기본 세팅
Entry.SAMPLE = {
    name: 'SAMPLE',
    setZero: function () {
    },
};

// 언어 적용
Entry.SAMPLE.setLanguage = function () {
    return {
        ko: {
            // ko.js에 작성하던 내용
            template: {
                sample_block: "%1",
            }
        },
        en: {
            // en.js에 작성하던 내용
            template: {
                sample_block: "%1",
            }
        }
    }
};
```

이렇게 작업을 수행하고 기존에 추가하던 `(root)/extern/lang/` 밑에 있는 `ko.js`, `en.js`는 따로 수정하지 않습니다.
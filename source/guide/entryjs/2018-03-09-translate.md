---
layout: page
title: 하드웨어 블록 번역작업
type: guide
category: 'Entryjs'
order: 7
---

## 다국어 추가하기

엔트리 사이트의 언어별 리소스는 내부 프로젝트에 의해 관리되고 있습니다.  
이 언어 리소스는 entryjs 개발을 위한 자체실행에서 사용할 수 있도록 extern/lang 아래에 다국어 데이터를 삽입해두었습니다.

하지만 이 리소스는 entryjs 에서 수정되어도 실제로 반영되지 않습니다. 즉, 개발시에만 사용되는 파일입니다.  
하드웨어의 언어 작업은 `src/playground/blocks/block_(하드웨어명).js` 의 setLanguage() 로직을 통해 추가합니다.

setLanguage 에서, ko.template 과 en.template 는 필수입니다.

> 추가적으로 블럭의 도움말을 설정하고자 하는 경우, ko.Helper.(블럭명) 의 형태로 추가하시면 됩니다. 

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
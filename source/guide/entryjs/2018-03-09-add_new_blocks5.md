---
layout: page
title: 하드웨어별 블록생성 하기
type: guide
category: 'Entryjs'
order: 8
---

기존 블록은 `block_entry.js`에 블록을 추가하도록 가이드 드렸습니다. 문제는 해당 블록 파일에 수많은 하드웨어 업체들이 각자의 블록을 생성하다보니 `block_entry.js`이 비대해 지기 시작했습니다. 저희가 사용중인 GitHub는 소스파일에 대해 1mb까지의 용량 까지만 많은 기능을 지원하는데 `block_entry.js`는 이미 2mb가 넘어선 상태입니다. 이와 관련해 관리가 힘들어 지고 지속적으로 conflict가 발생하게 되었습니다. 물론 language를 처리하는 `ko.js`, `en.js`등도 똑같은 문제가 발생하였습니다. 그래서 각 하드웨어별 블록을 분리하는 방식을 기본 방향으로 변경하게 되었습니다.

> 2018년 3월 기준으로 지원이 시작되었습니다.

## 하드웨어 파일 만들기

기존에는 하드웨별로 `.js`파일을 만드는것을 따로 강요하지는 않았습니다. 이제부터는 하드웨어 별로 `.js`파일을 만들어야 합니다. 별도의 `.js`파일은 아니고 기존에 만들어 지던 `(your path)/src/playground/blocks/block_(하드웨어명).js`파일을 말합니다.

> 기존 하드웨어에 중에는 `block_arduino.js`와 같이 작성되는 경우가 많았습니다. 이제는 하드웨어 별로 따로 만들어 주시기 바랍니다.

`(your path)/src/playground/blocks/` 폴더및에 `block_(하드웨어명).js`파일을 만드시면 됩니다. 혹시 이미 만들어두신 파일이 있다면 아래의 예제와 같이 변경해 주시면 됩니다.

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

// 블록 생성
Entry.SAMPLE.getBlocks = function () {
    return {
        sample_block: {
            color: "#FFD974",
            skeleton: "basic_string_field",
            params: [
                {
                    type: "TextInput",
                    value: 0
                }
            ],
            def: {
                type: "sample_block"
            },
            paramsKeyMap: {
                VALUE: 0
            },
            class: "test",
            func: function (sprite, script) {
                return script.getField("VALUE", script);
            }
        }
    }
};
```

> 기존에 존재 하던 하드웨어 블록은 개발팀에서 전부 분리 작업을 수행하였습니다. 앞으로 수정 작업이나 하드웨어 추가 신규 작업은 해당 부분을 만들어 주시기 바랍니다.

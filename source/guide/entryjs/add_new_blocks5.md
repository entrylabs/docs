---
layout: page
title: 하드웨어별 블록생성 하기
type: guide
category: 'Entryjs'
order: 7
---

기존 블록은 `block_entry.js`에 블록을 추가하도록 가이드 드렸습니다. 문제는 해당 블록 파일에 수많은 하드웨어 업체들이 각자의 블록을 생성하다보니 `block_entry.js`이 비대해 지기 시작했습니다. 저희가 사용중인 GitHub는 소스파일에 대해 1mb까지의 용량 까지만 많은 기능을 지원하는데 `block_entry.js`는 이미 2mb가 넘어선 상태입니다. 이와 관련해 관리가 힘들어 지고 지속적으로 conflict가 발생하게 되었습니다. 물론 language를 처리하는 `ko.js`, `en,js`등도 똑같은 문제가 발생하였습니다. 그래서 각 하드웨어별 블록을 분리하는 방식을 기본 방향으로 변경하게 되었습니다.

> 2017-07-25 기준으로는 아직 지원하지 않는 기능입니다.
https://github.com/entrylabs/entryjs/pull/709
위의 Pull Request가 머지되면서 부터 지원될 예정입니다.

## 하드웨어 파일 만들기

기존에는 하드웨별로 `.js`파일을 만드는것을 따로 강요하지는 않았습니다. 이제부터는 하드웨어 별로 `.js`파일을 만들기를 권해드립니다. 별도의 `.js`파일은 아니고 기존에 만들어 지던 `(your path)/src/blocks/block_(하드웨어명).js`파일을 말합니다.

> 기존 하드웨어에 중에는 `block_arduino.js`와 같이 작성되는 경우가 많았습니다.

`(your path)/src/blocks/` 폴더및에 `block_(하드웨어명).js`파일을 만드시면 됩니다. 혹시 이미 만들어두신 파일이 있다면 아래의 예제와 같이 변경해 주시면 됩니다.

예)
``` js
Entry.SAMPLE = {
    name: 'SAMPLE',
    setZero: function () {
    },
};

Entry.SAMPLE.setLanguage = function (lang) {
    var language = {
        ko: {
            // ko.js에 작성하던 내용
            sample_block: "%1"
        },
        en: {
            // en.js에 작성하던 내용
            sample_block: "%1"
        }
    }

    Entry.SAMPLE.lang = language[lang];
};

Entry.SAMPLE.getBlocks = function () {
    return {
        sample_block: {
            color: "#FFD974",
            skeleton: "basic_string_field",
            template: Entry.SAMPLE.lang.sample_block,
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

> 해당 내용은 개발팀에서 무작위로 뽑아서 선행작업을 진행하고 있습니다. 블록의 규모가 크고 테스트할 부분이 많이 때문에 한번에 옮기는 작업을 하지는 못하고 천천히 변경할 예정입니다. 다만, 하드웨어 업체에서 중간에 작업해서 반영 요청 주시면 해당 방식으로 변환이후에는 수정 요청이 있을수 있으니 이점 양해 부탁드립니다.

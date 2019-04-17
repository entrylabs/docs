---
layout: page
title: 커스텀 프로젝트 빌드
type: guide
category: 'Entry Offline'
order: 6
---

## 개요

엔트리 오프라인은 내부적으로 entryjs, entry-hw 프로젝트를 포함하고 있습니다. 
정식 릴리즈판의 경우, 운영되고 있는 버전의 1달 이전 버전을 사용하기 때문에 빠른 반영을 원하시는 분이 있을 수 있습니다.

이에 관련하여 이 문서에서는 자신이 개발한 entryjs 혹은 entry-hw 버전으로 교체하여 오프라인 프로젝트를 빌드하는 방법을 작성하였습니다.

## 연동 구조
 
엔트리 오프라인은 렌더러 프로세스에서 entryjs, entry-hw 프로젝트를 가져오는 구조입니다.
 
아래는 bower.json 에 기술된 내용입니다.
 
```json
{
    //...
    "dependencies": {
        "entry-hw": "https://github.com/entrylabs/entry-hw.git#[latest tag version]",
        //other dependencies...
        "entryjs": "#[latest tag version]"
    },
    //...
}
```
entry-hw 는 직접 github 에서 데이터를 가져오며, entryjs 는 bower 저장소에 등록된 버전을 가져오는 형태를 띄고 있습니다.

만약 자신이 작업한 entry, entry-hw 를 오프라인 프로젝트에 반영하고자 한다면, 이를 수정하여 적용할 수 있습니다.
  
> entry-hw 의 경우 : ht<span>tps://github.co</span>m/[자신의 ID]/entry-hw.git#master
> entryjs 의 경우 : ht<span>tps://github.co</span>m/[자신의 ID]/entryjs.git#master

## 반영 절차

### 각 프로젝트 fork 하기

반영하고자 하는 프로젝트를 먼저 fork 합니다. fork 방법은 각 가이드문서([entryjs](/docs/guide/entryjs/2018-03-09-getting_started.html), [entry-hw](/docs/guide/entry-hw/2016-05-01-getting_started.html))
를 참고해주세요.

### entryjs 반영하기

> entryjs 에서의 개발은 해당 카테고리를 참고해주세요.

배포판의 경우, entryjs 를 그대로 사용하는 것이 아닌 bundle 된 데이터와 offline 에서 필요한 몇가지 파일만을 추출해서 사용합니다.  
오프라인 프로젝트는 이에 맞춘 구조로 이루어져 있으므로, 동일한 구조로 만들어 주어야 합니다.

구조는 아래와 같습니다.

```text
entryjs/
 ...
├─ dist/
│  ├─ entry.css
│  ├─ entry.js
│  └─ entry.min.js
├─ extern/
├─ images/
└─ src/
   └─ playground/
      ├─ blocks/
      ├─ block_entry.js
      └─ block_entry_mini.js
```

아래와 같은 구조를 위해 직접 파일을 옮겨도 되나, 기존 배포구조 빌드의 경우 `entryjs/script/build.sh` 를 따르고 있습니다.  
bash script 이므로 windows 에서는 git bash 등의 쉘을 사용하셔야 할 수 있습니다.

이와 같은 파일 구조를 entry-offline/src/renderer/bower_components/entry-js 에 복사하시면 됩니다.

> 위의 구조를 어떤 방식으로든 만든다음 entry-offline 내 디렉토리에 위치만 시키면 됩니다.

> 이에 관해서는 편의성을 위해 추후 스크립트 개선 혹은 구조 변경이 있을 수 있습니다.

### entry-hw 반영하기

entry-hw 는 특별한 빌드 방법 없이 bower.json 의 주소를 자신의 repository 로 변경 한 후 설치된 파일 그대로 사용합니다.

특별히 dependency 를 설치해주지 않아도 됩니다.

### 실행해보기

위와 같은 작업이 끝나면, `npm run start` 로 정상적으로 실행되는지 확인할 수 있습니다.

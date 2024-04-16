---
layout: page
title: 확장블록
type: entryjs
category: '고급 기능 블록'
order: 1
keywords: 
genre: 
description: 
thumbnail: 
author: Entrylabs
date: 2024-03-15
updated: 2024-04-15
---

확장블록은 EntryJS에서 사용자가 다양한 외부 API 데이터를 워크스페이스 내로 직접 가져올 수 있게 해주는 API 블록입니다. 날씨 정보, 국민 행동 요령, 행사 정보와 같은 외부 데이터를 실시간으로 프로젝트에 활용할 수 있습니다.

### 현재의 한계
수정과 추가를 위해 EntryJS 소스 코드를 직접 수정하고 빌드해야 한다는 점입니다.

> 추후 개선을 통해 외부에서 동적으로 확장블록을 컨트롤 할수 있게 수정할 예정입니다.

## 공통

[initOption](/entryjs/typedef/2024-03-11-init-options.html)으로 `expansionDisable` 값을 `true`로 전달하면 확장 블록 기능이 동작하지 않습니다.

```js
Entry.init(container, {
    //... options
    expansionDisable: true, //확장 블록 기능 off
});
```

또는 확장블록을 추가 및 제거하려면 아래의 소스코드를 수정한 후 빌드해야 합니다.
[src/class/Expansion.js](https://github.com/entrylabs/entryjs/blob/develop/src/class/Expansion.js)

```js
import '../playground/blocks/block_expansion_weather';
import '../playground/blocks/block_expansion_festival';
import '../playground/blocks/block_expansion_behaviorconduct_disaster';
import '../playground/blocks/block_expansion_behaviorconduct_lifesafety';

// weather, festival을 제거 하고 싶은경우
import '../playground/blocks/block_expansion_behaviorconduct_disaster';
import '../playground/blocks/block_expansion_behaviorconduct_lifesafety';
```

확장블록 카테고리까지 제거하고 싶은경우 [static.js](/entryjs/api/2024-03-05-static.html)에서 `getAllBlocks`의 `expansion`항목을 제거하면 됩 합니다. 

다른방법의 카테고리 및 블록 제거 방법은 [핵심 API](/entryjs/api/2024-02-29-api.html#Entry-playground-blockMenu-banClass)를 참고하시면 됩니다.

### META DATA
기본적으로 블록마다 메타데이터를 가지게 됩니다. 개발하는 블록마다 다른 메타데이터를 가지기도 하시면 공통적으로 필요한 메타데이터가 있습니다.

|프로퍼티|타입|설명|
|---|---|---|
|name|string|확장 블록의 이름|
|imageName|string|확장 블록의 이미지|
|title|Lang|확장 블록의 다국어 이름|
|titleKey|string|확장 블록의 다국어 키<br />예) template.festival_title_text = window.Lang.template.festival_title_text|
|descriptionKey|string|확장 블록의 다국어 키|
|api|string|해당 확장블록을 호출할 api의 url|


### 팝업 관리
기본적으로는 [팝업 expansion](/entryjs/api/2024-02-29-popup.html#expansion)의 기능으로 확장 블록을 팝업에 띄울수 있습니다.
블록 메뉴에서 `확장 블록 불러오기`버튼 클릭시 `openExpansionBlockManager`이벤트가 발생하고 이때 [popup.show](/entryjs/api/2024-02-29-popup.html#show) 를 이용해 팝업을 띄울수 있습니다.

```js
Entry.addEventListener('openExpansionBlockManager', () => {
    // EntryJS load가 정상적이라면
    // 전역 Entry의 EXPANSION_BLOCK_LIST에 확장 블록 리스트가 들어 있습니다.
    tool.popup.show('expansion', Object.values(Entry.EXPANSION_BLOCK_LIST));
});
```

## 날씨

[소스](https://github.com/entrylabs/entryjs/blob/develop/src/playground/blocks/block_expansion_weather.js)

기온, 강수량, 미세먼지 농도 등 한국의 날씨와 관련된 블록 모음입니다.

해당 블록을 사용하기 위해선 API 서버 구축이 필요합니다.
> 현재 엔트리에서는 웨더아이 OPEN API 데이터를 이용해서 제공하고 있습니다.
> 웨더아이가 아니더라도 각 블록에서 데이터를 맞춰주면 어떤 날씨 API를 사용하더라도 문제 없습니다.
> 각 블록의 func를 수정해서 사용하면 됩니다.

### check_city_weather
선택한 날짜와 지역의 날씨 정보를 실제 날씨 상태와 비교하여 일치하는 경우 ‘참’으로 판단하는 블록.

```js
async func(sprite, script) {
    const location = {
        parent: script.getField('LOCATION', script),
        sub: script.getField('SUBLOCATION', script),
    };
    // 지역&날짜 값을 던져서 날씨 정보를 가져온다.
    const apiResult = await Entry.EXPANSION_BLOCK.weather.getData(
        'week',
        location,
        script.getField('DATE', script)
    );

    // 날씨가 셀렉트 박스와 값이 같은지 비교
    return Entry.EXPANSION_BLOCK.weather.checkWeather(
        apiResult.sky_code,
        script.getField('WEATHER', script)
    );
}
```

### check_city_finedust
선택한 지역의 현재 미세먼지 정보를 실제 미세먼지 등급과 비교하여 일치하는 경우 ‘참’으로 판단하는 블록.

```js
async func(sprite, script) {
    const location = {
        parent: script.getField('LOCATION', script),
        sub: script.getField('SUBLOCATION', script),
    };
    // 지역 값을 던져서 현재의 미세먼지 정보를 가져온다
    const apiResult = await Entry.EXPANSION_BLOCK.weather.getData(
        'now',
        location,
        null
    );

    // 미세먼지가 셀렉트 박스와 값이 같은지 비교
    return Entry.EXPANSION_BLOCK.weather.checkFineDust(
        apiResult.pm10,
        script.getField('FINEDUST', script)
    );
}
```
### get_city_weather_data
선택한 날짜와 지역의 각종 날씨 정보 블록.

```js
async func(sprite, script) {
    const location = {
        parent: script.getField('LOCATION', script),
        sub: script.getField('SUBLOCATION', script),
    };

    // 지역&날짜 값을 던져서 날씨 정보를 가져온다.
    const apiResult = await Entry.EXPANSION_BLOCK.weather.getData(
        'week',
        location,
        script.getField('DATE', script)
    );

    // 정의된 타입을 가져온다.
    const type =
        Entry.EXPANSION_BLOCK.weather.propertyMap[script.getField('TYPE', script)];
    // 선택한 타입에 따라 데이터를 가져온다.
    return apiResult[type];
}
```
### get_current_city_weather_data
현재 선택한 지역의 날씨 정보 블록.

```js
func(sprite, script) {
    const location = {
        parent: script.getField('LOCATION', script),
        sub: script.getField('SUBLOCATION', script),
    };
    // 정의된 타입을 가져온다.
    const type =
        Entry.EXPANSION_BLOCK.weather.propertyMap[script.getField('TYPE', script)];

    // 지역 값을 던져서 현재의 날씨 정보를 가져온다.
    return new Promise((resolve) => {
        Entry.EXPANSION_BLOCK.weather
            .getData('now', location, null)
            .then((data) => resolve(data[type]));
    });
}
```
### get_today_city_temperature
오늘 선택한 지역과 시간대의 기온 블록.

```js
async func(sprite, script) {
    const location = {
        parent: script.getField('LOCATION', script),
        sub: script.getField('SUBLOCATION', script),
    };
    const date = Entry.EXPANSION_BLOCK.weather.date
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, '');
    let time = script.getField('TIME', script);
    // db에 저장하지 않으면서 00시가 없어져서 03시부터 가능..
    if (time == '00') {
        time = '03';
    }

    // 지역&날짜 값을 던져서 날씨 정보를 가져온다.
    const apiResult = await Entry.EXPANSION_BLOCK.weather.getData(
        'hour',
        location,
        date + pad2(time - (time % 3))
    );

    return apiResult.temp;
}
```

## 행사

[소스](https://github.com/entrylabs/entryjs/blob/develop/src/playground/blocks/block_expansion_festival.js)

국내 지역별 다양한 행사 및 축제와 관련된 불록 모음 입니다. 

해당 블록을 사용하기 위해선 API 서버 구축이 필요합니다.
> 현재 엔트리에서는 API는 [공공데이터의포털](https://www.data.go.kr/data/15101578/openapi.do)을 이용하고 있습니다.
> 각 블록의 func를 상황에 맞도록 수정해서 사용하면 됩니다.

### count_festival
선택한 날짜와 지역에서 열리는 행사의 수 블록.

```js
func(sprite, script) {
    const defaultValue = 0;
    const params = {
        area:
            Entry.EXPANSION_BLOCK.festival.locationMap[
                script.getField('LOCATION', script)
            ].code,
        month:
            Entry.EXPANSION_BLOCK.festival.monthMap[script.getField('MONTH', script)],
        list: 'N',
    };
    // 지역과 날짜를 param으로 던져서 값을 가져온다.
    return getFestivalCount(params, defaultValue);
}
```

### get_festival_info
선택한 날짜와 지역에서 열리는 행사에 대한 정보 블록.

```js
func(sprite, script) {
    const number = script.getStringValue('NUMBER', script);
    const type = script.getField('TYPE', script);
    const infoType = Entry.EXPANSION_BLOCK.festival.infoTypeMap[type];
    const location =
        Entry.EXPANSION_BLOCK.festival.locationMap[script.getField('LOCATION', script)];
    const defaultValue = Lang.Blocks.no_data;
    const params = {
        area: location.code,
        month:
            Entry.EXPANSION_BLOCK.festival.monthMap[script.getField('MONTH', script)],
    };

    return getFestivals(number, params, {}).then((festival) => {
        switch (type) {
            case 'area':
                return location.sub[festival[infoType] - 1] || defaultValue;
            case 'homepage':
            case 'overview':
                return getDetailInfo(festival.contentid, defaultValue, infoType);
            default:
                return festival[infoType] || defaultValue;
        }
    });
}
```

## 자연재난 국민행동요령
[소스](https://github.com/entrylabs/entryjs/blob/develop/src/playground/blocks/block_expansion_behaviorconduct_disaster.js)

자연재난 발생 시 국민이 지켜야하는 기본적인 행동요령에 대한 블록들의 모음입니다.

해당 블록을 사용하기 위해선 API 서버 구축이 필요합니다.
> 현재 엔트리에서는 API는 [공공데이터의포털](https://www.data.go.kr/data/15000991/openapi.do#tab_layer_detail_function)을 이용하고 있습니다.
> 각 블록에서 데이터를 맞춰주면 어떤 API를 사용하더라도 문제 없습니다.

### count_disaster_behavior
선택한 자연재해가 발생했을 때 해야할 행동요령의 수 블록

```js
func(sprite, script) {
    const params = {
        category: Entry.EXPANSION_BLOCK.behaviorConductDisaster.apiType,
        subCategory: script.getField('CATEGORY', script),
        subCategory2: script.getField('SUB_CATEGORY', script),
    };

    return getBehavior(params, 0);
}
```
### get_disaster_behavior
선택한 자연재해가 발생했을 때 해야하는 행동요령에 대한 정보 블록

```js
func(sprite, script) {
    const number = script.getStringValue('NUMBER', script);
    const defaultValue = Lang.Blocks.no_data;
    const params = {
        category: Entry.EXPANSION_BLOCK.behaviorConductDisaster.apiType,
        subCategory: script.getField('CATEGORY', script),
        subCategory2: script.getField('SUB_CATEGORY', script),
    };

    return getBehavior(params, defaultValue, number);
}
```

## 생활안전 국민행동요령
[소스](https://github.com/entrylabs/entryjs/blob/develop/src/playground/blocks/block_expansion_behaviorconduct_lifesafety.js)

생활 속 안전을 위해 국민이 지켜야 하는 행동요령에 대한 블록 모음입니다. 

해당 블록을 사용하기 위해선 API 서버 구축이 필요합니다.
> 현재 엔트리에서는 API는 [공공데이터의포털](https://www.data.go.kr/data/15000991/openapi.do#tab_layer_detail_function)을 이용하고 있습니다.
> 각 블록에서 데이터를 맞춰주면 어떤 API를 사용하더라도 문제 없습니다.

### count_lifeSafety_behavior
선택한 생활 속 문제가 발생했을 때 해야할 행동요령의 수 블록.

```js
func(sprite, script) {
    const params = {
        category: Entry.EXPANSION_BLOCK.behaviorConductLifeSafety.apiType,
        subCategory: script.getField('CATEGORY', script),
        subCategory2: script.getField('SUB_CATEGORY', script),
    };

    return getBehavior(params, 0);
}
```

### get_lifeSafety_behavior
선택한 생활 속 문제가 발생했을 때 해야할 행동요령에 대한 정보 블록.

```js
func(sprite, script) {
    const number = script.getStringValue('NUMBER', script);
    const defaultValue = Lang.Blocks.no_data;
    const params = {
        category: Entry.EXPANSION_BLOCK.behaviorConductLifeSafety.apiType,
        subCategory: script.getField('CATEGORY', script),
        subCategory2: script.getField('SUB_CATEGORY', script),
    };

    return getBehavior(params, defaultValue, number);
}
```
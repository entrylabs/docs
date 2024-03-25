---
layout: page
title: Variable Data
type: entryjs
category: '타입정의'
order: 1
keywords: 
genre: 
description: 
thumbnail: 
author: Entrylabs
date: 2024-03-15
updated: 2024-03-15
---

프로젝트 내에서 사용되는 모든 변수의 상태와 속성을 기술합니다. 이 데이터는 프로젝트에서 정의된 각 변수의 이름, 타입, 초기값, 그리고 변수가 사용되는 범위 등을 포함합니다.

|프로퍼티|타입|설명|
|---|---|---|
|id|Variable ID|변수 ID|
|variableType|'variable'\|'list'\|'timer'\|'answer'\|'slide'|변수형|
|name|string|변수명|
|value|string|변수 값|
|minValue|number|최솟 값|
|maxValue|number|최댓 값|
|visible|boolean|캔버스에 표시여부|
|x|number|캔버스 위치 x좌표|
|y|number|캔버스 위치 y좌표|
|width|number|넓이|
|height|number|높이|
|isCloud|boolean|공유변수 여부|
|object|Object ID|지역 변수일때 참조하는 오브젝트 ID|
|array|Array Data|변수형이 list일 경우 값 목록|
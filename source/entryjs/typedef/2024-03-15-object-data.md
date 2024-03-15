---
layout: page
title: Object Data
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

프로젝트 내에 사용된 개별 오브젝트에 대한 상세 정보를 포함합니다. 각 오브젝트 데이터는 그 오브젝트의 유형, 상태, 위치, 모양, 사용된 스크립트(블록 코드) 등 오브젝트를 완전히 기술하는 데 필요한 모든 정보를 담고 있어, 프로젝트를 재구성하거나 수정할 때 기반이 됩니다.

|프로퍼티|타입|설명|
|---|---|---|
|id|Object ID|오브젝트 ID|
|name|string|오브젝트 이름|
|text|string|글상자 내용|
|objectType|'sprite'\|'textBox'|오브젝트 유형|
|scene|scene ID|장면 ID|
|lock|boolean|오브젝트 잠금 여부|
|rotateMethod|'free'\|'vertical'\|'none'|회전방식|
|entity|Entity Data|엔티티 정보|
|script|string|블록 스크립트|
|sprite|Sprite Data|스프라이트 정보|
|selectedPictureId|Picture ID|현재 활성화된 모양의 ID|
---
layout: page
title: Project Data
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

EntryJS 워크스페이스에서 작업한 프로젝트의 전체 구성과 상태를 포함하는 JSON 형식의 데이터입니다. 이 데이터는 프로젝트의 블록 구성, 사용된 객체, 스크립트, 설정 등 프로젝트를 구성하는 요소에 대한 정보를 담고 있어, 프로젝트를 저장하고, 불러오고, 공유하는 데 사용됩니다.

|프로퍼티|타입|설명|
|---|---|---|
|speed|number|작품 실행 속도(FPS)|
|objects|[Object Data](/entryjs/typedef/2024-03-15-object-data.html)[]|오브젝트 정보|
|variables|[Variable Data](/entryjs/typedef/2024-03-15-variable-data.html)[]|변수 정보|
|messages|[Message Data](/entryjs/typedef/2024-03-15-message-data.html)[]|신호 정보|
|functions|[Functions Data](/entryjs/typedef/2024-03-15-function-data.html)[]|함수 정보|
|scenes|[Scene Data](/entryjs/typedef/2024-03-15-scene-data.html)[]|장면 정보|
|interface|[interfaceState](/entryjs/typedef/2024-03-15-interface-state.html)[]|인터페이스 정보|
|tables|[Table Data](/entryjs/typedef/2024-03-15-table-data.html)[]|데이터 테이블 목록|
|learning|ID|학습 모델 ID|
|aiUtilizeBlocks|string[]|AI 블록 목록|
|expansionBlocks|string[]|확장 블록 목록|
|hardwareLiteBlocks|string[]|브라우저 하드웨어 블록 목록|
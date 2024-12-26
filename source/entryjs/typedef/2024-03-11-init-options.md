---
layout: page
title: Init Options
type: entryjs
category: '타입정의'
order: 1
keywords: 
genre: 
description: 
thumbnail: 
author: Entrylabs
date: 2024-03-11
updated: 2024-04-15
---

Entry.init 함수를 호출할 때 전달되는 옵션 객체입니다. 이 객체를 통해 개발자는 Entry 워크스페이스의 초기 설정 값을 정의하고, 워크스페이스가 로드될 때 필요한 다양한 환경 설정을 커스터마이즈할 수 있습니다.

|프로퍼티|타입|설명|
|---|---|---|
|type|'workspace'\|'minimize'|entryjs를 띄울 기본형식. ''|
|libDir|string|써드파티 라이브러리 저장소. entryjs를 포함한 Library 위치. (기본값: '/lib')|
|entryDir|string|엔트리 mediaFile asset이 지정된 위치 (기본값: '/@entrylabs/entry')|
|defaultDir|string|기본 assets이 지정된 위치|
|soundDir|string|sound 파일이 들어 있는 고유한 path|
|baseUrl|string|API블록, AI블록등을 호출한 원본 API주소|
|fonts|Array|웹폰트 정보|
|objectAddable|boolean|오브젝트 추가가능 여부 (true)|
|objectEditable|boolean|오브젝트 수정가능 여부 (true). 이값을 false로 세팅하면 objectAddable도 false가 된다.|
|objectdeletable|boolean|오브젝트 삭제가능 여부 (true)|
|soundeditable|boolean|소리 수정가능 여부 (true)|
|pictureeditable|boolean|모양 수정가능 여부 (true)|
|sceneEditable|boolean|장면 수정가능 여부 (true)|
|functionEnable|boolean|함수 사용가능 여부 (true)|
|messageEnable|boolean|신호 사용가능 여부 (true)|
|variableEnable|boolean|변수 사용가능 여부 (true)|
|listEnable|boolean|리스트 사용가능 여부 (true)|
|aiLearningEnable|boolean|AI 사용가능 여부 (true)|
|isForLecture|boolean|강의용 프로젝트 여부 (false)|
|textCodingEnable|boolean|엔트리 파이선 사용가능 여부 (true)|
|hardwareEnable|boolean|하드웨어 사용가능 여부 (true)|
|expansionDisable|boolean|확장블록 사용가능 여부 (true)|
|aiUtilizeDisable|boolean|인공지능블록 사용가능 여부 (true)|
|blockSaveImageEnable|boolean|블록 이미지로 저장하기 사용가능 여부 (true)|

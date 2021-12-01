---
layout: page
title: 오브젝트 추가하기
type: guide
category: 'Entry Offline'
order: 4
---

엔트리의 오브젝트는 `오브젝트`와 `모양 또는 글상자`, `소리`로 구분됩니다.  
`오브젝트` 는 다수의 `모양`, `소리` 를 가질 수 있는 엔트리 객체를 말합니다.

여기서는 특정 오브젝트를 추가하는 방법에 대해 소개하도록 하겠습니다.

엔트리 오프라인에서 오브젝트들은 아래와 같이 관리되고 있습니다.

- `src/renderer/resources/db` 내의 `json` 파일들로 **오브젝트 메타데이터**를 관리합니다.
- `src/renderer/resources/lang` 에서 **오브젝트의 명칭**을 관리합니다.
- `src/renderer/resources/uploads` 에서 **실제 파일**을 관리합니다.

오브젝트를 추가하는 방법은 아래와 같습니다.

1. 추가할 `오브젝트` 파일을 `uploads`에 추가 (추가시 파일명은 난수값이며, 폴더 구조도 이와 연관이 있습니다.)
1. `db` 하위의 `json`파일에 오브젝트 메타데이터 추가
1. `json`에 추가된 오브젝트에 맞추어 `lang`밑에 있는 영어 언어 추가

## 파일명칭 만들기

폴더 및 파일명 엔트리 전역에서 사용되는 난수값으로 처리되어있습니다.  
오브젝트의 파일명은 `mainUtils.js`의 `createFileId`라는 함수에서 정해진 규칙으로 만들 수 있습니다.

```javascript
import crypto from 'crypto';
function createFileId() {
    const randomStr = `${Math.random().toString(16)}000000000`.substr(2, 8);
    return crypto
        .createHash('md5')
        .update(randomStr)
        .digest('hex');
}
```

위의 함수를 실행하면 `c10d9264e94cf57451b45a13ca6db1cc` 와 같은 32 자리 텍스트가 만들어 지게 됩니다. 
이렇게 만들어진 파일의 앞의 4 자리가 폴더의 명칭도 결정됩니다.  
`c10d9264e94cf57451b45a13ca6db1cc`의 경우는 `uploads/c1/0d/image`와 같이 **앞의 4 자리를 2 자리씩 잘라서** 폴더에 파일을 넣도록 처리 됩니다. 
집어 넣는 파일이 `모양` 파일 이라면 `uploads/c1/0d/image/c10d9264e94cf57451b45a13ca6db1cc.png` 와 같이 파일을 넣으면 됩니다.

## 모양 추가하기

모양은 `image`와 `thumb`로 나뉩니다. `image`는 원본 이미지로서 실제 사용자가 사용할 이미지이며, `thumb`는 썸네일 이미지로 큰이미지가 필요없는곳에 이미지를 표기 할때 사용됩니다. 

모양 추가에는 아래와 같은 제약사항이 있습니다.

- 하나의 모양이 추가 할때 반드시 `image`와 `thumb`가 반드시 같이 추가가 되어야 합니다.
- 파일 확장자는 `.png`로 만들어져야 합니다.
- `image`의 경우 특별한 사이즈 제한이 없으나, `thumb` 는 **96px * 96px** 로 제한되어 있습니다.

필요한 위치에 파일을 넣었으면 `resource_map/pictures.json` 파일에 오브젝트를 추가해야 합니다.  
모양 오브젝트의 기본 구성은 다음과 같습니다.

```json
{
  "filename": "a8268fd79a48fd9b92c7b47406b95393", // 만들어진 파일이름 추가
  "name": "(1)엔트리봇_걷기1", // 해당 모양의 이름
  "type": "_system_",  // 모양의 타입 _system_ 으로 고정
  "dimension": { "width": 284, "height": 350 },  // 이미지의 사이즈
  "category": { "main": "entrybot_friends" }  // 카테고리
}
```

> 카테고리의 경우 설정된 키에 따라 오브젝트가 분리가 됩니다.
> 지원되는 `모양` 카테고리는 다음과 같습니다.
> "entrybot_friends", "architect", "vehicles", "stuff", "default", "animal", "interface", "environment", "food", "people", "plant", "background", "fantasy"

## 소리 추가하기

소리파일은 `image`와 다르게 `uploads/xx/xx/` 폴더 바로 밑에 파일이 존재 하면 됩니다.

별다른 제약사항은 없으며, 확장자가 `mp3`여야 합니다.

소리 오브젝트의 기본구성은 다음과 같습니다.

```json
{
  "filename": "6d64798150d7b48a9dd76af909a82ef9",  // 만들어진 파일이름 추가
  "name": "기침소리",  // 해당 소리의 이름
  "type": "_system_",  // 소리의 타입 _system_ 으로 고정
  "ext": ".mp3",  // 소리파일의 확장자
  "duration": 1.2,  // 소리파일의 재생시간
  "category": { "sub": "일상생활", "main": "사람" }  // 소리파일의 카테고리
}
```

> 카테고리의 경우 설정된 키에 따라 오브젝트가 분리가 된다.
> 지원되는 소리의 카테고리는 다음과 같다.
> "사람", 자연, "사물", "판타지", "악기"

## 오브젝트 추가하기

오브젝트를 추가하는 방법은 소리 및 이미지를 위와 동일하게 추가한 후, 메타데이터에서 연결하여 사용합니다.

```json
{
  "name": "(2)엔트리봇",  // 오브젝트 명칭
  "sounds": [],  // 소리 정보 - 소리 오브젝트 내용이 들어가면됨.
  // 모양 정보 - 모양 오브젝트 내용이 들어가면됨.
  "pictures": [
    {
      "filename": "f2a7a0b57de442aba21e63a53a387436",
      "name": "(2)엔트리봇_앞1",
      "dimension": { "width": 196, "height": 351 },
    }
  ],
  "type": "_system_",  // 오브젝트의 타입 _system_ 고정
  "category": { "main": "entrybot_friends" },  // 오브젝트가 분리될 카테고리 타입
}
```

> `오브젝트`에서 허용되는 카테고리 종류는 `모양` 에서 사용되는 카테고리와 동일합니다.

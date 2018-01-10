---
layout: page
title: 오브젝트 추가하기
type: guide
category: 'Entry Offline'
order: 4
---

엔트리의 오브젝트는 크게 `오브젝트`, `모양 또는 글상자`, `소리`의 3 가지 요소로 이루어져 있습니다. `오브젝트`가 가장 큰 요소로 `모양 또는 글상자`와 `소리`속성을 가지고 있을 수 있습니다. `글상자`의 경우는 사용자가 직접 생성해야 하므로 여기에서는 따로 설명하지 않겠습니다.

오브젝트 관리는 `src/renderer/resource_map` 디렉토리 밑에 있는 `json`파일들로 관리하고 있으며, 해당 오브젝트의 명칭은 `src/renderer/lang`에서 관리하고 있습니다. 실제파일은 `node_modules/uploads`에 존재합니다. 폴더 및 파일이은 일종의 난수값으로 처리되어있습니다.

기본적으로 오브젝트를 추가하는 방법은 아래와 같습니다.

1. 추가할 `모양` 또는 `소리` 파일을 `uploads`에 추가.
   1. 추가할때 난수값으로 파일명을 만들고 해당 이름으로 폴더 구조도 생성.
1. `resource_map` 밑에 있는 `json`파일에 오브젝트 추가.
1. `json`에 추가된 오브젝트에 맞추어 `lang`밑에 있는 영어 언어 추가.

## 파일명칭 만들기

오브젝트의 파일명은 `crypto`라이브러리를 사용해서 만듭니다. `native_controll.js`의 `createFileId`라는 함수에서 정해진 규칙으로 파일 명칭을을 만들어 내고 있습니다.

```javascript
var createFileId = function() {
  var randomStr = (Math.random().toString(16) + "000000000").substr(2, 8);
  return require("crypto")
    .createHash("md5")
    .update(randomStr)
    .digest("hex");
};
```

위의 함수를 실행하면 `c10d9264e94cf57451b45a13ca6db1cc` 와 같은 32 자리 텍스트가 만들어 지게 됩니다. 이렇게 만들어진 파일의 앞의 4 자리가 폴더의 명칭도 결정됩니다. `c10d9264e94cf57451b45a13ca6db1cc`의 경우는 `uploads/c1/0d/image`와 같이 앞의 4 자리를 2 자리씩 잘라서 폴더에 파일을 넣도록 처리 됩니다. 집어 넣는 파일이 `모양`파일 이라면 `uploads/c1/0d/image/c10d9264e94cf57451b45a13ca6db1cc.png` 와 같이 파일을 넣으면 됩니다.

## 모양 추가하기

모양은 또 크게 `image`와 `thumb`로 나뉩니다. `image`는 원본 이미지로서 실제 사용자가 사용할 이미지 이고 `thumb`는 썸네일 이미지로 큰이미지가 필요없는곳에 이미지를 표기 할때 사용됩니다. 하나의 모양이 추가 할때 반드시 `image`와 `thumb`가 반드시 같이 추가가 되어야 하고 `image`의 경우는 특별한 사이즈 스팩이 있지는 않으나, `thumb`의 경우는 이미지의 가로세로 길이가 최대 `96px`이 되도록 처리되어야 합니다.

> 예) 960 x 960 의 원본 이미지가 있으면 썸네일 이미지는 96 x 96 사이즈의 이미지가 되어야 합니다.

파일 확장자는 `.png`로 만들어져야 합니다.

필요한 위치에 파일을 넣었으면 `resource_map/pictures.json` 파일에 오브젝트를 추가해야 합니다. 모양 오브젝트의 기본 구성은 다음과 같습니다.

```json
{
  // 만들어진 파일이름 추가
  "filename": "a8268fd79a48fd9b92c7b47406b95393",
  // 해당 모양의 이름
  "name": "(1)엔트리봇_걷기1",
  // 모양의 타입 _system_ 으로 고정
  "type": "_system_",
  // 이미지의 사이즈
  "dimension": { "width": 284, "height": 350 },
  // 카테고리
  "category": { "main": "entrybot_friends" }
}
```

> 카테고리의 경우 설정된 키에 따라 오브젝트가 분리가 된다.
> 지원되는 모양의 카테고리는 다음과 같다.
> "entrybot_friends", "architect", "vehicles", "stuff", "default", "animal", "interface", "environment", "food", "people", "plant", "background", "fantasy"

## 소리 추가하기

소리파일은 `sound`의 별로 폴더 없이 `uploads/xx/xx/` 폴더 바로 밑에 파일이 존재 하면 됩니다. 확장자는 `mp3`로 만들어져야 합니다. 소리 오브젝트의 기본구성은 다음과 같습니다.

```json
{
  // 만들어진 파일이름 추가
  "filename": "6d64798150d7b48a9dd76af909a82ef9",
  // 해당 소리의 이름
  "name": "기침소리",
  // 소리의 타입 _system_ 으로 고정
  "type": "_system_",
  // 소리파일의 확장자
  "ext": ".mp3",
  // 소리파일의 재생시간
  "duration": 1.2,
  // 소리파일의 카테고리
  "category": { "sub": "일상생활", "main": "사람" }
}
```

> 카테고리의 경우 설정된 키에 따라 오브젝트가 분리가 된다.
> 지원되는 소리의 카테고리는 다음과 같다.
> "사람", 자연, "사물", "판타지", "악기"

## 오브젝트 추가하기

오브젝트를 추가하는 방법은 소리 및 이미지를 똑같이 넣은 후 둘의 데이터를 다 삽입하여 처리한다.

``` json
{
  // 오브젝트 명칭
  "name": "(2)엔트리봇",
  // 소리 정보 - 소리 오브젝트 내용이 들어가면됨.
  "sounds": [],
  // 모양 정보 - 모양 오브젝트 내용이 들어가면됨.
  "pictures": [
    {
      "filename": "f2a7a0b57de442aba21e63a53a387436",
      "name": "(2)엔트리봇_앞1",
      "dimension": { "width": 196, "height": 351 },
    }
  ],
  // 오브젝트의 타입 _system_ 고정
  "type": "_system_",
  // 오브젝트가 분리될 카테고리 타입
  "category": { "main": "entrybot_friends" },
}
```

> 오브젝트의 경우 모양의 카테고리와 카테고리 형태가 동일하다.


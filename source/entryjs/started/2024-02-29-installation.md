---
layout: page
title: 설치방법
type: entryjs
category: '시작하기'
order: 2
keywords: 
genre: 
description: 
thumbnail: 
author: Entrylabs
date: 2024-02-29
updated: 2024-03-04
---

## 수동설치

EntryJS를 사용하여 프로젝트에 풍부한 프로그래밍 교육 기능을 추가하는 방법은 매우 간단합니다. 현재는 IIFE 방식으로 제공되며, 특정 날짜의 릴리즈를 `v3.날짜.빌드번호` 태그에서 찾을 수 있습니다. 아래는 EntryJS를 웹 프로젝트에 포함시키는 기본적인 단계입니다:

1. **EntryJS 라이브러리 찾기**:
   - EntryJS의 최신 버전이나 특정 날짜의 버전을 GitHub의 `v3.날짜.빌드번호` 태그에서 찾습니다. 예를 들어, `v3.20240227.1050`와 같은 형식일 수 있습니다.

2. **라이브러리 다운로드**:
   - 원하는 버전의 EntryJS 파일을 다운로드합니다. 일반적으로는 `entry.min.js` 같은 압축된 JavaScript 파일을 사용하게 됩니다.

3. **웹 프로젝트에 포함시키기**:
   - 다운로드한 `entry.min.js` 파일을 웹 프로젝트의 적절한 위치에 저장합니다. 그리고 HTML 파일 내에서 이 JavaScript 파일을 참조하도록 `<script>` 태그를 추가합니다.

```html
<!DOCTYPE html>
<html>
<head>
    <title>My EntryJS Project</title>
</head>
<body>
    <!-- Entry JS -->
    <script src="path/to/lib/entry-js/dist/entry.min.js"></script>
    <script>
        // 여기에서 EntryJS 라이브러리를 사용한 코드를 작성합니다.
    </script>
</body>
</html>
```

4. **EntryJS 사용 시작하기**:
   - `<script>` 태그 내부 또는 별도의 JavaScript 파일에서 EntryJS의 기능을 사용하여 프로젝트를 구현합니다.

## 의존성 라이브러리 포함하기

EntryJS를 웹 프로젝트에 성공적으로 통합하려면, EntryJS 라이브러리 뿐만 아니라, 그것의 작동에 필요한 여러 외부 라이브러리들을 포함시켜야 합니다. 아래의 단계와 예제 코드는 EntryJS와 필요한 의존성 라이브러리들을 어떻게 포함시키는지 보여줍니다. EntryJS와 그 의존성 라이브러리들은 `https://entry-cdn.pstatic.net/` 주소를 통해 CDN으로도 배포되고 있어, 원하는 라이브러리를 받을수 있습니다.

1. HTML 문서에 라이브러리 포함하기

웹 프로젝트의 HTML 파일 내 `<head>` 태그 또는 `<body>` 태그의 끝에 다음과 같이 `<script>` 태그를 추가하여 EntryJS와 의존성 라이브러리들을 포함시킬 수 있습니다. 아래 코드는 필요한 모든 라이브러리를 로드하는 예제입니다:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EntryJS Integration Example</title>
    <!-- 의존성 라이브러리들 -->
    <script src="path/to/lib/lodash/dist/lodash.min.js"></script>
    <script src="path/to/js/ws/locales.js"></script>
    <script src="path/to/js/react18/react.production.min.js"></script>
    <script src="path/to/js/react18/react-dom.production.min.js"></script>
    <script src="path/to/lib/PreloadJS/lib/preloadjs-0.6.0.min.js"></script>
    <script src="path/to/lib/EaselJS/lib/easeljs-0.8.0.min.js"></script>
    <script src="path/to/lib/SoundJS/lib/soundjs-0.6.0.min.js"></script>
    <script src="path/to/lib/SoundJS/lib/flashaudioplugin-0.6.0.min.js"></script>
    <script src="path/to/lib/jquery/jquery.min.js"></script>
    <script src="path/to/lib/jquery-ui/ui/minified/jquery-ui.min.js"></script>
    <script src="path/to/lib/velocity/velocity.min.js"></script>
    <script src="path/to/lib/codemirror/lib/codemirror.js"></script>
    <script src="path/to/lib/codemirror/addon/hint/show-hint.js"></script>
    <script src="path/to/lib/codemirror/addon/lint/lint.js"></script>
    <script src="path/to/lib/codemirror/addon/selection/active-line.js"></script>
    <script src="path/to/lib/codemirror/mode/javascript/javascript.js"></script>
    <script src="path/to/lib/codemirror/addon/hint/javascript-hint.js"></script>
    <script src="path/to/js/ws/jshint.js"></script>
    <script src="path/to/lib/fuzzy/lib/fuzzy.js"></script>
    <script src="path/to/js/ws/python.js"></script>
    <script src="path/to/lib/socket.io-client/socket.io.js"></script>
    <script src="path/to/lib/entry-js/extern/util/filbert.js"></script>
    <script src="path/to/lib/entry-js/extern/util/CanvasInput.js"></script>
    <script src="path/to/lib/entry-js/extern/util/ndgmr.Collision.js"></script>
    <script src="path/to/lib/entry-js/extern/util/handle.js"></script>
    <script src="path/to/lib/entry-js/extern/util/bignumber.min.js"></script>
    <script src="path/to/lib/components-webfontloader/webfontloader.js"></script>
    <script src="path/to/lib/entry-lms/dist/assets/app.js"></script>
    <script src="path/to/lib/entry-tool/dist/entry-tool.js"></script>
    <script src="path/to/lib/entry-paint/dist/static/js/entry-paint.js"></script>
    <script src="path/to/external/sound/sound-editor.js"></script>

    <!-- Static JS -->
    <script src="path/to/lib/entry-js/extern/util/static.js"></script>

    <!-- EntryJS 라이브러리 -->
    <script src="path/to/lib/entry-js/dist/entry.min.js"></script>
</head>
<body>
    <div id="entryContainer"></div>
    <script>
        // 여기에서 EntryJS 초기화 및 사용 코드를 작성
    </script>
</body>
</html>
```

## 결론

이 가이드를 통해 EntryJS를 포함한 외부 라이브러리들을 웹 프로젝트에 쉽게 통합할 수 있습니다. EntryJS와 함께 제공되는 다양한 라이브러리들은 프로젝트에 풍부한 기능을 추가하고, 개발 과정을 용이하게 만들어 줍니다. 프로젝트를 시작할 때 위의 예제 코드를 참조하여 EntryJS와 필요한 의존성 라이브러리들을 적절히 포함시키고, 공식 문서를 통해 추가 정보와 가이드를 확인하세요.


## 추후 변경사항에 대비하기

- EntryJS의 배포 방식은 향후 더 정형화된 방식으로 제공될 예정입니다. 이는 npm 패키지로의 배포나, CDN을 통한 직접 참조 등이 될 수 있습니다.
- 배포 방식이 업데이트되면, 이 문서도 새로운 설치 방법에 맞추어 업데이트될 것입니다. 최신 정보를 확인하기 위해 정기적으로 EntryJS의 공식 문서나 GitHub 페이지를 방문하시는 것을 권장합니다.
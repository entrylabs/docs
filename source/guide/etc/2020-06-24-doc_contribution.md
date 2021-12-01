---
layout: page
title: 문서 기여하기
type: guide
category: 'Etc.'
order: 2
---

## Entry Docs 문서 기여

Entry Docs 는 Github PR 로 문서에 기여할 수 있습니다.

엔트리에 대한 내용이나, 오탈자 및 내용보충이 필요한 경우 누구든지 반영을 요청하실 수 있습니다.

Entry Docs 는 github project 이므로, 기본적으로는 git 을 사용하실 수 있어야 합니다.

## 기여 방법

### Repository 클론

먼저 repository 를 가져옵니다.

> git clone https://github.com/entrylabs/docs

### 작업용 브랜치 추가하기

Entry Docs 는 두개의 브랜치를 운영에 사용하고있습니다.  
- master : 개발용 기본 브랜치
- gh-pages : 깃헙페이지로서 보여줄 브랜치

그러므로 마스터를 기준으로 개발용 브랜치를 추가로 만듭니다.  
브랜치명에 대한 네이밍 컨벤션은 없습니다. 하지만 브랜치를 보고 목적을 유추할 수 있는 명칭을 추천드립니다.

> git checkout master
> git checkout -b [브랜치명]

### 문서 작업

문서는 마크다운 문법을 사용하고 있습니다. 그러므로 마크다운을 사용하실 수 있어야 합니다.

#### 디렉토리 구조

문서 작업에 필요한 위치는 아래와 같습니다.

- source/guide : 실제 문서가 들어가야할 곳
- source/files : 다운로드 등에 사용될 수 있는 파일
- source/images : 문서에 포함되고자 하는 이미 위치
+ source/_posts : 문서는 작성하고자 하나 실제 Entry Docs 에서는 비공개였으면 하는 경우 이곳에 작성

#### 문서 작성 방법

##### 문서 파일명

문서 파일은 YYYY-MM-DD-문서명.md 로 작성해주시면 됩니다.

##### 문서 메타데이터 작성

프로젝트는 문서의 메타데이터를 통해 카테고리 및 순서등을 결정합니다.

```text
> ---
layout: page
title: [문서 제목]
type: guide
category: [카테고리명은 다른 문서와 겹쳐야 합니다. 공백이 있는경우 '' 으로 감싸주세요.]
[order: 1 // 순서는 생략가능합니다]
> ---
```

##### 문서 작성

문서는 자유롭게 작성하시면 됩니다.  
이미지 첨부는 `[alt 값](/docs/images/...)` 와 같은 형태로 작성하시면 됩니다.

#### 문서 로컬 테스트하기

Entry Docs 에 반영 요청전 로컬 PC 에서 문서가 어떻게 나올지 테스트하실 수 있습니다.

먼저 프로젝트의 종속성 라이브러리를 설치한 후, start script 로 실행해보실 수 있습니다.

> npm install
> npm run start
> 이후 http://localhost:5000 에서 docs 를 확인하실 수 있습니다. 

#### PR 요청

PR 요청 전 작업하신 브랜치를 github 에 올려주세요.

> git add .
> git commit -m '커밋시 메세지'
> git push origin -u [브랜치명]

이후 PR 을 작성해주시면 됩니다.
Github PR 에 관해서는 [Basic#PR 요청하기](/docs/guide/basic/pull_request.html) 파트를 참고해주세요.

[Entry Docs PR](https://github.com/entrylabs/docs/pulls) 의 `New pull request` 버튼을 통해 PR을 생성하실 수 있습니다.

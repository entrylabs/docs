---
layout: page
title: 데이터 분석 블록
date: 2021-01-04 10:33:00
type: userGuide
category: "블록"
order: 24
---

## 테이블 불러오기 

데이터 분석 블록 카테고리의 블록 꾸러미에서 '테이블 불러오기' 버튼을 클릭하면 나타나는 팝업 창입니다.
작품에서 활용하고자 하는 테이블을 선택하고 '추가' 버튼을 클릭하면 데이터 분석 블록이 블록 꾸러미에 표시됩니다.



#### 기본 테이블

엔트리가 미리 준비한 여러가지 데이터가 담긴 테이블입니다. 
따로 준비한 테이블이 없어도, 바로 기본 테이블을 선택해서 데이터 분석을 해볼 수 있어요.
기본 테이블은 계속해서 추가될 예정입니다. 



#### 파일 업로드

엑셀(XLS, XLSX) 파일이나 CSV 파일을 직접 업로드해 테이블을 추가할 수도 있어요.
이미 만들어 둔 테이블이 있거나, 공공 데이터 등 공개된 테이블을 가지고 있다면 파일로 업로드해서 활용해 보세요.

단, 엑셀 함수 등은 계산되지 않고 함수 문장이 그대로 표시되니 주의해 주세요. 
(엑셀에서 미리 함수가 포함된 셀을 '값'으로 변경해서 업로드 하면 됩니다.)



#### 새로 만들기

엔트리에서 직접 데이터를 입력해서 테이블을 만들 수도 있어요.
새로 만들기 탭에서 '추가' 버튼을 누르면 30행, 10열을 가지는 새로운 빈 테이블이 만들어 집니다. 

한 가지 주의할 점은, 엔트리의 테이블은 값이 들어있는 부분까지만 잘라서 저장합니다.
새로운 테이블을 만들고 값을 아무것도 입력하지 않은 채로 저장하면,
1행, 1열의 테이블로 줄어들어 저장되니 저장하기 전에 입력하고자 하는 값을 모두 입력하고 저장해 주세요.
(Tip: 가장 바깥의 셀 하나만 입력해도 테이블은 줄어들지 않아요!)



## 1. 테이블 `[테이블]` 에 `[행]` 추가하기



![block-data](images/block-data2-01.png)



테이블에 행과 열을 추가합니다.

추가 되는 행과 열은 해당 테이블의 맨 마지막 행과 열이 됩니다.

목록 상자(<img src="images/icon/dropdown-data.png" style="zoom:50%;" />)를 클릭해서 테이블과 행/열을 선택할 수 있어요.





## 2. 테이블 `[테이블]` `(2)` 번째에 `[행]` 추가하기



![block-data](images/block-data2-02.png)



값 블록(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)에 입력한 위치에 행 또는 열을 추가합니다.

목록 상자(<img src="images/icon/dropdown-data.png" style="zoom:50%;" />)를 클릭해서 테이블과 행/열을 선택할 수 있어요.





## 3. 테이블 `[테이블]` `(2)` 번째 `[행]` 삭제하기



![block-data](images/block-data2-03.png)



값 블록(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)에 입력한 위치의 행 또는 열을 삭제합니다.

목록 상자(<img src="images/icon/dropdown-data.png" style="zoom:50%;" />)를 클릭해서 테이블과 행/열을 선택할 수 있어요.





## 4. 테이블 `[테이블]` `(2)` 번째 행의 `([속성])` 을(를) `(10)` (으)로 바꾸기



![block-data](images/block-data2-04.png)



첫번째 값 블록(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)에 입력한 행과 선택한 속성(열)에 해당하는 셀의 내용을 두번째 값 블록(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)에 입력한 내용으로 변경합니다.

목록 상자(<img src="images/icon/dropdown-data.png" style="zoom:50%;" />)를 클릭해서 테이블과 속성을 선택할 수 있어요.





## 5. 테이블 `[테이블]` 의 `[행]` 개수



![block-data](images/block-data2-05.png)



테이블에서 행 또는 열의 개수를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-data.png" style="zoom:50%;" />)를 클릭해서 테이블과 행/열을 선택할 수 있어요.





## 6. 테이블 `[테이블]` `(2)` 번째 행의 `([속성])` 값



![block-data](images/block-data2-06.png)



값 블록(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)에서 입력한 행과 선택한 속성(열)에 해당하는 셀의 내용을 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-data.png" style="zoom:50%;" />)를 클릭해서 테이블과 속성을 선택할 수 있어요.





## 7. 테이블 `[테이블]` 마지막 행의 `([속성])` 값



![block-data](images/block-data2-07.png)



테이블의 마지막 행과 선택한 속성(열)에 해당하는 셀의 내용을 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-data.png" style="zoom:50%;" />)를 클릭해서 테이블과 속성을 선택할 수 있어요.



## 8. 테이블 `[테이블]` `([속성])` 의 `[합]`



![block-data](images/block-data2-08.png)



테이블에서 선택한 속성(열)의 요약 데이터를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-data.png" style="zoom:50%;" />)를 클릭해서 테이블과 속성의 기초 통계량을 선택할 수 있어요.

기초 통계량으로 합/최대/최소/평균/표준편차를 선택할 수 있어요.





## 9. 테이블 `[테이블]` 의 `[차트]` 창 열기



![block-data](images/block-data2-09.png)



테이블에서 선택한 차트의 팝업 창을 엽니다.

차트 팝업 창이 열려도 작품은 정지 되지 않아요.

목록 상자(<img src="images/icon/dropdown-data.png" style="zoom:50%;" />)를 클릭해서 테이블과 차트를 각각 선택할 수 있어요.





## 10. 테이블 차트 창 닫기



![block-data](images/block-data2-10.png)



지금 열려 있는 테이블의 차트 팝업 창을 닫습니다.

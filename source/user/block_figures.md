---
layout: page
title: 계산 블록
date: 2023-11-29 18:25:00
type: userGuide
category: "블록"
order: 19
---

## 1. `(10)` `[+]` `(10)`

![block-figures](images/block-figures-01.png)

다음과 같이 동작하는 값 블록입니다.

+ **입력한 두 내용이 숫자일 때** : 두 숫자를 더합니다.
+ **입력한 두 내용이 문자일 때** : 두 문자를 합칩니다. <img src="images/block-figures-19.png" alt="block-figures-19" style="zoom:70%;" />와 똑같이 동작해요.

연산자 목록을 클릭하면 사칙연산 기호를 선택할 수 있어요.

+ **선택할 수 있는 사칙연산 기호**

  + `+`,  `-` , `x` , `/`



## 2. `(10)` `[-]` `(10)`

![block-figures](images/block-figures-02.png)

왼쪽에 입력한 수에서 오른쪽에 입력한 수를 빼는 값 블록입니다.

연산자 목록을 클릭하면 사칙연산 기호를 선택할 수 있어요.

+ **선택할 수 있는 사칙연산 기호**
  + `+`,  `-` , `x` , `/`



## 3. `(10)` `[x]` `(10)`

![block-figures](images/block-figures-03.png)

입력한 두 수를 곱하는 값 블록입니다.

연산자 목록을 클릭하면 사칙연산 기호를 선택할 수 있어요.

+ **선택할 수 있는 사칙연산 기호**
  + `+`,  `-` , `x` , `/`



## 4. `(10)` `[/]` `(10)`

![block-figures](images/block-figures-04.png)

왼쪽에 입력한 수를 오른쪽에 입력한 수로 나누는 값 블록입니다.

정수로 나누어 떨어지지 않는 경우, 소수점 셋째 자리까지 계산해요.

연산자 목록을 클릭하면 사칙연산 기호를 선택할 수 있어요.

+ **선택할 수 있는 사칙연산 기호**
  + `+`,  `-` , `x` , `/`



## 5. `(0)` 부터 `(10)` 사이의 무작위 수

![block-figures](images/block-figures-05.png)

입력한 두 수 사이에서 무작위의 한 수를 구하는 값 블록입니다.

두 수가 모두 정수이면 정수가, 둘 중 하나라도 소수이면 소수점 둘째 자리까지의 수를 무작위로 구해요.



## 6. 마우스 `[x]` 좌표

![block-figures](images/block-figures-06.png)

마우스의 x 또는 y 좌표를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-figures.png" style="zoom:50%;" />)를 클릭하면 가져올 좌표를 선택할 수 있어요.



## 7. `[오브젝트]` 의 `[x 좌푯값]`

![block-figures](images/block-figures-07.png)

자신 또는 다른 오브젝트의 속성을 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-figures.png" style="zoom:50%;" />)를 클릭하면 가져올 속성을 선택할 수 있어요.

+ **속성 (두 번째 목록 상자)**
  + `x 좌푯값`, `y 좌푯값`, `방향`, `이동 방향`, `크기`, `모양 번호`, `모양 이름`



## 8. `(10)` / `(10)` 의 `[몫]`

![block-figures](images/block-figures-08.png)

왼쪽에 입력한 수를 오른쪽에 입력한 수로 나눈 몫이나 나머지를 구하는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-figures.png" style="zoom:50%;" />)를 클릭하면 `몫` 또는 `나머지` 를 선택할 수 있어요.



## 9. `(10)` 의 `[제곱]`

![block-figures](images/block-figures-09.png)

입력한 수에 대한 다양한 수학식의 결과를 구하는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-figures.png" style="zoom:50%;" />)를 클릭하면 수학식을 선택할 수 있어요.

+ **선택할 수 있는 수학식**
  + `제곱`, `루트`, `사인값`, `코사인값`, `탄젠트값`, `아크사인값`, `아크코사인값`, `아크탄젠트값`, `로그값`, `자연로그값`, `소수점 부분`, `소수점 버림값`, `소수점 올림값`, `소수점 반올림값`, `펙토리얼값`, `절대값`



## 10. 초시계 값

![block-figures](images/block-figures-10.png)

초시계의 시간을 가져오는 값 블록입니다.

이 블록을 사용한 시각을 가져와요.



## 11. 초시계 `[시작하기]`

![block-figures](images/block-figures-11.png)

초시계가 선택한 기능에 맞게 동작합니다.

목록 상자(<img src="images/icon/dropdown-figures.png" style="zoom:50%;" />)를 클릭하면 초시계를 시작 또는 정지하거나, 시간을 0으로 초기화할 수 있어요.



## 12. 초시계 `[숨기기]`

![block-figures](images/block-figures-12.png)

초시계를 실행 화면에서 숨기거나 보입니다.

목록 상자(<img src="images/icon/dropdown-figures.png" style="zoom:50%;" />)를 클릭하면 초시계를 숨길지 보일지 고를 수 있어요.



## 13. 현재 `[연도]`

![block-figures](images/block-figures-13.png)

현재 시각을 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-figures.png" style="zoom:50%;" />)를 클릭하면 시각의 범위를 선택할 수 있어요.

+ **선택할 수 있는 범위**
  + `연도`, `월`, `일`, `시각(시)`, `시각(분)`, `시각(초)`



## 14. `[오브젝트]` 까지의 거리

![block-figures](images/block-figures-14.png)

이 오브젝트와 선택한 항목 사이의 거리를 구하는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-figures.png" style="zoom:50%;" />)를 클릭하면 거리를 구할 오브젝트 또는 마우스 포인터를 선택할 수 있어요.

둘은 얼마나 가까운 사이일지 알아볼까요?



## 15. 아이디

![block-figures](images/block-figures-15.png)

이 작품을 실행하는 사용자의 아이디(ID)를 가져오는 값 블록입니다.

값은 개인정보 보호를 위해 마스킹 처리되어 있습니다.



## 16. 닉네임

![block-figures](images/block-figures-16.png)

이 작품을 실행하는 사용자의 닉네임을 가져오는 값 블록입니다.



## 17. `(엔트리)` 의 글자 수

![block-figures](images/block-figures-17.png)

입력한 내용의 글자 수를 가져오는 값 블록입니다.

띄어쓰기(공백)도 글자 수에 포함합니다.



## 18. `(Hello Entry!)` 에서 `(e)` 의 글자 수

![block-figures](images/block-figures-18.png)


입력한 첫 번째 내용에서, 두 번째 내용의 글자 수를 가져오는 값 블록입니다.

영문을 입력하는 경우 대문자와 소문자를 구분하여 수를 셉니다.



## 19. `(안녕!)` 과(와) `(엔트리)` 을(를) 합친 값

![block-figures](images/block-figures-19.png)

입력한 두 내용을 합치는 값 블록입니다.



## 20. `(안녕 엔트리!)` 의 `(1)` 번째 글자

![block-figures](images/block-figures-20.png)

입력한 내용에서 입력한 순서의 글자를 가져오는 값 블록입니다.

입력한 순서는 1 에서 글자 수 사이여야 해요.

띄어쓰기(공백)도 글자 수에 포함합니다.



## 21. `(안녕 엔트리!)` 의 `(2)` 번째 글자부터 `(5)` 번째 글자까지의 글자

![block-figures](images/block-figures-21.png)


입력한 내용에서 입력한 구간을 가져오는 값 블록입니다.

입력한 순서는 1 에서 글자 수 사이여야 해요. 띄어쓰기(공백)도 글자 수에 포함합니다.

 `(안녕 엔트리!)`'에서 2번째 글자부터 5번째 글자까지의 글자는 '녕 엔트'가 되겠네요.



## 22. `(안녕 엔트리!)` 에서 `(엔트리)` 의 시작 위치

![block-figures](images/block-figures-22.png)

입력한 첫 번째 내용에서, 두 번째 내용이 시작하는 위치(순서)를 가져오는 값 블록입니다.

같은 내용이 없다면 0 을 가져와요. 띄어쓰기(공백)도 글자 수에 포함합니다.

 '`(안녕 엔트리!)`'에서 '`(엔트리)`'시작 위치는 4가 되겠네요.



## 23. `(안녕 엔트리!)` 의 `(안녕)` 을(를) `(반가워)` 로 바꾼 값

![block-figures](images/block-figures-23.png)

입력한 첫 번째 내용에서, 두 번째 내용을 세 번째 내용으로 바꾸는 값 블록입니다.

입력한 내용과 같은 내용이 없다면 문장은 바뀌지 않습니다.

 '`(안녕 엔트리!)`'에서  '`(안녕)`'을  '`(반가워)`'로 바꾸면 '반가워 엔트리!' 가 되겠네요.



## 24. `(엔트리)` 을(를) 뒤집은 값

![block-figures](images/block-figures-24.png)

입력한 내용의 순서를 반대로 뒤집은 내용을 가져오는 값 블록입니다.



## 25. `(Hello Entry!)` 을(를) `[대문자]` 로 바꾼 값

![block-figures](images/block-figures-25.png)

입력한 내용의 모든 알파벳을 대문자 또는 소문자로 바꾸는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-figures.png" style="zoom:50%;" />)를 클릭하면 대문자 또는 소문자를 선택할 수 있어요.

 '`(Hello Entry!)`'를 대문자로 바꾸면 'HELLO ENTRY!' 가 되겠네요.



## 26. `[모든]` 의 블록 수

![block-figures](images/block-figures-26.png)

블록의 수를 세는 값 블록입니다. 

시작 블록에 조립된 블록을 기준으로 수를 셉니다.

+ **선택할 수 있는 대상**
  + `모든` : 작품의 모든 블록의 수를 셉니다.
  + `자신` : 이 오브젝트의 블록 수를 셉니다.
  + `(오브젝트 이름)` : 선택한 오브젝트의 블록 수를 셉니다.
  + `(장면 이름)` : 선택한 장면의 블록 수를 셉니다.



## 27. R: `(255)` G: `(0)` B: `(0)` 의 HEX 값

![block-figures](images/block-figures-27.png)

입력한 빨강(R), 초록(G), 파랑(B) 값을 HEX 값으로 변환해 가져오는 값 블록입니다.



## 28. HEX `(#ff0000)` 의 `[R]` 값

![block-figures](images/block-figures-28.png)

입력한 HEX 값을 빨강(R), 초록(G), 파랑(B) 중 하나로 변환해 가져오는 값 블록입니다.



## 29. `<참>` 의 값

![block-figures](images/block-figures-29.png)

결합한 판단 블록의 결과를 가져오는 값 블록입니다. 판단 블록이 '참'이면 'TRUE', '거짓'이면 'FALSE'가 돼요.

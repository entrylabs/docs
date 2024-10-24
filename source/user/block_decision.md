---
layout: page
title: 판단 블록
date: 2023-11-29 18:34:00
type: userGuide
category: "블록"
order: 18
---



## 1. 마우스를 클릭했는가?

![block-decision](images/block-decision-01.png)

실행 화면에서 마우스를 클릭하면 참으로, 아니라면 거짓으로 판단하는 블록입니다.

마우스의 왼쪽, 오른쪽, 휠 클릭과 터치가 가능해요.


## 2. 오브젝트를 클릭했는가?

![block-decision](images/block-decision-02.png)

실행 화면에서 오브젝트를 클릭하면 참으로, 아니라면 거짓으로 판단하는 블록입니다.


## 3. `[q]` 키가 눌러져 있는가?

![block-decision](images/block-decision-03.png)

키를 누르고 있으면 참으로, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-decision.png" style="zoom:50%;" />)를 클릭한 뒤에 누를 키를 선택하거나 직접 키를 눌러서 정할 수 있어요.

+ **선택할 수 있는 키**
  + `위쪽 화살표`, `아래쪽 화살표`, `오른쪽 화살표`, `왼쪽 화살표`, `스페이스`, `엔터`, `ctrl`, `shift`, `alt`, `tab`, `esc`, `back-space`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`, `;`, `=`, `,`, `-`, `.`, `/`, `~`, `[`, `backslash`, `]`, `'`


## 4. `[마우스 포인터]` 에 닿았는가?

![block-decision](images/block-decision-04.png)

이 오브젝트가 선택한 항목에 닿았다면 참으로, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-decision.png" style="zoom:50%;" />)를 클릭하면 무엇에 닿았을 때 동작할 수 있는 지를 선택할 수 있어요.

+ **선택할 수 있는 항목**
  + `오브젝트`, `마우스포인터`, `벽`, `위쪽벽`, `아래쪽벽`, `오른쪽벽`, `왼쪽벽`


## 5. `(10)` (이)가 `[숫자]` 인가?

![block-decision](images/block-decision-05.png)

입력한 내용이 선택한 문자로만 이루어져 있다면 참으로, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-decision.png" style="zoom:50%;" />)를 클릭하면 판단할 문자의 종류를 선택할 수 있어요.

+ **선택할 수 있는 항목**
  + `숫자`, `영문`, `한글`


## 6. `(10)` `[=]` `(10)`

![block-decision](images/block-decision-06.png)

입력한 두 내용이 같으면 참으로, 아니라면 거짓으로 판단하는 블록입니다.

연산자 목록을 클릭하면 기호를 선택할 수 있어요.

+ **선택할 수 있는 비교 연산자**
  + `=` , `!=  ` , `> `, `< ` , `≥ ` , `≤ `


## 7. `(10)` `[!=]` `(10)`

![block-decision](images/block-decision-07.png)

입력한 두 내용이 같지 않으면 참으로, 아니라면 거짓으로 판단하는 블록입니다.

연산자 목록을 클릭하면 기호를 선택할 수 있어요.

+ **선택할 수 있는 비교 연산자**
  + `=` , `!=  ` , `> `, `< ` , `≥ ` , `≤ `


## 8. `(10)` `[>]` `(10)`

![block-decision](images/block-decision-08.png)

다음과 같이 동작하는 블록입니다.

+ **입력한 두 내용이 숫자일 때** : 왼쪽 숫자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)가 오른쪽 숫자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)보다 크면 참으로, 아니라면 거짓으로 판단합니다.
+ **입력한 두 내용이 문자일 때** : 왼쪽 문자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)가 오른쪽 문자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)보다 길거나 사전에서 뒤에 있으면 참으로, 아니라면 거짓으로 판단합니다.
+ **숫자와 문자를 입력했을 때** : 항상 거짓으로 판단합니다.

연산자 목록을 클릭하면 기호를 선택할 수 있어요.

+ **선택할 수 있는 비교 연산자**
  + `=` , `!=  ` , `> `, `< ` , `≥ ` , `≤ `


## 9. `(10)` `[<]` `(10)`

![block-decision](images/block-decision-09.png)

다음과 같이 동작하는 블록입니다.

+ **입력한 두 내용이 숫자일 때** : 왼쪽 숫자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)가 오른쪽 숫자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)보다 작으면 참으로, 아니라면 거짓으로 판단합니다.
+ **입력한 두 내용이 문자일 때** : 왼쪽 문자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)가 오른쪽 문자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)보다 짧거나 사전에서 앞에 있으면 참으로, 아니라면 거짓으로 판단합니다.
+ **숫자와 문자를 입력했을 때** : 항상 거짓으로 판단합니다.

연산자 목록을 클릭하면 기호를 선택할 수 있어요.

+ **선택할 수 있는 비교 연산자**
  + `=` , `!=  ` , `> `, `< ` , `≥ ` , `≤ `


## 10. `(10)` `[≥]` `(10)`

![block-decision](images/block-decision-10.png)

다음과 같이 동작하는 블록입니다.

+ **입력한 두 내용이 숫자일 때** : 왼쪽 숫자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)가 오른쪽 숫자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)보다 크거나 같으면 참으로, 아니라면 거짓으로 판단합니다.
+ **입력한 두 내용이 문자일 때** : 왼쪽 문자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)가 오른쪽 문자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)보다 길거나 사전에서 뒤에 있거나 같으면 참으로, 아니라면 거짓으로 판단합니다.
+ **숫자와 문자를 입력했을 때** : 항상 거짓으로 판단합니다.

연산자 목록을 클릭하면 기호를 선택할 수 있어요.

+ **선택할 수 있는 비교 연산자**
  + `=` , `!=  ` , `> `, `< ` , `≥ ` , `≤ `


## 11. `(10)` `[≤]` `(10)`

![block-decision](images/block-decision-11.png)

다음과 같이 동작하는 블록입니다.

+ **입력한 두 내용이 숫자일 때** : 왼쪽 숫자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)가 오른쪽 숫자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)보다 작거나 같으면 참으로, 아니라면 거짓으로 판단합니다.
+ **입력한 두 내용이 문자일 때** : 왼쪽 문자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)가 오른쪽 문자(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)보다 짧거나 사전에서 뒤에 있거나 같으면 참으로, 아니라면 거짓으로 판단합니다.
+ **숫자와 문자를 입력했을 때** : 항상 거짓으로 판단합니다.

연산자 목록을 클릭하면 기호를 선택할 수 있어요.

+ **선택할 수 있는 비교 연산자**
  + `=` , `!=  ` , `> `, `< ` , `≥ ` , `≤ `


## 12. `<참>` `[그리고]` `<참>`

![block-decision](images/block-decision-12.png)

결합한 두 판단 블록(<img src="images/icon/decision.png" style="zoom:50%;" />)이 모두 참이면 참으로, 두 판단 블록 중 하나라도 거짓이면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-decision.png" style="zoom:50%;" />)를 클릭하면 판단 기준을 선택할 수 있어요.

+ **선택할 수 있는 논리 연산자**

  + `그리고` , `또는  `


## 13. `<참>` `[또는]` `<거짓>`

![block-decision](images/block-decision-13.png)

결합한 두 판단 블록(<img src="images/icon/decision.png" style="zoom:50%;" />) 중 하나라도 참이면 참으로, 두 판단 블록이 모두 거짓이면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-decision.png" style="zoom:50%;" />)를 클릭하면 판단 기준을 선택할 수 있어요.

+ **선택할 수 있는 논리 연산자**

  + `그리고` , `또는  `


## 14. `<참>` (이)가 아니다

![block-decision](images/block-decision-14.png)

결합한 판단 블록(<img src="images/icon/decision.png" style="zoom:50%;" />)이 참이면 거짓으로, 거짓이면 참으로 판단하는 블록입니다.

청개구리 같은 블록이에요.


## 15. 부스트모드가 켜져 있는가?

![block-decision](images/block-decision-15.png)

부스트모드가 켜져 있으면 참으로, 꺼져 있으면 거짓으로 판단하는 블록입니다.

(참고로 부스트모드는 엔트리 작품을 실행할 때 WebGL 이라는 그래픽 라이브러리를 사용하는 상태를 말해요.)


## 16. `[데스크톱]` 에서 실행하는가?

![block-decision](images/block-decision-16.png)

작품을 실행하는 기기가 선택한 기기라면 참으로, 아니라면 거짓으로 판단하는 블록입니다.


## 17. 화면을 터치할 수 있는가?

![block-decision](images/block-decision-17.png)

작품을 실행하는 기기에서 화면을 터치해 조작할 수 있는하면 기기라면 참으로, 아니라면 거짓으로 판단하는 블록입니다.

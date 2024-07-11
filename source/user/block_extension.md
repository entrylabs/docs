---
layout: page
title: 확장 블록
date: 2024-07-09 15:50:00
type: userGuide
category: "블록"
order: 38
---


# 날씨

![weather](images/card/weather.png)

기온, 강수량, 미세먼지 농도 등 우리나라의 날씨와 관련된 블록 모음입니다. [웨더아이 제공]

날씨 블록을 사용하기 위해서는 지역을 필수로 선택해야 합니다.

+ **시/도 (지역)**
  + `서울`, `강원`, `경기`, `경남`, `경북`, `광주`, `대구`, `대전`, `부산`, `세종`, `울산`, `인천`, `전남`, `전북`, `제주`, `충남`, `충북`
+ **시/군/구 (지역)**
  + 선택한 시/도에 따라 달라집니다.

지역을 목록 상자에서 선택하지 않고, 법정동코드를 값 블록으로 직접 입력해서 사용할 수도 있습니다.


## 1. 현재 `[서울]` `[전체]` 의 날씨

![block-extension-weather](images/block-extension-weather-01.png)

선택한 지역의 현재 날씨를 가져오는 값 블록입니다. 

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역을 선택할 수 있어요.


## 2. 현재 `[서울]` `[전체]` 의 풍향

![block-extension-weather](images/block-extension-weather-02.png)

선택한 지역의 현재 풍향을 가져오는 값 블록입니다. 

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역을 선택할 수 있어요.

풍향은 알파벳으로 표현됩니다. 


## 3. 현재 `[서울]` `[전체]` 의 `[기온(ºc)]`

![block-extension-weather](images/block-extension-weather-03.png)

선택한 지역의 현재 기상 정보를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 기상 정보를 선택할 수 있어요.

+ **선택할 수 있는 기상 정보**
  + `기온(ºc)`, `미세먼지 농도(PM10, ㎍)`, `풍향`


## 4. 현재 `[서울]` `[전체]` 의 날씨가 `[맑음]`인가?

![block-extension-weather](images/block-extension-weather-04.png)

선택한 지역의 현재 날씨가 선택한 날씨가 같다면 참, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 날씨를 선택할 수 있어요.

+ **날씨**
  + `맑음`, `구름조금`, `구름많음`, `흐림`, `비`, `진눈깨비`, `눈`


## 5. 현재 `[서울]` `[전체]` 의 미세먼지 등급이 `[좋음]` 인가?

![block-extension-weather](images/block-extension-weather-05.png)

선택한 지역의 현재 미세먼지 등급이 선택한 등급과 같다면 참, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 미세먼지 등급을 선택할 수 있어요.

+ **미세먼지 등급**
  + `좋음`, `보통`, `나쁨`, `매우나쁨`


## 6. `[오늘]` `[서울]` `[전체]` 의 날씨

![block-extension-weather](images/block-extension-weather-06.png)

선택한 지역의 일별(어제부터 6일 후까지) 날씨를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 날짜와 지역을 선택할 수 있어요.

+ **날짜(일별)**
  + `어제`, `오늘`, `내일`, `모레`, `3일 후`, `4일 후`, `5일 후`, `6일 후`


## 7. `[오늘]` `[서울]` `[전체]` 의 `[최저기온(ºc)]`

![block-extension-weather](images/block-extension-weather-07.png)

선택한 지역의 일별(어제부터 6일 후까지) 기상 정보를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 날짜와 지역, 기상 정보를 선택할 수 있어요.

+ **날짜(일별)**
  + `어제`, `오늘`, `내일`, `모레`, `3일 후`, `4일 후`, `5일 후`, `6일 후`

+ **선택할 수 있는 기상 정보**
  + `최저기온(ºc)`, `최고기온(ºc)`, `습도(%)`, `강수량(mm)`, `강수확률(%)`, `풍속(m/s)`


## 8. `[오늘]` `[서울]` `[전체]` 의 날씨가 `[맑음]` 인가?

![block-extension-weather](images/block-extension-weather-08.png)

선택한 날짜와 선택한 지역의 일별(어제부터 6일 후까지) 날씨가 선택한 날씨와 같다면 참, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 날짜와 지역, 날씨를 선택할 수 있어요.

+ **날짜(일별)**
  + `어제`, `오늘`, `내일`, `모레`, `3일 후`, `4일 후`, `5일 후`, `6일 후`

+ **날씨**
  + `맑음`, `구름조금`, `구름많음`, `흐림`, `비`, `진눈깨비`, `눈`


## 9. `[서울]` `[전체]` 의 `[00]` 시 날씨

![block-extension-weather](images/block-extension-weather-09.png)

선택한 지역의 시간대별(3시간) 날씨를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 시간대를 선택할 수 있어요.  


## 10. `[서울]` `[전체]` 의 `[00]` 시 `[기온]`

![block-extension-weather](images/block-extension-weather-10.png)

선택한 지역의 시간대별(3시간) 기상 정보를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 시간대를 선택할 수 있어요.  

+ **선택할 수 있는 기상 정보**
  + `기온(ºc)`, `습도(%)`, `강수량(mm)`, `강수확률(%)`, `풍속(m/s)`


## 11. `[서울]` `[전체]` 의 `[00]` 시 날씨가 `[맑음]` 인가?

![block-extension-weather](images/block-extension-weather-11.png)

선택한 지역과 선택한 시간대의 날씨가 선택한 날씨와 같다면 참, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 시간대를 선택할 수 있어요.  

+ **날씨**
  + `맑음`, `구름조금`, `구름많음`, `흐림`, `비`, `진눈깨비`, `눈`
　


---


# 생활안전 국민행동요령

![lifesafety](images/card/lifesafety.png)



생활 속 안전을 위해 국민이 지켜야 하는 행동요령에 대한 블록 모음입니다. [국민안전처 제공]

아래는 생활안전 국민행동요령 확장 블록에서 선택할 수 있는 항목입니다.

+ **생활 속 문제**
  + `응급처치`, `심폐소생술`, `소화기/소화전 사용법`, `식중독`, `산행안전`, `실종유괴`, `성폭력`, `학교폭력`, `가정 폭력`, `억류 및 납치`, `교통사고`, `승강기 안전사고`, `미세먼지`
+ **상황**
  + 선택한 생활 속 문제에 따라 달라집니다.


## 1. `[응급처치]` 에서 `[화상 처치]` 방법의 수


![block-extension-lifesafety](images/block-extension-lifesafety-01.png)


선택한 생활 속 문제에서 해야 할 행동요령의 수를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 생활 속 문제와 행동요령을 선택할 수 있어요.





## 2. `[응급처치]` 에서 `[화상 처치]` 방법 `(1)` 번째 항목



![block-extension-lifesafety](images/block-extension-lifesafety-02.png)



선택한 생활 속 문제에서 해야 할 행동요령 중 입력한 순서(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)에 맞는 것을 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 생활 속 문제와 행동요령을 선택할 수 있어요.  
　

---


# 자연재난 국민행동요령



![disaster](images/card/disaster.png)



자연재난 발생 시 국민이 지켜야 하는 기본적인 행동요령에 대한 블록 모음입니다. [국민안전처 제공]

아래는 자연재난 국민행동요령 확장 블록에서 선택할 수 있는 항목입니다.

+ **자연재난**
  + `태풍`, `홍수`, `호우`, `강풍`, `대설`, `한파`, `풍랑`, `황사`, `폭염`, `가뭄`, `지진`, `해일`, `산사태`
+ **상황**
  + 선택한 자연재해가 오기 전/왔을 때/지나간 후





## 1. `[태풍]` `[태풍이 오기 전]` 해야할 행동요령 수



![block-extension-disaster](images/block-extension-disaster-01.png)



선택한 자연재난에서 해야 할 행동요령의 수를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 자연재해와 상황을 선택할 수 있어요.



## 2. 자연재난 `[태풍]` `[태풍이 오기 전]` 해야할 행동요령 `(1)` 번째 항목



![block-extension-disaster](images/block-extension-disaster-02.png)



선택한 자연재난에서 해야 할 행동요령 중 입력한 순서(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)에 맞는 것을 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 자연재해와 상황을 선택할 수 있어요.  
　

---


# 행사



![festival](images/card/festival.png)



국내 지역별 다양한 행사 및 축제와 관련된 블록 모음입니다. [한국관광공사 제공]

아래는 행사 확장 블록에서 선택할 수 있는 항목입니다.

+ **시/도**
  + `서울`, `강원`, `경기`, `경남`, `경북`, `광주`, `대구`, `대전`, `부산`, `세종`, `울산`, `인천`, `전남`, `전북`, `제주`, `충남`, `충북`
+ **행사일**
  + `1월`, `2월`, `3월`, `4월`, `5월`, `6월`, `7월`, `8월`, `9월`, `10월`, `11월`, `12월`
+ **정보**
  + `제목`, `지역`, `시작일`, `종료일`, `주소`, `개요`, `홈페이지`





## 1. `[서울]` `[1월]` 행사의 수



![block-extension-festival](images/block-extension-festival-01.png)



선택한 지역에서 선택한 달에 열리는 행사의 수를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 달을 선택할 수 있어요.





## 2. `[서울]` `[1월]` 행사 `(1)` 번째 항목의 `[제목]`



![block-extension-festival](images/block-extension-festival-02.png)



선택한 지역에서 선택한 달에 열리는 행사 중 입력한 순서(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)에 해당하는 것을 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 달, 정보를 선택할 수 있어요.

---
layout: page
title: 확장 > 날씨 블록
date: 2024-12-26 17:00:00
type: userGuide
category: "블록"
order: 39
---

![weather](images/card/weather.png)

기온, 강수량, 미세먼지 농도 등 우리나라의 날씨와 관련된 블록 모음입니다. [웨더아이 제공]

날씨 블록을 사용하기 위해서는 지역을 필수로 선택해야 합니다.

+ **시/도 (지역)**
  + `서울`, `강원`, `경기`, `경남`, `경북`, `광주`, `대구`, `대전`, `부산`, `세종`, `울산`, `인천`, `전남`, `전북`, `제주`, `충남`, `충북`
+ **시/군/구 (지역)**
  + 선택한 시/도에 따라 달라집니다.

지역을 목록 상자에서 선택하지 않고, 법정동코드를 값 블록으로 직접 입력해서 사용할 수도 있습니다.



## 1. 현재 `[서울]` `[전체]` 의 날씨

![block-extn-weather](images/block-extn-weather-01.png)

선택한 지역의 현재 날씨를 가져오는 값 블록입니다. 

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역을 선택할 수 있어요.



## 2. 현재 `[서울]` `[전체]` 의 풍향

![block-extn-weather](images/block-extn-weather-02.png)

선택한 지역의 현재 풍향을 가져오는 값 블록입니다. 

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역을 선택할 수 있어요.

풍향은 알파벳으로 표현됩니다. 



## 3. 현재 `[서울]` `[전체]` 의 `[기온(ºc)]`

![block-extn-weather](images/block-extn-weather-03.png)

선택한 지역의 현재 기상 정보를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 기상 정보를 선택할 수 있어요.

+ **선택할 수 있는 기상 정보**
  + `기온(ºc)`, `미세먼지 농도(PM10, ㎍)`, `풍향`



## 4. 현재 `[서울]` `[전체]` 의 날씨가 `[맑음]`인가?

![block-extn-weather](images/block-extn-weather-04.png)

선택한 지역의 현재 날씨가 선택한 날씨가 같다면 참, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 날씨를 선택할 수 있어요.

+ **날씨**
  + `맑음`, `구름조금`, `구름많음`, `흐림`, `비`, `진눈깨비`, `눈`



## 5. 현재 `[서울]` `[전체]` 의 미세먼지 등급이 `[좋음]` 인가?

![block-extn-weather](images/block-extn-weather-05.png)

선택한 지역의 현재 미세먼지 등급이 선택한 등급과 같다면 참, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 미세먼지 등급을 선택할 수 있어요.

+ **미세먼지 등급**
  + `좋음`, `보통`, `나쁨`, `매우나쁨`



## 6. `[오늘]` `[서울]` `[전체]` 의 날씨

![block-extn-weather](images/block-extn-weather-06.png)

선택한 지역의 일별(어제부터 6일 후까지) 날씨를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 날짜와 지역을 선택할 수 있어요.

+ **날짜(일별)**
  + `어제`, `오늘`, `내일`, `모레`, `3일 후`, `4일 후`, `5일 후`, `6일 후`



## 7. `[오늘]` `[서울]` `[전체]` 의 `[최저기온(ºc)]`

![block-extn-weather](images/block-extn-weather-07.png)

선택한 지역의 일별(어제부터 6일 후까지) 기상 정보를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 날짜와 지역, 기상 정보를 선택할 수 있어요.

+ **날짜(일별)**
  + `어제`, `오늘`, `내일`, `모레`, `3일 후`, `4일 후`, `5일 후`, `6일 후`

+ **선택할 수 있는 기상 정보**
  + `최저기온(ºc)`, `최고기온(ºc)`, `습도(%)`, `강수량(mm)`, `강수확률(%)`, `풍속(m/s)`



## 8. `[오늘]` `[서울]` `[전체]` 의 날씨가 `[맑음]` 인가?

![block-extn-weather](images/block-extn-weather-08.png)

선택한 날짜와 선택한 지역의 일별(어제부터 6일 후까지) 날씨가 선택한 날씨와 같다면 참, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 날짜와 지역, 날씨를 선택할 수 있어요.

+ **날짜(일별)**
  + `어제`, `오늘`, `내일`, `모레`, `3일 후`, `4일 후`, `5일 후`, `6일 후`

+ **날씨**
  + `맑음`, `구름조금`, `구름많음`, `흐림`, `비`, `진눈깨비`, `눈`



## 9. `[서울]` `[전체]` 의 `[00]` 시 날씨

![block-extn-weather](images/block-extn-weather-09.png)

선택한 지역의 시간대별(3시간) 날씨를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 시간대를 선택할 수 있어요.  



## 10. `[서울]` `[전체]` 의 `[00]` 시 `[기온]`

![block-extn-weather](images/block-extn-weather-10.png)

선택한 지역의 시간대별(3시간) 기상 정보를 가져오는 값 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 시간대를 선택할 수 있어요.  

+ **선택할 수 있는 기상 정보**
  + `기온(ºc)`, `습도(%)`, `강수량(mm)`, `강수확률(%)`, `풍속(m/s)`



## 11. `[서울]` `[전체]` 의 `[00]` 시 날씨가 `[맑음]` 인가?

![block-extn-weather](images/block-extn-weather-11.png)

선택한 지역과 선택한 시간대의 날씨가 선택한 날씨와 같다면 참, 아니라면 거짓으로 판단하는 블록입니다.

목록 상자(<img src="images/icon/dropdown-extension.png" style="zoom:50%;" />)를 클릭하면 지역과 시간대를 선택할 수 있어요.  

+ **날씨**
  + `맑음`, `구름조금`, `구름많음`, `흐림`, `비`, `진눈깨비`, `눈`

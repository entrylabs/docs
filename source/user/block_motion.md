---
layout: page
title: 움직임 블록
date: 2020-11-13 10:36:00
type: userGuide
category: "블록"
order: 14
---



움직임 블록에는 오브젝트를 움직이거나 회전하는 블록들이 있습니다.

움직임 블록들의 이름에는 규칙이 있답니다. 이 규칙을 알면 블록들을 더 쉽게 이해할 수 있을 거예요!



## POINT: 움직이기(바꾸기)  vs  이동하기

**① '움직이기(바꾸기)' 블록**


<img src="images/block-motion-01.png" alt="block-motion" style="zoom:67%;" /> <img src="images/block-motion-05.png" alt="block-motion" style="zoom:67%;" /> <img src="images/block-motion-03.png" alt="block-motion" style="zoom:67%;" /> <img src="images/block-motion-19.png" alt="block-motion" style="zoom:67%;" />



블록 이름에 '움직이기' 또는 '바꾸기'가 들어간 블록들은 현재 오브젝트의 위치가 기준이 됩니다. 현재 위치에 따라 주어진 값만큼 움직이죠.  

따라서 '움직이기' 블록에는 움직일 거리를 입력해야 합니다.



**② '이동하기' 블록**



<img src="images/block-motion-08.png" alt="block-motion" style="zoom:67%;" /> <img src="images/block-motion-09.png" alt="block-motion" style="zoom:67%;" /> <img src="images/block-motion-10.png" alt="block-motion" style="zoom:67%;" />



블록 이름에 '이동하기'가 들어간 블록들은 좌표이동하기 블록들은 현재 위치와 상관없이 입력한 좌표로 오브젝트가 이동합니다.

따라서 실행 화면의 좌표를 입력해야 합니다.



## POINT: ~초 동안

입력한 시간 동안 움직이는 블록과 그렇지 않은 블록들은 오브젝트의 움직임에 차이가 있습니다.



**① 주어진 시간 없이 이동하기/움직이기**

움직임 블록에 입력한 시간 값이 없으면 오브젝트는 한 번에 이동합니다. 마치 순간이동을 한 것 처럼요!



<img src="images/block-motion-08.png" alt="block-motion" style="zoom:67%;" />

![motion-teleport](images/window/motion-teleport.gif)



**② 입력한 시간 동안 이동하기/움직이기**

움직임 블록에 입력한 시간이 있으면 오브젝트는 해당 시간 동안 미끄러지듯 이동합니다.



<img src="images/block-motion-09.png" alt="block-motion" style="zoom:67%;" />

![motion-glide](images/window/motion-glide.gif)





움직임 블록 이름의 규칙도 알았으니, 이제 블록들을 하나 하나 자세히 알아볼까요?





## 1. 이동 방향으로 `(10)` 만큼 움직이기



![block-motion](images/block-motion-01.png)



이 오브젝트의 이동 방향 화살표가 가리키는 방향으로 입력한 거리(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)만큼 움직입니다.

입력한 거리가 음수이면 이동 방향의 반대 방향으로 움직여요.





## 2. 화면 끝에 닿으면 튕기기



![block-motion](images/block-motion-02.png)



이 오브젝트가 화면 끝에 닿으면 한 번 튕깁니다.

이동 방향이 벽을 기준으로 반대 방향을 이루는 각도로 오브젝트의 방향을 바꿉니다.

벽에 닿아 튕기면 이동방향은 반대로 바뀌고 오브젝트 또한 상하좌우가 바뀌게 됩니다.



![motion-bounce](images/window/motion-bounce.gif)



엔트리봇이 걷는 모습을 만들 때 이 블록을 사용하면 하늘을 거꾸로 걷는 엔트리봇을 보실 수 있습니다.

바운스 볼 등 상하좌우가 바뀌어도 괜찮은 오브젝트에서는 더 유용한 블록이 될 거예요!





## 3. x 좌표를 `(10)` 만큼 바꾸기



![block-motion](images/block-motion-03.png)



이 오브젝트의 x 좌표를 입력한 수(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)만큼 움직입니다.

입력한 수가 양수이면 오른쪽으로, 음수이면 왼쪽으로 움직여요.





## 4. y 좌표를 `(10)` 만큼 바꾸기



![block-motion](images/block-motion-04.png)



이 오브젝트의 y 좌표를 입력한 수(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)만큼 움직입니다.

입력한 수가 양수이면 위쪽으로, 음수이면 아래쪽으로 움직여요.





## 5. `(2)` 초 동안 x: `(10)` y: `(10)` 만큼 움직이기



![block-motion](images/block-motion-05.png)



입력한 시간(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)동안 이 오브젝트의 x, y 좌표를 현재 위치에서 각각의 수(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)만큼 움직입니다.

이 블록이 동작하는 도중에 다른 블록으로 이 오브젝트의 위치를 바꾸어도 계속 동작합니다.

이 블록의 동작이 끝난 후에 다음 블록이 동작합니다.





## 6. x: `(10)` 위치로 이동하기



![block-motion](images/block-motion-06.png)



이 오브젝트가 현재 위치와 상관 없이 입력한 x 좌표(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)로 이동합니다.





## 7. y: `(10)` 위치로 이동하기



![block-motion](images/block-motion-07.png)



이 오브젝트가 현재 위치와 상관 없이 입력한 y 좌표(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)로 이동합니다.





## 8. x: `(0)` y: `(0)` 위치로 이동하기



![block-motion](images/block-motion-08.png)



이 오브젝트가 현재 위치와 상관 없이 입력한 x, y 좌표(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)로 이동합니다.





## 9. `(2)` 초 동안 x: `(10)` y: `(10)` 위치로 이동하기



![block-motion](images/block-motion-09.png)



입력한 시간(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)동안 이 오브젝트가 입력한 x, y 좌표(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)로 이동합니다.

이 블록이 동작하는 도중에 다른 블록으로 이 오브젝트의 위치를 바꾸어도 남은 시간동안 입력한 위치로 이동하게 됩니다.

이 블록의 동작이 끝난 후에 다음 블록이 동작합니다.





## 10. `[오브젝트]` 위치로 이동하기



![block-motion](images/block-motion-10.png)



이 오브젝트가 선택한 위치로 이동합니다.

목록 상자(<img src="images/icon/dropdown-motion.png" style="zoom:50%;" />)를 클릭하면 오브젝트 또는 마우스 포인터를 선택해 해당 위치로 이동할 수 있습니다.





## 11. `(2)` 초 동안 `[오브젝트]` 위치로 이동하기



![block-motion](images/block-motion-11.png)



입력한 시간(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)동안 이 오브젝트가 선택한 항목의 위치로 이동합니다.

이 블록이 동작하는 도중에 선택한 항목의 위치를 바꾸어도 계속 동작하지만, 처음 동작할 때의 위치로 계속 이동해요.

이 블록의 동작이 끝난 후에 다음 블록이 동작합니다.

목록 상자(<img src="images/icon/dropdown-motion.png" style="zoom:50%;" />)를 클릭하면 오브젝트 또는 마우스 포인터를 선택해 해당 위치로 이동할 수 있습니다.





## 12. 방향을 `(90º)` 만큼 회전하기



![block-motion](images/block-motion-12.png)



이 오브젝트의 방향을 (중심점을 기준으로) 입력한 각도(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)만큼 회전합니다.

입력한 각도가 양수이면 시계 방향으로, 음수이면 반시계 방향으로 회전해요.





## 13. 이동 방향을 `(90º)` 만큼 회전하기



![block-motion](images/block-motion-13.png)



이 오브젝트의 이동 방향을 입력한 각도만큼 회전합니다.

입력한 각도가 양수이면 시계 방향으로, 음수이면 반시계 방향으로 회전해요.





## 14. `(2)` 초 동안 방향을 `(90º)` 만큼 회전하기



![block-motion](images/block-motion-14.png)



입력한 시간(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)동안 이 오브젝트의 방향을 (중심점을 기준으로) 입력한 각도(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)만큼 회전합니다.

입력한 각도가 양수이면 시계 방향으로, 음수이면 반시계 방향으로 회전해요.

이 블록이 동작하는 도중에 다른 블록으로 이 오브젝트의 방향을 바꾸어도 계속 동작해요.

이 블록의 동작이 끝난 후에 다음 블록이 동작합니다.





## 15. `(2)` 초 동안 이동 방향 `(90º)` 만큼 회전하기



![block-motion](images/block-motion-15.png)



입력한 시간(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)동안 이 오브젝트의 이동 방향을 입력한 각도(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)만큼 회전합니다.

입력한 각도가 양수이면 시계 방향으로, 음수이면 반시계 방향으로 회전해요.

이 블록이 동작하는 도중에 다른 블록으로 이 오브젝트의 방향이나 이동 방향을 바꾸어도 계속 동작해요.

이 블록의 동작이 끝난 후에 다음 블록이 동작합니다.





## 16. 방향을 `(90º)` (으)로 정하기



![block-motion](images/block-motion-16.png)



이 오브젝트의 방향을 (중심점을 기준으로) 입력한 각도(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)로 정합니다.





## 17. 이동 방향을 `(90º)` (으)로 정하기



![block-motion](images/block-motion-17.png)



이 오브젝트의 이동 방향을 입력한 각도(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)로 정합니다.





## 18. `[엔트리봇]` 쪽 바라보기



![block-motion](images/block-motion-18.png)



오브젝트의 이동 방향 화살표가 선택한 항목를 바라볼 수 있게 이 오브젝트의 방향을 (중심점을 기준으로) 정합니다.

목록 상자(<img src="images/icon/dropdown-motion.png" style="zoom:50%;" />)를 클릭하면 바라볼 오브젝트 또는 마우스 포인터를 선택할 수 있어요.





## 19. `(90º)` 방향으로 `(10)` 만큼 움직이기



![block-motion](images/block-motion-19.png)



오브젝트가 (중심점을 기준으로) 입력한 각도(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)로 입력한 거리(<img src="images/icon/value.png" alt="value" style="zoom:50%;" />)만큼 움직입니다.

입력한 거리가 음수이면 입력한 각도의 반대 방향으로 움직여요.

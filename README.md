# HealingSpace

[이곳](https://healingspace-c26ce.web.app/#/) 에서 결과물을 확인 하실 수 있습니다.

---
## Index

[1. Healing Space 란?](#healing-space-란)

[2. Healing-Space-Page](#healing-space-page)

[3. Dev](#dev)

---

## Healing Space 란?

"요즘 나 우울한 것 같아"

지인에게 이런 말을 해보지 않은 사람이 과연 있을까. 우울이라는 감정은, 살아가면서 누구나 겪는 감정이기 마련이다.

-정신의학신문: 신재현 정신건강의학과 전문의-


'일상적인' 우울감은 정신의학에서 말하는 우을증과는 구분 되어야 합니다.

가장 큰 기준은, 현재의 우울감이 일상생활, 직업적/사회적 생활, 대인관계에 지속적으로 문제를 일으키는지의 여부 입니다.

우을증은 지속적인 우울한 감정뿐만 아니라, 평상시에 즐거웠던 활동들에 대한 흥미를 사라지게 하고, 만성적인 피로감과 에너지 저하, 무기력감을 유발하며, 식사 및 수면과 같은 가장 기본적인 생체 활동들조차 망가뜨리게 됩니다.

더 나아가 자신이 가치가 없는 사람인 것 같고, 자신이 목숨을 끊어야만 모든것이 제대로 돌아갈 것이라는 끔찍한 생각에 사라잡히게 하여, 비극적인 결말을 초래하기도 합니다.

우울감이 일상의 작은 감정의 물결에 해당한다면, 우울증은 해안의 방파제를 매섭게 때리는 파도와도 같습니다.



많은 현대인들은 자신이 설마? 라는 생각으로 마음의 상처를 그대로 두고 살아갑니다. 

마음의 병은 치료해야할 상처지 창피해 할 병이 아닙니다. 허나 아직 많은 사람들은 우을증을 앓고 있다는 것을 자신의 치부로 생각하고 치료하지 않고 있습니다.

그로인해 상처가 덧나고 더 깊어질 뿐이기에 빠른 시일 내에 상담 센터나 병원에 내원할 수 있게 검사지를 통해 검사를 하고, 

알아보기 쉬운 Chart-UI를 통해 자신의 우울함이 얼마동안이나 지속되었는지 확인하고 집 근처 상담센터를 지도를 통해 찾을 수 있는 Healing 웹 페이지 입니다.

---

## Healing-Space-Page 

### Login-Page
<img src = "https://user-images.githubusercontent.com/61114705/113818880-7141a600-97b3-11eb-8a20-6373a5534e99.png" width="800px">

소셜 로그인 기능과, 비 로그인 기능을 나눠 줬습니다.


### WorryCheck-Page
<img src = "https://user-images.githubusercontent.com/61114705/113819046-b9f95f00-97b3-11eb-8da0-a0692ac672ed.png" width="800px">

자신의 우울감을 느끼는 원인에 대해 한번 더 생각해 볼 수 있게 선택지를 나눠 줬습니다.


### MainTest-Page

<img src = "https://user-images.githubusercontent.com/61114705/113820764-1cebf580-97b6-11eb-85e1-33de3fb0a812.png" width="800px">

메인 상담 페이지로 검사를 진행에 점수를 통해 결과를 나타내 줍니다.

### TestResult-Page

<img src = "https://user-images.githubusercontent.com/61114705/113819312-19576f00-97b4-11eb-88d6-33e5aee3717d.png" width="800px">

구글 로그인을 이용했다면 자신의 이전 검사 결과를 이용해 얼마나 우울감이 지속 되었나 Chart-UI를 통해 한눈에 알아 볼 수 있습니다.


<img src = "https://user-images.githubusercontent.com/61114705/113819347-24120400-97b4-11eb-88f6-66b216c4015e.png" width="800px">

KakaoMap-Api를 통해 자신의 집 근처 심리 상담 센터의 마커를 표시해주고 클릭시 전화번호를 받아 올 수 있게 해줬습니다.

소셜 로그인을 했다면, 자신의 이전 검사 기록을 Chart-UI로 보여줌으로써 한눈에 자신의 검사 기록을 확인 할 수 있습니다.

---

## Dev

```
React, Redux, Redux-saga, Redux-ToolKit, Styled-Components, Typescript, 
Webpack, Babel, FireBase, Kakao-MapAPI

```

- 상태관리 라이브러리인 Redux, Redux-ToolKit를 사용하여 효율적인 상태관리
- KAKAO Map API를 활용해 사용자 위치 심리상담 센터 마커
- Debounce을 활용하여 KAKAO Map API요청 최소화
- Redux-saga를 활용하여 로그인 로직 비동기 처리
- babel을 사용하여 크로스브라우징 IE11까지 동작
- FireBase를 이용하여 구글 로그인, 배포
- 동일한 결과물을 위해 Apple Font적용
- Webpack을 사용하여 파일 모듈화
- Typescript를 활용해 타입 관리

---

#### API이용 최소화

Debounce 활용한 KaKao Map API요청 최소화 지도를 이동 할 때마다 원치 않는 정보를 너무 많이 불러와 웹의 성능을 저하 시키는 문제가 있었습니다. 카카오 에서도 최적화를 하기 위해 여러 명령어가 있었지만 디바운싱을 활용한 방법이 가장 적합하다고 생각해 Debounce를 활용해 API요청 최소화를 진행 했습니다.

#### 컴포넌트 구조
Redux-ToolKit의 Best Practice 구조를 따랐습니다.

MVVM패턴을 생각하며 컴포넌트 구조를 작성 하였습니다.

feature의 slice(Reducer)는 Model

hook 디렉토리에 react-redux hook을 이용해 Model View

각 Component를 View로 작성 했습니다.

---

ps) 원활한 실행을 위해 API키를 .ENV 를 사용해 숨기지 않았습니다.


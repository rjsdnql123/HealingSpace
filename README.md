# Healing Space
개발 의도 - 심리상담이 필요한 사람들에게 따뜻한 말 한마디와 심리상담을 받을수 있는 용기를 주는 목적을 갖고 있습니다.

```
사용 Stack
 React, Redux, Redux-saga, Redux-toolKit, styled-components, typescript, Webpack, Babel,
 react-router, react-hooks, firebase, firebase-Auth, kakao Map API
 ```
 
> 새로 도입한 기술 스택

> 여태 개발하며 Redux를 사용 할 때 typesafe-actions를 이용해 코드를 작성 했습니다. 
redux를 만드는데 액션 타입, 액션 생성함수, 리듀서 를 모두 작성하는데 불편함을 느꼈고 Redux-toolkit이 정식 릴리즈 되었고 velopert님 블로그를 보던 중 Redux 의 필수 아이템 이라고 하여, 공부해 적용 했습니다.

> 지금 까지 CRA을 이용하여 개발을 진행해 왔는데, 좋은 개발자가 되기 위해 처음부터 적용을 해야 한다고 생각해 미뤄왔던 Webpack과 Babel을 이용하여 CRA를 사용하지 않고 개발 했습니다.

> Debounce 활용한 KaKao Map API요청 최소화
지도를 이동 할 때마다 원치 않는 정보를 너무 많이 불러와 웹의 성능을 저하 시키는 문제가 있었습니다. 카카오 에서도 최적화를 하기 위해 여러 명령어가 있었지만 디바운싱을 활용한 방법이 가장 적합하다고 생각해 Debounce를 활용해 API요청 최소화를 진행 했습니다.

https://healingspace-c26ce.web.app/#/ 

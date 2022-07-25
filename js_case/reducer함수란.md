## reducer 함수란 무엇인가?

##### 리듀서는 application의 state(상태)와 action을 arguments(객체 형태임)로서 취하여  
##### 새로운 state로 리턴하는 순수함수(pure function)이다.

##### 순수 함수는 같은 인자(arguments)가 전해진다면 계속 같은 결과값을 반환하며 side effects가
##### 나타나지 않는다.

* 예시
```JS
const add = (x, y) => x + y;
add(2, 5);
``` 

* 위의 함수는 결과값 7을 반환한다. 매개변수(parameter)는 x, y 이다. 
add함수를 호출할 때 2와 5를 인자(arguments)로 입력한다.
둘을 더한 값을 반환하므로 add 함수는 순수 함수이다.

* 순수 함수인 reducer 함수의 매개변수 state와 action에 대해 살펴보자.

```JS
const initialState = {};
const cartReducer = (state = initialState, action) => {
    //code
}
```

* State
    state는 당신이 만든 component들과 함께 동작하는 데이타이다. state는 component가 요구하는 
    데이터를 지니고(hold)있으며, component가 rendering 하는 것을 좌우한다.
    --(역으로 redering 만으로 state를 바꿀 수 없다.)
    state object가 바뀌면, component는 re-redering한다. 어플리케이션을 Redux로 관리하는 경우,
    reducer함수는 state가 바뀌는 것을 감지한다.

* Action
    action은 

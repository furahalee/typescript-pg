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
    * state는 당신이 만든 component들과 함께 동작하는 데이타이다. state는 component가 요구하는 
    데이터를 지니고(hold)있으며, component가 rendering 하는 것을 좌우한다. 
    --(역으로 redering 만으로 state를 바꿀 수 없다.) 
    state object가 바뀌면, component는 re-redering한다. 어플리케이션을 Redux로 관리하는 경우, 
    reducer함수는 state가 바뀌는 것을 감지한다. 

* Action 
    * action은 information의 payload를 담고있는 object이다. payload는 그저 Redux store가 업데이트 되기 위한 
    information의 source를 담고있다. 

    * Reducer는 action.type 값(value)에 기반하여 store를 업데이트 한다.
    다음 예제의 ADD_TO_CART로 action.type을 정의해 보자.

    * Redux official [documentation](https://redux.js.org/introduction/getting-started)에 의하면, 
    action은 그저 Redux application에서 변화를 일으킬(trigger) 뿐이다. action은 application의 store의 변화를 일으킬 
    payload를 담고 있다. action들은 Javascript의 object인데, 실행되는 action의 type을 Redux에게 알려준다. 
    주로, 아래와 같은 함수의 형태로 정의한다. 


```JS
const action = {
  type: 'ADD_TO_CART',
  payload: {
    product: 'margarine',
    quantity: 4
  }
}
```

  * 위의 코드는 유저가 보내는 값을 담고있는 전형적인 payload를 나타낸다. 위의 코드에서 알 수 있듯, 
  action object는 액션의 type과 payload object를 담고 있다. 그것들은 이 특정 action이 실행되기 
  위한 필수 요소이다.


## reducer를 사용하여 state 업데이트 하기 

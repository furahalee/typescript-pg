/**
 * 반복자(iterator)와 제너레이터는 상생관계다. 제너레이터로 값의 스트림을 생성할 수 있고 반복자로 생성된 값을 소비할 수 있기 때문이다.
 *
 * 용어정리
 * 이터러블(iterable; 반복할 수 있는)
 * Symbol.iterator라는 프로퍼티(반복자를 반환하는 함수)를 가진 모든 객체
 *
 * 반복자(iterator)
 * next라는 메서드(value, done 두 프로퍼티를 가진 객체를 반환)를 정의한 객체
 */

//Symbol.iterator와 next를 구현하는 객체(또는 클래스)를 만들어 반복자나 이터러블을 직접 정의할 수 있다.
//다음은 1에서 10까지의 숫자를 반복하는 반복자를 정의하는 예다.

let numbersCustom = {
  *[Symbol.iterator]() {
    for (let n = 0; n <= 10; n++) {
      yield n;
    }
  },
};

console.log(numbersCustom[Symbol.iterator]().next()); // {value: 0, done: false}를 반환


// 커스텀 반복자뿐 아니라 javascript의 내장 컬렉션 타입(Array, Map, Set, String 등)의 반복자도 정의할 수 있다.

for (let a of numbers) {
} // for-of로 반복자 반복하기

let AllNumbers = [...numbers]; // 반복자 스프레드

let [one, two, ...rest] = numbers; // 반복자 destructure

/* chapter 3 연습문제  타입추론 */
let a = 1042
let d = [true, true, false]
let e = {type: 'ficus'} // 오브젝트
let f= [1, false]
const g = [3]
let h = null

let i: 3 = 3
let test: ()=>never = function nFunc() {
  throw TypeError('error');
}
let l: unknown = 4
// let m = l * 2   // error TS18046: 'l' is of type 'unknown'.
function* createFibonacciGenerator() {
  let a = 1;
  let b = 1;
  while (true) {
    yield 1;
    [a, b] = [b, a + b];
  }
}
let fibonacciGenerator = createFibonacciGenerator();
// IterableIterator<number>

console.log(fibonacciGenerator.next()); //{value: 1, done: false}로 평가

function* createNumbers(): IterableIterator<number> {
  let n = 0
  while (1) {
    yield n++
  }
}

let numbers = createNumbers();

console.log(numbers.next()); // {value: 0, done: false}로 평가
console.log(numbers.next()); // {value: 1, done: false}로 평가
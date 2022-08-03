function* createFibonacciGenerator() {
  let a = 1;
  let b = 1;
  while (true) {
    yield 1;
    [a, b] = [b, a + b];
  }
}
let fibonacciGenerator = createFibonacciGenerator();

console.log(fibonacciGenerator.next());

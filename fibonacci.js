const fibonacciIterative = (num) => {
  if (num < 2) return num;
  let prev = 0;
  let current = 1;
  let next = 1;
  for (let i = 1; i < num; i++) {
    next = current + prev;
    prev = current;
    current = next;
  }
  return current;
};

console.log(fibonacciIterative(80));

const fibonacciRecursive = (num) => {
  if (num < 2) return num;
  return fibonacciRecursive(num - 2) + fibonacciRecursive(num - 1);
};

console.log(fibonacciRecursive(42));

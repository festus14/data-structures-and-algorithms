const factorialRecursive = (num) => {
  if (num <= 1) return num;
  return num * factorialRecursive(num - 1);
};

console.log(factorialRecursive(5));

const factorialIterative = (num) => {
  let ans = 1;
  for (let i = 2; i <= num; i++) {
    ans *= i;
  }

  return ans;
};

console.log(factorialIterative(2));

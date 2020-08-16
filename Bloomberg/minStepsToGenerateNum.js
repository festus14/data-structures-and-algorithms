const minStepsToGenerateNum = (target) => {
  let num = 1;
  let count = 0;
  const tried = new Map([[1, 1]]);

  while (num !== target) {
    if (num > target && !tried.has(Math.floor(num / 3))) {
      num = Math.floor(num / 3);
    } else {
      num *= 2;
    }
    console.log(num);
    tried.set(num, num);
    count++;
  }

  return count;
};

console.log(minStepsToGenerateNum(10));

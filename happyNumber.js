var isHappy = function (n) {
  let preNumObj = {};

  while (n !== 1 && !preNumObj[n]) {
    preNumObj[n] = true;
    n = n
      .toString()
      .split("")
      .reduce((sum, val) => sum + Math.pow(val, 2), 0);
  }
  return n === 1 ? true : false;
};

console.log(isHappy(2));

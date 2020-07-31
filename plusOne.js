const plusOne = (arr) => {
  if (arr[arr.length - 1] + 1 < 10) {
    arr[arr.length - 1] += 1;
    return arr;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i] + 1;
    if (num < 10) {
      break;
    }
    arr[i] = 0;
    arr[i - 1] && (arr[i - 1] += 1);
  }
  if (arr[0] === 0 || arr[0] === 0) {
    arr[0] = 0;
    arr.unshift(1);
  }
  return arr;
};

console.log(plusOne([9, 2, 9, 9]));

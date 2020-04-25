const countingElements = (arr) => {
  const arrObj = {};
  let count = 0;
  arr.forEach((element) => {
    if (!arrObj[element]) arrObj[element] = element;
  });
  arr.forEach((element) => {
    if (arrObj[element + 1]) count++;
  });

  return count;
};

console.log(countingElements([1, 2, 3]));
console.log(countingElements([1, 1, 3, 3, 5, 5, 7, 7]));
console.log(countingElements([1, 1, 2, 2]));

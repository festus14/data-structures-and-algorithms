// O(n^2) solution

// const findMaxLength = (nums) => {
//   let maxLength = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const tempArray = [];
//     let countZero = 0;
//     let countOne = 0;
//     for (let j = i; j < nums.length; j++) {
//       const elem = nums[j];
//       tempArray.push(elem);
//       if (elem === 0) countZero++;
//       else countOne++;
//       if (countOne === countZero) {
//         maxLength = Math.max(tempArray.length, maxLength);
//         console.log(tempArray, maxLength);
//       }
//     }
//   }
//   return maxLength;
// };

// O(n) solution

const findMaxLength = (nums) => {
  let count = 0;
  let max = 0;
  const countObj = { 0: 1 };

  if (nums.length === 2 && nums[0] !== nums[1]) return 2;

  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    if (elem === 0) count--;
    else count++;
    if (!countObj[count]) countObj[count] = i;
    else max = Math.max(max, i + countObj[count]);
  }

  // nums.forEach((elem, i) => {
  //   if (elem === 0) count--;
  //   else count++;
  //   if (!countObj[count]) countObj[count] = i;
  //   else max = Math.max(max, i + countObj[count]);
  // });
  return max;
};

console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0, 1]));
// console.log(findMaxLength([1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0]));

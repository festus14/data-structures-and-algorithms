// O(n^2) solution

const maxSubArray = (nums) => {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const elemI = nums[i];
    let curSum = elemI;
    for (let j = i + 1; j < nums.length; j++) {
      const elemJ = nums[j];
      curSum += elemJ;
      maxSum = Math.max(maxSum, curSum);
    }
  }
  return maxSum;
};

// O(n) solution

// const maxSubArray = (nums) => {
//   let maxSum = -Infinity;
//   let curSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const elem = nums[i];
//     curSum += elem;
//     if (curSum === 0) curSum = elem;
//     maxSum = Math.max(curSum, maxSum);
//   }
//   return maxSum;
// };

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([8, -19, 5, -4, 20]));

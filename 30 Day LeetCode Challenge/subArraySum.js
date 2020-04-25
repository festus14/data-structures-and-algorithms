var subarraySum = function (nums, k) {
  let count = 0;
  let elemSum = 0;
  let sum = 0;
  const numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    numsObj[elem] = elem;
  }
  console.log(numsObj);
  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    elemSum += elem;
    if (numsObj[k - elemSum]) {
      count++;
      elemSum = 0;
    }
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2));

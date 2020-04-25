const productExceptSelf = (nums) => {
  const product = nums.reduce((curProduct, elem) => curProduct * elem, 1);

  if (product === 0) {
    if (nums.length === 2) return [nums[1], nums[0]];
    return new Array(nums.length).fill(0);
  }

  nums.forEach((element, i) => {
    nums[i] = product / element;
  });

  return nums;
};

// console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([0, 0]));

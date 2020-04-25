const moveZeroes = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    if (el === 0) continue;
    let pos = 0;
    let len = nums.length - 1;
    while (pos < len) {
      const elem = nums[pos];
      if (elem !== 0) {
        pos++;
        continue;
      }
      nums[pos] = nums[pos + 1];
      nums[pos + 1] = elem;
      pos++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

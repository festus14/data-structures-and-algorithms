const bestTimeToTransact = (nums) => {
  let profit = 0;
  let currentProfit = 0;
  let maxProfit = 0;
  let buy = nums[0];
  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    if (elem <= buy) {
      buy = elem;
    }
    currentProfit = elem - buy;
    maxProfit = Math.max(currentProfit, maxProfit);
    if (maxProfit === currentProfit && i !== nums.length - 1) continue;
    else {
      profit += maxProfit;
      maxProfit = 0;
      buy = nums[i];
    }
  }
  return profit;
};

console.log(bestTimeToTransact([7, 1, 5, 3, 6, 4]));
console.log(bestTimeToTransact([1, 2, 3, 4, 5]));
console.log(bestTimeToTransact([7, 6, 4, 3, 1]));

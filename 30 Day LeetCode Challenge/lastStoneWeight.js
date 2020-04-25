const lastStoneWeight = (stones) => {
  let len = stones.length - 1;
  while (len) {
    stones.sort((a, b) => b - a);
    if (stones.length === 0) return 0;
    if (stones.length === 1) return stones[0];
    const diff = stones[0] - stones[1];
    if (diff === 0) {
      stones.shift();
      stones.shift();
    } else {
      stones.shift();
      stones[0] = diff;
    }
    len--;
  }
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));

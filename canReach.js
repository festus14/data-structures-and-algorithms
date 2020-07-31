const canReach = (steps) => {
  let position = 0;
  let i = 0;
  let count = 0;
  let oldPosition = 0;
  while (position >= i && position < steps.length - 1) {
    position = Math.max(position, steps[i] + i);
    if (oldPosition !== position) {
      count++;
      oldPosition = position;
    }
    i++;
  }
  return [position >= steps.length - 1, count];
};

console.log(canReach([3, 3, 1, 0, 2, 0, 1, 0, 2]));
console.log(canReach([2, 4, 1, 1, 0, 2, 3]));

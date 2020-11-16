const similarKeys = (a, b, c, arr) => {
  let first = 0,
    current = 0,
    mid = Math.floor(arr.length / 2),
    last = arr.length - 1;

  while (current < last) {
    if (arr[current] === a) {
      [arr[current], arr[first]] = [arr[first], arr[current]];
      first++;
      current++;
    } else if (arr[current] === b) {
      [arr[current], arr[mid]] = [arr[mid], arr[current]];
      mid++;
      current++;
    } else if (arr[current] === c) {
      [arr[current], arr[last]] = [arr[last], arr[current]];
      last--;
      current++;
    } else {
      current++;
    }

    console.log(arr);
  }
  return arr;
};

console.log(similarKeys(0, 2, 3, [11, 2, 3, 4, 3, 4, 7, 5, 2, 2, 4, 5, 1]));

const dutchFlagPartition = (arr, p_index) => {
  const pivot = arr[p_index];

  let smaller = 0;
  let current = 0;
  let larger = arr.length - 1;

  while (current <= larger) {
    if (arr[current] < pivot) {
      let temp = arr[current];
      arr[current] = arr[smaller];
      arr[smaller] = temp;
      current++;
      smaller++;
    } else if (pivot === arr[current]) {
      current++;
    } else {
      let temp = arr[current];
      arr[current] = arr[larger];
      arr[larger] = temp;
      larger--;
    }
  }
  return arr;
};

console.log(dutchFlagPartition([0, 1, 2, 0, 2, 1, 1], 3));

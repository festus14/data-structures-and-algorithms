// const deleteDuplicates = (arr) => {
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (num === arr[index]) {
//       continue;
//     } else {
//       index++;
//       arr[index] = num;
//     }
//   }
//   return arr.slice(0, index + 1);
// };

// console.log(deleteDuplicates([1, 1, 2, 3, 3, 3, 5, 5, 5]));

const deleteKey = (arr, key) => {
  let i = 0;
  let last = arr.length - 1;
  while (i <= last) {
    if (arr[i] === key) {
      arr[i] = arr[last];
      arr[last] = key;
      last--;
      if (arr[last] === key) return arr;
    }
    i++;
  }
  return arr;
};

console.log(deleteKey([1, 1, 2, 3, 3, 3, 4, 5, 5, 5], 3));

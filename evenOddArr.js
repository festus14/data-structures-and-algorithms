// const evenOddArr = arr => {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         arr.push(0);
//     }
//     let even = len;
//     let odd = arr.length - 1;
//     for (let i = 0; i < len; i++) {
//         if (arr[i] % 2 === 0) {
//             arr[even] = arr[i];
//             even++;
//         } else {
//             arr[odd] = arr[i];
//             odd--;
//         }
//     }

//     return arr.splice(len);
// };

const evenOddArr = arr => {
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        if (arr[left] % 2 === 0) {
            left++;
        }
        if (arr[right] % 2 !== 0) {
            right--;
        }
        if (arr[left] % 2 !== 0 && arr[right] % 2 === 0) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        left++;
        right--;
    }
    return arr;
};

console.log(evenOddArr([2, 5, 3, 9, 0, 7]));
console.log(evenOddArr([18, 5, 2, 99, 6, 17, 12, 6, 10, 8, 73, 1, 2, 77, 90, 3, 65, 41, 24, 33, 90, 19]));
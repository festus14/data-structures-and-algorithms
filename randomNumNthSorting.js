const randomNumNthSorting = (arr, index) => {
    let pivot = arr[index];
    let left = index - 1;
    let right = index + 1;
    console.log(pivot);

    while (left > 0 && right < arr.length) {
        if (arr[left] < pivot) {
            left--;
        }
        if (arr[right] > pivot) {
            right++;
        }
        if (arr[left] > pivot && arr[right] < pivot) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left--;
            right++;
        }
        left--;
        right++;
    }
    return arr
};

console.log(randomNumNthSorting([2, 5, 3, 9, 0, 7], 2));
console.log(randomNumNthSorting([18, 5, 2, 99, 6, 17, 12, 6, 10, 8, 73, 1, 2, 77, 90, 3, 65, 41, 24, 33, 90, 19], 13));
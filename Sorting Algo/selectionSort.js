// Selection sort is a basic sorting algorithm where the smallest number is gotten/selected and swapped with 
// the first index of the unsorted part of the array. 
//  This is done by comparing each element with every other unsorted element, hence giving room for
// O(n^2) time complexity with O(1) space complexity
// The implementation can be seen below.

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))
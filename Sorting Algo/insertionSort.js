// Insertion sort moves elements to their rightful place in each loop.
// This is done by comparing if a number falls between two numbers (greater and lesser).
// Best case scenario O(n), worst case O(n^2) with O(1) space complexity
// The implementation can be seen below

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            // If number is less than the first value, move number to first
            arr.unshift(arr.splice(i, 1)[0])
        } else {
            // Else, look for where to insert number, that is where it is greater than the previous
            // but less than the current
            for (let j = 1; j < i; j++) {
                if (arr[i] > arr[j - 1] && arr[i] <= arr[j]) {
                    arr.splice(j, 0, arr.splice(i, 1)[0])
                }
            }
        }
    }
    return arr
}
console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))
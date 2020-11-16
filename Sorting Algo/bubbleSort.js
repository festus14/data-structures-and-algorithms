// Bubble sort is a basic sorting algorithm where the largest number is bubbled to the end for each loop.
// This is done by comparing each element with every other element, hence giving room for
// O(n^2) time complexity with O(1) space complexity
// The implementation can be seen below.
 
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) continue;
            else {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }

    return arr;
}

console.log(bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))
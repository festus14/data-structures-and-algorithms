function mergeSortedArrays(arr1, arr2) {

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {

        return "The input type is wrong";

    } else {

        return arr1.concat(arr2).sort(function(a, b) { return a - b });

    }
}

console.log(mergeSortedArrays([1, 4, 60, 5, 4], [22, 3, 6, 0]));
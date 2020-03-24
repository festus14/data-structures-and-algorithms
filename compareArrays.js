function compare(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) return true;
        }
    }
    return false;
}

console.log(compare([4, 6, 8, 2], []))

function compareTwoArray(arr1, arr2) {
    let arrObj = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!arrObj[arr1[i]]) {
            const elem = arr1[i];
            arrObj[elem] = true;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (arrObj[arr2[j]]) {
            return true;
        }
    }

    return false;
}

console.log(compareTwoArray([1, 2, 3, 66], [0, 8, 10]));
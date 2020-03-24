function minPrice(arr) {
    let valObj = {};
    let minValArr = [];

    for (let i = 0; i < arr.length; i++) {
        minValArr.push(Math.min(...arr[i]));
        valObj[arr[i].indexOf(minValArr[i])] = true;
        if (valObj[arr[i].indexOf(minValArr[i])]) {
            arr[i + 1][arr[i].indexOf(minValArr[i])] = null;
        }
    }

    return minValArr;
}

console.log(
    minPrice([
        [1, 2, 3],
        [1, 2, 3],
        [3, 3, 1]
    ])
);
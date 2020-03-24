function strangeSort(mapping, nums) {
    let colArr = [];
    let tempStr = '';
    let ansArr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            tempStr = tempStr + mapping.indexOf(parseInt(nums[i][j]));
        }
        colArr.push(tempStr);
        tempStr = '';
    }

    colArr.sort((a, b) => a - b);

    for (let i = 0; i < colArr.length; i++) {
        for (let j = 0; j < colArr[i].length; j++) {
            tempStr = tempStr + mapping[parseInt(colArr[i][j])];
        }
        ansArr.push(tempStr);
        tempStr = '';
    }

    return ansArr;
}

console.log(strangeSort([2, 1, 4, 8, 6, 3, 0, 9, 7, 5], ['12', '02', '4', '023', '65', '83', '224', '50']));
console.log(strangeSort([3, 5, 4, 6, 2, 7, 9, 8, 0, 1], ['990', '332', '32']));
function play(arr) {
    let tomSore = 0;
    let jerryScore = 0;
    let invertedArr = [];
    let colArr = [];
    let maxNum;

    for (let i = 0; i < arr[0].length; i++) {
        invertedArr.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            invertedArr[j].push(arr[i][j]);
        }
    }

    for (let i = 0; i < invertedArr.length; i++) {
        maxNum = Math.max(...invertedArr[i]);
    }

    console.log(maxNum);
    console.log(invertedArr);

    // return tomSore - jerryScore;
}

console.log(play([
    [5, 7, 6, 2, 8, 4, 4, 8],
    [2, 5, 4, 5, 9, 8, 4, 2]
]));
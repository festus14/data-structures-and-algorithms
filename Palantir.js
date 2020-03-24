// function findHighPoints(elevations) {
//     let boolArr = [];
//     let testObj = {};
//     let tempArr = [];

//     for (let i = 0; i < elevations.length; i++) {
//         for (let j = 0; j < elevations[i].length; j++) {
//             if (elevations[i - 1]) {
//                 if (elevations[i - 1][j - 1]) {
//                     if (elevations[i - 1][j - 1] < elevations[i][j]) {
//                         if (!testObj[true]) {
//                             testObj[true] = elevations[i][j];
//                         }
//                     } else {
//                         if (!testObj[false]) {
//                             testObj[false] = elevations[i][j];
//                         }
//                     }
//                 }
//                 if (elevations[i - 1][j + 1]) {
//                     if (elevations[i - 1][j + 1] < elevations[i][j]) {
//                         if (!testObj[true]) {
//                             testObj[true] = elevations[i][j];
//                         }
//                     } else {
//                         if (!testObj[false]) {
//                             testObj[false] = elevations[i][j];
//                         }
//                     }
//                 }
//                 if (elevations[i - 1][j]) {
//                     if (elevations[i - 1][j] < elevations[i][j]) {
//                         if (!testObj[true]) {
//                             testObj[true] = elevations[i][j];
//                         }
//                     } else {
//                         if (!testObj[false]) {
//                             testObj[false] = elevations[i][j];
//                         }
//                     }
//                 }
//             }
//             if (elevations[i + 1]) {
//                 if (elevations[i + 1][j - 1]) {
//                     if (elevations[i + 1][j - 1] < elevations[i][j]) {
//                         if (!testObj[true]) {
//                             testObj[true] = elevations[i][j];
//                         }
//                     } else {
//                         if (!testObj[false]) {
//                             testObj[false] = elevations[i][j];
//                         }
//                     }
//                 }
//                 if (elevations[i + 1][j + 1]) {
//                     if (elevations[i + 1][j + 1] < elevations[i][j]) {
//                         if (!testObj[true]) {
//                             testObj[true] = elevations[i][j];
//                         }
//                     } else {
//                         if (!testObj[false]) {
//                             testObj[false] = elevations[i][j];
//                         }
//                     }
//                 }
//                 if (elevations[i + 1][j]) {
//                     if (elevations[i + 1][j] < elevations[i][j]) {
//                         if (!testObj[true]) {
//                             testObj[true] = elevations[i][j];
//                         }
//                     } else {
//                         if (!testObj[false]) {
//                             testObj[false] = elevations[i][j];
//                         }
//                     }
//                 }
//             }

//             if (elevations[i][j - 1]) {
//                 if (elevations[i][j - 1] < elevations[i][j]) {
//                     if (!testObj[true]) {
//                         testObj[true] = elevations[i][j];
//                     }
//                 } else {
//                     if (!testObj[false]) {
//                         testObj[false] = elevations[i][j];
//                     }
//                 }
//             }

//             if (elevations[i][j + 1]) {
//                 if (elevations[i][j + 1] < elevations[i][j]) {
//                     if (!testObj[true]) {
//                         testObj[true] = elevations[i][j];
//                     }
//                 } else {
//                     if (!testObj[false]) {
//                         testObj[false] = elevations[i][j];
//                     }
//                 }
//             }

//             console.log(j, testObj);
//             if (testObj[false]) {
//                 tempArr.push(0);
//             } else {
//                 tempArr.push(1);
//             }
//             testObj = {};
//         }

//         boolArr.push(tempArr);
//         tempArr = [];
//     }

//     return boolArr;
// }

// console.log(
//     findHighPoints([
//         [1, 2, 1, 3, 4],
//         [1, 5, 2, 2, 2],
//         [4, 5, 1, 9, 7],
//         [3, 5, 3, 7, 6],
//         [4, 3, 1, 7, 3]
//     ])
// );

// console.log(
//     findHighPoints([
//         [1, 1, 1, 1, 1],
//         [1, 2, 2, 2, 1],
//         [1, 2, 3, 1, 2],
//         [1, 2, 2, 2, 1],
//         [1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 3]
//     ])
// );

// var numIslands = function(grid) {

//     const search = (row, col, grid) => {
//         if (row < 0 || col < 0 ||
//             row > grid.length - 1 || col > grid[row].length - 1 ||
//             grid[row][col] === '0') {
//             return;
//         }

//         grid[row][col] = '0';
//         search(row - 1, col, grid);
//         search(row, col - 1, grid);
//         search(row + 1, col, grid);
//         search(row, col + 1, grid);
//     }

//     let count = 0;

//     grid.forEach((row, index) => {
//         row.forEach((value, i) => {
//             if (value === "1") {
//                 search(index, i, grid)
//                 count++
//             }
//         })
//     })
//     return count
// }
// console.log(numIslands([
//     ["1", "1", "1"],
//     ["1", "1", "0"],
//     ["1", "1", "1"],
//     ["0", "1", "0"],
//     ["1", "1", "1"]
// ]))

// console.log(numIslands([
//     ["1", "1", "1"],
//     ["0", "0", "0"],
//     ["1", "1", "1"],
//     ["0", "0", "0"],
//     ["1", "1", "1"]
// ]))

// function getBiggestRegion(arr) {
//     let maxRegion = 0;

//     function getRegionSize(arr, row, column) {
//         if (row < 0 || column < 0 || row >= arr.length || column >= arr[row].length) {
//             return 0;
//         }
//         if (arr[row][column] === 0) {
//             return 0;
//         }

//         arr[row][column] = 0;
//         let sizeIn = 1;

//         for (let r = row - 1; r <= row + 1; r++) {
//             for (let c = column - 1; c <= column + 1; c++) {
//                 if (r !== row || c !== column) {
//                     sizeIn += getRegionSize(arr, r, c);
//                 }
//             }
//         }

//         return sizeIn;
//     }

//     for (let row = 0; row < arr.length; row++) {
//         for (let column = 0; column < arr[row].length; column++) {
//             if (arr[row][column] === 1) {
//                 let size = getRegionSize(arr, row, column);
//                 maxRegion = Math.max(size, maxRegion);
//             }
//         }
//     }

//     return maxRegion;
// }

// console.log(
//     getBiggestRegion([
//         [1, 1, 1],
//         [1, 1, 0],
//         [1, 1, 1],
//         [0, 1, 0],
//         [1, 1, 1]
//     ])
// );

// console.log(
//     getBiggestRegion([
//         [1, 1, 1],
//         [0, 0, 0],
//         [1, 1, 1],
//         [0, 0, 0],
//         [1, 1, 1]
//     ])
// );

function findHighPoints(elevations) {
    let tempArr = [];
    let ansArr = [];

    function checkSurrounding(elevations, row, column) {
        if (row < 0 || column < 0 || row > elevations.length || column > elevations[row].length) {
            return null;
        }

        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = column - 1; c <= column + 1; c++) {
                if (r !== row || c !== column) {
                    if (!(r < 0 ||
                            c < 0 ||
                            r >= elevations.length ||
                            c >= elevations[row].length)) {
                        if (elevations[row][column] <= elevations[r][c]) {
                            return 0;
                        }
                    }
                }
            }
        }

        return 1;
    }

    for (let row = 0; row < elevations.length; row++) {
        for (let column = 0; column < elevations[row].length; column++) {
            let checked = checkSurrounding(elevations, row, column);
            if (checked === 1) {
                tempArr.push(1);
            } else if (checked === 0) {
                tempArr.push(0);
            }
        }

        ansArr.push(tempArr);
        tempArr = [];
    }

    return ansArr;
}

// console.log(
//     findHighPoints([
//         [1, 2, 1, 3, 4],
//         [1, 5, 2, 2, 2],
//         [4, 5, 1, 9, 7],
//         [3, 5, 3, 7, 6],
//         [4, 3, 1, 7, 3]
//     ])
// );

// console.log(
//     findHighPoints([
//         [1, 1, 1, 1, 1],
//         [1, 2, 2, 2, 1],
//         [1, 2, 3, 2, 1],
//         [1, 2, 2, 2, 1],
//         [1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 3]
//     ])
// );



function findRiskScores(elevations) {
    let traceArr = new Array(elevations.length);
    let ansArr = new Array(elevations.length);

    // Start Creating a 2D array of false and 0
    for (let i = 0; i < elevations.length; i++) {
        ansArr[i] = new Array(elevations[0].length).fill(0);
    }
    // End Creating

    // Start checking if a cell is an highpoint and return 1 if true, else false, but null if outside boundary conditions;
    function checkSurrounding(elevations, row, column) {
        // Check if boundary is exceeded
        if (
            row < 0 ||
            column < 0 ||
            row > elevations.length ||
            column > elevations[row].length
        ) {
            return null;
        }
        // Checked

        // Check if cell is an high point or not
        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = column - 1; c <= column + 1; c++) {
                if (r !== row || c !== column) {
                    if (!(r < 0 || c < 0 || r >= elevations.length || c >= elevations[row].length)) {
                        if (elevations[row][column] <= elevations[r][c]) {
                            return 0;
                        }
                    }
                }
            }
        }

        return 1;
    }
    // Function end

    // Check if neighbour cell neigbour is lesser, if yes, change the cell in traceArr to true and change ansArr to +1
    function checkMemberSurrounding(elevations, row, column, checkedArr) {
        // Check if boundary is exceeded
        if (row < 0 || column < 0 || row >= elevations.length || column >= elevations[row].length || checkedArr[row][column]) {
            return 0;
        }
        // Checked

        checkedArr[row][column] = true;
        ansArr[row][column] += 1;

        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = column - 1; c <= column + 1; c++) {
                if (r !== row || c !== column) {
                    if (!(r < 0 || c < 0 || r >= elevations.length || c >= elevations[row].length)) {
                        if (elevations[r][c] < elevations[row][column]) {
                            checkMemberSurrounding(elevations, r, c, checkedArr);
                        }
                    }
                }
            }
        }

        return 0;
    }

    for (let row = 0; row < elevations.length; row++) {
        for (let column = 0; column < elevations[row].length; column++) {
            let checked = checkSurrounding(elevations, row, column);
            if (checked === 1) {
                for (let i = 0; i < elevations.length; i++) {
                    traceArr[i] = new Array(elevations[0].length).fill(false);
                }
                checkMemberSurrounding(elevations, row, column, [...traceArr]);
            }
        }
    }

    return ansArr;
}

console.log(
    findRiskScores([
        [1, 2, 1, 3, 4],
        [1, 5, 2, 2, 2],
        [4, 5, 1, 9, 7],
        [3, 5, 3, 7, 6],
        [4, 3, 1, 7, 3]
    ])
);

console.log(
    findRiskScores([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 3, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 3]
    ])
);

function findHighPoints(elevations) {
    let tempArr = [];
    let ansArr = [];
    let traceArr = new Array(elevations.length);

    function checkMemberSurrounding(elevations, row, column, checkedArr) {
        // Check if boundary is exceeded
        if (
            row < 0 ||
            column < 0 ||
            row >= elevations.length ||
            column >= elevations[row].length || checkedArr[row][column]
        ) {
            return null;
        }
        // Checked

        checkedArr[row][column] = true

        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = column - 1; c <= column + 1; c++) {

                if (r !== row || c !== column) {
                    if (!(
                            r < 0 ||
                            c < 0 ||
                            r >= elevations.length ||
                            c >= elevations[row].length
                        )) {
                        if (elevations[row][column] < elevations[r][c]) {
                            return 0;
                        }
                        if (elevations[r][c] === elevations[row][column]) {
                            checkMemberSurrounding(elevations, r, c, checkedArr);
                        }
                    }
                }
            }
        }

        return 1;
    }

    function checkSurrounding(elevations, row, column) {
        if (
            row < 0 ||
            column < 0 ||
            row > elevations.length ||
            column > elevations[row].length
        ) {
            return null;
        }

        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = column - 1; c <= column + 1; c++) {
                if (r !== row || c !== column) {
                    if (!(
                            r < 0 ||
                            c < 0 ||
                            r >= elevations.length ||
                            c >= elevations[row].length
                        )) {
                        if (elevations[row][column] < elevations[r][c]) {
                            return 0;
                        }
                        if (elevations[r][c] === elevations[row][column]) {
                            for (let i = 0; i < elevations.length; i++) {
                                traceArr[i] = new Array(elevations[0].length).fill(false);
                            }
                            if (checkMemberSurrounding(elevations, r, c, [...traceArr]) !== 1) {
                                return 0;
                            }
                        }
                    }
                }
            }
        }

        return 1;
    }

    for (let row = 0; row < elevations.length; row++) {
        for (let column = 0; column < elevations[row].length; column++) {
            let checked = checkSurrounding(elevations, row, column);
            if (checked === 1) {
                tempArr.push(1);
            } else if (checked === 0) {
                tempArr.push(0);
            }
        }

        ansArr.push(tempArr);
        tempArr = [];
    }

    return ansArr;
}

console.log(
    findHighPoints([
        [1, 2, 1, 3, 4],
        [1, 5, 2, 2, 2],
        [4, 5, 1, 9, 7],
        [3, 5, 3, 7, 6],
        [4, 3, 1, 7, 3]
    ])
);

console.log(
    findHighPoints([
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 3, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 3]
    ])
);

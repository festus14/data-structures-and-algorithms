function findHighPoints(elevations) {
    let boolArr = [];
    let testObj = {};
    let tempArr = [];

    for (let i = 0; i < elevations.length; i++) {
        for (let j = 0; j < elevations[i].length; j++) {
            if (elevations[i - 1]) {
                if (elevations[i - 1][j - 1]) {
                    if (elevations[i - 1][j - 1] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
                if (elevations[i - 1][j + 1]) {
                    if (elevations[i - 1][j + 1] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
                if (elevations[i - 1][j]) {
                    if (elevations[i - 1][j] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
            }
            if (elevations[i + 1]) {
                if (elevations[i + 1][j - 1]) {
                    if (elevations[i + 1][j - 1] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
                if (elevations[i + 1][j + 1]) {
                    if (elevations[i + 1][j + 1] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
                if (elevations[i + 1][j]) {
                    if (elevations[i + 1][j] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
            }

            if (elevations[i][j - 1]) {
                if (elevations[i][j - 1] < elevations[i][j]) {
                    if (!testObj[true]) {
                        testObj[true] = elevations[i][j];
                    }
                } else {
                    if (!testObj[false]) {
                        testObj[false] = elevations[i][j];
                    }
                }
            }

            if (elevations[i][j + 1]) {
                if (elevations[i][j + 1] < elevations[i][j]) {
                    if (!testObj[true]) {
                        testObj[true] = elevations[i][j];
                    }
                } else {
                    if (!testObj[false]) {
                        testObj[false] = elevations[i][j];
                    }
                }
            }

            if (testObj[false]) {
                tempArr.push(0);
            } else {
                tempArr.push(1);
            }
            testObj = {};
        }

        boolArr.push(tempArr);
        tempArr = [];
    }

    return boolArr;
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
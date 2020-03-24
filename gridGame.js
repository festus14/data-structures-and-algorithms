function gridGame(grid, k, rules) {
    let tempArr = [];
    let newArr = [];

    for (let i = 0; i < grid.length; i++) {
        newArr.push([...grid[i]])
    }
    let sumArr = [];
    let count = 0;

    let ruleCount = {};
    for (let i = 0; i < rules.length; i++) {
        if (rules[i] === "alive") {
            ruleCount[i] = true;
        }
    }

    for (let w = 0; w < k; w++) {
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr[i].length; j++) {
                if (newArr[i - 1]) {
                    if (newArr[i - 1][j] === 1) {
                        count++;
                    }
                    if (newArr[i - 1][j - 1] === 1) {
                        count++;
                    }
                    if (newArr[i - 1][j + 1]) {
                        count++;
                    }
                }

                if (newArr[i + 1]) {
                    if (newArr[i + 1][j] === 1) {
                        count++;
                    }
                    if (newArr[i + 1][j - 1]) {
                        count++;
                    }
                    if (newArr[i + 1][j + 1]) {
                        count++;
                    }
                }

                if (newArr[i][j - 1] === 1) {
                    count++;
                }
                if (newArr[i][j + 1] === 1) {
                    count++;
                }

                sumArr.push(count);
                count = 0;
            }

            tempArr.push(sumArr);
            sumArr = [];
        }

        for (let i = 0; i < tempArr.length; i++) {
            for (let j = 0; j < tempArr[i].length; j++) {
                newArr[i][j] = tempArr[i][j];
            }
        }

        tempArr = [];

        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr[i].length; j++) {
                if (ruleCount[newArr[i][j]]) {
                    newArr[i][j] = 1;
                } else {
                    newArr[i][j] = 0;
                }
            }
        }
    }
    // console.log(newArr)

    return newArr;
}

console.log(
    gridGame([
        [0, 1, 0, 0],
        [0, 0, 0, 0]
    ], 1, [
        "dead",
        "alive",
        "dead",
        "dead",
        "dead",
        "dead",
        "dead",
        "dead",
        "dead",
        "dead"
    ])
);
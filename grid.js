function gridGame(grid, k, rules) {
    let newArr = [];
    let sumArr = [];
    let count = 0;

    let ruleCount = {};
    for (let i = 0; i < rules.length; i++) {
        if (rules[i] === "alive") {
            ruleCount[i] = true;
        }
    }

    for (let w = 0; w < k; w++) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i - 1]) {
                    if (grid[i - 1][j] === 1) {
                        count++;
                    }
                    if (grid[i - 1][j - 1] === 1) {
                        count++;
                    }
                    if (grid[i - 1][j + 1]) {
                        count++;
                    }
                }

                if (grid[i + 1]) {
                    if (grid[i + 1][j] === 1) {
                        count++;
                    }
                    if (grid[i + 1][j - 1]) {
                        count++;
                    }
                    if (grid[i + 1][j + 1]) {
                        count++;
                    }
                }

                if (grid[i][j - 1] === 1) {
                    count++;
                }
                if (grid[i][j + 1] === 1) {
                    count++;
                }

                sumArr.push(count);
                count = 0;
            }

            newArr.push(sumArr);
            sumArr = [];
        }

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

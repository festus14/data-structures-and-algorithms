const maxHeight = (tablePositions, tableHeights) => {
    let maxH = 0;
    for (let i = 0; i < tablePositions.length; i++) {
        if (Math.abs(tablePositions[i] - tablePositions[i + 1]) <= 1) {
            continue
        } else {
            if (Math.abs(tablePositions[i] - tablePositions[i + 1]) === 2) {
                let minH = Math.min(tableHeights[i], tableHeights[i + 1]) + 1
                maxH = Math.max(maxH, minH)
            } else if (Math.abs(tablePositions[i] - tablePositions[i + 1]) > 2) {
                let minH = Math.min(tableHeights[i], tableHeights[i + 1]) + 2
                maxH = Math.max(maxH, minH)
            }
        }
    }
    return maxH;
}

console.log(maxHeight([1, 2, 4, 7], [5, 5, 7, 11]))
console.log(maxHeight([1, 3, 7], [4, 3, 3]))
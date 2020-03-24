function rankIndex(values, rank) {
    let totalScoreArr = [];
    let sortedScoreArr = [];
    let scoresSum = 0;
    let outObj = {};
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].length; j++) {
            scoresSum = scoresSum + values[i][j];
        }
        totalScoreArr.push(scoresSum);
        scoresSum = 0;
    }

    sortedScoreArr = [...totalScoreArr];
    sortedScoreArr.sort((a, b) => b - a);
    let needed = sortedScoreArr[rank - 1];

    for (let i = 0; i < values.length; i++) {
        if (totalScoreArr[i] === needed) {
            outObj[sortedScoreArr.indexOf(needed) + 1] = totalScoreArr.indexOf(needed);
            totalScoreArr[i] = null;
            sortedScoreArr[sortedScoreArr.indexOf(needed)] = null;
        }

    }

    return (outObj[rank]);
}

// function climbingLeaderBoard(scores, alice) {
//     let ansArr = [];
//     let uniqObj = {};
//     scores.push(0);
//     scores = [...new Set(scores)]
//     for (let i = 0; i < scores.length; i++) {
//         if (!uniqObj[scores[i]]) { uniqObj[scores[i]] = i; }
//     }

//     for (let j = 0; j < alice.length; j++) {
//         for (let x = 0; x < scores.length; x++) {
//             if (alice[j] >= scores[x]) {
//                 ansArr.push(uniqObj[scores[x]] + 1);
//                 break;
//             }
//         }
//     }
//     return ansArr;
// }

function climbingLeaderBoard(scores, alice) {
    let ansArr = [];
    scores = [...new Set(scores)];
    let fakeScores = scores;
    for (let i = 0; i < alice.length; i++) {
        fakeScores.push(alice[i]);
        fakeScores.sort((a, b) => b - a);
        ansArr.push(fakeScores.indexOf(alice[i]) + 1);
        fakeScores = scores;
    }

    return ansArr;
}

console.log(climbingLeaderBoard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))
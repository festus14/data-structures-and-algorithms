// Complete the permutationEquation function below.
function permutationEquation(p) {
    let arrObj = {};
    let ansArr = [];
    for (let i = 0; i < p.length; i++) {
        arrObj[p[i]] = i + 1;
    }

    let valArr = Object.values(arrObj)
    for (let j = 0; j < p.length; j++) {
        ansArr.push(p.indexOf(valArr[j]) + 1);
    }

    return ansArr
}
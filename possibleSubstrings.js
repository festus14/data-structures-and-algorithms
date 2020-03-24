function possibleSubstrings(str) {
    let substr = ''
    let ansArr = []
    let n = 1;
    for (let i = 0; i < str.length; i++) {
        substr = substr + str[i]
        for (let j = n; j < str.length + 1; j++) {
            ansArr.push(substr);
            substr = substr + str[j]
        }
        substr = '';
        n++;
    }
    return ansArr;
}

console.log(possibleSubstrings('colour'));
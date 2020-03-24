function pickingNumbers(a) {
    // Write your code here
    let ans = 0;
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[i] - a[j] == 1 || a[i] - a[j] == 0) {
                count++;
            }
        }
        ans = Math.max(ans, count);
        count = 0;
    }
    return ans;

}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))
// Square root of a number without using method

function squareRootOfNum(n) {
    for (let i = 0; i < n + 1; i++) {
        if (n / i === i) return i;
    }
}

console.log(squareRootOfNum(1));
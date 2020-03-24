// Return nth term of a Fibonacci Series

function nthFibonacci(n) {
    let currentVal = 0;
    let prevVal = 0;
    let nextValue;
    if (n === 1) return 1;

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            nextValue = 1;
            currentVal = 1;
        } else {
            nextValue = currentVal + prevVal;
            prevVal = currentVal;
            currentVal = nextValue;
        }
    }

    return nextValue;
}

console.log(nthFibonacci(7))
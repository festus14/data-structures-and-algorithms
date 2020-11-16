const func = (num) => {
    const numStr = num + "";
    let sum = 0;
    let prod = 1;

    for (const int of numStr) {
        sum += +int;
        prod *= +int;
    }

    return prod - sum;
}

console.log(func(123456))
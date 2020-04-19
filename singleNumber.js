const singleNumber = (array) => {
    let countObj = {};
    for (let i = 0; i < array.length; i++) {
        if (!countObj[array[i]]) countObj[array[i]] = 0;
        countObj[array[i]]++;
    }

    for (let key in countObj) {
        if (countObj[key] === 1) return key;
    }
};

console.log(singleNumber([2, 2, 1]));
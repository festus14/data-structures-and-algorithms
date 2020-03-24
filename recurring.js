function recurring(hashArray) {
    let arrayObject = {};
    if (!Array.isArray(hashArray) || hashArray.length <= 1) {
        return 'Something is wrong with the input. Try with the proper input';
    } else {
        for (let i = 0; i < hashArray.length; i++) {
            if (arrayObject[hashArray[i]]) {
                return hashArray[i];
            } else if (!arrayObject[hashArray[i]]) {
                arrayObject[hashArray[i]] = true;
            } else {
                return undefined;
            }
        }
    }
}

console.log(recurring([2, 2, 3, 4, 5, 3, 2, 1, 80, 1, 3]))
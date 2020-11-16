const sumPairs = (arr) => {
    const reversedObj = {};
    let c = 0;

    for(let i = 0; i < arr.length; i++){
        let s = arr[i] + "";
        reversedObj[i] = s.length === 1 ? +s : +s.split('').reverse().join('');
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i <= j && arr[i] + reversedObj[j] === arr[j] + reversedObj[i]) c++
        }
    }

    return c;
}

console.log(sumPairs([12,1,2]))
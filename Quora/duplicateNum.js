const duplicateNum = (arr) => {
    let ans = 0;

    for(let i = 0; i < arr.length; i++){
        let c = 0;
        let map = {}

        for(let j = i; j < arr.length; j++){
            if(!map[arr[j]]) map[arr[j]] = 0;
            map[arr[j]]++;

            if(map[arr[j]] === 2) c++;
            if(c !== 0 && Object.keys(map).length === c) ans++;
            console.log(map, ans, Object.keys(map).length, c);
        }
    }

    return ans;
}

// console.log(duplicateNum([0, 0, 0]))
console.log(duplicateNum([1, 2, 1, 2]))
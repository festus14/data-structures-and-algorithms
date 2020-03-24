function firstUniqueChar(s) {
    // let ans = s.toLowerCase().split('').filter(elem => {
    //     if(s.indexOf(elem) === s.lastIndexOf(elem)){
    //         return elem;
    //     }
    // })

    // return ans[0]
    s = s.toLowerCase();
    for(let char = 0; char<s.length; char++){
        if(s.indexOf(s[char]) === s.lastIndexOf(s[char])){
            return s[char];
        }
    }
}

console.log(firstUniqueChar('racecars'))
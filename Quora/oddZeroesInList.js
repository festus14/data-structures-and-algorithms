const oddZeroesInList = (arr) => {
    const mem = {};
    let total = 0;

    const countZeroes = (nums) => {
        if(mem[nums]) return true;

        let s = nums + '';
        let c = 0;

        for(let num of s){
            if(num === '0') c++;
        }

        if(c % 2 === 1){
            mem[nums] = true;
            return true;
        }
        return false;
    }

    for(let val of arr){
        if(countZeroes(val)){
            total++;
        }
    }

    return total;
}

console.log(oddZeroesInList([5, 10, 200, 10070, 56]))
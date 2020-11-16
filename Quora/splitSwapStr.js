const func = (str, arr) => {
    const strArr = [];
    let i = 0;
    let l = 0;

    while(l < str.length){
        const sliced = str.slice(l, arr[i] + l);
        strArr.push(sliced);
        l += arr[i];
        if(l > str.length){
            l -= arr[i];
            break;
        }
        i++;
    }

    if(l < str.length) strArr.push(str.slice(l));

    for(let j = 0; j < strArr.length; j++){
        if(j % 2 !== 0){
            [strArr[j], strArr[j-1]] = [strArr[j-1], strArr[j]];
        }
    }
    return strArr.join('');
}

console.log(func('descognail', [3,2,3,1,1]))
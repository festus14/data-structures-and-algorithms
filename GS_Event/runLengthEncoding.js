function runLengthEncoding(string) {
    let ans = '';
    let count = 1;

    if(string.length < 1){
        return 'n/a';
    }
    else{
        for(let i = 0; i < string.length; i++){
            if(string[i] === string[i+1]){
                count++;
            }else{
                ans += count;
                ans += string[i];
                count = 1;
            }
        }
    }

    return ans;
}

console.log(runLengthEncoding('rrrryye'))
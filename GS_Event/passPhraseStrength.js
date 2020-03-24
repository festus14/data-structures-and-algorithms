function passPhraseStrength(passphrase){
    // if(s.length < 1){
    //     return ('n/a');
    // }else{
    //     ans = s.toLowerCase().split(' ').filter(elem => {
    //         if(s.indexOf(elem) === s.lastIndexOf(elem)){
    //             return elem;
    //         }
    //     })

    //     if(s.split(' ').length === ans.length){
    //         return ('strong')
    //     }
    //     else return ('weak')
    // }
    if(passphrase.length < 1 || passphrase === ' '){
        return ('n/a')
    }else{
        passphrase = passphrase.toLowerCase().split(' ').filter(elem => {
            if(elem !== ' '){
                return elem
            }
        })
        for(let char = 0; char<passphrase.length; char++){
            if(passphrase.indexOf(passphrase[char]) !== passphrase.lastIndexOf(passphrase[char])){
                return 'weak'
            }
        }
    }
    return 'strong'

}

console.log(passPhraseStrength('aa bb cc dd    ee'))
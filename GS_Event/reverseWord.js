function reverseWord(s){
    return (s.split(' ')
            .map(elem => elem.split('')
            .reverse()
            .join(''))
            .join(' '))
}

console.log(reverseWord('hello world'))
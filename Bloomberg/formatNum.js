const formatNum = (str) => {
    if (str.length <= 3) return str;
    let rem = str.length % 3;
    let formattedStr = str.slice(0, rem);
    let count = 3;
    for (let i = rem; i < str.length; i++) {
        if (count === 3) {
            formattedStr += i === 0 ? '' : ',';
            count = 0;
        }
        formattedStr += str[i];
        count++;
    }
    return formattedStr;
}

const formatNumTwo = (str) => {
    if (str.length <= 3) return str;
    let formattedStr = '';
    let counted = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if ((counted % 3) === 0 && i !== (str.length - 1)) formattedStr += ',';
        formattedStr += str[i];
        counted++;
    }
    return formattedStr.split('').reverse().join('');
}

console.log(formatNumTwo('12345'))
console.log(formatNumTwo('123456765342513'))
console.log(formatNumTwo('123'))

// With country type 
const formatNumWithType = (str, strType) => {
    if (str.length <= strType[0]) return str;
    let formattedStr = '';
    let n = 0;
    let counted = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (counted === strType[n]) {
            formattedStr += ',';
            n++;
        }
        formattedStr += str[i];
        counted++;
    }
    return formattedStr.split('').reverse().join('');
}

console.log(formatNumWithType('10000000', [3, 6, 9, 12, 15]))
console.log(formatNumWithType('10000000', [3, 5, 7, 9, 13]))

class FormatNum {
    constructor(str) {
        this.str = str;
    }
    stringType = [3, 6, 9, 12, 15];

    setStringType = (type) => {
        this.stringType = type;
    }

    formatStr = () => {
        if (this.str.length <= this.stringType[0]) return this.str;
        let formattedStr = '';
        let n = 0;
        let counted = 0;
        for (let i = this.str.length - 1; i >= 0; i--) {
            if (counted == this.stringType[n]) {
                formattedStr += ',';
                n++;
            }
            formattedStr += this.str[i];
            counted++;
        }
        return formattedStr.split('').reverse().join('');
    }
}

const testFormat = new FormatNum('12456');
console.log(testFormat.formatStr())


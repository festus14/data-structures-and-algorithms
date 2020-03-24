function rotateTheString(originalString, direction, amount) {
    arrString = originalString.split("");
    newArr = [...arrString];
    let newPos;

    for (let i = 0, j = 0; i < direction.length; i++, j++) {
        if (direction[i] === 0) {
            for (let k = 0; k < arrString.length; k++) {
                newPos = k - amount[j];
                if (newPos < 0) {
                    newPos += arrString.length;
                }
                newArr[newPos] = arrString[k];
            }
        } else {
            for (let k = 0; k < arrString.length; k++) {
                newPos = k + amount[j];
                if (newPos > arrString.length) {
                    newPos -= arrString.length;
                }
                newArr[newPos] = arrString[k];
            }
        }
    }

    return newArr.join("");
}

console.log(rotateTheString("hurart", [0, 1], [4, 1]));
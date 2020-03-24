function timeConversion(s) {
    /*
     * Write your code here.
     */
    let determinant = s.slice(8);
    let variable = s.slice(0, 2);
    let body = s.slice(2, 8);
    variable = parseInt(variable);

    if (determinant === 'PM') {
        if (variable < 12) {
            variable = variable + 12;
        }

    } else {
        if (variable === 12) {
            variable = 0;
        }
    }

    if (variable - 10 < 0) {
        return '0' + variable + body
    }
    return variable + body
}

console.log(timeConversion('12:40:22AM'))
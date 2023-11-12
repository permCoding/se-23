const getSum = (line) => {
    return line
        .split(' ')
        .map(x => Number(x))
        .filter(x => x%2 !=0)
        .reduce((acc, cur) => acc + cur)
}

const PI = 3.14

class MyClass {

}

const toBinary = (dec) => {
    let bin = "" 
    while (dec > 0) {
        bin = String(dec % 2) + bin
        dec = Math.floor(dec / 2)
        // dec = Number((dec / 2).toFixed(0))
    }
    return bin
}

const toBinaryRec = (dec) => {

}

const getFact = (n) => {
    if (n == 1) {
        return 1
    } // точка останова
    else {
        return n * getFact(n-1)
    }// шаг рекурсии
}

const toDecimal = (bin) => {
    let dec = 0
    // 
    return dec
}

module.exports = {
    getFact,
    toBinary,
    getSum,
    constPI: PI
} 
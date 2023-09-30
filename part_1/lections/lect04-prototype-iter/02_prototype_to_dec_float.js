const to_decimal = (binary) => {
    let decimal = 0
    for (let i = 0; i < binary.length; i++) {
        decimal += +binary[i] * 2**(binary.length-1 - i)
    }
    return decimal
}

const to_decimal_ = (binary) => {
    binary = binary
        .split('')
        .reverse()
        .join('')
    let decimal = 0
    let i = 0
    while (i < binary.length) {
        decimal += +binary[i] * 2**i
        i++
    }
    return decimal
}

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

const to_decimal__ = (binary) => {
    binary = binary.reverse()
    let decimal = 0
    let i = 0
    while (i < binary.length) {
        decimal += +binary[i] * 2**i
        i++
    }
    return decimal
}

const to_decimal___ = (binary) => {
    let p = 1, decimal = 0
    for (let elm of binary.reverse()) {
        decimal += +elm * p
        p *= 2
    }
    return decimal
}

const to_decimal____ = (binary) => {
    return binary
        .split('')
        .reverse()
        .map((x,i) => +x * 2**i)
        .reduce((a,c) => a+c, 0)
}

const to_float_decimal = (binary) => {
    // сделать в функциональном стиле
    // map, reduce
    return null
}


console.clear()

let binary = "10000100000"
console.log(to_decimal(binary))
console.log(to_decimal_(binary))
console.log(to_decimal__(binary))
console.log(to_decimal___(binary))
console.log(to_decimal____(binary))

console.log(to_float_decimal("0.11")) // 0.75

// сформулировать задачу про функцию 
// которая работает с вещественными 2 и 10
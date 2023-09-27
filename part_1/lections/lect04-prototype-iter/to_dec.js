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

let binary = "100000000011110100000000000000000111111111111111111001111" // 1*2**3 + ...
console.clear()
console.log(to_decimal(binary))

// String.prototype.reverse = function () {
//     return null
// }

// reduce

// сформулировать задачу про функцию которая работает с вещественными 2 и 10
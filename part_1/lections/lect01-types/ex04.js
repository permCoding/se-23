// MDN - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt

const log = console.log

const ex01 = () => {
    let n = 10, result

    result = n**2
    log(result)
    
    result = n**20
    log(result)

    result = n**20 + 10000 // работает но ответ неверный
    log(result)
    
    result = n**25 + 10000 // работает но ответ неверный
    log(result)
    
    result = Number.MAX_SAFE_INTEGER // статическое свойство
    log(result)
    log(2**53 - 1)
    log(Math.pow(2, 53) - 1)
}

const ex02 = () => {
    let result = Number.MAX_SAFE_INTEGER
    log(typeof result)

    result += 1
    log(result)

    let x = 1n // BigInt
    log(x, typeof x)

    x = BigInt("9007199254740991")
    x++
    log(x, typeof x)

    const maxHex = "0x1fffffffffffff"
    const maxOct = "0o377777777777777777"
    const maxBin = "0b11111111111111111111111111111111111111111111111111111"
    for (let item of [maxHex, maxOct, maxBin]) log(BigInt(item))
    log(maxBin.length-2)
}

const ex03 = () => {
    x = BigInt("9007199254740991")
    x = x + x // BigInt + BigInt
    log(x, typeof x)
    x = x * 1000000000n + 2023n
    log(x, typeof x)

    log(2n**999n)

    log(10n == 10) // true
    log(10n === 10) // false
}

const ex04 = () => {
    const arr = [9n, 99, -10n, 10, 0]
    arr.sort((a,b) => a>b? +1: -1)
    log(arr)
}

// ex01()
// ex02()
ex03()
// ex04()

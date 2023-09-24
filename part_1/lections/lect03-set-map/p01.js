const binToDec = (bin, pos=0) => {
    if (pos == bin.length) {
        return 0
    } else {
        return +(bin[pos])*2**(bin.length-1 - pos) + binToDec(bin, pos+1)
    }
}

// самостоятельно - decToBin рекурсивно

console.clear()
console.log(binToDec("11001")) // 1*2**4 + 1*2**3 +
// точка останова
// шаг рекурсии

const log = console.log

String.prototype.bin_to_dec = function () {
    let decimal = 0
    for (let smb of this) {
        decimal += Number(smb) * 2**1
    }
    return decimal
} // дописать чтобы работала

console.clear()

let binary = "11001" // 64 32 16 8 4 2 1
log(binary.bin_to_dec())

// продают 4 Тбайта HDD
// а получается меньше
// придумайте как на Node.js
// это вычислить

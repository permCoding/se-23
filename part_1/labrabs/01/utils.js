const log = console.log
const clear = console.clear

const to_bin_arr = (dec) => {
    let arr = []
    while (dec > 0) {
        arr.push(dec % 2)
        dec = Math.floor(dec/2)
    }
    return arr.reverse().join('')
}

const to_bin_str = (dec) => {
    let str = ""
    while (dec > 0) {
        str = (dec%2).toString() + str
        dec = Math.floor(dec/2)
    }
    return str
}

module.exports = {
    log,
    clear,
    to_bin_str
}

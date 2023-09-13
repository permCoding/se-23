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

const to_bin_rec = (dec) => {
    if (dec == 0) { // точка останова
        return ""
    }
    else { // шаг рекурсии
        return to_bin_rec(Math.floor(dec/2)) + (dec%2).toString()
    }
}

const to_dec = {

}

module.exports = {
    log,
    clear,
    to_bin_str,
    to_bin_rec,
    to_bin_arr,
    to_dec

}
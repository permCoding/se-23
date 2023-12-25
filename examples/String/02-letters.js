const fs = require('fs')
const log = console.log

const ex_01 = () => {
    let lines = fs
        .readFileSync('./txt.txt', {encoding: 'utf8'})
        .split(/\r?\n/)

    lines.forEach(x => log(x, x.length))

    let arr = Array.from(lines.at(-2))
    log(arr)
}

const ex_02 = () => {
    let emoji = '📝',
        charCode = emoji.charCodeAt(),
        codePoint = emoji.codePointAt()

    log(
        'charCode:', charCode,
        String.fromCharCode(charCode)   // it doesn't work
    )

    log(
        'codePoint:', codePoint,
        String.fromCodePoint(codePoint) // it works
    );
}

ex_01()

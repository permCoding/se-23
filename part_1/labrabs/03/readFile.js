const fs = require("fs")
const log = console.log

let lines = fs
    .readFileSync("./wanted_words.txt", 'utf8')
    .split('\n')

log(lines)
log(lines[0])
log(lines.at(-1))

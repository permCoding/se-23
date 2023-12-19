const log = console.log

let str = 'aaab aaac aad add aaaf'

let ptn1 = /a{2}[cd]/
let ptn2 = new RegExp('a{2}[cd]')

log(ptn1.test(str))
log(ptn2.test(str))

// for (let smb of 'cdefgh') {
//     let ptn = new RegExp(`a{2}${smb}`)
//     log(ptn.test(str))
// }

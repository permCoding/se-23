let log = console.log

console.clear()

let arr = [10,2,33,4,55,6,99]

// log(
//     arr
//         .reverse()
//         .slice(2,4)
// )
// log(arr.slice(2,))
// log(arr.slice(-3,))

let del = arr.splice(2, 3)
// log(del) // 33, 4, 55
// log(arr) // 10, 2, 6, 99

arr = [10,2,33,4,55,6,99]
arr.splice(2, 0, 12, 34, 45, 56)
log(arr)
arr = [10,2,33,4,55,666666,999999]
arr.splice(2, 3, 99, 88, 77)
log(arr)

arr = [10,4,23,5,0,0,77,100]
// log(arr.sort((a,b) => a>b? +1: -1))
log(arr.sort((a,b) => a-b))
log(arr)

log(arr.join(''))
log(arr.join('').split('0'))

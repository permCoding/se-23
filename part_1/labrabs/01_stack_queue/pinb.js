const log = console.log

let arr = [1,2,3,777,888,999,0,1,2,34]
// arr[2:4] == slice()

console.clear()
// log(arr.slice(2,-3))
// log(arr)

// let deleted = arr.splice(2, 3) // count
// log(deleted)
// log(arr)

arr.splice(2, 1, ...[-4,-5,-6])
log(arr)

arr = ['1','2','3']
log(arr)
log(arr.map(x => +x))
log(arr
    .map(x => +x)
    .filter(x => x%3)
)

let res = arr
    .reduce((acc, cur) => acc + cur) // LINQ => Agregate()
log(typeof res, res)

res = arr
    .map(x => +x)
    .reduce((acc, cur) => acc + cur**2)
log(typeof res, res)

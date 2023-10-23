const log = console.log

const arr = [3, 1, 5]
let ob = { "0": 3, "1": 1, "2": 5}

// log(arr[-1])
// log(arr[arr.length-1])
// log(arr.at(-1))

log(arr.reduce((acc, cur) => acc + cur))
log(arr.reduce((acc, cur) => acc + cur, 0))

log(arr.reduce((acc, cur) => acc + cur**2)) // 29 ?
log(arr.reduce((acc, cur) => acc + cur**2, 0)) // 35

let obj = {}
obj.id = 12
obj["name"] = "Nike"
log(obj)

let a = [3, 1, 5]
log(a.reduce((acc, cur, ind) => {
    // field = ind.toString()
    acc[ind] = cur
    return acc // забыл написать return
}, {}))

// {
//     "0": 3,

// }

/*
reduce obj  
reduce arr  
arr.find  
arr.findIndex  
*/
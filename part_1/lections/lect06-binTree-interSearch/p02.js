const log = console.log

let arr = [3,2,1]
// log(arr[arr.length-1])
// log(arr.at(-1))

log(arr.reduce((acc, cur) => acc + cur)) // Aggregate
log(arr.reduce((acc, cur) => acc + cur, 0))

log(arr.reduce((acc, cur) => acc + cur**2)) // Aggregate
log(arr.reduce((acc, cur) => acc + cur**2, 0))

log(arr.reduce((a, b) => a + String(b) + ','   , ""))

log(arr.reduce((a, b) => { if (b%2) a.push(b); return a }, []))

let obj = {
    "0": 4,
    "1": 3,
    "2": 1
}

obj.rate = 126
obj["name"] = "Nike"
log(obj)

let result = arr.reduce((acc, _, ind) => {
    i = String(ind)
    acc[i] = --ind
    return acc
}, {})

log(JSON.stringify(result, [], 4))
log(JSON.stringify(result, ["0", "2"], 4))
log(JSON.stringify(result, null, 4))

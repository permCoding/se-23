const log = console.log

let arr = [10, 20, 50, 99]

log(arr)

log(0 in arr)

log("0" in arr)

log(10 in arr)

for (key in arr) { log(key) }
for (key of arr.keys()) { log(key) }
log([...arr.keys()].join(', '))

let iter = arr.values()
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())

let pairs = arr.entries()
while (pair = pairs.next().value) {
    log(pair)
}

let obj = {
    "id": 1,
    "name": "Mike Mouse",
    "rate": 182
}
for (let attr in obj) { log(attr, obj[attr]) }
for (let key of Object.keys(obj)) { log(key, obj[key]) }

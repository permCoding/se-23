const log = console.log

let arr = [1,33,99,6]

// log(0 in arr)
// log("0" in arr)
// log(Number(33) in arr)

// for (let val in arr) {
//     log(val)
// }

// for (let val of arr) {
//     log(val)
// }

// for (let val of arr.values()) {
//     log(val)
// }

// for (let val of arr.keys()) {
//     log(val)
// }

// for (let val of arr.entries()) {
//     log(val)
// }


let obj = {
    "0": 4,
    "1": 3,
    "2": {
        "id": 0,
        "abc": "abc"
    }
}

obj.rate = 126
obj["name"] = "Nike"
log(obj)

for (let val in obj) {
    log(val)
}

for (let val in obj) {
    log(obj[val])
}

log(Object.keys(obj))

for (let key of Object.keys(obj)) {
    if (typeof(obj[key]) != "object") {
        log(key, obj[key])
    } else {
        // recusia
    }
}


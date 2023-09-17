//keys(), values(), entries(), iterator.next().value  

const log = console.log

let arr = ['11', 22, 33, 44, 55]

let iter = arr.keys()

log(iter.next().value)
iter.next()
iter.next()
log(iter.next().value)

iter = arr.values()
while (value = iter.next().value) {
    log(value, typeof value)
}

iter = arr.entries()
while (value = iter.next().value) {
    log(value, typeof value)
}
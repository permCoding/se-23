// keys(), values(), entries(), iterator.next().value  

const log = console.log

let arr = ['11', 22, true, 44, 55, [1,2,3]]

const ex01 = () => {
    let iter = arr.keys()
    log(iter)
    log(iter.next().value)
    log(iter.next().value)
    
    for (let item of arr.values()) {
        log(item)
    }
}

const ex02 = () => {
    let iter = arr.values()
    while (value = iter.next().value) {
        log(value, typeof value)
    }
    log()
    iter = arr.entries()
    while (value = iter.next().value) {
        log(value, typeof value)
    }
}

console.clear()
ex02()

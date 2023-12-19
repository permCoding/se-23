const log = console.log

const ex_01 = () => {
    const smallest = array => Math.min.apply(null, array)
    const largest = array => Math.max.apply(null, array)

    let arr = [10, 1, 32, 8]
    log(smallest(arr), largest(arr))   // 1 32
    log(Math.min(...arr), Math.max(...arr)) // 1 32
}

const ex_02 = () => {
    const func = function () { // NOT arrow function
        log(JSON.stringify(this, null, 4))
    }

    let obj = { 'id': 1, 'rate': 188 }
    func.apply(obj)
}

const ex_03 = () => {
    const func = function (a, b) { // NOT arrow function
        log(this.rate + a + b)
    }

    let obj = { 'id': 1, 'rate': 188 }
    let arr = [10, 20]
    func.apply(obj, arr)
    func.call(obj, ...arr)
    func.call(obj, 10, 20)
}

ex_03()

const log = console.log

const ex01 = () => {
    let arr = [2,3,2,6,4,5,6,6]
    let count = arr.filter(x => x===6).length
    log(`count = ${count}`)
}

const ex02 = () => {
    let arr = [2,3,2,6,4,5,6,6]
    let count = arr.reduce((acc,cur) => acc + (cur===6?1:0), 0)
    log(`count = ${count}`)
}

const ex03 = (value) => {
    Array.prototype.getCount = function (value) {
        return this.filter(x => x===value).length
    }

    let arr = [2,3,2,6,4,5,6,6]
    let count = arr.getCount(6)
    log(`count = ${count}`)
}

const ex04 = () => {
    Object.defineProperties(Array.prototype, {
        count: {
            value: function (value) {
                return this.filter(x => x===value).length;
            }
        }
    });

    let arr = [2,3,2,6,4,5,6,6]
    let count = arr.count(6)
    log(`count = ${count}`)
}

console.clear()
ex01()
ex02()
ex03()
ex04()

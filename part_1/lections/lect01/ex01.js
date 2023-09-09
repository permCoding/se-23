const log = console.log

const ex01 = () => {
    // let arr = [1,22,333,4444,55555]
    let arr = Array(5)
        .fill(0)
        .map((_,ind) => String(ind+1).repeat(ind+1))
    
    for (let elm of arr) log(elm)

    for (let i=0; i<arr.length; i++) log(arr[i])

    i = 0; while (i<arr.length) { log(arr[i]); i++}

    i = 0; do { log(arr[i]); i++ } while (i<arr.length)
}

const ex02 = () => {
    let arr = [2,3,1,0,30,4,5]

    arr.forEach((x,i) => log(`${i}\t${x}`))

    filtred = arr.filter(x => x%2 == 0)
    log(filtred)

    mapped = arr.map(x => 1000+x)
    log(mapped)

    mapped = arr.map((x,i) => { return { i, x } })
    log(mapped)

    mapped.sort((a,b) => a.x>b.x? +1: -1)
    log(mapped)

    acc = mapped.reduce((acc, cur) => acc + cur.x, 0)
    log(acc)
}

const ex03 = () => {
    let arr = [1,9,3,4,5,3]

    log(arr.includes(3))
    log(arr.indexOf(3))
    log(arr.findIndex(x => x%2==0))
    log(arr.lastIndexOf(3))

    last = arr.pop()
    log(arr, last)

    arr.push(6)
    log(arr)

    first = arr.shift()
    log(first, arr)

    arr.unshift(0)
    log(arr)

    log(arr.slice(1,))
    log(arr.slice(1,3))
    deleted = arr.splice(2,)
    log(arr, deleted)

    log(arr.reverse())
}

const ex04 = () => {
    let arr = [1,2,3,4]

    // copy = arr
    // copy = arr.slice()
    // copy = [...arr]
    // copy = arr.map(x => x)
    
    const _ = require('lodash')
    // copy = _.clone(arr) // https://docs-lodash.com/v4/clone/
    // copy = _(arr).clone()
    const R = require('rambda')
    copy = R.clone(arr) // https://examplejavascript.com/ramda/clone/

    copy[0] = 99
    log(arr, copy)
}

ex04()

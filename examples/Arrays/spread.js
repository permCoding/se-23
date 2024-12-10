const log = console.log

const a = [1,2,3], b = [3,4,5]
const c = [...a, ...b] // merge
log(c)

const d = [...c] // clone
d[0] = -666
log('c =', c)
log('d =', d)

const s = 'JavaScript'
const e = [...s] // String to Array
log('e =', e)

const f = new Set(c)
const g = [...f]  // Set to Array
log('c =', c)
log('f =', f)
log('g =', g) // без повторов

// 

function funcA() { // в стрелочной функции не работает
    let array = [...arguments]
    log('array =', array)
}

funcA(1,2,3,4,5)

// 

const funcB = (a, b, c) => { // в стрелочной функции не работает
    log(a, b, c)
}

const arr = [1,2,3,4,5]
funcB(...arr) // 1 2 3

// 

const objA = { id: 100, field: 2 }
const objB = { ...objA, len: 3 } // распакова объекта
log(objB) // { id: 100, field: 2, len: 3 }

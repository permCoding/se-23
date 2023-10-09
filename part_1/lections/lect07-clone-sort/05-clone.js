/* clone
    slice
    deepClone
    stringify -> parse 
    structureClone ES2022
    recurse
*/

const log = console.log

const ex01 = () => {
    let arr = [1, 2, 3, 4]

    copy = arr
    // copy = arr.slice()
    // copy = [...arr] // spread - поверхностное копирование
    // copy = arr.map(x => x)

    copy[0] = 99
    log(arr, copy)
}

const ex02 = () => {
    let arr = [1, 2, 3, 4]
    
    const _ = require('lodash')
    // copy = _.clone(arr) // https://docs-lodash.com/v4/clone/
    copy = _(arr).clone()

    // const R = require('rambda')
    // copy = R.clone(arr) // https://examplejavascript.com/ramda/clone/

    copy[0] = 99
    log(arr, copy)
}

const ex03 = () => {
    let arr = [1, 2, 3, 4]
    copy = JSON.parse(JSON.stringify(arr, null))
    
    copy[0] = 99
    log(arr, copy)
}

const ex04 = () => {
    let arr = [1, 2, 3, 4]
    copy = structuredClone(arr)
    
    copy[0] = 99
    log(arr, copy)
}

const ex05 = () => {
    // глубокая копия массива
    // рекурсивная функция перебирает все элементы
    // для сложных типов рекурсивно вызывает себя

    const recClone = (obj) => { 
        let newObj = []
        for (let elm of obj) { // в объекте in
            if (typeof elm == 'object') {
                newObj.push(recClone(elm))
            } else {
                newObj.push(elm) // если примитив
            }
        }
        return newObj
    }

    let a = [10,12]
    let arr = [a, [20,[21,22]], 30, 40]
    log(typeof arr)
    copy = recClone(arr)
    
    copy[0] = 99 // проверка независимости копий
    copy[1][1][1] = 666
    log(arr)
    log(copy)
}

ex05()

/*
    написать свою рекурсивную функцию
    которая будет перебирать все поля объекта
    для сложных типов будет рекурсивно делать clone
    цель: создать глубокую копию объекта
*/
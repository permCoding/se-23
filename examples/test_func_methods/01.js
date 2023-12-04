"use strict"
const { performance } = require('perf_hooks')

const get_for_i = (arr, count) => {
    let sm = 0
    var i = 0, j = 0
    for (i = 0; i < count; i++) {
        for (j = 0; j < len; j++) {
            sm += arr[j]
        }
    }
    return sm
}

const get_for_item = (arr, count) => {
    let sm = 0
    var i = 0, j = 0
    for (i = 0; i < count; i++) {
        for (j of arr) {
            sm += j
        }
    }
    return sm
}

const get_for_reduce = (arr, count) => {
    let sm = 0
    var i = 0
    for (i = 0; i < count; i++) {
        sm += arr.reduce((a,b) => a+b)
    }
    return sm
}

let len =  100 // длина массива
let arr = new Array(len).fill(0).map((e,i)=>i)
let count = 1_000_000 // кол-во циклов

let start = performance.now()
console.log(`sm = ${get_for_i(arr, count)}`)  // 5.2 | 0.6
// console.log(`sm = ${get_for_item(arr, count)}`)  // 14.1 (1_000) | 1.3 (100)
// console.log(`sm = ${get_for_reduce(arr, count)}`) // 5.3 | 0.62
let end = performance.now()
console.log((end - start)/1_000) // sek

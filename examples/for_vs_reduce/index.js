"use strict";

const check_1 = () => {
    let sm = 0;
    for (let i = 0; i < arr.length; i++) {
        sm += arr[i];
    }
    return sm;
}

const check_2 = () => {
    let sm = 0;
    arr.forEach(elm => sm += elm);
    return sm;
}

const check_3 = () => {
    let sm = arr
        .reduce((acc, elm) => (acc + elm), 0);
    return sm;
}

const getSum = (acc, elm) => acc + elm;

const check_4 = () => {
    let sm = arr.reduce(getSum, 0);
    return sm;
}

// = = = = = = = = = = 
const checkFunctions = () => {
    const functions = [check_1, check_2, check_3, check_4];

    for (let func of functions) {
        const st = performance.now();
        let res = func();
        const fin = performance.now();
        
        console.log(`${func.name}: ${(fin-st).toFixed(3)} ms`);
        // console.log(`res = ${res}`);
    }
}
// = = = = = = = = = = 

let n = 10_000_000;
let arr = Array.from({length: n}, (_, i) => i+1);

checkFunctions();

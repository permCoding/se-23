const test_1 = () => {
    let res = arr.filter(item => {
        return lst.indexOf(item) !== -1
    });
    return res;
}

const test_2 = () => {
    let hashMap = {};
    lst.forEach(item => { hashMap[item] = null });
    let res = arr.filter(item => {
        return typeof hashMap[item] !== 'undefined'
    });
    return res;
}


let count = 100_000;
let arr = new Array(count).fill(0).map((v,i) => i+1);
let lst = Array.from({length: count}, () => Math.floor(Math.random() * 2 * count));

// console.log(arr);
// console.log(lst);

const startTime = performance.now();
let res = test_1(arr); // 9 sec
// let res = test_2(arr); // 30 msec
const endTime = performance.now();
console.log(res.length);

const duration = endTime - startTime;
console.log(`Время выполнения: ${duration} миллисекунд`);

/*
var myMap = new Map();
var keyObj = {};
myMap.set(keyObj, "value");
myMap.get(keyObj);

for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
*/
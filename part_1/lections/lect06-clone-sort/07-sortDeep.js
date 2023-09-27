const _ = require('lodash')
const R = require('rambda')

const comparator = (a, b, fields, directs) => {
    let dict = { 'asc': +1, 'desc': -1 };
    let d = dict[directs[0]], f = fields[0];

    // 1 точка останова - должна возвращать ответ
    if ((fields.length === 1) || (a[f] !== b[f])) {
        return d * (a[f] > b[f]? +1: -1); 
    }
    // 2 шаг рекурсии - вызов функции с оставшимися пар-ми для сортировки
    return comparator(a, b, fields.slice(1,), directs.slice(1,))
}

const orderBy = (arr, fields, directs) => {
    return arr.sort((a,b) => comparator(a,b,fields,directs))
}

let arr = require('./json/clients.json').clients; // исходный массив
let arr_s // тут будет отсортированный по параметрам массив объектов
let fields = ["gender","age","name"]
let directs = ["asc","desc","asc"]

// arr_s = orderBy(arr, ["gender","age","name"], ["asc","desc","asc"])
// arr_s = _.orderBy(arr, ["gender","age","name"], ["asc","desc","asc"])
arr_s = _(arr).orderBy(fields, directs)

arr_s.forEach(elm => console.log(elm))

// https://docs-lodash.com/v4/order-by/

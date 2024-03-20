const x = new Date('2024-03-17');
const y = new Date('2024-03-17');

console.log('x == y', x == y); // false

console.log('x === y', x === y); // false

// это разные объекты - они не равны друг другу
// можно сравнивать приведя к другому типу данных
// к строке или к числу
// вот сравнение когда приводим к количеству миллисекунд:

console.log(+x === +y); // true
console.log(Number(x) === Number(y)); // true

// или к строке:
console.log(String(x) === String(y)); // true
console.log(x.toDateString() === y.toDateString()); // true
console.log(x.toString() === y.toString()); // true

// или специальными методами
console.log(Date.valueOf(x) === Date.valueOf(y));
console.log(x.getTime() === y.getTime());

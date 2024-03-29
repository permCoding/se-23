let str = '{ "page": 2, "ab_testing": false, "appType": 1, "curr": "rub" }';

let ob = JSON.parse(str);
str = JSON.stringify(ob, null, 4);

console.log(str);
console.log(ob["page"]);
console.log(ob.page);
console.log(Object.keys(ob));

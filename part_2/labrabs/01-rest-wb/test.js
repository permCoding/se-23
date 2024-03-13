let host = "https://search.wb.ru/";
let way = "exactmatch/ru/male/v5/search";
let query = "page=1&ab_testing=false&appType=1&curr=rub&dest=12358373&query=ноутбук&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false&uclusters=1&uiv=2";

let url = `${host}${way}?${query}`;
let headers = require("./headers.json");

(async () => {
    let resp = await fetch(url, { headers });
    let json = await resp.json();
    let products = json.data.products;
    console.log(products);
})();

// (
//     () => console.log(123)
// )();

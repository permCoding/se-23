let host = "https://search.wb.ru/";
let way = "exactmatch/ru/male/v5/search";

let params = require('./params.json');
let query = jsonStr;

let url = `${host}${way}?${query}`;
let headers = require("./headers.json");

(async () => {
    let resp = await fetch(url, { headers });
    let json = await resp.json();
    let products = json.data.products;
    console.log(products);
})();

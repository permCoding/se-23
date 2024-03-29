let host = "https://search.wb.ru/";
let way = "exactmatch/ru/male/v5/search";

let headers = require("./headers.json");
let params = require('./params.json');

let query = paramsToJSONStr(); // это написать самостоятельно

let url = `${host}${way}?${query}`;

(async () => {
    let resp = await fetch(url, { headers });
    let json = await resp.json();
    let products = json.data.products;
    console.log(products);
})();

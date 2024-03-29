const request = require('sync-request');
// npm i sync-request

const get_json_from_url = (link, headers) => {
    try { // REST API - wb
        let resp = request('GET', link, { headers });
        let json = JSON.parse(resp.getBody('utf8'));
        let products = json.data.products; // выбрали только products
        console.log(JSON.stringify(products[0], null, 4));
        console.log(products.length);
    } catch (e) { 
        console.log(e);
    }
}


let host = "https://search.wb.ru/";
let rout = "exactmatch/ru/male/v5/search";

let queryStr = "page=1&ab_testing=false&appType=1&curr=rub&dest=12358373&query=коврик для мышки&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false&uclusters=1&uiv=2";

// требуется преобразовать строку запроса если там кириллица в Unicode
let query = new URLSearchParams(queryStr).toString(); // можно так - ver 1
// можно через stringify + replace - ver 2
// на этой лабе требуется через Object.keys() - ver 3

let headers = require("./headers.json");

let url = `${host}${rout}?${query}`;

get_json_from_url(url, headers);

const request = require('sync-request');
// npm i sync-request

const get_json_from_url = (link, headers) => {
    try {
        let resp = request('GET', link, { headers });
        let json = JSON.parse(resp.getBody('utf8'));
        let products = json.data.products;
        console.log(JSON.stringify(products[0], null, 4));
        console.log(products.length);
    } catch (e) { 
        console.log(e)
    }
}


let host = "https://search.wb.ru/";
let rout = "exactmatch/ru/male/v5/search";
let query = "page=1&ab_testing=false&appType=1&curr=rub&dest=12358373&query=ноутбук&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false&uclusters=1&uiv=2";

let headers = require("./headers.json");

let url = `${host}${rout}?${query}`;

get_json_from_url(url, headers);

// REST API - wb

const get_json_from_url = async (link) => {
    let resp = await fetch(link, { headers });
    let json = await resp.json();
    let products = json.data.products;
    console.log(products, products.length);
};


let host = "https://search.wb.ru/";
let rout = "exactmatch/ru/male/v5/search";
let query = "page=1&ab_testing=false&appType=1&curr=rub&dest=12358373&query=ноутбук&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false&uclusters=1&uiv=2";

let url = `${host}${rout}?${query}`;
let headers = require("./headers.json");

get_json_from_url(url);


// fetch сам преобразует кириллицу в Unicode

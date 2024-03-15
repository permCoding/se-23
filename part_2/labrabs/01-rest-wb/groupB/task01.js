let params = require('./params.json');
let headers = require('./headers.json');

let host = "https://search.wb.ru/exactmatch/ru/male/v5/search?";
let strParams = "ab_testing=false&appType=1&curr=rub&dest=12358373&page=1&query=механические клавиатуры&resultset=catalog&sort=pricedown&spp=30&suppressSpellcheck=false&uclusters=1&uiv=2";
let link = `${host}${strParams}`;

(async () => {
    let resp = await fetch(link, { headers, "method": "GET" });
    let json = await resp.json();
    let products = json.data.products;
    console.log(JSON.stringify(products, null, 4));
})();

let host = "https://search.wb.ru/exactmatch/ru/male/v4/search?";

// let params = "ab_testing=false&appType=1&curr=rub&dest=12358373&page=1&query=коврик для мышки&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false&uclusters=1&uiv=2&uv=Ky2hyaiZr7Ysny8bLImtGC2hqyIuCK78scKoDi3mIs2aASaMLD8o3i0SKt6qvqAoo3grvClAMf-tiqpoJisu2R71pB4m0KfeJbAkDTClrpYv-6sHLyaruqpWKMQvAq1dpNMylaqKpxIutq-RLAGj6S41pyAsKqnXMEag06yQLVApwCmDKMUuYLClLbsXGSqLq3SvFTBUKViwNrAvrtKv67EKsAmsZTCOMQyuE6xGqtgqW7ECrR2nKLNWFgessqjFIZGuyhg4MfksY6s3pgUsbKagMX8rgJ-prO0Zka-drTUulK7rEr6sz6hvLWIpf7IjLpYsjy9Crd6ssKc6KWwkjQ";

let params = "ab_testing=false&appType=1&curr=rub&dest=12358373&page=1&query=коврик для мышки&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false&uclusters=1&uiv=2";

let link = host + params;

let headers = require("./headers.json");

let fields = ['brand', 'colors', 'name', 'priceU', 'salePriceU', 'promoTextCard', 'volume', 'rating'];

(async () => {
    let res = await fetch(link, {"headers": headers, "body": null, "method": "GET"});
    let json = await res.json();
    let products = json.data.products;
    console.log(JSON.stringify(products.slice(0, 25), fields, 4));
})();

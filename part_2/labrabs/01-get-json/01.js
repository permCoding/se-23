let link = "https://search.wb.ru/exactmatch/ru/male/v4/search?ab_testing=false&appType=1&curr=rub&dest=12358373&page=1&query=%D0%BA%D0%BE%D0%B2%D1%80%D0%B8%D0%BA%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D1%8B%D1%88%D0%B8&resultset=catalog&sort=priceup&spp=30&suppressSpellcheck=false&uclusters=1&uiv=2&uv=Ky2hyaiZr7Ysny8bLImtGC2hqyIuCK78scKoDi3mIs2aASaMLD8o3i0SKt6qvqAoo3grvClAMf-tiqpoJisu2R71pB4m0KfeJbAkDTClrpYv-6sHLyaruqpWKMQvAq1dpNMylaqKpxIutq-RLAGj6S41pyAsKqnXMEag06yQLVApwCmDKMUuYLClLbsXGSqLq3SvFTBUKViwNrAvrtKv67EKsAmsZTCOMQyuE6xGqtgqW7ECrR2nKLNWFgessqjFIZGuyhg4MfksY6s3pgUsbKagMX8rgJ-prO0Zka-drTUulK7rEr6sz6hvLWIpf7IjLpYsjy9Crd6ssKc6KWwkjQ";

let headers = {
    "accept": "*/*",
    "accept-language": "ru,ru-RU;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDk5ODUxNTEsInZlcnNpb24iOjIsInVzZXIiOiIxMDcxNjc5NjYiLCJzaGFyZF9rZXkiOiIxNCIsImNsaWVudF9pZCI6IndiIiwic2Vzc2lvbl9pZCI6IjZhNGQyN2IwNDBkMjQ1YjA5ZDE4OWY3N2ZmMmJiYWY5IiwidXNlcl9yZWdpc3RyYXRpb25fZHQiOjE2Nzg3NzM5ODAsInZhbGlkYXRpb25fa2V5IjoiMGE5MGNiZmFkMzIyYTY0M2UyYzdhNjFmN2Q1NTU4NzQxZDUxZDM2MWI3YWNmYWIzOGIyZmZjYTNiODlkODQxZSIsInBob25lIjoicTY3cElvbjU5NUlkNUZNNVR3SzdDUT09In0.a8g-qF4RqyILTNS74lxZUaiJ4wmXmdWG8vyG-9L3obeGwjBXyTMM3kXsis_RZeYUbdHtryqNyeYQ8mZuuC2HOjVmYr2ySEfXnuglRTXEUVO4bxoQNh3kYD5auhSGCkCrNCy8BiYK_Ufbim0KhFxlysa62Z8rr-HrspmKEnWlJP1bbqvpiUzrtT3BRJTwbIhs9e2w_V_qgzqxt4_6194sziFyed2EQEe7Ijtw9fHHlfuY1R7acsoJrcn7PhqeGffQs5rHD09I4nkqcXHUsrgblD9pzX8I74Lo8SyBFlmyG9XKgQ_aimovGIRU1jsooV5ZXXUJzYNibieI-ONVzaEbFw",
    "sec-ch-ua": "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "x-queryid": "qid167595315170649963720240310041405",
    "x-userid": "107167966",
    "Referer": "https://www.wildberries.ru/catalog/0/search.aspx?page=1&sort=priceup&search=%D0%BA%D0%BE%D0%B2%D1%80%D0%B8%D0%BA+%D0%B4%D0%BB%D1%8F+%D0%BC%D1%8B%D1%88%D0%B8",
    "Referrer-Policy": "no-referrer-when-downgrade"
};

(async () => {
    let res = await fetch(link, {"headers": headers, "body": null, "method": "GET"});
    let json = await res.json();
    console.log(JSON.stringify(json, null, 4));
})();
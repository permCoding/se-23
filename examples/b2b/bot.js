let log = console.log,
    newUsers = require('./json/newUsers.json'),
    host =  'http://localhost:3000',
    headers = {'Content-Type': 'application/json;charset=utf-8'},
    routAbiturs = '/abiturs';

let get = async (link) => {
    // let resp = await fetch(link, {method: 'GET', headers: headers});
    let resp = await fetch(link);
    let json = await resp.json();
    log(JSON.stringify(json, null, 4));
};

let getSync = (link, field, limit) => {
    let request = require('sync-request');
    let req = request('GET', link);
    let json = req.getBody('utf8');
    let arr = JSON.parse(json);
    if (field != undefined) arr.sort((a,b) => a[field] > b[field]? -1: +1);
    if (limit != undefined) arr = arr.slice(0, limit);
    log(JSON.stringify(arr, null, 4));
};
    
let postPromise = (link) => {
    fetch(link, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(newUsers[0])
    })
    .then(resp => resp.json()) // resp.text()
    .then(json => log(JSON.stringify(json, null, 4)))
    .catch(() => log('ошибка ответа'))
}

let post = async (link) => {
    let resp = await fetch(link, 
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newUser)
        }
    );
    let json = await resp.json();
    log(JSON.stringify(json, null, 4));
};

let deleteById = async (link, id) => {
    let resp = await fetch(`${link}/${id}`, {method: 'DELETE'});
    let json = await resp.json();
    log(JSON.stringify(json, null, 4));
};

let url = `${host}${routAbiturs}`;

// сначала проверить в Thunder Client
// потом проверить bot.js

// get(url);
// getSync(url);
// getSync(url, 'rating');
// getSync(url, 'rating', 5);
// post(url);
// postPromise(url);
deleteById(url, 19);

const express = require('express');
const log = console.log;

const app = express();

app.use(express.urlencoded({extended: true})); // to support URL-encoded bodies

app.get('/abiturs', (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.sendFile(__dirname+`/json/abiturs.json`);
});


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    let query = req.query;
    let str = JSON.stringify(query, null, 2);
    res.send(str);
});

app.listen(3000, 'localhost', () => log(`http://localhost:3000/`));

/*
формат запроса:
    http://localhost:3000?paramName=paramValue
пример запроса:
    http://localhost:3000/?field=id&direct=asc&limit=5
*/
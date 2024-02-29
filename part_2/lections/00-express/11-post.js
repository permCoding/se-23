const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log

const { writeFileSync } = require('fs');
const decache = require('decache');

app.use((req, res, next) => {
    decache('./json/abiturs.json'); // отключаем кеширование для файла
    next();
});

app.use(express.json()); // обязательно добавить для распознавания объектов

app.get('/', (req, res) => {
    res.send('/')
});

app.get('/abiturs', (req, res) => {
    let abiturs = require('./json/abiturs.json');
    res.json(abiturs);
});

app.post('/abiturs', (req, res) => { // http://localhost:3000/abiturs
    log(req.body); // проверить через POSTMAN или Thunder Client
    res.status(201).end();
});

app.post('/abitursNew', (req, res) => { // http://localhost:3000/abiturs
    let abiturs = require('./json/abiturs.json');
    abiturs.push(req.body);
    res.json(abiturs);
});

app.post('/abitursSave', (req, res) => { // http://localhost:3000/abiturs
    let abiturs = require('./json/abiturs.json');
    abiturs.push(req.body);
    writeFileSync(
        './json/abiturs.json', 
        JSON.stringify(abiturs, null, 4), {encoding: 'utf8'}
    );
    res.json(abiturs);
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*
    {
        "id": "20",
        "lastName": "Кумова",
        "rating": "204",
        "gender": "0",
        "birthDate": "2002-05-13",
        "city": "Лысьва"
    }
*/
const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log,
    abiturs = null, // для хранения массива данных
    { writeFileSync, writeFile } = require('fs'), // для записи в json
    decache = require('decache'); // для отмены кэширования json

app.use((req, res, next) => { // middleware
    decache('./json/abiturs.json'); // отключаем кеширование для файла
    abiturs = require('./json/abiturs.json');
    next();
});

app.use(express.json()); // middleware для распознавания объектов

app.get('/', (req, res) => res.send('/ = = = = ') );

app.get('/abiturs', (req, res) => res.json(abiturs) );

app.post('/abiturs', (req, res) => { // http://localhost:3000/abiturs
    log(req.body); // проверить через POSTMAN или Thunder Client
    res.status(201).end();
});

app.post('/abitursNew', (req, res) => { // http://localhost:3000/abitursNew
    abiturs.push(req.body); // объект от клиента
    res.json(abiturs);
});

app.post('/abitursSaveSync', (req, res) => { // http://localhost:3000/abitursSaveSync
    abiturs.push(req.body);
    writeFileSync(
        './json/abiturs.json', 
        JSON.stringify(abiturs, null, 4), 
        { encoding: 'utf8' }
    );
    res.json(abiturs);
});

app.post('/abitursSave', (req, res) => { // http://localhost:3000/abitursSave
    abiturs.push(req.body);
    let filename = './json/abiturs.json';
    let jsonStr = JSON.stringify(abiturs, null, 4);
    writeFile(filename, jsonStr, 'utf8', () => res.json(abiturs));
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
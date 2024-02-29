const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000;

const { writeFileSync } = require('fs');
var abiturs = require('./json/abiturs.json');
const { log } = require('console'); // https://nodejs.org/api/console.html

// это уже middleware
app.use(express.json()); // для распознавания объектов в post put patch

app.get('/', (req, res) => res.send('/'));

app.get('/abiturs', (req, res) => res.json(abiturs) );

app.post('/abiturs', (req, res) => { // http://localhost:3000/abiturs
    let id = abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект берём из body
    res.json(abiturs);
});

app.put('/abiturs/:id', (req, res) => { // http://localhost:3000/abiturs/20
    let params = req.params, newObj = req.body;
    let id = +params.id;
    if (isNaN(id)) return res.status(400).end();
    let idUpdate = abiturs.findIndex(x => x.id == id);
    abiturs[idUpdate] = { id, ...newObj };
    res.json(abiturs);
});

app.patch('/abiturs/:id', (req, res) => { // http://localhost:3000/abiturs/20
    let params = req.params, partialObj = req.body; console.log(partialObj);
    let id = +params.id;
    if (isNaN(id)) return res.status(400).end();
    let idUpdate = abiturs.findIndex(x => x.id == id);
    
    // abiturs[idUpdate] = { ...abiturs[idUpdate], ...partialObj }; // ver1
    abiturs[idUpdate] = Object.assign(abiturs[idUpdate], partialObj) // ver2
    
    res.json(abiturs);
});

app.delete('/abiturs/:id', (req, res) => { // http://localhost:3000/abiturs/20
    let params = req.params;
    let id = +params.id;
    if (isNaN(id)) return res.status(400).end();
    let idDelete = abiturs.findIndex(x => x.id == id);
    if (idDelete === -1) return res.sendStatus(404); // .status(404).end()
    abiturs.splice(idDelete, 1);
    res.json(abiturs);
});

app.delete('/abiturs/save/:id', (req, res) => { // http://localhost:3000/abiturs/20
    let params = req.params;
    let id = +params.id;
    if (isNaN(id)) return res.status(400).end();
    let idDelete = abiturs.findIndex(x => x.id == id);
    if (idDelete === -1) return res.sendStatus(404); // .status(404).end()
    abiturs.splice(idDelete, 1);
    console.log(JSON.stringify(abiturs, null, 4));
    writeFileSync(
        './json/abiturs.json', 
        JSON.stringify(abiturs, null, 4), {encoding: 'utf8'}
    );
    res.json(abiturs);
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

/*
POST - будет добавляться как "id": "20":
{
    "lastName": "Кумова",
    "rating": "204",
    "gender": "0",
    "birthDate": "2002-05-13",
    "city": "Лысьва"
}

PUT работает как присваивание, 
то есть нужно обновлять все поля существующего объекта
кто не обновился, то потерялся
PUT - создать или заменить по id:
id == 20
{
    "lastName": "Кумова",
    "rating": "214",
    "gender": "0",
    "birthDate": "2002-05-13",
    "city": "Лысьва"
}

PATCH (заплатка) - обновит указанное поле, не теряя уже существующие поля
id == 20
{ "rating": "222" }
*/
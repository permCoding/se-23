const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    { log } = require('console'), // https://nodejs.org/api/console.html
    { writeFile } = require('fs'), // async
    decache = require('decache'), // для отмены кэширования json
    filename = './json/abiturs.json',
    abiturs = require(filename),
    idUpdate = null; // нашли индекс в массиве

// app.disable('x-powered-by'); // отключить заголовки ответа

app.use(express.json()); // для распознавания объектов в post put patch

app.use((req, res, next) => { // middleware
    decache('./json/abiturs.json'); // отключаем кеширование для файла
    abiturs = require('./json/abiturs.json');
    next();
});

const checkId = (req) => {
    // log(JSON.stringify(req.headers, null, 4)); // запраш язык страницы
    const methods = ['PUT', 'PATCH', 'DELETE']; 
    if (methods.includes(req.method)) {
        log(req.method, req.params);
        if ((req.params.id === undefined) || (isNaN(req.params.id))) { 
            res.status(400).end();
        }
        idUpdate = abiturs.findIndex(x => x.id == req.params.id);
        if (idUpdate === -1) return res.status(404).end(); // sendStatus(404)
    } 
    return true;
}

app.get(['/abiturs','/'], (req, res) => res.json(abiturs) );

// http://localhost:3000/abiturs
// http://[::1]:3000/abiturs
app.post('/abiturs', (req, res) => {
    let id = +abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект берём из body
    res.json(abiturs);
});

// http://localhost:3000/abiturs/save/
// http://[::1]:3000/abiturs/save/
app.post('/abiturs/save/', (req, res) => {
    let id = +abiturs.at(-1).id + 1;
    abiturs.push( { id, ...req.body } ); // добавляемый объект берём из body
    let jsonStr = JSON.stringify(abiturs, null, 4);
    writeFile(filename, jsonStr, 'utf8', () => res.json(abiturs));
});

app.put('/abiturs/:id', (req, res) => { // http://localhost:3000/abiturs/20
    if (checkId(req)) { abiturs[idUpdate] = req.body }
    res.json(abiturs);
});

app.patch('/abiturs/:id', (req, res) => { // http://localhost:3000/abiturs/20
    if (checkId(req)) { 
        // abiturs[idUpdate] = { ...abiturs[idUpdate], ...req.body }; // ver1
        abiturs[idUpdate] = Object.assign(abiturs[idUpdate], req.body) // ver2
    }
    res.json(abiturs);
});

app.delete('/abiturs/:id', (req, res) => { // http://localhost:3000/abiturs/20
    if (checkId(req)) { abiturs.splice(idUpdate, 1) }
    res.json(abiturs);
});

app.delete('/abiturs/save/:id', (req, res) => { // http://localhost:3000/abiturs/20
    if (checkId(req)) { abiturs.splice(idUpdate, 1) }
    let jsonStr = JSON.stringify(abiturs, null, 4);
    writeFile(filename, jsonStr, 'utf8', () => res.json(abiturs));
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
// подключение внешних зависимостей
const express = require('express');

// настройка приложения
const app = express(); // app.use(express.json());
app.use('/css', express.static('css'));
app.set('view engine', 'ejs');

let arr = require('./json/abiturs.json');
let titles = require('./json/titles.json');

app.get('/', (req, res) => {
    let model = { arr };
    res.render('index-00', model); // view - представление
});

app.get('/filter', (req, res) => {
    let { query } = req;
    let model = { arr: arr.filter(x => x.city == query.city) };
    res.render('index-00', model);
});

app.get('/fields', (req, res) => {
    let keys = req.query.keys.split(',');
    console.log(keys);
    let model = { 
        keys,
        titles: JSON.parse(JSON.stringify(titles, keys)) ,
        arr: JSON.parse(JSON.stringify(arr, keys)) 
    };
    // console.log(model);
    res.render('index-01', model);
});

app.get('/:limit', (req, res) => {
    let model = { arr: arr.slice(0, req.params.limit) };
    res.render('index-00', model);
});

app.get('/limit/:limit', (req, res) => {
    let model = { arr: arr.slice(0, req.params.limit) };
    res.render('index-00', model);
});

app.listen(3000, console.log('http://localhost:3000'));

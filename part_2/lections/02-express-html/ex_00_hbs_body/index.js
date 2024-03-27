// подключение внешних зависимостей
const express = require('express');

// настройка приложения
const app = express();

app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.set('view engine', 'hbs'); // npm i hbs
app.set('views', 'viewsHBS'); // установка пути к представлениям

const arr = require('./json/abiturs.json');

app.get('/', (req, res) => {
    res.render('index.hbs', { arr });
});

app.get('/getByCity', express.json(), (req, res) => {
    console.log(req.body, req.query);
    res.render('index.hbs', { 
        'arr': arr.filter(x => x.city == req.query.city) 
    });
});

app.listen(3000, console.log('http://localhost:3000'));

const express = require('express');
const { port, host } = require('./config.json');

const app = express(); // app.use(express.json());
app.use('/css', express.static('css'));
app.set('view engine', 'ejs');

let arr = require('./json/abiturs.json');
let titles = require('./json/titles.json');

app.get('/', (req, res) => {
    res.render('index-00', { arr });
});

app.get('/fields', (req, res) => {
    let keys = req.query.keys.split(','); console.log(keys);
    let model = { 
        keys,
        titles,
        arr: JSON.parse(JSON.stringify(arr, keys)) 
    };
    res.render('index-02', model);
});

app.listen(port, console.log(`http://${host}:${port}`));

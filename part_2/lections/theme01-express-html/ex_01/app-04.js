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

// http://localhost:3000/fields?keys=id,lastName,city,gender,rating&sortField=rating
app.get('/fields', (req, res) => {
    let keys = req.query.keys.split(','); console.log(keys);
    let sortField = req.query.sortField; console.log(sortField);
    let model = { keys, titles, arr, sortField };
    res.render('index-04', model);
});

app.listen(port, console.log(`http://${host}:${port}`));

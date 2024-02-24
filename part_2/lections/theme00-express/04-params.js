const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log

app.get('/', (req, res) => {
    res.send('/')
});

app.get('/abiturs', (req, res) => {
    let abiturs = require('./json/abiturs.json');
    res.json(abiturs);
});

app.get('/abiturs/limit/:count', (req, res) => {
    let params = req.params; // log(params);
    let { count } = params;
    let abiturs = require('./json/abiturs.json');
    res.json(abiturs.slice(0, count));
}); // http://localhost:3000/abiturs/limit/2

app.get('/abiturs/limit/:count/:gender', (req, res) => {
    let params = req.params; // log(params);
    let { count, gender } = params;
    let abiturs = require('./json/abiturs.json').filter(x => x.gender == gender);
    res.json(abiturs.slice(0, count));
}); // http://localhost:3000/abiturs/limit/2/1

app.get('/abiturs/query', (req, res) => {
    let params = req.params; log(params);
    let query = req.query; log(query);
    let { city } = query;
    let abiturs = require('./json/abiturs.json');
    res.json(abiturs.filter(x => x.city === city));
}); // http://localhost:3000/abiturs/query?city=Оса&gender=1

app.get('/error', (req, res) => {
    log('error')
    res.status(404).end()
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

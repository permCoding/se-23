const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log

app.use(express.json()); // обязательно добавить для распознавания объектов

// app.get('/', (req, res) => {
//     res.send('/')
// });

// app.get('/abiturs', (req, res) => {
//     let abiturs = require('./json/abiturs.json');
//     res.json(abiturs);
// });

// app.get('/abiturs/limit/:count', (req, res) => { // http://localhost:3000/limit/2
//     let params = req.params; // log(params);
//     let { count } = params;
//     let abiturs = require('./json/abiturs.json');
//     res.json(abiturs.slice(0, count));
// });

// app.get('/abiturs/query', (req, res) => { // http://localhost:3000/query?city=Пермь
//     let params = req.params; log(params);
//     let query = req.query; log(query);
//     // let { count } = params;
//     let abiturs = require('./json/abiturs.json');
//     res.json(abiturs);
// });

// app.get('/error', (req, res) => {
//     log('error')
//     res.status(404).end()
// });

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

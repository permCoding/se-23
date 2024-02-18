const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log

app.get('/', (req, res) => { res.send('/') });

// http://localhost:3000/abiturs
// http://localhost:3000/abiturs?fieldA=valueA
app.get('/abiturs', (req, res) => {
    let query = req.query; log(query);
    let entries = Object.entries(query); log(entries);

    let abiturs = require('./json/abiturs.json');
    
    if (entries.length < 1) {
        res.json(abiturs);
    } else {
        let key = entries[0][0], value = entries[0][1];
        res.json(abiturs.filter(x => x[key] == value));
    }
});

// http://localhost:3000/abitursMany?city=Кунгур&gender=0
// http://localhost:3000/abitursMany?city=Кунгур&gender=1&rating=196
app.get('/abitursMany', (req, res) => {
    let query = req.query; log(query);
    let pairs = Object.entries(query); log(pairs);

    let abiturs = require('./json/abiturs.json');

    if (pairs.length < 1) {
        res.json(abiturs);
    } else {
        res.json(abiturs // /abitursMany?city=Кунгур&gender=0
            .filter(x => pairs.every(pair => x[pair[0]] == pair[1]))
        );
    }
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

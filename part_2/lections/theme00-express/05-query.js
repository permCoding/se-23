const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    log = console.log

app.get('/', (req, res) => { res.send('/') });

// http://localhost:3000/abiturs
// http://localhost:3000/abiturs?city=Пермь
// http://localhost:3000/abiturs?city=Пермь&gender=1
app.get('/abiturs', (req, res) => {
    let { city, gender } = req.query; log(city, gender);
    let abiturs = require('./json/abiturs.json');

    if (!city && !gender) res.json(abiturs);
    if (!city && gender) res.json(abiturs.filter(x => x.gender == gender));
    if (city && !gender) res.json(abiturs.filter(x => x.city == city));
    if (city && gender) res.json(
        abiturs
            .filter(x => x.city == city)
            .filter(x => x.gender == gender)
    );
});

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));

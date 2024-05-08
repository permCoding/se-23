const router = require('express').Router()
const sqlite3 = require('sqlite3').verbose()

router.get('/', (req, res) => {
    const db = new sqlite3.Database('./db/abiturs.sqlite3')
    
    let querySelect = `SELECT \
        abiturs.id, abiturs.lastName, abiturs.rating, abiturs.gender, abiturs.birthDate, cities.city \
        FROM abiturs \
        INNER JOIN cities \
        ON abiturs.city = cities.id`
    
    db.all(querySelect, (err, rows) => {
        if (err) console.log(err.message);
        res.render('index', { 
            titles: global.titles, 
            arr: rows, 
            keys: Object.keys(global.titles)
        });
    })
    db.close()
});

module.exports = router

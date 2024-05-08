const router = require('express').Router()
const sqlite3 = require('sqlite3').verbose()

router.get('/', (req, res) => {
    let fill = {
        lastName: "-Фамилия-",
        rating: 200
    };
    res.render('new', { fill });
});

router.post('/', (req, res) => {
    const db = new sqlite3.Database('./db/abiturs.sqlite3')
    console.log(req.body); // to control the values

    let { lastName, rating, gender } = req.body
    let birthDate = '2004-06-20', city = 'Кунгур' // заглушка

    let queryInsert = `INSERT INTO \ 
        abiturs ("lastName", "rating", "gender", "birthDate", "city") \ 
        VALUES (?, ?, ?, ?, (select id from cities where city = ?))`

    let record = [lastName, rating, gender, birthDate, city]

    db.run(queryInsert, record, (err) => {
        if (err) console.log(err.message)
        res.redirect('/');
    })
	db.close()
});

module.exports = router;

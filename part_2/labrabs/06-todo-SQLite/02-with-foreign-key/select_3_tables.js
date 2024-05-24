const sqlite3 = require('sqlite3').verbose() // npm install --save sqlite3
const db = new sqlite3.Database('./db/abiturs_3_tables.sqlite3')

let query = `SELECT \
    abiturs.id, abiturs.lastName, abiturs.rating, abiturs.gender, abiturs.birthDate, \
    cities.city, directs.direct \
    FROM abiturs \
    INNER JOIN directs ON abiturs.direct = directs.id \
    INNER JOIN cities ON abiturs.city = cities.id; commit`

db.all(query, (err, rows) => {
    console.log(rows);
})

db.close();

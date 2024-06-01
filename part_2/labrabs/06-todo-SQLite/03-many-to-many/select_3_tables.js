const sqlite3 = require('sqlite3').verbose() // npm install --save sqlite3
const db = new sqlite3.Database('./db/abuturs_many-to-many.db')

const do_select_abiturs = () => {
    let query = `SELECT * FROM Abiturs`
    db.all(query, (err, rows) => {
        console.log(rows);
        db.close();
    })
}

const do_select = () => {
    let query = `SELECT \
        Abiturs.last_name, Directs.direct \
        FROM Abitur_Direct \
        LEFT JOIN Abiturs ON Abiturs.id=Abitur_Direct.abitur_id \
        LEFT JOIN Directs ON Directs.id=Abitur_Direct.direct_id`

    db.all(query, (err, rows) => {
        // console.log(rows);
        rows.map(row => console.log(`${row.last_name}: ${row.direct}`));
        db.close();
    })
}

const do_select_by_param = () => {
    let query = `SELECT \
        Abiturs.last_name, Abiturs.rating, Directs.direct \
        FROM Abitur_Direct \
        LEFT JOIN Abiturs ON Abiturs.id=Abitur_Direct.abitur_id \
        LEFT JOIN Directs ON Directs.id=Abitur_Direct.direct_id \
        WHERE Directs.direct="?" \ 
        SORT BY Abiturs.last_name`
    let params = ["Прикладная информатика"];
    db.all(query, params, (err, rows) => {
        console.log(rows);
        // rows.map(row => console.log(`${row.last_name}: ${row.direct}`));
        db.close();
    })
}

const do_insert = () => {
    let query = `INSERT INTO Abitur_Direct VALUES( \
        (SELECT id FROM Abiturs WHERE last_name="?"), \
        (SELECT id FROM Directs WHERE direct="?") \
    )`;

    let params = ["Кетова", 185];

    db.run(query, params, (err, rows) => {
        db.close();
    })
}

// do_select_abiturs();
// do_select();
do_select_by_param();
// do_insert();

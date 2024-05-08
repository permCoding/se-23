const sqlite3 = require('sqlite3').verbose() // npm install --save sqlite3
const db = new sqlite3.Database('./db/abiturs.sqlite3')

const createTable = () => {
	let query = 'CREATE TABLE IF NOT EXISTS "abiturs" ( \
		"id"	INTEGER, \
		"lastName"	TEXT, \
		"rating"	INTEGER, \
        "gender"	INTEGER, \
		"birthDate"	TEXT, \
        "city"	TEXT, \
		PRIMARY KEY("id" AUTOINCREMENT))'
	db.run(query)
	db.close()
}

const deleteTable = () => {
	let query = "DROP TABLE IF EXISTS abiturs"
	db.run(query)
	db.close()
}

const insertData = () => {
	const abiturs = require('./json/abiturs.json')
	let queryInsert = `INSERT INTO \ 
		abiturs ("lastName", "rating", "gender", "birthDate", "city") \ 
		VALUES (?, ?, ?, ?, ?)`

	for (var a of abiturs) {
		let record = [a.lastName, a.rating, a.gender, a.birthDate, a.city]
		db.run(queryInsert, record)
	}
	db.close()
}

// createTable()
// deleteTable()
insertData()

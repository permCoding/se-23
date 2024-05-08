const sqlite3 = require('sqlite3').verbose() // npm install --save sqlite3
const db = new sqlite3.Database('./db/abiturs.sqlite3')

const createTable = () => {
	db.get("PRAGMA foreign_keys = ON") // включить поддержку внешних ключей

	let queryCities = 'CREATE TABLE IF NOT EXISTS "cities" ( \
		"id"	INTEGER, \
		"city"	INTEGER, \
		PRIMARY KEY("id" AUTOINCREMENT))'
	db.run(queryCities)

	let queryAbiturs = 'CREATE TABLE IF NOT EXISTS "abiturs" ( \
		"id"	INTEGER, \
		"lastName"	TEXT, \
		"rating"	INTEGER, \
        "gender"	INTEGER, \
		"birthDate"	TEXT, \
        "city"	INTEGER, \
		PRIMARY KEY("id" AUTOINCREMENT), \
		FOREIGN KEY(city) REFERENCES cities(id))'
	db.run(queryAbiturs)
}

const deleteTable = () => {
	let query = "DROP TABLE IF EXISTS abiturs"
	db.run(query)
}

const insertData = () => {
	const citiesName = require('fs')
		.readFileSync('./json/cities.csv', 'utf-8')
		.split('\n')
		.map(x => x.split(',')[1]) // ver-1
	// const citiesName = require('./json/cities.json').citiesName // ver-2

	let postFix = citiesName
		.map(x => `("${x}")`)
		.join(',') // сразу много записей в один запрос
	let queryInsertCities = `INSERT INTO cities ("city") VALUES ` + postFix
	db.run(queryInsertCities)

	const abiturs = require('./json/abiturs.json')
	let queryInsert = `INSERT INTO \ 
		abiturs ("lastName", "rating", "gender", "birthDate", "city") \ 
		VALUES (?, ?, ?, ?, ?)`

	for (var a of abiturs) {

		idCity = citiesName.indexOf(a.city) + 1
		let record = [a.lastName, a.rating, a.gender, a.birthDate, idCity]
		// let record = [a.lastName, a.rating, a.gender, a.birthDate, a.city]
		db.run(queryInsert, record)
	}
}

// createTable()
// deleteTable()
insertData()

db.close()

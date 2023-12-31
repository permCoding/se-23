const sqlite3 = require('sqlite3').verbose() // npm install --save sqlite3
const db = new sqlite3.Database('./test01.sqlite3')

const getName = () => {
	let alphavit = 'abcdefghqijklmnoprstuvwxyz'
	let len = 2 + Math.floor(Math.random() * 12)
	let name = ""
	for (var i=0; i<len; i++) {
		name += alphavit[Math.floor(Math.random() * alphavit.length)]
	}
    return name
}

const getRate = (a=160, b=240) => {
	return a + Math.floor(Math.random() * ((b-a)+1))
}

const createTable = () => {
	let query = 'CREATE TABLE IF NOT EXISTS "students" ( \
		"id"	INTEGER, \
		"name"	TEXT, \
		"rate"	INTEGER, \
		PRIMARY KEY("id" AUTOINCREMENT))'
	db.run(query)
	db.close()
}

const deleteTable = () => {
	let query = "DROP TABLE IF EXISTS students"
	db.run(query)
	db.close()
}

const insertData = (count=100_000) => {
	db.serialize(function() {
		let query = 'INSERT INTO students ("name", "rate") VALUES (?, ?)'

		db.run("begin transaction")
		for (var i = 0; i < count; i++) {
			db.run(query, getName(), getRate())
			if (i%100_000==0) {
				db.run("commit")
				db.run("begin transaction")	
			}
		}
		db.run("commit")
	})
}

const createIndex = () => {
	let query = 'CREATE INDEX "index_name" ON students ("name")'
	db.run(query)
	db.close()
}

const deleteIndex = () => {
	let query = 'DROP INDEX index_name'
	db.run(query)
	db.close()
}

const select = () => {
	console.time("time")
	// let query = 'SELECT name, rate \
	// 	FROM students \
	// 	WHERE name > "mike" \
	// 	ORDER BY name ASC'
	let query = 'SELECT name, rate \
		FROM students \
		WHERE name = "py"'

	db.all(query, function (err, rows) {  
		console.log(rows.length)
		console.timeEnd("time")
	});
	db.close()
}

// createTable()
// deleteTable()
// insertData(200_000)
// createIndex()
// deleteIndex()

select()

/*

200_000 records - 3,9Mb - without index - 42ms-DBBrowser - 35ms-Node
200_000 records - 7,2Mb - with___ index - 04ms-DBBrowser - 05ms-Node

зависит от объёма, формы запроса, вида данных
*/
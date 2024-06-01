# many-to-many

> сделать связь многие-ко-многим

```
предположим абитуриент подаёт документы
на несколько специальностей
1 - Программная инженерия
2 - Прикладная информатика
3 - Информационные системы

то есть нужна сводная таблица
которая будет связывать id абитуриента и id направления, например:
Table 3 - Connection Table:
id_abiturient id_direction
1 2
1 3
2 1
3 1
3 2
3 3

Связь многие-ко-многим создается с помощью трех таблиц. Две таблицы – “источника” (Abiturients, Directions) и одна соединительная таблица. Первичный ключ соединительной таблицы – составной. Она состоит из двух полей - двух внешних ключей, которые ссылаются на первичные ключи таблиц Abiturients и Directions.
```

запрос на выборку данных:  

```SQL
SELECT Abiturs.last_name, Directs.direct_name FROM Abitur_Direct
LEFT JOIN Abiturs ON Abiturs.id=Abitur_Direct.abitur_id
LEFT JOIN Directs ON Directs.id=Abitur_Direct.direct_id;

-- COMMENT
```

запрос на добавление данных:  

```SQL
INSERT INTO Abiturs(last_name,rating,gender) VALUES("Мишкина",201,0);

-- добавить запись: Мишкина-Прикладная информатика
-- INSERT INTO Abitur_Direct VALUES(5, 2);

INSERT INTO Abitur_Direct VALUES(
    (SELECT id FROM Abiturs WHERE last_name="Мишкина"), 
    (SELECT id FROM Directs WHERE direct="Прикладная информатика")
)

```

используйте файл **generate_db.js** для создания файла базы данных и заполнения таблиц  

---  

---  

Для создания и редактирования БД SQLite можете использовать:  

- **DB Browser for SQLite** или другой аналогичный редактор  
- генерировать БД, таблицы и ключи из программы на js  
  - пример в файле **generate_db.js**  

---  

Создать таблицу с внешним ключом:  

```SQL
CREATE TABLE child (
    id           INTEGER PRIMARY KEY,
    parent_id    INTEGER,
    description  TEXT,
    FOREIGN KEY (parent_id) REFERENCES parent(id)
);
```
---  

Создать отдельно внешний ключ:  
```SQL
ALTER TABLE child 
	ADD CONSTRAINT fk_child_parent
	FOREIGN KEY (parent_id)
    REFERENCES parent(id);
```

---  

Создать индекс по полю таблицы:  

```SQL
CREATE INDEX "index_name" ON students ("name")
```

```js
const createIndex = () => {
	let query = 'CREATE INDEX "index_name" ON students ("name")'
	db.run(query)
	db.close()
}
```

---  

Удалить индекс:  

```SQL
DROP INDEX index_name
```

```js
const deleteIndex = () => {
	let query = 'DROP INDEX index_name'
	db.run(query)
	db.close()
}
```

---  

Чтобы включить поддержку внешних ключей в SQLite, нужно выполнить команду:

> PRAGMA foreign_keys = ON;

```js
db.get("PRAGMA foreign_keys = ON")
```

---  

Добавить много данных с транзакциями:  

```js
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
```

---  

Синтаксис запроса SQL для соединия трёх таблиц:  

```SQL
SELECT t1.col, t2.col, t3.col 
FROM table1 
INNER JOIN table2 ON table1.primarykey = table2.foreignkey
INNER JOIN table3 ON table2.primarykey = table3.foreignkey
```

---  


# SQLite - Синтаксис  

**Синтаксис** - набор правил в языке запросов SQLite.

___Чувствительность регистра___  
SQLite **не**чувствителен к регистру  
Есть исключения: некоторые команды, чувствительны к регистру, например, GLOB и glob имеют различное значение в операциях SQLite.  

## Комментарии  
Комментарии SQLite - это заметки, которые разработчик может добавить в свой код SQLite, чтобы повысить его читаемость.  
Комментарии SQL начинаются с двух последовательных символов «-» (ASCII 0x2d) и продолжаются до символа новой строки (ASCII 0x0a).  

```sql
-- INSERT INTO students (name, rate) VALUES ("Bro", 160 + abs(random())%80)

```

Вы также можете использовать комментарии в стиле C, которые начинаются с «/*» и расширяются до и включают следующую пару символов «*/» или до конца ввода, в зависимости от того, что наступит раньше. Комментарии в стиле C могут охватывать несколько строк.  

```sql
/* 
SELECT name, rate 
FROM students 
WHERE rate > 180
ORDER BY rate ASC
*/

```

## Операторы SQLite

Все операторы SQLite начинаются с ключевого слова:  
SELECT  
INSERT  
UPDATE  
DELETE  
ALTER  
DROP  
...  
- и заканчиваются точкой с запятой ";"  
- она нужна чтобы интерпретатор понял, что закончился оператор и далее может начаться следующий оператор  
- если оператор SQL один, то точка с запятой необязательны  

---  

### SQLite ANALYZE
```
ANALYZE;
or
ANALYZE database_name;
or
ANALYZE database_name.table_name;
```

### SQLite AND / OR
```
SELECT column1, column2....columnN
FROM table_name
WHERE CONDITION-1 {AND|OR} CONDITION-2;
```

### SQLite ALTER TABLE
```
ALTER TABLE table_name ADD COLUMN column_def...;
```

### SQLite ALTER TABLE (Rename)
```
ALTER TABLE table_name RENAME TO new_table_name;
```

### SQLite ATTACH DATABASE
```
ATTACH DATABASE 'DatabaseName' As 'Alias-Name';
```

### SQLite BEGIN TRANSACTION
```
BEGIN;
or
BEGIN EXCLUSIVE TRANSACTION;
```

### SQLite BETWEEN
```
SELECT column1, column2....columnN
FROM table_name
WHERE column_name BETWEEN val-1 AND val-2;
```

### SQLite COMMIT
```
COMMIT;
```

### SQLite CREATE INDEX
```
CREATE INDEX index_name
ON table_name ( column_name COLLATE NOCASE );
```

### SQLite CREATE UNIQUE INDEX
```
CREATE UNIQUE INDEX index_name
ON table_name ( column1, column2,...columnN);
```

### SQLite CREATE TABLE
```
CREATE TABLE table_name(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( one or more columns )
);
```

### SQLite CREATE TRIGGER
```
CREATE TRIGGER database_name.trigger_name 
BEFORE INSERT ON table_name FOR EACH ROW
BEGIN 
   stmt1; 
   stmt2;
   ....
END;
```

### SQLite CREATE VIEW
```
CREATE VIEW database_name.view_name AS
SELECT statement....;
```

### SQLite CREATE VIRTUAL TABLE
```
CREATE VIRTUAL TABLE database_name.table_name USING weblog( access.log );
or
CREATE VIRTUAL TABLE database_name.table_name USING fts3( );
```

### SQLite COUNT
```
SELECT COUNT(column_name)
FROM table_name
WHERE CONDITION;
```

### SQLite DELETE
```
DELETE FROM table_name
WHERE {CONDITION};
```

### SQLite DETACH DATABASE
```
DETACH DATABASE 'Alias-Name';
```

### SQLite DISTINCT
```
SELECT DISTINCT column1, column2....columnN
FROM table_name;
```

### SQLite DROP INDEX
```
DROP INDEX database_name.index_name;
```

### SQLite DROP TABLE
```
DROP TABLE database_name.table_name;
```

### SQLite DROP VIEW
```
DROP INDEX database_name.view_name;
```

### SQLite DROP TRIGGER
```
DROP INDEX database_name.trigger_name;
```

### SQLite EXISTS
```
SELECT column1, column2....columnN
FROM table_name
WHERE column_name EXISTS (SELECT * FROM   table_name );
```

### SQLite EXPLAIN
```
EXPLAIN INSERT statement...;
or 
EXPLAIN QUERY PLAN SELECT statement...;
```

### SQLite GLOB
```
SELECT column1, column2....columnN
FROM table_name
WHERE column_name GLOB { PATTERN };
```

### SQLite GROUP BY
```
SELECT SUM(column_name)
FROM table_name
WHERE CONDITION
GROUP BY column_name;
```

### SQLite HAVING
```
SELECT SUM(column_name)
FROM table_name
WHERE CONDITION
GROUP BY column_name
HAVING (arithematic function condition);
```

### SQLite INSERT INTO
```
INSERT INTO table_name( column1, column2....columnN)
VALUES ( value1, value2....valueN);
```

### SQLite IN
```
SELECT column1, column2....columnN
FROM table_name
WHERE column_name IN (val-1, val-2,...val-N);
```

### SQLite Like
```
SELECT column1, column2....columnN
FROM table_name
WHERE column_name LIKE { PATTERN };
```

### SQLite NOT IN
```
SELECT column1, column2....columnN
FROM table_name
WHERE column_name NOT IN (val-1, val-2,...val-N);
```

### SQLite ORDER BY
```
SELECT column1, column2....columnN
FROM table_name
WHERE CONDITION
ORDER BY column_name {ASC|DESC};
```

### SQLite PRAGMA
PRAGMA pragma_name;  
```
For example:
PRAGMA page_size;
PRAGMA cache_size = 1024;
PRAGMA table_info(table_name);
```

### SQLite RELEASE SAVEPOINT
RELEASE savepoint_name;

### SQLite REINDEX
```
REINDEX collation_name;
REINDEX database_name.index_name;
REINDEX database_name.table_name;
```

### SQLite ROLLBACK
```
ROLLBACK;
or
ROLLBACK TO SAVEPOINT savepoint_name;
```

### SQLite SAVEPOINT
```
SAVEPOINT savepoint_name;
```

### SQLite SELECT Statement
```
SELECT column1, column2....columnN
FROM table_name;
```

### SQLite UPDATE
```
UPDATE table_name
SET column1 = value1, column2 = value2....columnN=valueN
[ WHERE  CONDITION ];
```

### SQLite VACUUM
VACUUM;

### SQLite WHERE
```
SELECT column1, column2....columnN
FROM table_name
WHERE CONDITION;
```

---  


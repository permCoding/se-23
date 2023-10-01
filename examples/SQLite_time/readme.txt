sudo apt install sqlite3

---

CREATE TABLE IF NOT EXISTS "students" (
	"id"	INTEGER,
	"name"	TEXT,
	"rate"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);


create index index_rate on students (rate);
CREATE INDEX "index_name" ON students ("name");

DROP INDEX index_rate;

---

с индексом
explain select * from users where email='foo';

без индекса
explain select * from users where name='foo';

EXPLAIN SELECT name, rate FROM students
EXPLAIN QUERY PLAN SELECT name, rate FROM students
SELECT name, rate FROM students ORDER BY rate ASC

https://youtu.be/S3qsYEGE90o?si=5xVyzoxo4Oco95VG
https://phpstack.ru/sql/insert.html

INSERT INTO students VALUES ("Bro", random(10))
INSERT INTO students VALUES ("Bro", 160 + random()%80)
INSERT INTO students (name, rate) VALUES ("Bro", 160 + abs(random())%80)

---

SELECT name, rate
FROM students
WHERE rate > 230
ORDER BY rate DESC
15 msek for 1000 records without index
05 msek for 1000 records with    index

```txt
05 msek for 1000 records with    index
0	Init	0	13	0		0
1	Noop	1	4	0		0
2	OpenRead	0	2	0	3	0
3	OpenRead	2	42	0	k(2,,)	0
4	Last	2	12	1	0	0
5	Integer	230	1	0		0
6	IdxLE	2	12	1	1	0
7	DeferredSeek	2	0	0		0
8	Column	0	1	2		0
9	Column	2	0	3		0
10	ResultRow	2	2	0		0
11	Prev	2	6	0		0
12	Halt	0	0	0		0
13	Transaction	0	0	4	0	1
14	Goto	0	1	0		0
```
```txt
15 msek for 1000 records without index
0	Init	0	19	0		0
1	SorterOpen	1	4	0	k(1,-B)	0
2	OpenRead	0	2	0	3	0
3	Rewind	0	11	0		0
4	Column	0	2	1		0
5	Le	2	10	1	BINARY-8	84
6	Column	0	1	4		0
7	Column	0	2	3		0
8	MakeRecord	3	2	6		0
9	SorterInsert	1	6	3	2	0
10	Next	0	4	0		1
11	OpenPseudo	2	7	4		0
12	SorterSort	1	18	0		0
13	SorterData	1	7	2		0
14	Column	2	0	5		0
15	Column	2	1	4		0
16	ResultRow	4	2	0		0
17	SorterNext	1	13	0		0
18	Halt	0	0	0		0
19	Transaction	0	0	5	0	1
20	Integer	230	2	0		0
21	Goto	0	1	0		0
```
---

select count(*) from random_data;



without index - 1,7 Mbyte - 120 msek
with    index - 3,0 Mbyte - 040 msek

-- select count(*) from students;

-- SELECT name, rate
-- FROM students
-- WHERE rate > 230
-- ORDER BY rate DESC

-- create index index_rate on students (rate);
-- DROP INDEX index_rate;

-- CREATE INDEX "index_name" ON students ("name");
-- DROP INDEX index_name;
SELECT name, rate
FROM students
WHERE name > "Mike"
ORDER BY name ASC

sudo apt install sqlite3


create table users (name, email);
create index user_names on users (name);

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

---

select count(*) from random_data;


create table users as
with recursive tmp(id, idx, name, rate) as (
    select 1, 1, 'Mike', 201
    union all
    select
        tmp.id + 1 as id,
        abs(random() % 5) + 1 as idx,
        (select name from students where id = idx) as name,
        abs(random() % 40) + 160 as rate
    from tmp
    limit 1000
)

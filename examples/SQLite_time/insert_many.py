import sqlite3  # pip install pysqlite3
from random import choice, randint

def get_name(names):
    return choice(names)

def get_rate(a=160, b=240):
    return randint(a, b)

names = ["Andor", "Mike", "Nino", "Sandra", "Jo", "Franko", "Petro", "Olga"]
count = 90000  # amount records for insert
conn = sqlite3.connect('time.db')
cursor = conn.cursor()

cursor.execute('BEGIN TRANSACTION')

query = 'INSERT INTO students ("name", "rate") VALUES (?, ?)'
for i in range(count):
    cursor.execute(query, (f'{get_name(names)}', f'{get_rate()}'))

    if i % 10000 == 0:  # делаем сохранение на каждой 1000-ой записи
        conn.commit()
        cursor.execute('BEGIN TRANSACTION')  # начинаем следующую трансакцию

conn.commit()
cursor.close()
conn.close()

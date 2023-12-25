var log = console.log

const obj = { 'id': 100, 'md': 'oops', 'cnt': 2 }
const arr = [111, 222, 333]


for (let item of Object.keys(obj)) log(item)
for (let item of Object.values(obj)) log(item)
for (let item of Object.entries(obj)) log(item)

for (let item of Object.keys(arr)) log(item)
for (let item of Object.values(arr)) log(item)
for (let item of Object.entries(arr)) log(item)

for (let item of arr.keys()) log(item)
for (let item of arr.values()) log(item)
for (let item of arr.entries()) log(item)


var iterator = arr.entries(), item, i = 0
while (item = iterator.next().value) {
    log(++i, item)
}

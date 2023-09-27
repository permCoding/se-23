// Map – это коллекция ключ/значение, как и Object. 
// В объекте ключ - это строка, в массиве - число, 
// а в Map - ключ любого типа.

// - методы:
// new Map() – создаёт коллекцию
// map.set(key, value) – добавляет пару (по ключу key - значение value)
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key
// map.clear() – удаляет все элементы
// map.size – возвращает количество элементов

console.clear()

let st = new Map([ [1, 'one'], [true, 'true'] ])
st
    .set(5, "пять")
    .set("5", "five")
// console.log(st)

// for (let item of st) console.log(item)
// for (let item of st.entries()) console.log(item)
// for (let item of st.keys()) console.log(item)
// for (let item of st.values()) console.log(item)


// st.set("id", 1001)
// console.log(`id = ${st.get("id")}`)

let entries = Object.entries(
    {
        22: "22",
        33: "33"
    }
)
// console.log(entries)
let pair = ["999", {"abs": 1024}]
entries.push(pair)
// console.table(entries)
// console.log(entries)
let obj = Object.fromEntries(entries)
// console.log(obj)
console.log(JSON.stringify(obj,null,4))

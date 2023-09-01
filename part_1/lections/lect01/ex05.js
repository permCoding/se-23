
const ex01 = () => {
    let id1 = Symbol()
    let id2 = Symbol()
    
    console.log(id1 == id2)
    console.log(id1 === id2)    
}

const ex02 = () => {
    let id1 = Symbol('id')
    let id2 = Symbol('id')
    
    console.log(id1 == id2)
    console.log(id1 === id2)    
}

const ex03 = () => {
    let id = Symbol('id')
    
    console.log(id)
    console.log(id.toString())
    console.log(id.description)    
}

const ex04 = () => {
    const user = {
        "id": 25,
        "name": "Имя",
        "rate": 212
    }
    let id = Symbol('id')
    user[id] = 1
    console.log(user)
    console.log(JSON.stringify(user, null, 4))
    console.log(user[id])
    user[id]++
    console.log(user[id])
}

ex01()
ex02()
ex03()
ex04()

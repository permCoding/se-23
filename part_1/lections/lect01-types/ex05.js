const log = console.log

const ex01 = () => {
    let id1 = Symbol()
    let id2 = Symbol()
    log(`type of id1 = ${typeof id1}`)
    log(id1 == id2)
    log(id1 === id2)
}

const ex02 = () => {
    let id1 = Symbol('id')
    let id2 = Symbol('id')
    
    log(id1 == id2)
    log(id1 === id2)
}

const ex03 = () => {
    let id = Symbol('id')
    
    log(id)
    log(id.toString())
    log(id.description)
}

const ex04 = () => {
    const user = {
        "id": 25,
        "name": "Имя",
        "rate": 212
    }
    let id = Symbol('id')
    user[id] = 1
    log(user)
    log(JSON.stringify(user, null, 4))
    log(user[id])
    user[id]++
    log(user[id])
}

ex01()
ex02()
ex03()
ex04()

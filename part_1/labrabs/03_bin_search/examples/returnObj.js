const get = () => {
    let index = 12
    let count = 4
    // return [index, count]
    return { 
        "index": index,
        "count": count
    }
}

let obj = get()
console.log(obj)
console.log(typeof(obj))
console.log(`index = ${obj.index}, count = ${obj.count}`)

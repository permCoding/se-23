function get_flatten_array (a) {
    let res = []
    for (let elm of a) {
        if (typeof elm == "number") {
            res.push(elm)
        } else {
            res.push(...get_flatten_array(elm))
        }
    }
    return res
}

function get_flatten_array_(a) {
    const res = []
    for (let elm of a) {
        if (!Array.isArray(elm)) {
            res.push(elm)
        } else {
            res = rec.concat(get_flatten_array(elm))
        }
    }
    return res
}

console.clear()
arr = [1,2,[3,666],4,[[4,[5]],[9,8]]]
console.log(get_flatten_array(arr))

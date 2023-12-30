const isArray = Array.isArray

function* getFlat(array) {
    for (let elm of array) {
        isArray(elm)
            ? yield* getFlatten(elm) // yield* генератор вызывает генератор
            : yield elm;
    }
}

const getFlatten = arr => [...getFlat(arr)]

let arr = [1,2,3,[4,5,[6,7],8],9]
console.log(getFlatten(arr))

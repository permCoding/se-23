// опциональная цепочка
const log = console.log

let arr = [
    {
        "id": 0,
        "address": {
            "city": "Perm",
            "street": "Lenina",
            "home_numbers": [1,2,3,6,7,10,12]
        }
    },
    {
        "id": 0,
        "address": {
            "city": "Perm",
            "street": "Lenina"
        }
    }, // так рекомендовано
] 

log(arr.length)
log(arr[0])
log(arr[0].address)
log(arr[0].address.home_numbers)

log(arr[0]?.address?.home_numbers?.length)
log(arr[0].address.home_numbers.length)

log(arr[1]?.address?.home_numbers?.length) // undefined
// log(arr[1].address.home_numbers.length) // error
try {
    arr[1].address.home_numbers.length
} catch (error) {
    console.error(error.message)
}

log(arr[0]?.address?.home_numbers?.[0])
log(arr[0]?.address?.home_numbers?.[1])
log(arr[0]?.address?.home_numbers?.[20])
log(arr[1]?.address?.home_numbers?.[20])
try {
    log(arr[1]?.address?.home_numbers[20])    
} catch (error) {
    console.error(error.message)
}

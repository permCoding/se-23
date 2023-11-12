const binSearch = (arr, x) => {
    let l = 0, r = arr.length-1
    while (l <= r) {
        let m = Math.floor((l+r) / 2)
        if (x == arr[m]) return m
        if (x > arr[m]) { l = m+1 }
        if (x < arr[m]) { r = m-1 }
    }
    return -1
}


const log = console.log
const arr = [1,4,5,8,12,14,18,19]
log(binSearch(arr, 18))

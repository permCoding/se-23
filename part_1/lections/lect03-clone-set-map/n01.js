const log = console.log

const ex01 = () => {
    let arr = [1,2,3,4,5,6,7,8]

    console.clear()
    for (let i=0, k=10; i<k; ++i, --k) {
        log(arr[i])
    }

    arr.forEach((elm,ind) => log(`${ind}\t${elm}`))

    for (let elm of arr) log(elm)
}

const ex02 = () => {
    let arr = new Array(10)
        .fill(0)
        .map((_,i) => i+1)
    console.table(arr)
    log(arr
        .reduce((acc,cur) => acc + (cur%2!=0? cur: 0))
    )
    function func (acc, cur) {
        return acc + cur
    }
    log(arr.reduce(func))
}

ex02()

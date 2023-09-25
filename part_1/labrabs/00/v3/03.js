
Array.prototype.getAvrg = function () {
    let sm = this.reduce((a,b) => a+b)
    return sm / this.length
}


let arr = [0,1,2,3,4,5]
// let ddd = [6,6,6] 
console.log(arr.getAvrg())

const score  = 534
const bal = new Number(100)

const va = new String(100000)



// console.log(bal.toString().length)//3
// console.log(va.length)//6
// console.log(bal.toFixed(2)) // 100.00 -> precision value

let othervalue = 13546.547
// console.log(othervalue.toPrecision(3)) //1.35e+4
// console.log(othervalue.toPrecision(5)) //13547 

const hundredds = 1000000
// console.log(hundredds.toLocaleString('en-IN')) //10,00,000

//****************maths******************* */

console.log(Math)
console.log(Math.abs(-4)) // 4
console.log(Math.round(6.3)) //6

console.log(Math.ceil(4.3))//5
console.log(Math.floor(5.8))//5

console.log(Math.min(798,5,7,5))
console.log(Math.max(4,5,0,57))

console.log((Math.random()*10) + 1)


const min = 10
const max = 20

console.log(Math.random() * (max- min + 1))

console.log(Math.floor(Math.random() * (max- min +1))+ min)


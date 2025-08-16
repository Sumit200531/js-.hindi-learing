const score  = 534
const bal = new Number(100)

const va = new String(100000)



console.log(bal.toString().length)//3
console.log(va.length)//6
console.log(bal.toFixed(2)) // 100.00 -> precision value

//toPrecision -> precise value most before decimal values
let othervalue = 13546.547
console.log(othervalue.toPrecision(3)) //1.35e+4
console.log(othervalue.toPrecision(5)) //13547 
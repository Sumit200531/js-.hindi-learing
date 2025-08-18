//array -> JavaScript array-copy operations create shallow copies. 

// shallow copy of an object is a copy whose properties 
// share the same references (point to the same underlying 
//values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. 
// That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independen


const myar = [43,62,34,62,5,6]

// console.log(myar[3])


const n  = new Array(2,4,5,1)
// console.log(n[2])

//array methods

myar.push(55)
myar.push(57)
myar.pop()

//myar.unshift(9) // startning me push karega ->
// [  43, 62, 34, 62,
//    5,  6, 55
// ]
//myar.shift() //[ 62, 34, 62, 5, 6, 55 ]
// console.log(myar.includes(5)) // true
// console.log(myar.indexOf(5)) //4

//console.log(myar)


// const ak = myar.join()

// console.log(myar)
// [
//   43, 62, 34, 62,
//    5,  6, 55
// ]


// console.log(ak) //43,62,34,62,5,6,55

console.log(typeof ak)//string




//slice , splice 

const wow = new Array(9,7,6,4,2,1)

console.log("a ", wow)//a  [ 9, 7, 6, 4, 2, 1 ]
const ni = wow.slice(0,4)

console.log(ni)//[ 9, 7, 6, 4 ]
console.log("b " , wow)//b  [ 9, 7, 6, 4, 2, 1 ]

const w = wow.splice(0,4)
console.log("c ", wow) //c  [ 2, 1 ]
console.log(w) //[ 9, 7, 6, 4 ]


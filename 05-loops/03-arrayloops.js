//array specific loops -

//for of


const arr = [ 324,35,64,5]

for (const i of arr) {
    // console.log(i)
}



const s = "string hello"

for (const it of s) {
    //  console.log(it)
}


//Maps

const map = new Map()

map.set("in" , 32)
map.set("fra", 34)
map.set("esrdf",90)

console.log(map)




for (const [a,b] of map){
    console.log(a , "->" , b)
} 


const myob = {
    'game1' : "nsdg",
    'game2' : 'spderma'
}

// for (const [a,b] of myob) {
//     console.log(a) // object is not iterable
// }




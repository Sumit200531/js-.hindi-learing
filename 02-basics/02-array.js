const romcom = ["horiyama", "hoyuka" ,"kagyua-sama"]
const fun  = ["Aot", "demon slayer", "naruto"]

//romcom.push(fun)
// console.log(romcom)
 //   'horiyama',
 //   'hoyuka',
//   'kagyua-sama',
 //   [ 'Aot', 'demon slayer', 'naruto' ]
 // ]

// console.log(romcom[3][1])

//  const a = romcom.concat(fun)
// console.log(a)


const allnw = [...romcom, ...fun] // SPREAD
// console.log(allnw)
// [
//   'horiyama',
//   'hoyuka',
//   'kagyua-sama',
//   'Aot',
//   'demon slayer',
//   'naruto'
// ]

// const w = [24,5,3,[53,65], 4, 6, [6.8,[5, 67]]]
// const real = w.flat(Infinity)
// console.log(real)
//  ->
// [
//   24, 5,   3, 53, 65,
//    4, 6, 6.8,  5, 67
// ]

// console.log(Array.isArray(allnw)) //true
// console.log(Array.from("sumit goswami")) // [s,u.....]

// console.log(Array.from({name : "sumt"}))
// []

let c=32 ,o=35,p=64

console.log(Array.of(c,o,p)) //[ 32, 35, 64 ]

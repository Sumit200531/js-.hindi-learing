
// function first(){
// console.log("s")
// console.log("u")
// console.log("m")
// console.log("i")
// console.log("t")

const { use } = require("react");

// }

// first();
// first

function addtwo(n1, n2){
//  let b  = n1+n2;
//  return b 
//or          
       return n1+n2
}

// const a = addtwo(2,67)

// console.log(a) // undefined

// console.log(addtwo(3,31)) //34


// addtwo("3", 53) //353
// addtwo(35,"8")//358
// addtwo(55, null)



function lginuser(username= "no value"){
 if(username===undefined) //or (!undefined)
 {
   console.log("please enter the username");
   return;
 }
   return `${username} just logged in`
}

// lginuser("Wow") // no result as we just calling not printing the res

// // console.log(lginuser("sumit")) //sumit just logged in
// console.log(lginuser()) //undefined just logged in



function calculate_cart_price(num1){
   return num1;
}
console.log(calculate_cart_price(4)) //4




function calculate_cart_price_two(...vale){
   return vale;
}
console.log(calculate_cart_price_two(23,56,86,)); //[ 23, 56, 86 ]

const user  = {
     romcmo : "hyouka",
     year : 2013,
     studio : "kyoto animation"
}

function anime(anyobject){
   console.log(`the name of anime is ${anyobject.romcmo} and 
      it is produced in year ${anyobject.year} 
      also the studio name is ${anyobject.studio}`)
   }

 anime(user)

// user({
//    romcmo : "clannad",
//    year  :23,
//    studio  : "cmc"
// })



const newar = [32,445,35,342]

function returnvalue(newar){
   return newar[3]
}

console.log(returnvalue(newar))
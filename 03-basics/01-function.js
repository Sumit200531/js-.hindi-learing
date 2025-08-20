
// function first(){
// console.log("s")
// console.log("u")
// console.log("m")
// console.log("i")
// console.log("t")

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

// console.log(lginuser("sumit")) //sumit just logged in
console.log(lginuser()) //undefined just logged in



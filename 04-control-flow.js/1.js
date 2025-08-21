//if 

let userloggedin = true

if(userloggedin){
    // console.log("user is logged im")
    
}



// <, > , <= , >=,== ,!=  operators

// === -> Values ko compare karta hai without type 
// conversion. Matlab value aur type dono same hone chahiye.


// const tmep = 24
// if(tmep < 24){
//     console.log("@4")
// }
// else {
//     console.log("ea w")
// }

// const score = 23

// if(score > 20){
//     let power = "fly"
//     console.log(`the power is ${power}`)
// }

// console.log(power)

//----------------------------

//short hand notation

// const bal = 2000

// if(bal > 20) console.log("test"),
// console.log("test2") // esa nhi karna h

const bal =2344

if(bal < 500){
console.log("w")
}
else if(bal <750){
    console.log("750>")
}
else{
    console.log("more than 1200")
}


const userlogin = true
const userdebitcard = true
const loggedfrmoid = true
const loggedfrommail = false

if(userdebitcard && userloggedin){
    console.log("allowed for shopping")
}

if(loggedfrmoid || loggedfrommail){
    console.log("dam shawty ts make as")
}
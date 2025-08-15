// #primitive 

// 7 categories : String , Number , Boolean , null, undefined , Symbol,BigInt

const vale  = 232 

const scroe = 230.52

let outside = false
let outs = null
let useremail

const id =Symbol("2")
const anoteherid = Symbol("2")

//console.log(id== anoteherid) // false

//const bignumver = 345465476345345n


// reference type(non-primtive) 

// Array , Ojects, Functions

const herp = ["a", "b", "c"]; // araray - eturn type object ata h
// 





let car = { model : "size",  year : 23 , exp : "yoe2"} // return type  oject h


const myfunction = function(){ // return type function ata hoga
   // console.log("hello wrld")
}


//console.log(typeof car)


// **************************************************************

//Stack , (primitive),Heap(non-primitive)
let myname = "sumit"

let anotehrnme = myname
anotehrnme = "wowmoew"

console.log(myname)
console.log(anotehrnme)

let userone = {
    email : "mgoalfwgmail.com",
    upiw : "sumit2991p@bl"
}
let usetwo = userone

usetwo.email = "newemail.com"
usetwo.upiw  = "namdow@,fs"
console.log(userone.email)
console.log(usetwo.email)


console.log(userone.upiw)
console.log(usetwo.upiw)
 //op->newemail.com
//newemail.com
//namdow@,fs
//namdow@,fs
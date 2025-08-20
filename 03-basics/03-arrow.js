// const { use } = require("react")

// const user = {
//     username : "sfa",
//     price : 24,


//     welcomemessage : function(){
//        // console.log(`${this.username} , welcome towebsite`)
// //   console.log(this)//-> {
// //   username: 'learnig javasctiot ohayo',
// //   price: 13,
// //   welcomemessage: [Function: welcomemessage]
// // }
//     }
// }

//  user.price = 13
//  user.username = "learnig javasctiot ohayo"


// user.welcomemessage() //learnig javasctiot ohayo , welcome towebsite


// user.welcomemessage // -> no output nikala


//console.log(this) //{}
 

// -----------

// function chai(){
//     let sd = "DFsf sdf"
//     console.log(this.sd); // undefined
// }
// chai();
//-----------------or
//  const chao = function(){
//   let useme = "new aniem gregner"
//      console.log(this.useme);

//  }
//  chao()


const rdgs = () => {
    let example = "sumit this is example of arrow as we  can see we can remove the function and instead use => function by ()"
    console.log(this.example) //undefined

    console.log(example) // example wala text aayega
}
rdgs()





// () = > {}
 // arrow function


 const kj = (num1,num2) => {
    return num1 + num2//explicit return
 }
 console.log(kj(32,42));

 //or

 //implicit return
//  const addtwo = (num1,num2) => num1+num2


const addtwo  = (num1,num2) => ({user_name : "sumit"}) //{ user_name: 'sumit' }
 console.log(addtwo(3425,340))



 const arr = [24,42,45,35,3]
 
//  arr.forEach()
// Immediately Invoked Function Expression (IIFE)


// (function chai(){
//     console.log("db connected")
// })()
//we use this to avoiding global scope pollution

// chai()

 
var x =24;

// (function (){
//    x =42
//    console.log("iner" , x)

// }) ();

// console.log("outer", x)


( () =>   {
    console.log(`ksfds`);
}) ();

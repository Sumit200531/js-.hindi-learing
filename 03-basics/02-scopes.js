// var c = 313

let a=13

if(true){
let a= 12
const b= 2
// console.log(a)

}

// console.log(a)
// console.log(b)
//console.log(a)


function one(){
    const username = "sumt"

    function two(){
        const website = "sf sdfds"
          console.log(username)
    }
    // console.log(website)
    two();
}
one()



if(true){
    const  use = "sumit";
    if(use=="sumit"){
        const ew = "syoutube"
        console.log(use + ew);
    }
    // console.log(ew) //-> eror h
}
// console.log(use)// erro h



//++++++++++++++++++++++ interesting ++++++++++++++++

addone(4)

function addone(value){
    return value+1;
}

// -------------------


const addtwo = function(num){
    return num+2;
}
addtwo(42)
// we have use hoisting in here
// in addone me value pehle use kar skthe h
// in addtwo me we are storing in the value const and we cannot use before the initailaiztion

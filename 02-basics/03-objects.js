//singleton 
//object.create



//object literals


const mysymb = Symbol("key")

const jsuser  = {
    name : "sumit", 
    "example_Why_we _take_[]_for_accessing" : "not so bad",
    [mysymb] : "mykeysymbol1",
    age : 42,
    yeaar : 2442,
    model : "toyata",
    country : "japan"

};

// console.log(jsuser["name"]) // sumit
// console.log(jsuser["example_Why_we _take_[]_for_accessing"]) // not so bad

// console.log(jsuser[mysymb]) // if we are not writiting square brackets 
// // mysymb , it will act as a string not a symbol which can be a access


// jsuser.yeaar = 245
// Object.freeze(jsuser) // jsuser values cant be changed
// jsuser.yeaar =2424
// console.log(jsuser["yeaar"]) //245

jsuser.greeting = function(){
    console.log("hello js user")
}
console.log(jsuser.greeting)//[Function (anonymous)]

console.log(jsuser.greeting()) //hello js user

jsuser.greeting_with_string_interpolatiob = function(){
    console.log(`Hello js user ${this.name} and welcome to year ${this.yeaar}`)
}

console.log(jsuser.greeting_with_string_interpolatiob()) //Hello js user sumit and welcome to year 2442



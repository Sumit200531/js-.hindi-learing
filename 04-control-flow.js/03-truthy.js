
const useremail  = "sumit900@.com"

if(useremail){
    console.log("got email my guy ^-^")
}
else{
    console.log("dont got the email >_<")
}

// falsey values -> false, 0 , -0, BigInt 0n, "",null, undefined, NaN

// truthy values ->true, "0" , 'false', " ", [],{}, function() {}
//sab truthy values h upar jo likhi h vo kuch unique h knowledge kar liye


const emptyobj = {}

if(Object.keys(emptyobj).length === 0 ){
    console.log("wow")
}



//nullish coaslescing operator(??) : null undefined

let val;
val = 2??4
val2 = null??75

 console.log(val2) //75

 console.log(val) //2

 var1 = undefined??56
 console.log(var1) // 56


let ko = null ?? 312?? 35

console.log(ko)


//Ternanry operator

//condition ? true : false -> syantax


const idce = 2342

idce >= 3000 ? console.log("wow grater than 3k ^-^") : console.log("aww less <_>")



const my = [1,2,3,4]

const mydon =my.reduce(function (acculumator, currentvalue){
    console.log(`value of accumultor ${acculumator} and value of current ${currentvalue}`)

// //value of accumultor 0 and value of current 1
// // value of accumultor 1 and value of current 2
// // value of accumultor 3 and value of current 3
// // value of accumultor 6 and value of current 4
    
    
    return acculumator + currentvalue
},0)

// console.log(mydon) //10

//or

const a = my.reduce( (acc,vale) => acc+vale,0) //10


console.log(a)



const shoppingcart = [
    {
        itemname : "js-course",
        price : 232
    },
     {
        itemname : "cpp-course",
        price : 677
    },
     {
        itemname : "java-course",
        price : 97
    },
     {
        itemname : "ruby-course",
        price : 1000
    },
]

const b = shoppingcart.reduce( (accc,item)=>  accc + item.price, 10) //2016
console.log(b)
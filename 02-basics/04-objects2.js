// const tinderUser = new Object()//this is singleton object h

const tinderuser = {} //this is not

tinderuser.id = "sammtac"
tinderuser.name = "awew "
tinderuser.age = 24
tinderuser.gender = "male"


// console.log(tinderuser)

const username = {
    id :24,
    puranampta :{
        userfullname : {
            firstname : "tww",
            lastname : "fwrtwin"
        }
    }
}

            
// console.log(username.puranampta.userfullname.lastname) 
          //  lastname : "fwrtwin"


 const onj1 = {
    1 : "sd a",
    2 : "aw fa"
 }       
 const obk2 = {
    4 : "dgs ",
    5 : " df"
 }
 const obj5  = { 
    6: "wer",
    7: "werw"
 }
// const obj3 = {onj1, obk2} //{
//   onj1: { '1': 'sd a', '2': 'aw fa' },
//   obk2: { '4': 'dgs ', '5': ' df' }
//}


// const obj3 = Object.assign({},onj1,obk2,obj5) 
// {
//   '1': 'sd a',
//   '2': 'aw fa',
//   '4': 'dgs ',
//   '5': ' df',
//   '6': 'wer',
//   '7': 'werw'
// }

const onjk = {...obj5, ...obk2,...onj1} // mostly yhi use karnge 
// console.log(onjk)

 const users = [
    {
        id:1,
        age:6
    },
    {
        id:5,
        age:62
    },
    {
        id:155,
        age:6
    }
 ]

// username[1].age


// console.log(tinderuser);
// console.log(Object.keys(tinderuser))//[ 'id', 'name', 'age', 'gender' ]
// console.log(Object.values(tinderuser))//[ 'sammtac', 'awew ', 24, 'male' ]


console.log(Object.entries(tinderuser))
// [
//   [ 'id', 'sammtac' ],
//   [ 'name', 'awew ' ],
//   [ 'age', 24 ],
//   [ 'gender', 'male' ]
// ]


 console.log(tinderuser.hasOwnProperty('id')) //truef
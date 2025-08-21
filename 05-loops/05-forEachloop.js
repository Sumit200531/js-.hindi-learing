const co  = ["js","cpp","java","ruby","python"]


// co.forEach(function (item) {
//  console.log(item)
// })

// //------or-------

// co.forEach( (item) => {
//     console.log(item)
// })



function printme(w){
    console.log(w)
}

co.forEach(printme) //we are using the reernce



co.forEach( (item,index,arr) =>{
    console.log(item ,index, arr)
})
// js 0 [ 'js', 'cpp', 'java', 'ruby', 'python' ]
// cpp 1 [ 'js', 'cpp', 'java', 'ruby', 'python' ]
// java 2 [ 'js', 'cpp', 'java', 'ruby', 'python' ]
// ruby 3 [ 'js', 'cpp', 'java', 'ruby', 'python' ]
// python 4 [ 'js', 'cpp', 'java', 'ruby', 'python' ]




const neew = [
    {
        lanauagenmae : "java",
        lanaguecolor : "js"
    },
    {
        lanauagenmae : "apython",
        lanaguecolor : "ps"
    },
    {
        lanauagenmae : "cpp",
        lanaguecolor : "c+"
    },
]

neew.forEach( (item) => {
 console.log(item.lanaguecolor , " ->", item.lanauagenmae)
})
// js  -> java
// ps  -> apython
// c+  -> cpp
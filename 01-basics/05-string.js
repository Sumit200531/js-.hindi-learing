const  name = "Sumit-hccsd" 
const repo_conunt  =23

//console.log(name + repo_conunt + "value")
//very outdated instead we can use the new inject value  that is ${}

console.log(`hello my name is ${name} and my repo count
     is ${repo_conunt} thnak you for learing`)
     //string interpolation


const gamename = new String('sumitccs')

console.log(gamename[4])
console.log(gamename.__proto__)
console.log(gamename.toUpperCase())
console.log(gamename.length)
console.log(gamename.charAt(4))


console.log(gamename.indexOf('t'))


const newstring = gamename.substring(0,3)
console.log(newstring)


const antoera = gamename.slice(-4, 3)
console.log(antoera)


const newstringone = "  aed asd  "
console.log(newstringone.trim())

const wowvalue = "sumit99102%20gmail%20com"

console.log(wowvalue.replace('%20', '-')) // sumit99102-gmail%20com%20

console.log(wowvalue.includes('*')) //false (search string method)

console.log(wowvalue.split('%'))//['sumit99102', '20gmail', '20com' ]
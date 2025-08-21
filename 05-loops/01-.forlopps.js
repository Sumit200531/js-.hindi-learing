//for


let array = [ 3,5,3,6,3,2]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element ==5){
        console.log("5 is best number")
    }
    console.log(element);
}


for(let i =1;i<=10;i++){
    // console.log(`the first loop value ${i}`)
    for(let j =1;j<=10;j++){
        // console.log(`thefirst valie is ${i} and second loop value is ${j}`)
      console.log(i + "*" + j +' = ' + i*j)
    }
}

let myar = [ 2,4,5,7,4,2,6]

console.log(myar.length)
for (let index = 0; index < myar.length; index++) {
    const element = myar[index];
    console.log(element)
    
}



//break and continue

for (let index = 0; index < 20; index++) {
    if(index==6){
        console.log("detected 6")
        break;
    }
console.log(`value of is is ${index}`)    
}




for (let index = 0; index < 20; index++) {
    if(index==6){
        console.log("detected 6")
        continue;
    }
console.log(`value of is is ${index}`)    
}
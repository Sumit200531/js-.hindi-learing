const newnum = [23,42,5,6,56]

// const v = newnum.map( (num) => num +10)
// const v = newnum.map( (num) => { return num+10})





const v = newnum.map( (i) => i *10)
           .map((i) => i +1)  //[ 231, 421, 51, 61, 561 ]
           .filter((i) => i>100)//[ 231, 421, 561 ]
           
           
           console.log(v) 
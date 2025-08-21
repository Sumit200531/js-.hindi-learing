const myobj  = {
    js : " javacs",
    cp : "cpp",
    rb : "ruby",
    swift : "oython"
}



for (const key in myobj) {
        console.log(key)


        console.log(myobj[key])


        console.log(`we can use this like- ${key} and value is ${myobj[key]}`)
    }


    const b = [2,5,6,4,6,7,7]

    for (const key in b) {
      console.log(key)
//       0
// 1
// 2
// 3
// 4
// 5
// 6
            console.log(b[key])
            //2
            // ,5
            // 6,
            // 4,
            // 6,
            // 7,
            // 7

        }
    
function passCheck(params) {
    let name = params[0]
    let pass = params[1]

    let i = 2
    let inputPass
    do{
        inputPass = params[i]
        i++
    }while(inputPass != pass)

    console.log("Welcome " + name + "!");
}
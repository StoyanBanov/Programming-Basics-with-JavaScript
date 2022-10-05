function passCheck(input){
    const pass = "s3cr3t!P@ssw0rd"
    let inputPass = input[0]
    if(inputPass == pass){
        console.log("Welcome")
    }
    else{
        console.log("Wrong password!")
    }
}
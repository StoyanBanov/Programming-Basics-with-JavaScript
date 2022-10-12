function hiddenMessage(params) {
    let i = 0
    let message = ""
    let word = ""
    let foundC = false
    let foundO = false
    let foundN = false
    while(true){
        let symbol = params[i]

        if(foundC && foundO && foundN){
            message += word + " "
            word = ""
            foundC = false
            foundO = false
            foundN = false
        }

        if(symbol === "End"){
            console.log(message)
            break
        }
        i++

        if(symbol == "c" && foundC == false){
            foundC = true;
            continue
        }
        else if(symbol == "o" && foundO == false){
            foundO = true
            continue
        }
        else if(symbol == "n" && foundN == false){
            foundN = true
            continue
        }

        if((symbol.charCodeAt(0) >= 65 && symbol.charCodeAt(0) <= 90) || (symbol.charCodeAt(0) >= 97 && symbol.charCodeAt(0) <= 122)){
            word += symbol
        }
    }
}

hiddenMessage(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"])

function mostPowerfulWord(params) {
    let theMostPowerfulWordValue = 0
    let theMostPowerfulWord

    let i = 0
    while (params[i] != "End of words") {
        let word = params[i]
        i++
        let sumOfCharValues = 0
        for (let j = 0; j < word.length; j++) {
            sumOfCharValues += word.charCodeAt(j)
        }
        switch (word[0].toLocaleLowerCase()) {
            case "a" : 
            case "e" : 
            case "i" : 
            case "o" : 
            case "u" : 
            case "y" : sumOfCharValues *= word.length; break
            default : sumOfCharValues = Math.floor(sumOfCharValues /= word.length);
        }

        if(theMostPowerfulWordValue < sumOfCharValues){
            theMostPowerfulWordValue = sumOfCharValues
            theMostPowerfulWord = word 
        }
    }

    console.log(`The most powerful word is ${theMostPowerfulWord} - ${theMostPowerfulWordValue}`);
}

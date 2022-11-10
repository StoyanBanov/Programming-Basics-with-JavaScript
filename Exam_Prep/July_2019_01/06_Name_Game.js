function game(params) {
    let i = 0
    let highestPoints = 0
    let winnerName
    while (params[i] != "Stop") {
        let name = params[i]
        i++
        let points = 0
        for (let j = 0; j < name.length; j++) {
            let guessNum = Number(params[i])
            i++
            if(String(name).charCodeAt(j) == guessNum){
                points += 10
            }else{
                points += 2
            }
        }
        if(highestPoints <= points){
            highestPoints = points
            winnerName = name
        }
    }

    console.log(`The winner is ${winnerName} with ${highestPoints} points!`);
}

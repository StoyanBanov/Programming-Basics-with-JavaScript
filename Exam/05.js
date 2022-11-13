function task5(params) {
    let seaCount = Number(params[0])
    let mountainCount = Number(params[1])

    let seaPrice = 680
    let mountainPrice = 499

    let moneyTotal = 0

    let i = 2
    while (params[i] != "Stop") {
        let packetName = params[i]
        i++
        if(seaCount > 0 && packetName == "sea"){
            moneyTotal += seaPrice
            seaCount--
        }
        if(mountainCount > 0 && packetName == "mountain"){
            moneyTotal += mountainPrice
            mountainCount--
        }

        if(seaCount == 0 && mountainCount == 0){
            console.log("Good job! Everything is sold." );
            break
        }
    }
    console.log(`Profit: ${moneyTotal} leva.`);
}

task5(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])

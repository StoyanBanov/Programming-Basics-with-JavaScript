function moneySaving(params) {
    let moneyNeeded = Number(params[0])
    let moneyAvailable = Number(params[1])

    let moneyTotal = moneyAvailable
    let spendCount = 0
    let i = 2
    while (moneyTotal < moneyNeeded) {
        let action = params[i]
        let amount = Number(params[i + 1])

        switch (action) {
            case "spend": moneyTotal -= amount; spendCount++ ;break
            case "save": moneyTotal += amount; spendCount = 0
        }
        if(spendCount == 5){
            console.log("You can't save the money.");
            console.log(i / 2);
            return
        }

        if (moneyTotal < 0) { moneyTotal = 0 }

        i += 2
    }

    console.log(`You saved the money for ${(i - 2) / 2} days.`)
}
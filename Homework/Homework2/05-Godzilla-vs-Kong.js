function enoughMoney(input) {
    let budget = Number(input[0])
    let decor = budget * 0.1
    let helpers = Number(input[1])
    let helperWear = Number(input[2])
    if (helpers > 150) {
        helperWear *= 0.9
    }

    let moneyNeeded = decor + helperWear * helpers
    let result = Math.abs(budget - moneyNeeded)
    if (moneyNeeded > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${result.toFixed(2)} leva more.`)
    }
    else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`)
    }
}

enoughMoney(["9587.88", "222", "55.68"])
function profit(params) {
    let expectedProfit = Number(params[0])

    let totalMoney = 0

    let i = 1
    while (params[i] != "Party!") {
        let money = 0

        let cocktailName  = params[i]
        i++
        let cocktailsCount = Number(params[i])
        i++

        money += cocktailsCount * cocktailName.length

        if(money % 2 != 0){
            money *= 0.75
        }

        totalMoney += money

        if(totalMoney >= expectedProfit){
            break
        }
    }

    if(expectedProfit > totalMoney){
        console.log(`We need ${(expectedProfit - totalMoney).toFixed(2)} leva more.`);
    }else{
        console.log("Target acquired.");
    }

    console.log(`Club income - ${totalMoney.toFixed(2)} leva.`);
}


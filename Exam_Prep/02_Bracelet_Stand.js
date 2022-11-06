function moneyAmount(params) {
    let pocketMoney = Number(params[0])
    let dailyIncome = Number(params[1])
    let totalExpenses = Number(params[2])
    let giftPrice = Number(params[3])

    let totalMoney = (pocketMoney + dailyIncome) * 5 - totalExpenses
    if(totalMoney >= giftPrice){
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${(giftPrice - totalMoney).toFixed(2)} BGN.`);
    }
}



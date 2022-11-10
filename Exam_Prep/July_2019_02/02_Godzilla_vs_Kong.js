function expenses(params) {
    let budget = Number(params[0])
    let peopleCount = Number(params[1])
    let personOutfitPrice = Number(params[2])

    let decorPrice = budget * 0.1
    
    if(peopleCount > 150){
        personOutfitPrice *= 0.9
    }

    let totalExpenses = decorPrice + peopleCount * personOutfitPrice
    if(totalExpenses > budget){
        let neededMoney = totalExpenses - budget
        console.log("Not enough money!");
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    }else{
        let leftMoney = budget - totalExpenses
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    }
}
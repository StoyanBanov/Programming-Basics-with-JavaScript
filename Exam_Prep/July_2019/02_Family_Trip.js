function checkBudget(params) {
    let budget = Number(params[0])
    let nightsCount = Number(params[1])
    let nightPrice = Number(params[2])
    let addedExpensesPercent = Number(params[3]) / 100

    budget *= 1 - addedExpensesPercent
    
    if(nightsCount > 7){
        nightPrice *= 0.95
    }

    budget -= nightsCount * nightPrice


    if(budget >= 0){
        console.log(`Ivanovi will be left with ${budget.toFixed(2)} leva after vacation.`);
    }else{
        console.log(Math.abs(budget).toFixed(2) + " leva needed.");
    }
    
}

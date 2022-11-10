function expenses(params) {
    let rent = Number(params[0])

    let statuettesPrice = rent * 0.7
    let foodPrice = statuettesPrice * 0.85
    let soundPrice = foodPrice / 2

    let totalExpenses = rent + statuettesPrice + foodPrice + soundPrice

    console.log(totalExpenses.toFixed(2));
}
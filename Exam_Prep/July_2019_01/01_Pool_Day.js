function price(params) {
    const bedPercent = 0.75

    let peopleCount = Number(params[0])
    let entranceFee = Number(params[1])
    let bedPrice = Number(params[2])
    let umbrellaPrice = Number(params[3])

    let bedPeopleCount = peopleCount * bedPercent
    bedPeopleCount = Math.ceil(bedPeopleCount)

    let price = Math.ceil(peopleCount / 2) * umbrellaPrice
    price += bedPeopleCount * bedPrice
    price += peopleCount * entranceFee

    console.log(price.toFixed(2) + " lv.");
}

function profit(params) {
    let companyName = params[0]
    let adultTickets = Number(params[1])
    let kidTickets = Number(params[2])

    let netPriceAdult = Number(params[3])
    let serviceFee = Number(params[4])

    let profit = (netPriceAdult * adultTickets + kidTickets * netPriceAdult * 0.3 + (adultTickets + kidTickets) * serviceFee) * 0.2

    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);
}

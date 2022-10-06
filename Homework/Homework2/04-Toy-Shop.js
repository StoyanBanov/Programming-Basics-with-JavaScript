function money(input) {
    const puzzlePrice = 2.6
    const dollPrice = 3
    const bearPrice = 4.1
    const minionPrice = 8.2
    const truckPrice = 2

    let excursionPrice = Number(input[0])

    let puzzles = Number(input[1])
    let dolls = Number(input[2])
    let bears = Number(input[3])
    let minions = Number(input[4])
    let trucks = Number(input[5])

    let toyCount = puzzles + dolls + bears + minions + trucks
    let totalMoney = puzzles * puzzlePrice + dolls * dollPrice + bears * bearPrice + minions * minionPrice + trucks * truckPrice

    if (toyCount >= 50) {
        totalMoney *= 0.75
    }
    totalMoney *= 0.9

    let result = Math.abs(excursionPrice - totalMoney)

    if (totalMoney >= excursionPrice) {
        console.log(`Yes! ${result.toFixed(2)} lv left.`)
    }
    else {
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
    }
}

money(["40.8", "20", "25", "30", "50", "10"])
function costs(input) {
    const ROSE = 5
    const DAHLIA = 3.8
    const TULIP = 2.8
    const NARCISSUS = 3
    const GLADIOLUS = 2.5

    let flowerType = input[0]
    let flwrCount = Number(input[1])
    let budget = Number(input[2])

    let moneyNeeded
    switch (flowerType) {
        case "Roses": moneyNeeded = flwrCount * ROSE
            if (flwrCount > 80) { moneyNeeded *= 0.9 }
            break
        case "Dahlias": moneyNeeded = flwrCount * DAHLIA
            if (flwrCount > 90) { moneyNeeded *= 0.85 }
            break
        case "Tulips": moneyNeeded = flwrCount * TULIP
            if (flwrCount > 80) { moneyNeeded *= 0.85 }
            break
        case "Narcissus": moneyNeeded = flwrCount * NARCISSUS
        if (flwrCount < 120) { moneyNeeded *= 1.15 }
            break
        case "Gladiolus": moneyNeeded = flwrCount * GLADIOLUS
        if (flwrCount < 80) { moneyNeeded *= 1.2 }
            break
    }

    let resultingAmount = Math.abs(moneyNeeded - budget)
    if (moneyNeeded <= budget) {
        console.log(`Hey, you have a great garden with ${flwrCount} ${flowerType} and ${resultingAmount.toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${resultingAmount.toFixed(2)} leva more.`);
    }
}
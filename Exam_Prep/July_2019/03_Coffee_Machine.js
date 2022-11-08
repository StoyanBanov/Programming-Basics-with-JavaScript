function price(params) {
    let beveridge = params[0]
    let sugar = params[1]
    let count = Number(params[2])

    let finalPrice

    switch (beveridge) {
        case "Espresso":
            switch (sugar) {
                case "Without": finalPrice = 0.9; break
                case "Normal": finalPrice = 1; break
                case "Extra": finalPrice = 1.2
            }
            break
        case "Cappuccino":
            switch (sugar) {
                case "Without": finalPrice = 1; break
                case "Normal": finalPrice = 1.2; break
                case "Extra": finalPrice = 1.6
            }
            break
        case "Tea":
            switch (sugar) {
                case "Without": finalPrice = 0.5; break
                case "Normal": finalPrice = 0.6; break
                case "Extra": finalPrice = 0.7
            }
    }

    finalPrice *= count

    if(sugar == "Without"){finalPrice *= 0.65}
    if(beveridge == "Espresso" && count >= 5){finalPrice *= 0.75}
    if(finalPrice > 15){finalPrice *= 0.8}

    console.log(`You bought ${count} cups of ${beveridge} for ${finalPrice.toFixed(2)} lv.`);

}

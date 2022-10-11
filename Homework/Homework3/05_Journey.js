function journey(params) {
    let budget = Number(params[0])
    let season = params[1]

    let price
    let place
    if (budget <= 100) {
        place = "Bulgaria"
        switch (season) {
            case "summer": price = budget * 0.3; break
            case "winter": price = budget * 0.7
        }
    }
    else if (budget <= 1000) {
        place = "Balkans"
        switch (season) {
            case "summer": price = budget * 0.4; break
            case "winter": price = budget * 0.8
        }
    } else {
        place = "Europe"
        price = budget * 0.9
    }

    let type
    if (season == "summer" && place != "Europe") {
        type = "Camp"
    } else {
        type = "Hotel"
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${type} - ${(price).toFixed(2)}`);
}

journey(["50", "summer"])
function price(input) {
    let product = input[0]
    let town = input[1]
    let amount = Number(input[2])

    let price = amount
    switch (product) {
        case "coffee":
            switch (town) {
                case "Sofia":
                    price *= 0.5
                    break
                case "Plovdiv":
                    price *= 0.4
                    break
                case "Varna":
                    price *= 0.45
            }
            break
        case "water":
            switch (town) {
                case "Sofia":
                    price *= 0.8
                    break
                case "Plovdiv":
                case "Varna":
                    price *= 0.7
            }
            break
        case "beer":
            switch (town) {
                case "Sofia":
                    price *= 1.2
                    break
                case "Plovdiv":
                    price *= 1.15
                    break
                case "Varna":
                    price *= 1.1
            }
            break
        case "sweets":
            switch (town) {
                case "Sofia":
                    price *= 1.45
                    break
                case "Plovdiv":
                    price *= 1.30
                    break
                case "Varna":
                    price *= 1.35
            }
            break
        case "peanuts":
            switch (town) {
                case "Sofia":
                    price *= 1.60
                    break
                case "Plovdiv":
                    price *= 1.50
                    break
                case "Varna":
                    price *= 1.55
            }
    }
    console.log(price)
}
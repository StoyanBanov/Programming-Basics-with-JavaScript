function price(params) {
    let fruit = params[0]
    let day = params[1]
    let amount = Number(params[2])

    let isWorkday
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            isWorkday = true
            break
        case "Saturday":
        case "Sunday":
            isWorkday = false
            break
        default:
            console.log("error")
            return
    }

    let fruitPrice = 0
    switch (fruit) {
        case "banana":
            if (isWorkday) { fruitPrice = 2.5 }
            else { fruitPrice = 2.7 }
            break
        case "apple":
            if (isWorkday) { fruitPrice = 1.2 }
            else { fruitPrice = 1.25 }
            break
        case "orange":
            if (isWorkday) { fruitPrice = 0.85 }
            else { fruitPrice = 0.9 }
            break
        case "grapefruit":
            if (isWorkday) { fruitPrice = 1.45 }
            else { fruitPrice = 1.6 }
            break
        case "kiwi":
            if (isWorkday) { fruitPrice = 2.7 }
            else { fruitPrice = 3 }
            break
        case "pineapple":
            if (isWorkday) { fruitPrice = 5.5 }
            else { fruitPrice = 5.6 }
            break
        case "grapes":
            if (isWorkday) { fruitPrice = 3.85 }
            else { fruitPrice = 4.2 }
            break
        default:
            console.log("error")
            return
    }

    let finalPrice = fruitPrice * amount
    console.log(finalPrice.toFixed(2))
}
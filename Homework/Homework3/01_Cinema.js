function money(input) {
    const PREMIERE = 12
    const NORMAL = 7.5
    const DISCOUNT = 5

    let projection = input[0]
    let r = Number(input[1])
    let c = Number(input[2])

    let totalMoney
    switch (projection) {
        case "Premiere":
            totalMoney = r * c * PREMIERE
            break;
        case "Normal":
            totalMoney = r * c * NORMAL
            break;
        case "Discount":
            totalMoney = r * c * DISCOUNT
            break;
    }
    console.log(totalMoney.toFixed(2) + " leva")
}
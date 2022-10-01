function price(input){
    let chicken = Number(input[0]) * 10.35
    let fish = Number(input[1]) * 12.40
    let vegetarian = Number(input[2]) * 8.15

    let price = chicken + fish + vegetarian
    price *= 1.2
    price += 2.50

    console.log(price)
}

price(["2 ", "4 ", "3 "])
function costs(input){
    let tax = Number(input[0])
    let sneakers = tax * 0.6
    let gear = sneakers * 0.8
    let ball = gear / 4
    let accessories = ball / 5

    console.log(tax + sneakers + gear + ball + accessories)
}

costs(["365"])
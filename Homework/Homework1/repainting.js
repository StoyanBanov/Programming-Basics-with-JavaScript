function costs(input){
    let nylon = (Number(input[0]) + 2) * 1.5
    let paint = (Number(input[1]) + Number(input[1]) * 0.1) * 14.5
    let diluter = Number(input[2]) * 5
    let hours = Number(input[3])

    let costs = nylon + paint + diluter + 0.4
    costs += costs * 0.3 * hours

    console.log(costs)
}

costs(["5 ", "10 ", "10 ", "1 "])
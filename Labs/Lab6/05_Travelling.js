function travel(params) {
    let i = 0
    let j = 2
    while (params[i] != "End") {
        let destination = params[i]
        let minimalBudget = params[i + 1]

        let sum = 0
        while (sum < minimalBudget) {
            let amount = Number(params[i + 2])
            sum += amount
            i++
        }

        console.log(`Going to ${destination}!`);
        i += 2
    }
}
function task1(params) {
    let fatP = Number(params[0]) / 100
    let protP = Number(params[1])  / 100
    let carbP = Number(params[2]) / 100
    let totalCals = Number(params[3])
    let waterP = Number(params[4]) / 100

    let fatTotal = totalCals * fatP / 9
    let carbTot = totalCals * carbP / 4
    let protTot = totalCals * protP / 4

    let realWeight = fatTotal + carbTot + protTot

    let calsPerG = totalCals / realWeight
    calsPerG *= 1 -waterP
    
    console.log(calsPerG.toFixed(4));
}

task1(["60",
"25",
"15",
"2500",
"60"])

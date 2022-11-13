function task2(params) {
    let days = Number(params[0])
    let foodKG = Number(params[1])
    let firstDeerDailyFood = Number(params[2])
    let secDeerDaF = Number(params[3])
    let thirdDeerDaF = Number(params[4])

    let eatenFood = days * firstDeerDailyFood
    eatenFood += days * secDeerDaF
    eatenFood += days * thirdDeerDaF

    let result = Math.abs(eatenFood - foodKG)
    if (foodKG >= eatenFood) {
        console.log(`${Math.floor(result)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(result)} more kilos of food are needed.`);
    }
}

task2(["2",
"10",
"1",
"1",
"2"])

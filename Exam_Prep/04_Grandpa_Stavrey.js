function rakia(params) {
    let daysCount = Number(params[0])
    let totalLiters = 0
    let averageDegree = 0
    for (let i = 1; i < daysCount * 2; i += 2) {
        let rakiaAmount = Number(params[i])
        let rakiaDegree = Number(params[i + 1]) * rakiaAmount

        totalLiters += rakiaAmount
        averageDegree += rakiaDegree
    }
    averageDegree /= daysCount * 100

    console.log(`Liter: ${totalLiters.toFixed(2)}`);
    console.log(`Degrees: ${averageDegree.toFixed(2)}`);
    if(averageDegree < 38){
        console.log(`Not good, you should baking!`);
    }else if(averageDegree <= 42){
        console.log("Super!");
    }else{
        console.log("Dilution with distilled water!");
    }
}

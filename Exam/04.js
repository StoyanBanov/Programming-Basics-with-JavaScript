function task4(params) {
    let modelsCount = Number(params[0])

    let realSales = 0
    let avgR = 0
    for (let i = 1; i <= modelsCount; i++) {
        let num = Number(params[i])

        let rating = num % 10
        let possibleSales = Math.floor(num / 10)
        switch (rating) {
            case 2: realSales += 0; break;
            case 3: realSales += possibleSales * 0.5; break;
            case 4: realSales += possibleSales * 0.7; break;
            case 5: realSales += possibleSales * 0.85; break;
            case 6: realSales += possibleSales; break;
        }
        avgR += rating
    }

    console.log(realSales.toFixed(2));

    avgR /= modelsCount
    console.log(avgR.toFixed(2));
}

task4(["3",
"103",
"103",
"103"])

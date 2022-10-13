function points(params) {
    let compCount = Number(params[0])
    let startingPoints = Number(params[1])

    let totalPoints = startingPoints
    let wonCount = 0
    for (let i = 2; i < compCount + 2; i++) {
        let stage = params[i]
        switch (stage) {
            case "W": totalPoints += 2000; wonCount++; break
            case "F": totalPoints += 1200; break
            case "SF": totalPoints += 720
        }
    }

    let averagePoints = (totalPoints - startingPoints) / compCount
    let wonPercent = wonCount * 100 / compCount

    console.log("Final points: " + totalPoints)
    console.log("Average points: " + Math.floor(averagePoints))
    console.log(wonPercent.toFixed(2) + "%")
}
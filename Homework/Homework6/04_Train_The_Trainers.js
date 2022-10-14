function score(params) {
    let judgesCount = Number(params[0])

    let i = 1
    let totalAvgGrade = 0
    let lecsCount = 0
    while (params[i] != "Finish") {
        let presName = params[i]

        lecsCount++;

        let avgGrade = 0
        for (let j = 1; j <= judgesCount; j++) {
            let grade = Number(params[i + j])
            avgGrade += grade
        }
        avgGrade /= judgesCount
        console.log(`${presName} - ${avgGrade.toFixed(2)}.`);

        totalAvgGrade += avgGrade
        i += judgesCount + 1
    }

    totalAvgGrade /= lecsCount
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}
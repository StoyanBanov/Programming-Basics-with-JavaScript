function grade(input) {
    let name = input[0]

    let i = 1
    let j = 1
    let failedCount = 0
    let averageGrade = 0
    while (i <= 12) {
        let grade = Number(input[j])

        if (grade >= 4) { i++; averageGrade += grade}
        else { failedCount++}

        j++

        if (failedCount > 1) {
            console.log(`${name} has been excluded at ${i} grade`);
            return
        }
    }
    averageGrade /= 12
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
}
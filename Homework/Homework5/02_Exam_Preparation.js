function preparation(params) {
    let poorMarks = Number(params[0])

    let i = 1
    let poorCount = 0
    let avgMark = 0
    let taskName
    let totalMarksCount = 0
    while (params[i] != "Enough") {
        taskName = params[i]
        let taskGrade = Number(params[i + 1])

        if (taskGrade <= 4) {
            poorCount++
        }

        if (poorCount == poorMarks) {
            console.log(`You need a break, ${poorCount} poor grades.`);
            return
        }

        avgMark += taskGrade
        totalMarksCount++
        i += 2
    }

    avgMark /= totalMarksCount
    console.log(`Average score: ${avgMark.toFixed(2)}`);
    console.log(`Number of problems: ${(totalMarksCount)}`);
    console.log(`Last problem: ${taskName}`);
}
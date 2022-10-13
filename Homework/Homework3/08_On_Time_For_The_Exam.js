function onTime(input) {
    let examHr = Number(input[0])
    let examMin = Number(input[1])
    let arriveHr = Number(input[2])
    let arriveMin = Number(input[3])

    let totalExamMin = examMin + examHr * 60
    let totalArriveMin = arriveMin + arriveHr * 60

    let totalDifferenceMin = Math.abs(totalExamMin - totalArriveMin)

    if (totalArriveMin < totalExamMin - 30) {
        console.log("Early")
    } else if (totalArriveMin <= totalExamMin) {
        console.log("On time")
    } else if (totalArriveMin > totalExamMin) {
        console.log("Late")
    }

    if (totalExamMin != totalArriveMin) {
        if (totalArriveMin > totalExamMin - 60 && totalArriveMin < totalExamMin) {
            console.log(totalDifferenceMin + " minutes before the start");
        } else if (totalArriveMin <= totalExamMin - 60) {
            if (totalDifferenceMin % 60 > 9) {
                console.log(`${Math.floor(totalDifferenceMin / 60)}:${totalDifferenceMin % 60} hours before the start`)
            } else {
                console.log(`${Math.floor(totalDifferenceMin / 60)}:0${totalDifferenceMin % 60} hours before the start`)
            }
        } else if (totalArriveMin < totalExamMin + 60) {
            console.log(`${totalDifferenceMin} minutes after the start`)
        } else if (totalArriveMin >= totalExamMin + 60) {
            if (totalDifferenceMin % 60 > 9) {
                console.log(`${Math.floor(totalDifferenceMin / 60)}:${totalDifferenceMin % 60} hours after the start`)
            } else {
                console.log(`${Math.floor(totalDifferenceMin / 60)}:0${totalDifferenceMin % 60} hours after the start`)
            }
        }
    }
}
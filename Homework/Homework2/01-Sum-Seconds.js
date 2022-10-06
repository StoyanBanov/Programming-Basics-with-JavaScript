function time(input) {
    let timeFirst = Number(input[0])
    let timeSecond = Number(input[1])
    let timeThird = Number(input[2])

    let totalSeconds = timeFirst + timeSecond + timeThird

    let totalTimeMin = Math.floor(totalSeconds / 60)
    let totalTimeSec = totalSeconds % 60
    if (totalTimeSec > 59) {
        totalTimeMin++
        totalTimeSec -= 60
    }

    if (totalTimeSec < 10) {
        console.log(`${totalTimeMin}:0${totalTimeSec}`)
    }
    else {
        console.log(`${totalTimeMin}:${totalTimeSec}`)
    }
}

time(["35", "45", "44"])
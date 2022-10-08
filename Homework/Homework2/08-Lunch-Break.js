function lunchBreak(input){
    let seriesName = input[0]
    let episodeDuration = Number(input[1])
    let breakDuration = Number(input[2])

    let lunchDuration = breakDuration / 8
    let restDuration = breakDuration / 4

    let freeTime = breakDuration - lunchDuration - restDuration
    let resultTime = Math.ceil(Math.abs(freeTime - episodeDuration))
    if(episodeDuration <= freeTime){
        console.log(`You have enough time to watch ${seriesName} and left with ${resultTime} minutes free time.`)
    }
    else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${resultTime} more minutes.`)
    }
}

lunchBreak(["Game of Thrones", "60", "96"])
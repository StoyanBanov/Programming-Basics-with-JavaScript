function recordTime(input){
    let recordTime = Number(input[0])
    let distanceMeters = Number(input[1])
    let time1MetreSec = Number(input[2])

    let finalTime = distanceMeters * time1MetreSec + (Math.floor(distanceMeters / 15) * 12.5)

    if(finalTime < recordTime){
        console.log(` Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    }
    else{
        let extraTime = finalTime - recordTime
        console.log(`No, he failed! He was ${extraTime.toFixed(2)} seconds slower.`)
    }
}

recordTime(["10464", "1500", "20"])
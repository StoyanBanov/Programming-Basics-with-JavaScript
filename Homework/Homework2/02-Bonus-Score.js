function bonusPoints(input){
    let startingNum = Number(input[0])
    let bonusPoints = 0
    if(startingNum <= 100){
        bonusPoints = 5
    }
    else if(startingNum > 1000){
        bonusPoints = startingNum * 0.1
    }
    else if(startingNum > 100){
        bonusPoints = startingNum * 0.2
    }
    if(startingNum % 2 == 0){
        bonusPoints += 1
    }
    else if(startingNum % 10 == 5){
        bonusPoints += 2
    }
    console.log(bonusPoints)
    console.log(bonusPoints + startingNum)
}

bonusPoints(["175"])
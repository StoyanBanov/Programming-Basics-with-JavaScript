function points(params) {
    let actorName = params[0]
    let currentPoints = Number(params[1])
    let judgesCount = Number(params[2])

    let totalPoints = currentPoints
    for (let i = 3; i < judgesCount * 2 + 3; i += 2) {
        let judgeName = params[i];
        let judgePoints = Number(params[i + 1])

        totalPoints += judgeName.length * judgePoints / 2

        if(totalPoints > 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return
        }
    }

    console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
}

points(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])
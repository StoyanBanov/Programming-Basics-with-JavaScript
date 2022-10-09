function commission(params) {
    let townName = params[0]
    if(townName != "Sofia" && townName != "Varna" && townName != "Plovdiv"){
        console.log("error")
        return
    }

    let salesVolume = params[1]
    if(salesVolume < 0){
        console.log("error")
        return
    }

    let commissionPercent
    if(salesVolume <= 500){
        switch(townName){
            case "Sofia": commissionPercent = 0.05; break
            case "Varna" : commissionPercent = 0.045; break
            case "Plovdiv": commissionPercent = 0.055; break
        }
    }
    else if(salesVolume <= 1000){
        switch(townName){
            case "Sofia": commissionPercent = 0.07; break
            case "Varna" : commissionPercent = 0.075; break
            case "Plovdiv": commissionPercent = 0.08; break
        }
    }
    else if(salesVolume <= 10000){
        switch(townName){
            case "Sofia": commissionPercent = 0.08; break
            case "Varna" : commissionPercent = 0.1; break
            case "Plovdiv": commissionPercent = 0.12; break
        }
    }
    else{
        switch(townName){
            case "Sofia": commissionPercent = 0.12; break
            case "Varna" : commissionPercent = 0.13; break
            case "Plovdiv": commissionPercent = 0.145; break
        }
    }
    let commission = commissionPercent * salesVolume
    console.log(commission.toFixed(2))
}
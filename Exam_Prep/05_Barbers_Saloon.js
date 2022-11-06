function profitCheck(params) {
    let dailyMininum = Number(params[0])

    const MENSCUT = 15
    const LADIESCUT = 20
    const KIDSCUT = 10

    const TOUCHUP = 20
    const FULLCOLOR = 30

    let totalMoney = 0

    let i = 1
    while (params[i] != "closed") {
        let serviceType = params[i]
        if(serviceType == "haircut"){
            let gender = params[i + 1]
            if(gender == "mens"){
                totalMoney += MENSCUT
            }else if(gender == "ladies"){
                totalMoney += LADIESCUT
            }else if(gender == "kids"){
                totalMoney += KIDSCUT
            }
        }else if( serviceType == "color"){
            let colorType = params[i + 1]
            if(colorType == "touch up"){
                totalMoney += TOUCHUP
            }else if(colorType == "full color"){
                totalMoney += FULLCOLOR
            }
        }

        if(totalMoney >= dailyMininum){
            break
        }

        i += 2
    }

    if(totalMoney >= dailyMininum){
        console.log("You have reached your target for the day!");
    }else{
        console.log(`Target not reached! You need ${dailyMininum - totalMoney}lv. more.`);
    }
    console.log(`Earned money: ${totalMoney}lv.`);
}


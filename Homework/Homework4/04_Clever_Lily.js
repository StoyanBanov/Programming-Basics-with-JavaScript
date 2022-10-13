function savedMoney(params) {
    let age = Number(params[0])
    let wmachinePrice = Number(params[1])
    let oneToyPrice = Number(params[2])

    let sum = 0
    let moneyGrowth = 1

    for (let i = 2; i <= age; i += 2) {
        sum += 10 * moneyGrowth - 1
        moneyGrowth++
    }

    sum += oneToyPrice * Math.ceil(age / 2)

    if(sum >= wmachinePrice){
        console.log("Yes! " + (sum - wmachinePrice).toFixed(2));
    }else{
        console.log("No! " + (wmachinePrice - sum).toFixed(2));
    }
}

savedMoney(["21",

"1570.98",

"3"])
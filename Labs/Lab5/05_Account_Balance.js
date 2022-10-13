function accBalance(params) {
    let i = 0
    let sum = 0
    while(params[i] != "NoMoreMoney"){
        if(Number(params[i]) < 0){
            console.log("Invalid operation!");
            break
        }
        console.log("Increase: " + Number(params[i]).toFixed(2));
        sum += Number(params[i])
        i++
    }
    console.log("Total: " + sum.toFixed(2));
}
function maxNum(params) {
    let min = Number(params[0])
    let i = 1
    while (params[i] != "Stop") {
        if (Number(params[i]) < min) { min = Number(params[i]) }
        i++
    }
    console.log(min);
}
function maxNum(params) {
    let max = Number(params[0])
    let i = 1
    while (params[i] != "Stop") {
        if (Number(params[i]) > max) { max = Number(params[i]) }
        i++
    }
    console.log(max);
}
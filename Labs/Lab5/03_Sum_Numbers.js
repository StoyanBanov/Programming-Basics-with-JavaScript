function sum(params) {
    let num = Number(params[0])

    let sum = 0
    let i = 1
    while(sum < num){
        sum += Number(params[i])
        i++
    }
    console.log(sum)
}

sum(["100", "10", "20", "30", "40"])
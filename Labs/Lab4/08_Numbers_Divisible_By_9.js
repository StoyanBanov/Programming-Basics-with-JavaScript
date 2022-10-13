function numsDivBy9(params) {
    let beg = Number(params[0])
    let end = Number(params[1])

    if(beg % 9 != 0){
        beg -= beg % 9
        beg += 9
    }

    let sum = 0

    for (let i = beg; i <= end; i += 9) {
        sum += i;
    }

    console.log("The sum: " + sum);
    for (let i = beg; i <= end; i += 9) {
        console.log(i)
    }
}
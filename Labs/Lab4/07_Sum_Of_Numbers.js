function sumOfNums(params) {
    let numString = params[0]

    let sum = 0
    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i])
    }

    console.log("The sum of the digits is:" + sum);
}
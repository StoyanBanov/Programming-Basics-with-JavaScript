function evenOddSums(params) {
    let numBeg = Number(params[0])
    let numEnd = Number(params[1])

    let result = ""
    for (let i = numBeg; i <= numEnd; i++) {
        let evenSum = 0
        let oddSum = 0
        for (let j = 0; j < i.toString().length; j++) {
            if(j % 2 == 0){
                evenSum += Number(i.toString()[j])
            }else{
                oddSum += Number(i.toString()[j])
            }
        }
        if(evenSum == oddSum){
            result += i + " "
        }
    }
    console.log(result);
}
function sumsOfPrimeAndNonPrime(params) {
    let i = 0
    let primeSum = 0
    let nonSum = 0
    while (params[i] != "stop") {
        let num = Number(params[i])
        i++
        if(num < 0){
            console.log("Number is negative.");
            continue
        }

        let isNon = false

        for (let j = 2; j < num; j++) {
            if(num % j == 0){
                isNon = true
                break
            }
        }

        if(isNon){
            nonSum += num
        } else{
            primeSum += num
        }
    }
    console.log("Sum of all prime numbers is: " + primeSum);
    console.log("Sum of all non prime numbers is: " + nonSum);
}
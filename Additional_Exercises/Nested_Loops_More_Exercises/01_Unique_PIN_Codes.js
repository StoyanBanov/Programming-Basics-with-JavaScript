function pinGen(params) {
    let firstDigitTop = Number(params[0])
    let secondDigitTop = Number(params[1])
    let thirdDigitTop = Number(params[2])

    for (let i = 2; i <= firstDigitTop; i++) {
        if (i % 2 == 0) {
            for (let j = 2; j <= secondDigitTop; j++) {
                let isPrime = false
                for (let l = 2; l < j; l++) {
                    if(j % l == 0){isPrime = true; break}
                }
                if(isPrime){continue}
                for (let k = 2; k <= thirdDigitTop; k++) {
                    if(k % 2 == 0){
                        console.log(`${i} ${j} ${k}`);
                    }
                }
            }
        }
    }
}

pinGen([8, 2, 8])
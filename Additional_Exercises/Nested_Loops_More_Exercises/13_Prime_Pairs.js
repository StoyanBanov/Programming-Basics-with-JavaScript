function primePairs(params) {
    let pair1Beg = Number(params[0])
    let pair2Beg = Number(params[1])
    let pair1End = Number(params[2]) + pair1Beg
    let pair2End = Number(params[3]) + pair2Beg

    for (let pair1 = pair1Beg; pair1 <= pair1End; pair1++) {
        let isPrime1 = true
        for (let i = 2; i < pair1; i++) {
            if(pair1 % i == 0){
                isPrime1 = false
                break
            }
        }
        if(!isPrime1){continue}

        for (let pair2 = pair2Beg; pair2 <= pair2End; pair2++) {
            let isPrime2 = true
            for (let i = 2; i < pair2; i++) {
                if(pair2 % i == 0){
                    isPrime2 = false
                    break
                }
            }
            if(!isPrime2){continue}

            console.log(`${pair1}${pair2}`);
        }  
    }
}
function sumProd(params) {
    let num = Number(params[0])

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d
                    let prod = a * b * c * d
                    if(sum == prod && num % 10 == 5){
                        console.log("" + a + b + c + d);
                        return
                    }else if(Math.floor(prod / sum) == 3 && num % 3 == 0){
                        console.log("" + d + c + b + a);
                        return
                    }
                }
            }
        }
    }

    console.log("Nothing found");
}
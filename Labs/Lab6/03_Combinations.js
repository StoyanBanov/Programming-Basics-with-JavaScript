function combos(params) {
    let n = Number(params[0])

    let sum = 0
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {
                if(k + j + i == n){
                    sum++
                }
            }
        }
    }
    console.log(sum);
}

combos(["25"])
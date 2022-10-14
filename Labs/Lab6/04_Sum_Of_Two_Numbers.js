function sum(params) {
    let beg = Number(params[0])
    let end = Number(params[1])
    let magNum = Number(params[2])

    let count = 0
    for (let i = beg; i <= end; i++) {
        for (let j = beg; j <= end; j++) {
            count++
            if(i + j == magNum){
                console.log(`Combination N:${count} (${i} + ${j} = ${magNum})`);
                return
            }
        }
    }

    console.log(`${count} combinations - neither equals ${magNum}`);
}
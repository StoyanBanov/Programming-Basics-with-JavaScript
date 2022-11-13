function task6(params) {
    let numString = params[0]

    for (let i = 1; i <= Number(numString[2]); i++) {
        for (let j = 1; j <= Number(numString[1]); j++) {
            for (let k = 1; k <= Number(numString[0]); k++) {
                console.log(`${i} * ${j} * ${k} = ${k * j * i};`);
            }
        }
    }
}

task6(["324"])
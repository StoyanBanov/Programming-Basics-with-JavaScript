function passGen(params) {
    let n = Number(params[0])
    let l = Number(params[1])

    let allPasswords = ""
    for (let num1 = 1; num1 <= n; num1++) {
        for (let num2 = 1; num2 <= n; num2++) {
            for (let letter1 = 97; letter1 < 97 + l; letter1++) {
                for (let letter2 = 97; letter2 < 97 + l; letter2++) {
                    for (let num3 = num2 + 1; num3 <= n; num3++) {
                        if(num3 > num1){
                            allPasswords += `${num1}${num2}${String.fromCharCode(letter1)}${String.fromCharCode(letter2)}${num3} `
                        }
                    }
                }
            }
        }
    }
    console.log(allPasswords);
}
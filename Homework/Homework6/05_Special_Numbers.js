function specialNums(params) {
    let n = Number(params[0])

    let result = ""
    for (let i = 1111; i < 10000; i++) {
        let iString = i.toString()

        let isSpecial = true
        let specialNum = i
        for (let j = 0; j < iString.length; j++) {
            if (n % Number(iString[j]) != 0) {
                isSpecial = false
                break
            }
        }
        if (isSpecial) { result += specialNum + " "}
    }
    console.log(result);
}
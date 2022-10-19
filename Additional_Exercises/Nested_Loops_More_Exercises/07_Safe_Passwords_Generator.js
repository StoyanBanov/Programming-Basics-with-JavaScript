function safePassGen(params) {
    let a = Number(params[0])
    let b = Number(params[1])
    let maxPassCount = Number(params[2])
    let A = 35
    let B = 64
    let x = 1
    let y = 1

    let result = ""
    for (let count = 0; count < maxPassCount; count++) {
        result += `${String.fromCharCode(A)}${String.fromCharCode(B)}${x}${y}${String.fromCharCode(B)}${String.fromCharCode(A)}|`

        if (y == b) {
            x++
            if (x > a) { break }
            y = 0
        }
        A++
        if (A > 55) { A = 35 }
        B++
        if (B > 96) { B = 64 }
        y++
    }
    console.log(result);
}

function safePassGenWNestedLoops(params) {
    let a = Number(params[0])
    let b = Number(params[1])
    let maxPassCount = Number(params[2])
    let A = 35
    let B = 64

    let result = ""
    let count = 0
    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            result += `${String.fromCharCode(A)}${String.fromCharCode(B)}${x}${y}${String.fromCharCode(B)}${String.fromCharCode(A)}|`
            count++

            if ((x == a && y == b) || count == maxPassCount) { console.log(result); return}

            A++
            if (A > 55) { A = 35 }
            B++
            if (B > 96) { B = 64 }
        }
    }
}

safePassGenWNestedLoops([20, 50, 10])
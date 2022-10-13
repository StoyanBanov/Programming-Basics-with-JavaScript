function numberPyramid(params) {
    let n = Number(params[0])

    let columnCount = 1
    let currentNumber = 1
    for (;;) {
        let row = ""
        for (let j = 0; j < columnCount; j++) {
            row += currentNumber + " "
            currentNumber++
            if(currentNumber > n){
                console.log(row);
                return
            }
        }
        console.log(row);
        columnCount++
    }
}


function numberPyramidWithBool(params) {
    let n = Number(params[0])

    let columnCount = 1
    let currentNumber = 1
    let isDone = false
    while (!isDone) {
        let row = ""
        for (let j = 0; j < columnCount; j++) {
            row += currentNumber + " "
            currentNumber++
            if(currentNumber > n){
                isDone = true
                break
            }
        }
        console.log(row);
        columnCount++
    }
}

numberPyramid(["7"])
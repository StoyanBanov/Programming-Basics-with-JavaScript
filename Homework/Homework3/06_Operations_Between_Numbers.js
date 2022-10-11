function operation(params) {
    let n1 = Number(params[0])
    let n2 = Number(params[1])
    let operator = params[2]

    if((operator == "/" || operator == "%") && n2 == 0){
        console.log(`Cannot divide ${n1} by zero`)
        return
    }

    let result
    let isEven
    switch (operator) {
        case "+":
            result = n1 + n2
            isEven = result % 2 == 0
            console.log(`${n1} ${operator} ${n2} = ${result} - ${isEven ? "even" : "odd"}`);
            break
        case "-":
            result = n1 - n2
            isEven = result % 2 == 0
            console.log(`${n1} ${operator} ${n2} = ${result} - ${isEven ? "even" : "odd"}`);
            break
        case "*":
            result = n1 * n2
            isEven = result % 2 == 0
            console.log(`${n1} ${operator} ${n2} = ${result} - ${isEven ? "even" : "odd"}`);
            break
        case "/":
            result = n1 / n2
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            break
        case "%":
            result = n1 % n2
            console.log(`${n1} % ${n2} = ${result}`);
            break
    }
}
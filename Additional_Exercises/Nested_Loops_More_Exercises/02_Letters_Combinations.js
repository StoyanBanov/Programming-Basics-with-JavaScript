function letterCombos(params) {
    let beg = params[0]
    let end = params[1]
    let skip = params[2]

    let allCombos = ""
    let sum = 0
    for (let i = beg.charCodeAt(0); i <= end.charCodeAt(0); i++) {
        if(skip.charCodeAt(0) === i){continue}
        for (let j = beg.charCodeAt(0); j <= end.charCodeAt(0); j++) {
            if(skip.charCodeAt(0) === j){continue}
            for (let k = beg.charCodeAt(0); k <= end.charCodeAt(0); k++) {
                if(skip.charCodeAt(0) === k){continue}
                sum++
                allCombos += String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k) + " "
            }
        }
    }
    console.log(allCombos + sum);
}
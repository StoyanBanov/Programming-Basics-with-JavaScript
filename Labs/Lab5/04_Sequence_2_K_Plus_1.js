function sequence(params) {
    let n = Number(params[0])

    let i = 1
    do {  
        console.log(i)
        i = 2 * i +  1
    } while (i <= n)
}
function sum(input){
    let pens = Number(input[0] * 5.80)
    let markers = Number(input[1] * 7.20)
    let cleaner = Number(input[2] * 1.20)
    let discountPerc = Number(input[3]) / 100
    let sum = (pens + markers + cleaner) * (1 - discountPerc)

    console.log(sum)
}

sum(["2 ", "3 ", "4 ", "25 "])
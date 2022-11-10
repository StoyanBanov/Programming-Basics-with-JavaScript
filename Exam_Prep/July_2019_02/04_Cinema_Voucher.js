function voucher(params) {
    let voucherValue = Number(params[0])

    let boughtTicketsCount = 0
    let boughtOtherGoodsCount = 0

    let i = 1
    while (params[i] != "End") {
        let goodName = params[i]
        i++

        let goodPrice = 0
        if(goodName.length > 8){
            goodPrice = goodName.charCodeAt(0) + goodName.charCodeAt(1) 
        }else{
            goodPrice = goodName.charCodeAt(0)
        }

        voucherValue -= goodPrice
        if(voucherValue < 0){
            break
        }

        if(goodName.length > 8){
            boughtTicketsCount++
        }else{
            boughtOtherGoodsCount++
        }
    }

    console.log(boughtTicketsCount);
    console.log(boughtOtherGoodsCount);
}
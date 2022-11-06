function deliveryPrice(params) {
    let weight = Number(params[0])
    let serviceType = params[1]
    let distance = Number(params[2])

    let kilometerPriceCents
    let additionalPricePerKilo

    if( weight < 1){
        kilometerPriceCents = 3
        additionalPricePerKilo = kilometerPriceCents * 0.8
    }else if(weight < 10){
        kilometerPriceCents = 5
        additionalPricePerKilo = kilometerPriceCents * 0.4
    }else if(weight < 40){
        kilometerPriceCents = 10
        additionalPricePerKilo = kilometerPriceCents * 0.05
    }else if(weight < 90){
        kilometerPriceCents = 15
        additionalPricePerKilo = kilometerPriceCents * 0.02
    }else if(weight < 150){
        kilometerPriceCents = 20
        additionalPricePerKilo = kilometerPriceCents * 0.01
    }

    let totalPrice = kilometerPriceCents / 100 * distance

    if(serviceType == "express"){
        totalPrice += weight * additionalPricePerKilo / 100 * distance
    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}








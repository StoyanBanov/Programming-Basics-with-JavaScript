function cost(params) {
    let days = Number(params[0])
    let accomType = params[1]
    let grade = params[2]

    const ROOMFORONEPRICE = 18
    const APARTMENTPRICE = 25
    const PRESIDENTAPARPRICE = 35

    let price = days - 1
    if(days < 10){
        switch (accomType) {
            case "room for one person": price *= ROOMFORONEPRICE
                break;
            case "apartment": price *= APARTMENTPRICE * 0.7
                break;
            case "president apartment": price *= PRESIDENTAPARPRICE * 0.9
        }
    }else if(days <= 15){
        switch (accomType) {
            case "room for one person": price *= ROOMFORONEPRICE
                break;
            case "apartment": price *= APARTMENTPRICE * 0.65
                break;
            case "president apartment": price *= PRESIDENTAPARPRICE * 0.85
        }
    }else if(days > 15){
        switch (accomType) {
            case "room for one person": price *= ROOMFORONEPRICE
                break;
            case "apartment": price *= APARTMENTPRICE * 0.5
                break;
            case "president apartment": price *= PRESIDENTAPARPRICE * 0.8
        }
    }

    if(grade == "positive"){
        price *= 1.25
    }else{
        price *= 0.9
    }

    console.log(price.toFixed(2));
}
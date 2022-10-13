function price(params) {
    let month = params[0]
    let nightsCount = Number(params[1])

    let studioPrice = nightsCount
    let apartmentPrice = nightsCount
    switch (month) {
        case "May":
        case "October": studioPrice *= 50; apartmentPrice *= 65;
            if(nightsCount > 14){ studioPrice *= 0.7 }
            else if(nightsCount > 7) { studioPrice *= 0.95 }
            break
        case "June":
        case "September": studioPrice *= 75.20; apartmentPrice *= 68.70; 
            if (nightsCount > 14) { studioPrice *= 0.8 }
            break
        case "July":
        case "August": studioPrice *= 76; apartmentPrice *= 77
    }
    if(nightsCount > 14){
        apartmentPrice *= 0.9
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
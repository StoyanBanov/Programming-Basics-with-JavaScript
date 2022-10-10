function outfit(params) {
    let degrees = Number(params[0])
    let timeOfDay = params[1]

    let outfit
    let shoes
    if(10 <= degrees && degrees <= 18){
        switch(timeOfDay){
            case "Morning" : outfit = "Sweatshirt"; shoes = "Sneakers"; break
            case "Afternoon":
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"
        }
    }
    else if(degrees <= 24){
        switch(timeOfDay){
            case "Morning" : outfit = "Shirt"; shoes = "Moccasins"; break
            case "Afternoon": outfit = "T-Shirt"; shoes = "Sandals"; break
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"
        }
    }
    else if(degrees >= 25){
        switch(timeOfDay){
            case "Morning" : outfit = "T-Shirt"; shoes = "Sandals"; break
            case "Afternoon": outfit = "Swim Suit"; shoes = "Barefoot"; break
            case "Evening": outfit = "Shirt"; shoes = "Moccasins"
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
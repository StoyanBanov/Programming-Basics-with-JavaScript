function task3(params) {
    const roomforOne = 18
    const apartment = 25
    const presAp = 35

    let days = Number(params[0]) - 1
    let roomType = params[1]
    let grade = params[2]

    let totalMoney

    let discount = 0

    switch (roomType) {
        case "room for one person":
            totalMoney = days * roomforOne
            break
        case "apartment":
            totalMoney = days * apartment
            if (days < 10) {
                discount = 1 - 30 / 100
            } else if (days <= 15) {
                discount = 1 - 35 / 100
            } else if (days > 15) {
                discount = 1 - 50 / 100
            }
            break
        case "president apartment":
            totalMoney = days * presAp
            if (days < 10) {
                discount = 1 - 10 / 100
            } else if (days <= 15) {
                discount = 1 - 15 / 100
            } else if (days > 15) {
                discount = 1 - 20 / 100
            }
    }

    if(roomType == "apartment" || roomType =="president apartment")
    {totalMoney *= discount}

    if (grade == "positive") {
        totalMoney *= 1.25
    }else{
        totalMoney *= 0.9
    }

    console.log(totalMoney.toFixed(2));
}

task3(["12",
"room for one person",
"positive"])

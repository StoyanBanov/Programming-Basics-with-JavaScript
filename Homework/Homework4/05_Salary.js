function salary(params) {
    let tabs = Number(params[0])
    let salary = Number(params[1])

    for (let i = 2; i < tabs + 2; i++) {
        let webSite = params[i]
        switch (webSite){
            case "Facebook": salary -= 150; break
            case "Instagram": salary -= 100; break
            case "Reddit": salary -= 50
        }
        if(salary <= 0){
            console.log("You have lost your salary.");
            return
        }
    }

    console.log(salary);
}
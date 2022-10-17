function colors(params) {
    let eggsCount = Number(params[0])

    let redC = 0
    let orangeC = 0
    let blueC = 0
    let greenC = 0
    for (let i = 1; i <= eggsCount; i++) {
        let color = params[i]
        switch (color) {
            case "red": redC++; break
            case "orange": orangeC++; break
            case "blue": blueC++; break
            case "green": greenC++; break
        }
    }

    console.log("Red eggs: " + redC);
    console.log("Orange eggs: " + orangeC);
    console.log("Blue eggs: " + blueC);
    console.log("Green eggs: " + greenC);

    let max = redC
    let maxColor = "red"
    if(orangeC > max){
        max = orangeC
        maxColor = "orange"
    }
    if(blueC > max){
        max = blueC
        maxColor = "blue"
    }
    if(greenC > max){
        max = greenC
        maxColor = "green"
    }
    console.log(`Max eggs: ${max} -> ${maxColor}`);
}
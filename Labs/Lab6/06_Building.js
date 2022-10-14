function building(params) {
    let floors = Number(params[0])
    let rooms = Number(params[1])

    for (let i = floors; i > 0; i--) {
        let floor = ""
        for (let j = 0; j < rooms; j++) {
            if(i == floors){
                floor += `L${i}${j} `
            }else if(i % 2 != 0){
                floor += `A${i}${j} `
            }else{
                floor += `O${i}${j} `
            }
        }
        console.log(floor);
    }
}

building(["6",

"4"])
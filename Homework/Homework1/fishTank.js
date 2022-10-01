function water(input){
    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3]) / 100

    let v = length * width * height * (1 - percent) / 1000

    console.log(v)
}

water(["85 ", "75 ", "47 ", "17 "])
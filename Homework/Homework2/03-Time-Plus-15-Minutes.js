function add15Min(input){
    let hr = Number(input[0])
    let mins = Number(input[1]) + 15

    if(mins > 59){
        hr++
        mins -= 60
    }
    if(hr == 24){
        hr = 0
    }
    if(mins < 10){
        console.log(`${hr}:0${mins}`)
    }
    else{
        console.log(`${hr}:${mins}`)
    }
}

add15Min(["23", "50"])
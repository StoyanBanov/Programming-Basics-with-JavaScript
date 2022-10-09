function workingHours(input) {
    let day = input[1]

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            let hr = Number(input[0])
            if(hr >= 10 && hr <= 18){
                console.log("open")
            }else{
                console.log("closed")
            }          
            break
        case "Sunday":
            console.log("closed")
    }
}
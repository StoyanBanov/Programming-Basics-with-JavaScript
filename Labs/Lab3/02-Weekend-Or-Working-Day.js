function whatDay(input) {
    let day = input[0]

    switch (day) {
        case "Saturday":
        case "Sunday":
            console.log("Weekend")
            break
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day")
            break
        default:
            console.log("Error")
    }
}
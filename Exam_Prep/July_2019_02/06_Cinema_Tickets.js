function tickets(params) {
    let i = 0
    let totalTicketsCount = 0

    let studentTicketsCount = 0
    let standardTicketCount = 0
    let kidTicketsCount = 0

    while (params[i] != "Finish") {
        let movieName = params[i]
        i++
        let freeSeats = Number(params[i])
        i++

        let takenSeatsCount = 0

        while (params[i] != "End") {
            let ticketType = params[i]
            i++

            takenSeatsCount++

            totalTicketsCount++

            switch (ticketType) {
                case "student" : studentTicketsCount++; break
                case "standard" : standardTicketCount++; break
                case "kid" : kidTicketsCount++; break
            }

            if(freeSeats == takenSeatsCount){
                break
            }
        }
        if(params[i] == "End"){i++}
        let takenSeatsPercent = takenSeatsCount / freeSeats * 100
        console.log(`${movieName} - ${takenSeatsPercent.toFixed(2)}% full.`);
    }

    let kidTicketsPercent = kidTicketsCount / totalTicketsCount * 100
    let standardTicketsPercent = standardTicketCount / totalTicketsCount * 100
    let studentTicketsPercent = studentTicketsCount / totalTicketsCount * 100

    console.log(`Total tickets: ${totalTicketsCount}`);
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketsPercent.toFixed(2)}% kids tickets.`);
}

function tickets(params) {
    let i = 0
    let studentsCount = 0
    let standardCount = 0
    let kidCount = 0
    while (params[i] != "Finish") {
        let name = params[i]
        let freeSeats = Number(params[i + 1])
        let takenSeats = 0

        while (params[i + 2] != "End") {
            let ticketType = params[i + 2]
            switch (ticketType) {
                case "student": studentsCount++; break
                case "standard": standardCount++; break
                case "kid": kidCount++
            }

            takenSeats++
            if (takenSeats == freeSeats) { break }
            i++
        }

        i += 3

        console.log(`${name} - ${(takenSeats * 100 / freeSeats).toFixed(2)}% full.`);
    }

    totalTickets = studentsCount + standardCount + kidCount
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentsCount * 100 / totalTickets).toFixed(2)}% student tickets.`);
    console.log(`${(standardCount * 100 / totalTickets).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCount * 100 / totalTickets).toFixed(2)}% kids tickets.`);
}
function incomes(params) {
    let movieName = params[0]
    let hallType = params[1]
    let boughtTicketsCount = Number(params[2])

    let income = boughtTicketsCount
    switch (movieName) {
        case "A Star Is Born":
            switch (hallType) {
                case "normal": income *= 7.5; break
                case "luxury": income *= 10.5; break
                case "ultra luxury": income *= 13.5; break
            }
            break;
        case "Bohemian Rhapsody":
            switch (hallType) {
                case "normal": income *= 7.35; break
                case "luxury": income *= 9.45; break
                case "ultra luxury": income *= 12.75; break
            }
            break;
        case "Green Book":
            switch (hallType) {
                case "normal": income *= 8.15; break
                case "luxury": income *= 10.25; break
                case "ultra luxury": income *= 13.25; break
            }
            break;
        case "The Favourite":
            switch (hallType) {
                case "normal": income *= 8.75; break
                case "luxury": income *= 11.55; break
                case "ultra luxury": income *= 13.95; break
            }
            break;
    }

    console.log(`${movieName} -> ${income.toFixed(2)} lv.`);
}
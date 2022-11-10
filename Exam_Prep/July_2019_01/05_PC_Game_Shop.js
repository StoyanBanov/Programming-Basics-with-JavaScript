function stats(params) {
    let soldGamesCount = Number(params[0])

    let hearthStoneCount = 0
    let fortniteCount = 0
    let overwathCount = 0
    let othersCount = 0
    for (let i = 1; i <= soldGamesCount; i++) {
        let name = params[i]

        switch (name) {
            case "Hearthstone":
                hearthStoneCount++
                break;
            case "Fornite":
                fortniteCount++
                break;
            case "Overwatch":
                overwathCount++
                break;
            default:
                othersCount++
                break;
        }
    }

    let hSPercent = hearthStoneCount * 100 / soldGamesCount
    let fPercent = fortniteCount * 100 / soldGamesCount
    let ovPercent = overwathCount * 100 / soldGamesCount
    let othersPercent = othersCount * 100 / soldGamesCount

    console.log(`Hearthstone - ${hSPercent.toFixed(2)}%`);
    console.log(`Fornite - ${fPercent.toFixed(2)}%`);
    console.log(`Overwatch - ${ovPercent.toFixed(2)}%`);
    console.log(`Others - ${othersPercent.toFixed(2)}%`);
}

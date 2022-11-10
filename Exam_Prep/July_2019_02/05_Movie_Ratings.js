function movieRating(params) {
    let moviesCount = Number(params[0])

    let minRating = 11
    let minName

    let maxRating = 0
    let maxName

    let avgRating = 0
    for (let i = 1; i <= moviesCount * 2; i += 2) {
        let movieName = params[i]
        let movieRating = Number(params[i + 1])

        avgRating += movieRating

        if(movieRating < minRating){
            minRating = movieRating
            minName = movieName
        }

        if(movieRating > maxRating){
            maxRating = movieRating
            maxName = movieName
        }
    }

    avgRating /= moviesCount

    console.log(`${maxName} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minName} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log("Average rating: " + avgRating.toFixed(1));
}
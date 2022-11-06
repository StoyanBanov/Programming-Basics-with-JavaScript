function samePairs(input){
    let n = Number(input[0])
    let maxdiff = 0
    let value = Number(input[1]) + Number(input[2])
    for (let i = 1; i < n * 2 - 2; i += 2) {        
        let pair1 = Number(input[i]) + Number(input[i + 1])
        let pair2 = Number(input[i + 2]) + Number(input[i + 3])
        if(Math.abs(pair1 - pair2) > maxdiff){
            maxdiff = Math.abs(pair1 - pair2)
        }
        
    }
    if(maxdiff == 0){
        console.log("Yes, value=" + value)
    }
    else{
        console.log("No, maxdiff=" + maxdiff)
    }
}
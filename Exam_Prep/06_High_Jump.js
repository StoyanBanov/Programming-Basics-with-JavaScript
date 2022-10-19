function jumpWorkOut(params) {
    let heightToBeat = Number(params[0])
    let currentHeight = heightToBeat - 30
    let i = 0
    let failsCount = 0
    while (currentHeight <= heightToBeat) {
        i++
        let jumpHeight = Number(params[i])
        if (jumpHeight > currentHeight) {
            
            currentHeight += 5
            failsCount = 0
        } else {
            failsCount++
            if (failsCount == 3) {
                console.log(`Tihomir failed at ${currentHeight}cm after ${i} jumps.`);
                return
            }
        }
    }

    console.log(`Tihomir succeeded, he jumped over ${heightToBeat}cm after ${i} jumps.`);
}


function jump(params) {
    let heightToBeat = Number(params[0])
    let currentHeight = heightToBeat - 30
    let i = 0
    let failsCount = 0
    let jumpHeight

    for (currentHeight; currentHeight <= heightToBeat; currentHeight += 5) {
        while(failsCount < 3){
            i++
            jumpHeight = Number(params[i])
            if(jumpHeight > currentHeight){
                failsCount = 0
                break
            }else{
                failsCount++
                if (failsCount == 3) {
                    console.log(`Tihomir failed at ${currentHeight}cm after ${i} jumps.`);
                    return
                }
            }
        }
    }
    console.log(`Tihomir succeeded, he jumped over ${heightToBeat}cm after ${i} jumps.`);
}

jump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])

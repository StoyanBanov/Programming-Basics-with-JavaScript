function freeVolume(params) {
    let emptySpaceWidth = Number(params[0])
    let emptySpaceLength = Number(params[1])
    let emptySpaceHight = Number(params[2])
    let v = emptySpaceWidth * emptySpaceLength * emptySpaceHight
    
    let i = 3
    while (params[i] != "Done") {
        let boxes = Number(params[i])
        v -= boxes
        if(v <= 0){
            console.log(`No more free space! You need ${Math.abs(v)} Cubic meters more.`);
            return
        }

        i++
    }

    console.log(`${v} Cubic meters left.`);
}
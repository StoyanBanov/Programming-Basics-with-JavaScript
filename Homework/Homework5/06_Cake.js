function cakePieces(params) {
    let width = Number(params[0])
    let height = Number(params[1])

    let size = width * height

    let i = 2
    while (params[i] != "STOP") {
        size -= Number(params[i])
        if(size <= 0){
            console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`)
            return
        }
        i++
    }
    console.log(`${size} pieces are left.`);
}
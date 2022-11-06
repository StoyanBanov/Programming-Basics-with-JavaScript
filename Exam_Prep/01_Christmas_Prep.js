function prep(params) {
    const WRAPPINGPAPER = 5.8
    const FABRIC = 7.2
    const GLUE = 1.2

    let rollsWrappingPaperCount = Number(params[0])
    let rollsFabricCount = Number(params[1])
    let glueLiters = Number(params[2])
    let discountPercent = Number(params[3]) / 100

    let sum = rollsWrappingPaperCount * WRAPPINGPAPER + rollsFabricCount * FABRIC + glueLiters * GLUE
    sum *= 1 - discountPercent

    console.log(sum.toFixed(3));
}


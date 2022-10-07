function orderPrice(input){
    const GPU_PRICE = 250
    
    let budget = Number(input[0])
    let gpuCount = Number(input[1])
    let cpuCount = Number(input[2])
    let ramCount = Number(input[3])

    let totalGpuPrice = gpuCount * GPU_PRICE
    let totalCpuPrice = cpuCount * totalGpuPrice * 0.35
    let totalRamPrice = ramCount * totalGpuPrice * 0.1

    let totalPrice = totalGpuPrice + totalCpuPrice + totalRamPrice
    if(gpuCount > cpuCount){
        totalPrice *= 0.85
    }

    let result = Math.abs(totalPrice - budget)
    if(budget >= totalPrice){
        console.log(`You have ${result.toFixed(2)} leva left!`)
    }
    else{
        console.log(`Not enough money! You need ${result.toFixed(2)} leva more!`)
    }
}

orderPrice(["900", "2", "1", "3"])
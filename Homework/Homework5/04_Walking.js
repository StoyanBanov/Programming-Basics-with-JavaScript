function steps(params) {
    let i = 0
    let steps = 0
    while (steps < 10000) {
        if (params[i] == "Going home") {
            steps += Number(params[i + 1])
            break
        }
        steps += Number(params[i])
        i++
    }

    if (steps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log((steps - 10000) + " steps over the goal!");
    } else {
        console.log((10000 - steps) + " more steps to reach goal.")
    }
}
function histogram(params) {
    let n = Number(params[0])

    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0

    for (let i = 1; i <= n; i++) {
        let num = Number(params[i])
        if (num < 200) { p1++ }
        else if (num < 400) { p2++ }
        else if (num < 600) { p3++ }
        else if (num < 800) { p4++ }
        else { p5++ }
    }

    console.log((p1 *= 100 / n).toFixed(2) + "%")
    console.log((p2 *= 100 / n).toFixed(2) + "%")
    console.log((p3 *= 100 / n).toFixed(2) + "%")
    console.log((p4 *= 100 / n).toFixed(2) + "%")
    console.log((p5 *= 100 / n).toFixed(2) + "%")
}
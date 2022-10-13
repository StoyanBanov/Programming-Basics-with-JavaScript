function histogram(params) {
    let groupsCout = Number(params[0])

    let mus = 0
    let mon = 0
    let kili = 0
    let k2 = 0
    let eve = 0
    let totalPeople

    for (let i = 1; i <= groupsCout; i++) {
        let peopleCount = Number(params[i])

        if (peopleCount <= 5) { mus += peopleCount }
        else if (peopleCount <= 12) { mon += peopleCount }
        else if (peopleCount <= 25) { kili += peopleCount }
        else if (peopleCount <= 40) { k2 += peopleCount }
        else { eve += peopleCount }
    }
    totalPeople = mus + mon + kili + k2 + eve

    let p1 = mus * 100 / totalPeople
    let p2 = mon * 100 / totalPeople
    let p3 = kili * 100 / totalPeople
    let p4 = k2 * 100 / totalPeople
    let p5 = eve * 100 / totalPeople

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}

histogram(["10",

"10",

"5",

"1",

"100",

"12","26", "17", "37", "40", "78"])
function oddOrEven(params) {
    let n = Number(params[0])

    let oddSum = 0
    let oddMin = Number(params[1])
    let oddMax = Number(params[1])
    let evenSum = 0
    let evenMin
    let evenMax

    let hasMaxMinE = true
    let hasMaxMinO = true
    if (n > 1) {
        evenMin = Number(params[2])
        evenMax = Number(params[2])
        for (let i = 1; i <= n; i++) {
            let num = Number(params[i])
            if (i % 2 == 0) {
                evenSum += num
                if (evenMin > num) {
                    evenMin = num
                }
                if (evenMax < num) {
                    evenMax = num
                }
            } else {
                oddSum += num
                if (oddMin > num) {
                    oddMin = num
                }
                if (oddMax < num) {
                    oddMax = num
                }
            }
        }
    } else if (n == 1) { hasMaxMinE = false; oddSum += oddMin }
    else { hasMaxMinE = false; hasMaxMinO = false }

    console.log("OddSum=" + oddSum.toFixed(2) + ",");
    console.log("OddMin=" + (hasMaxMinO ? oddMin.toFixed(2) : "No") + ",");
    console.log("OddMax=" + (hasMaxMinO ? oddMax.toFixed(2) : "No") + ",");
    console.log("EvenSum=" + evenSum.toFixed(2) + ",");
    console.log("EvenMin=" + (hasMaxMinE ? evenMin.toFixed(2) : "No") + ",");
    console.log("EvenMax=" + (hasMaxMinE ? evenMax.toFixed(2) : "No"));
}
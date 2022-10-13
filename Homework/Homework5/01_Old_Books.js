function searchBook(params) {
    let book = params[0]
    let i = 1
    while (book != params[i]) {
        i++
        if (params[i] == "No More Books") {
            console.log("The book you search is not here!")
            console.log(`You checked ${i - 1} books.`)
            return
        }
    }
    console.log(`You checked ${i - 1} books and found it.`)
}
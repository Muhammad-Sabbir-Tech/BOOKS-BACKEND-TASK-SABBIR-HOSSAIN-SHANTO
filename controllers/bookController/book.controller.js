class BookController {
    constructor() { }

    // all books
    async allBooks(req, res) {
        res.send("books")
    }
}
module.exports = new BookController()
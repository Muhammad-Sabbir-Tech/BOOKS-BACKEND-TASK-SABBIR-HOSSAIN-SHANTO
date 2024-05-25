const mongoose = require('mongoose');
const bookService = require("./book.service")
const authorService = require("../authorController/author.service")

class BookController {
    constructor() { }

    // create
    async create(req, res) {
        // create transaction
        const session = await mongoose.startSession()

        try {
            // getting global parameter
            const { user_id } = req.user
            // variable for response
            const response = {
                status: true
            }
            // start transaction
            session.startTransaction()

            // check author existence
            const author = await authorService.findAuthor(req.body.author);
            // if author found
            if (author[0]) {
                // create book
                const book = await bookService.createBook({ ...req.body, created_by: user_id })
                // add the book to the author
                author[0].books.push(book._id);
                await book.save({ session })
                await author[0].save({ session })
                 // commit
                 session && await session.commitTransaction()

                // find book detail
                const book_detail = await bookService.findAll(book._id)
                // set response
                response.status = true
                response.message = "Book added successfully."
                response.data = book_detail[0] || null
            } else { // if author not found
                response.status = false
                response.message = "Author not found."
            }

            res.send(response)
        } catch (e) {
            session && await session.abortTransaction()
            res.status(500).send({
                status: false,
                error: e
            })
        }
    }

    // all books
    async allBooks(req, res) {
        try {
            // db operations
            const books = await bookService.findAll()
            // set response
            // variable for response
            const response = {}
            // set response
            response.status = true
            response.message = "Data fetched successfully."
            response.data = books

            res.send(response)

        } catch (e) {
            res.status(500).send({
                status: false,
                error: e
            })
        }
    }

    // find single book
    async findSingleBook(req, res) {
        try {
            // db operations
            const book = await bookService.findAll(req.params.id)

            // set response
            // variable for response
            const response = {}
            // set response
            response.status = true
            response.message = "Data fetched successfully."
            response.data = book[0] || null

            // console.log(book || "hi")

            res.send(response)

        } catch (e) {
            res.status(500).send({
                status: false,
                error: e
            })
        }
    }
}
module.exports = new BookController()
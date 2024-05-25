const mongoose = require('mongoose');
const bookService = require("./book.service")
const authorService = require("../authorController/author.service")

class BookController {
    constructor() { }

    // create
    async create(req, res) {
        try {

            // getting global parameter
            const { user_id } = req.user

            // variable for response
            const response = {
                status: true
            }

            // check author existence
            const author = await authorService.findAuthor(req.body.author);
            // create book
            const book = await bookService.createBook({ ...req.body, created_by: user_id })
            // add the book to the author
            author[0].books.push(book._id);
            author[0].save()
            // find book detail
            const book_detail = await bookService.findAll(book._id)

            // set response
            response.status = true
            response.message = "Book added successfully."
            response.data = book_detail[0] || null
            res.send(response)
        } catch (e) {
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
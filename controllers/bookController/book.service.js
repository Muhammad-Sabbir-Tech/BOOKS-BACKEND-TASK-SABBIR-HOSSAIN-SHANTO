const Book = require("../../models/Book")
const Author = require("../../models/Author")


class BookServcie {
    constructor() { }
    // create book
    createBook(bookCreateDto = { title: "", author: "", genres: [], publicationDate: new Date(), created_by: "" }) {
        // db operation
        return new Book({
            title: bookCreateDto.title,
            author: bookCreateDto.author,
            genres: bookCreateDto.genres,
            publicationDate: bookCreateDto.publicationDate,
            created_by: bookCreateDto.created_by,
        }).save()
    }

    // find all
    findAll(book_id) {
        return Book.find(book_id && { _id: book_id })
            .populate({
                path: "author",
                model: "Author",
                select: ["name", "birthdate"]
            })
            .populate({
                path: "created_by",
                model: "User",
                select: ["username", "role"]
            });
    }

}

module.exports = new BookServcie()
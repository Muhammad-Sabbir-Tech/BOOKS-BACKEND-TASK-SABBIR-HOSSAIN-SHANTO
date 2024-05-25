const Author = require("../../models/Author")

class AuthorService {
    constructor() { }

    // create author
    createAuthor(authorCreateDto = { name: "", birthdate: new Date(), created_by: "" }) {
        // db operation
        return new Author({ name: authorCreateDto.name, birthdate: authorCreateDto.birthdate, created_by: authorCreateDto.created_by }).save()
    }

    // find author
    findAuthor(author_id) {
        return Author.find(author_id && { _id: author_id })
            .populate({ path: "books", model: "Book", select: ["title", "genres", "publicationDate"] })
            .populate({ path: "created_by", model: "User", select: ["user_name", "role"] })
    }
}
module.exports = new AuthorService()
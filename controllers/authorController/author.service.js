const Author = require("../../models/Author")

class AuthorService {
    constructor() { }

    // create author
    createAuthor(authorCreateDto = { name: "", birthdate: new Date(), created_by: "" }) {
        // db operation
        return new Author({ name: authorCreateDto.name, birthdate: authorCreateDto.birthdate, created_by: authorCreateDto.created_by }).save()
    }

    // find by id
    findById(autho_id) {
        return Author.findById({ _id: autho_id }).populate({ path: "created_by", model: "User", select: ["user_name", "role"] })
    }

    // find author
    findAuthor() {
        return Author.find({}).populate({ path: "created_by", model: "User", select: ["user_name", "role"] })
    }
}
module.exports = new AuthorService()
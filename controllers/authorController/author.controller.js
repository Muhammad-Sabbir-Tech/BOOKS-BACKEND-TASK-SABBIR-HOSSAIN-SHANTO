const authorService = require("./author.service")

class AuthorController {
    constructor(props) {
    }
    // create author
    async createAuthor(req, res) {
        try {
            // getting global parameter
            const { user_id } = req.user
            // db operation
            const author = await authorService.createAuthor({ ...req.body, created_by: user_id })

            // variable for response
            const response = {}
            // if author created
            if (author) {
                // get author detail 
                const author_detail = await authorService.findById(author._id)
                // set response
                response.status = true
                response.message = "Author created successfully."
                response.author = author_detail

            } else { // if author doesn't create
                response.status = false
                response.message = "Author create failed."
            }
            res.send(response)
        } catch (e) {
            res.status(500).send(e)
        }
    }

    // find author
    async findAuthor(req, res) {
        try {
            // db operations
            const author = await authorService.findAuthor()
            // set response
            // variable for response
            const response = {}
            // set response
            response.status = true
            response.message = "Data fetched successfully."
            response.data = author

            res.send(response)

        } catch (e) {
            res.status(500).send(e)
        }
    }

    // find single author
    async findSingleAuthor(req, res) {
        try {
            // db operations
            const author = await authorService.findById(req.params.id)
            // set response
            // variable for response
            const response = {}
            // set response
            response.status = true
            response.message = "Data fetched successfully."
            response.data = author

            res.send(response)

        } catch (e) {
            res.status(500).send(e)
        }
    }

}

module.exports = new AuthorController()
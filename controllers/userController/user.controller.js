const sha1 = require('sha1');
const userService = require("./user.service")

class UserController {
    constructor(props) {
    }

    // register
    async register(req, res) {
        try {
            // db operation 
            const created_user = await userService.register({ ...req.body, hash_password: sha1(req.body.password) })
            // variable for response
            const response = {}
            // if user  registered 
            if (created_user) {
                response.status = true
                response.messeage = "User registered successfully."
            } else { // if registered failed
                response.status = false
                response.messeage = "User register failed."
            }
            // send response
            res.json(response)
        } catch (e) {
            res.status(500).json(e?.errorResponse?.code == 11000 ? {
                message: "User already exist",
                ...e
            } : e)
        }
    }

}

module.exports = new UserController()
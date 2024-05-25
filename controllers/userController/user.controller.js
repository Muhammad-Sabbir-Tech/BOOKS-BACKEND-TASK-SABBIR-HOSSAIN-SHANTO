const userService = require("./user.service")
var jwt = require('jsonwebtoken');

class UserController {
    constructor(props) {
    }

    // register
    async register(req, res) {
        try {
            // db operation 
            const created_user = await userService.register({ ...req.body })
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
            res.status(500).send(e?.errorResponse?.code == 11000 ? {
                status: false,
                message: "User already exist",
                ...e
            } : e)
        }
    }

    // user login
    async login(req, res) {
        try {
            // db operation
            const user = await userService.login(req.body)
            // variable for response
            const response = {}
            // if user found
            if (user) {
                // create token
                const token = jwt.sign({ user_id: user._id, role: user.role }, process.env.PRIVATE_KEY, { expiresIn: '30d' });
                // set cookie
                res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
                // set response
                response.status = true
                response.message = "Login successfully."
            } else { // if user doesn't match
                response.status = false
                response.message = "Invalid credentials."
            }
            res.send(response)
        } catch (e) {
            res.status(500).send({
                status: false,
                error: e
            })
        }
    }

    // logout
    logout(req, res, next) {
        // cookie clear
        res.clearCookie('token');
        // variable for response
        const response = {}
        // set response
        response.status = true
        response.message = "Logout successfully"

        res.send(response)
    }

}

module.exports = new UserController()
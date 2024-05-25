const sha1 = require('sha1');
const User = require("../../models/User")

class UserService {
    constructor(props) {
    }

    // register
    register(userCreateDto = { full_name: "", contact_no: "", user_name: "", password: "", role: "" }) {
        // db operation
        return new User({
            full_name: userCreateDto.full_name,
            contact_no: userCreateDto.contact_no,
            user_name: userCreateDto.user_name,
            password: sha1(userCreateDto.password + ""),
            role: userCreateDto.role
        }).save()
    }

    // login
    login(loginDto = { user_name: "", password: "" }) {
        // db operation
        return User.findOne({ user_name: loginDto.user_name, password: sha1(loginDto.password) })
    }

}

module.exports = new UserService()
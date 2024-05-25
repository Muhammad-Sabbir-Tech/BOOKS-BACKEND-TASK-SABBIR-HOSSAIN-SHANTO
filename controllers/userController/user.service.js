const User = require("../../models/User")
class UserService {
    constructor(props) {
    }

    // register
    register(userCreateDto = { full_name: "", contact_no: "", user_name: "", hash_password: "", role: "" }) {
        // db operation
        return new User({
            full_name: userCreateDto.full_name,
            contact_no: userCreateDto.contact_no,
            user_name: userCreateDto.user_name,
            password: userCreateDto.hash_password,
            role: userCreateDto.role
        }).save()
    }

}

module.exports = new UserService()
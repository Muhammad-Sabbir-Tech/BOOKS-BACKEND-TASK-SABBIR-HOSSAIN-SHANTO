const route = require('express').Router()
const userController = require("../controllers/userController/user.controller")

// route initialize
route.post("/register", userController.register)
route.post("/login", userController.login)

// module expoerts
module.exports = route
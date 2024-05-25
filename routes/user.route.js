const route = require('express').Router()
const userController = require("../controllers/userController/user.controller")

// route initialize
route.post("/register", userController.register)
route.post("/login", userController.login)
route.post("/logout", userController.logout)

// module expoerts
module.exports = route
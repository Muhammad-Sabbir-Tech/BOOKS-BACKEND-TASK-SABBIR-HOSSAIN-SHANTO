const route = require("express").Router()
const bookController = require("../controllers/bookController/book.controller")
const auth = require("../middlewares/auth")

// route initialize
route.post("/allBooks", auth(), bookController.allBooks)

// module exports
module.exports = route
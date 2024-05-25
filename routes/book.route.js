const route = require("express").Router()
const bookController = require("../controllers/bookController/book.controller")
const auth = require("../middlewares/auth")

// route initialize
route.get("/", auth(), bookController.allBooks)
route.get("/:id", auth(), bookController.findSingleBook)
route.post("/create", auth("admin"), bookController.create)

// module exports
module.exports = route
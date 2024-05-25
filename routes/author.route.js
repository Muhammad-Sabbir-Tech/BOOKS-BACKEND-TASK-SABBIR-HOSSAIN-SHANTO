const route = require("express").Router()
const authorController = require("../controllers/authorController/author.controller")
const auth = require("../middlewares/auth")

// route initialize
route.get("/", authorController.findAuthor)
route.get("/:id", authorController.findSingleAuthor)
route.post("/create", auth("admin"), authorController.createAuthor)

// module exports
module.exports = route
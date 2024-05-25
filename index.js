var express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
var cors = require('cors')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const userRoute = require("./routes/user.route")
const bookRoute = require("./routes/book.route")


var app = express()
// we configure cors origin here as per our need
app.use(cors())
// for parse cookie
app.use(cookieParser())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// connect with mongo db
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected successfully"))
    .catch((e) => console.log(e))

// root route initialize
app.get('/', async function (req, res) {
    res.send("Welcome to books backend task.")
})

// routes
app.use("/api/user", userRoute)
app.use("/api/book", bookRoute)

// server starts here
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started successfully with the port of ${port}`)
})

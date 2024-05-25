var express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config()


var app = express()
// we configure cors origin here as per our need
app.use(cors())
// for parse cookie
app.use(cookieParser())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// root route initialize
app.get('/', async function (req, res) {
    res.send("Welcome to books backend task.")
})

// server starts here
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started successfully with the port of ${port}`)
})

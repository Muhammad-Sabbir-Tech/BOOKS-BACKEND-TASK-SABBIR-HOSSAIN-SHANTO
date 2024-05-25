const mongoose = require("mongoose")
const { Schema, model } = mongoose

// create schema
const userSchema = new Schema({
    full_name: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true,
        unique: true
    },
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})

module.exports = model("User", userSchema)
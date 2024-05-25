const mongoose = require("mongoose")
const { Schema, model } = mongoose

// create schema
const userSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    contact_no: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
}, { timestamps: true })

module.exports = model("User", userSchema)
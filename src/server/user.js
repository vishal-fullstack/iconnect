let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    gender: String,
    contact: String,
    address: String
})

module.exports = mongoose.model('User', userSchema)
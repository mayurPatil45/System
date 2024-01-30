const mongoose = require('mongoose')
const userDetails = new mongoose.Schema({
    username: String,
    password: String,
    email: String
})

const User = mongoose.model('User', userDetails)
module.exports = User
const mongoose = require('mongoose')
const Entry = require('./entries.js')

const userSchema = new mongoose.Schema({
     name: String,
     username: { type: String, unique: true, required: true },
     password: { type: String, required: true },
     bio: String,
     profilePic: String,
     entries: [Entry.schema]
})

const User = mongoose.model('User', userSchema)

module.exports = User;

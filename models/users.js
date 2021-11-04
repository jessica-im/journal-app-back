const mongoose = require('mongoose')
const Entry = require('./entries.js')

const usersSchema = mongoose.Schema({
     name: String,
     username: { type: String, unique: true, required: true },
     password: String,
     bio: String,
     entries: [Entry.schema]
})

const User = mongoose.model('User', userSchema)

module.exports = User;

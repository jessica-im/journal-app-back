const mongoose = require('mongoose')

const entrySchema = new mongooseSchema({
     date: String,
     title: String,
     log: String,
     share: Boolean
})

const Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry;

// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const cors = require('cors')
require('dotenv').config()

// Port - display to user
const PORT = process.env.PORT || 3003

// Database
const PROJECT3_DB = process.env.PROJECT3_DB

mongoose.connect(PROJECT3_DB)

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
     res.send('hi')
})

app.listen(PORT, () => {
     console.log('hello, listening on: ', PORT);
})

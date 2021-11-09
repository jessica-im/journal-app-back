/////////////////////////////////
//        Dependencies
/////////////////////////////////

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const cors = require('cors')
require('dotenv').config()

/////////////////////////////////
//         Database
/////////////////////////////////

// Port - display to user
const PORT = process.env.PORT || 3003

// Database
const PROJECT3_DB = process.env.PROJECT3_DB

const db = mongoose.connection
mongoose.connect(PROJECT3_DB)

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

/////////////////////////////////
//         Controllers
/////////////////////////////////

const entriesController = require('./controllers/entries.js')
const usersController = require('./controllers/users.js')

/////////////////////////////////
//         Middleware
/////////////////////////////////

app.use(express.json())
app.use(cors())
app.use('/entries', entriesController)
app.use('/users', usersController)

/////////////////////////////////
//           Routes
/////////////////////////////////

app.get('/', (req, res) => {
     res.redirect('/entries')
})

/////////////////////////////////
//          Listener
/////////////////////////////////

app.listen(PORT, () => {
     console.log('hello, listening on: ', PORT);
})

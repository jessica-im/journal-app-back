// const express = require('express')
// const mongoose = require('mongoose')
// const router = express.Router()
// const bcrypt = require('bcrypt')
// const User = require('../models/users.js')
//
// router.post('/', (req, res) => {
//      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
//      User.create(req.body, (err, newUser) => {
//           res.json(newUser)
//      })
// })
//
// router.get('/', (req, res) => {
//      User.find({}, (err, allUsers) => {
//           res.json(allUsers)
//      })
// })
//


// router.get('/', (req, res) => {
//      res.send('hihihi')
// })
//
// router.get('/', (req, res) => {
//      User.find({}, (err, allUsers) => {
//           res.json(allUsers)
//      })
// })
//
// router.post('/', (req, res) => {
//      User.create(req.body, (err, newUser) => {
//           res.json(newUser)
//      })
// })
//
// router.delete('/:id', (req, res) => {
//      User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
//           res.json(deletedUser)
//      })
// })
//
// router.put('/:id', (req, res) => {
//      User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser) => {
//           res.json(updatedUser)
//      })
// })
//
// // Deleting Author Deletes Associated Articles
// router.delete('/:id', (req, res) => {
//      User.findByIdAndRemove(req.params.id, (err, foundUser) => {
//           const entryIds = []
//           for (let i = 0; i < foundUser.articles.length; i++) {
//                entryIds.push(foundUser.entries[i]._id)
//           }
//           Entry.remove(
//                {
//                     _id: {
//                          $in: entryIds
//                     }
//                },
//                (err, data) => {
//                     res.json(foundUser)
//                }
//           )
//      })
// })

// module.exports = router;

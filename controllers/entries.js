const express = require('express')
const router = express.Router()
const Entry = require('../models/entries.js')
// const User = require('../models/users.js')


router.get('/', (req, res) => {
     Entry.find({}, (err, foundEntries) => {
          res.json(foundEntries)
     })
})

router.post('/', (req, res) => {
     Entry.create(req.body, (err, createdEntry) => {
          res.json(createdEntry)
     })
})

router.delete('/:id', (req, res) => {
     Entry.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
          res.json(deletedEntry)
     })
})

router.put('/:id', (req, res) => {
     Entry.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedEntry) => {
          res.json(updatedEntry)
     })
})

// // // Follow relationship model md w06d03 instructor notes
//
// // // Display Authors on New Article Page
// // // Find all authors when rendering new page
// router.get('/', (req, res) => {
//      User.find({}, (err, allUsers) => {
//           res.json(allUsers)
//      })
// })
//
// // // Create new Article Pushes Copy onto Author's Article Array
// router.post('/', (req, res) => {
//      User.findById(req.body.userId, (err, foundUser) => {
//           Entry.create(req.body, (err, createdEntry) => {
//                foundUser.entries.push(createdEntry)
//                foundUser.save((err, data) => {
//                     res.json(createdEntry)
//                })
//           })
//      })
// })
//
//
// // // Display Author with Link on Article Show Page
// router.get('/:id', (req, res) => {
//      Entry.findById(req.params.id, (err, foundEntries) => {
//           User.findOne({'articles._id':req.params.id}, (err, foundUser) => {
//                res.json(foundUser)
//           })
//      })
// })
//
//
// // // Deleting an Article Updates an Author's Articles List
// // // Not sure what to pass in res.json...
// router.delete('/:id', (req, res) => {
//      Entry.findByIdAndRemove(req.params.id, (err, foundEntry) => {
//           User.findOne({'entries._id':req.params.id}, (err, foundUser) => {
//                foundUser.entries.id(req.params.id).remove()
//                foundUser.save((err, data) => {
//                     res.json(foundEntry)
//                })
//           })
//      })
// })
//
//
// // // Updating an Article Updates An Author's Articles List
// router.put('/:id', (req, res) => {
//      Entry.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedEntry) => {
//           User.findOne({'entries._id':req.params.id}, (err, foundUser) => {
//                if(foundUser._id.toString() !== req.body.userId){
//                     foundUser.entries.id(req.params.id).remove();
//                     foundUser.save((err, savedFoundUser) => {
//                          User.findById(req.body.userId, (err, newUser) => {
//                               newUser.entries.push(updatedEntries)
//                               newUser.save((err, savedNewUser) => {
//                                    res.json(savedNewUser)
//                               })
//                          })
//                     })
//                } else {
//                     foundUser.entries.id(req.params.id).remove()
//                     foundUser.entries.push(updatedEntry)
//                     foundUser.save((err, data) => {
//                          res.json(updatedEntry)
//                     })
//                }
//           })
//      })
// })
//
// // Change Author when Editing an Article
// router.get('/:id/edit', (req, res) => {
//      Entry.findById(req.params.id, (err, foundEntry) => {
//           User.find({}, (err, allUsers) => {
//                User.findOne({'entries._id':req.params.id}, (err, foundEntryAuthor) => {
//                     res.json(foundEntryAuthor)
//                })
//           })
//      })
// })

module.exports = router;

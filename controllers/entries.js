const express = require('express')
const router = express.Router()
const Entry = require('../models/entries.js')
const User = require('../models/users.js')

// Entry

// // W06D03 Relationship Model: Create new Article Pushes Copy onto Author's Article Array
// // The post route that should take the user ID, creates an entry, and takes the user and pushes the entry into their schema?
router.post('/', (req, res) => {
     User.findById(req.body.userId, (err, foundUser) => {
          Entry.create(req.body, (err, createdEntry) => {
               foundUser.entries.push(createdEntry) //only on show page not index because req.body
               foundUser.save((err, data) => { // data is updated session info, the current user includes projects and what the index page would be because it's being pulled fromthe user schema so the data is what was changed. if logged out / logged it would pull new data.
                    res.json(createdEntry)
               })
          })
     })
})


// // Get route that finds and displays are entries
router.get('/', (req, res) => {
     Entry.find({}, (err, foundEntries) => {
          res.json(foundEntries)
     })
})

// // W06D03 Relationship Model: Display Authors on New Article Page: Find all authors when rendering new page
// // Get route that finds all users and displays users and the empty object signifies no querying on the find
// router.get('/', (req, res) => {
//      User.find({}, (err, allUsers) => {
//           res.json(allUsers)
//      })
// })

// // W06D03 Relationship Model: Display Author with Link on Article Show Page
// // req.params is to return parameters in matched route /:id
// // Get route that takes entry ID and finds the associated user?
router.get('/:id', (req, res) => {
     Entry.findById(req.params.id, (err, foundEntries) => {
          User.findOne({'entries._id':req.params.id}, (err, foundUser) => {
               res.json(foundUser)
          })
     })
})

// // W06D03 Relationship Model: Change Author when Editing an Article
// // Get route that takes entry ID and searches through all users to find the user tied to that entry?
router.get('/:id/edit', (req, res) => {
     Entry.findById(req.params.id, (err, foundEntry) => {
          User.find({}, (err, allUsers) => {
               User.findOne({'entries._id':req.params.id}, (err, foundEntryAuthor) => {
                    res.json(foundEntryAuthor)
               })
          })
     })
})

// // Post route that will create a new entry
// router.post('/', (req, res) => {
//      Entry.create(req.body, (err, createdEntry) => {
//           res.json(createdEntry)
//      })
// })



// // Put route that edits an entry by finding by entry ID and updating it
// router.put('/:id', (req, res) => {
//      Entry.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedEntry) => {
//           res.json(updatedEntry)
//      })
// })

// // W06D03 Relationship Model: Updating an Article Updates An Author's Articles List
// // Put route that finds the entry by ID and updates it, finds the entry
router.put('/:id', (req, res) => {
     Entry.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedEntry) => {
          User.findOne({'entries._id':req.params.id}, (err, foundUser) => {
               if(foundUser._id.toString() !== req.body.userId){
                    foundUser.entries.id(req.params.id).remove();
                    foundUser.save((err, savedFoundUser) => {
                         User.findById(req.body.userId, (err, newUser) => {
                              newUser.entries.push(updatedEntries)
                              newUser.save((err, savedNewUser) => {
                                   res.json(savedNewUser)
                              })
                         })
                    })
               } else {
                    foundUser.entries.id(req.params.id).remove()
                    foundUser.entries.push(updatedEntry)
                    foundUser.save((err, data) => {
                         res.json(updatedEntry)
                    })
               }
          })
     })
})

// // Delete route that will find entry by ID and remove it
// router.delete('/:id', (req, res) => {
//      Entry.findByIdAndRemove(req.params.id, (err, deletedEntry) => {
//           res.json(deletedEntry)
//      })
// })

// // W06D03 Relationship Model: Deleting an Article Updates an Author's Articles List
// Not sure what to pass in res.json...
router.delete('/:id', (req, res) => {
     Entry.findByIdAndRemove(req.params.id, (err, foundEntry) => {
          User.findOne({'entries._id':req.params.id}, (err, foundUser) => {
               foundUser.entries.id(req.params.id).remove()
               foundUser.save((err, data) => {
                    res.json(foundEntry)
               })
          })
     })
})


module.exports = router;

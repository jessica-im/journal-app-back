// const express = require('express')
// const bcrypt = require('bcrypt')
// const router = express.Router()
// const User = require('../models/users.js')
//
// router.get('/', (req, res) => {
//      if (req.session.currentUser) {
//           User.findById(req.session.currentUser._id, (err, foundUser) => {
//                if (err) {
//                     console.log(err);
//                }
//                res.json(foundUser)
//           })
//      } else {
//           res.json(req.session)
//      }
// })
//
//
// router.post('/', (req, res) => {
//      User.findOne({username: req.body.username}, (err, foundUser) => {
//           if (err) {
//                res.json({err: "oops the db had a problem" })
//           } else if (!foundUser) {
//                res.json({err: "no user found"})
//           } else {
//                if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//                     req.session.currentUser = foundUser
//                     res.json(foundUser)
//                } else {
//                     res.json({err: "password does not match"})
//                }
//           }
//      })
// })
//
// router.delete('/', (req, res) => {
//      req.session.destroy(() => {
//           res.json("session logged out")
//      })
// })
//
// module.exports = router;

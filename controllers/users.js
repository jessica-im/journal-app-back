const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users.js')

// router.get('/', (req, res) => {
//      res.send('hihihi')
// })

// router.get('/', (req, res) => {
//      res.json('Hello World')
// })

router.get('/', (req, res) => {
     User.find({}, (err, allUsers) => {
          res.json(allUsers)
     })
})

router.post('/createaccount', (req, res) => {
     req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
     User.create(req.body, (err, createdUser) => {
          if(err){
               console.log(err);
               res.json(err.message)
          } else {
               console.log('user is created', createdUser);
               res.json(createdUser)
          }
     })
});


router.put('/login', (req, res) => {
     console.log(req.body);
     User.findOne({username: req.body.username}, (err, foundUser) => {
          if(err) {
               res.json('Oops, there was an error. Please try again')
          } else {
               if(!foundUser){
                    res.json('Username and password do not match. Please try again.')
               } else if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                    res.json({username: foundUser.username})
               } else {
                    res.json('Username and password do not match. Please try again.')
               }
          }
     })
});


module.exports = router;

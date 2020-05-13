var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://moussa:keunzeune@db/tuto-docker-db';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// create mongoose model
const User = mongoose.model('User', userSchema);


router.get('', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).send(error);
    }
    return res.status(200).json(users);
  });
});


router.post('', (req, res) => {
  let user = new User({
    name: req.body.name,
    age: req.body.age
  });

  user.save(error => {
    if (error)
      return res.status(500).send(error);

    return res.status(201).send({
      message: 'User created successfully'
    });
  });
});


module.exports = router;

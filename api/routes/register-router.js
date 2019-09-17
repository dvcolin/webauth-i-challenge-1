const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Users = require('../models/user-model.js');


// REGISTER USER
router.post('/', validateUser, (req, res) => {
    const {username, password} = req.body;
    const hash = bcrypt.hashSync(password, 12);

    Users.add({ username, password: hash })
    .then(added => {
        res.status(201).json(added);
    })
    .catch(err => {
        res.status(500).json({ error: 'Server error' });
        console.log(err)
    })
})

// MIDDLEWARE

function validateUser(req, res, next) {
    const { username, password } = req.body;

    if (username && password) {
        next();
    } else {
        res.status(400).json({ message: 'Must provide a username and password to register.' });
    }
}

module.exports = router;
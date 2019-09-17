const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');



const Users = require('../models/user-model.js');


// USER LOGIN
router.post('/', validateCredentials, (req, res) => {
    const { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        req.session.user = user;
        res.status(200).json({ message: `Welcome ${user.username}!` })
    })
    .catch(err => {
        console.log(err);
    })
})


// MIDDLEWARE
function validateCredentials(req, res, next) {
    const { username, password } = req.body;

    if(username && password) {
        Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                next();
            } else {
                res.status(401).json({ message: 'Invalid credentials' })
            }
        })
    } else {
        res.status(400).json({ message: 'No credentials provided' });
    }
}



module.exports = router;
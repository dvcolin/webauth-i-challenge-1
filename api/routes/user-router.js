const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const restricted = require('../auth/restricted-middleware.js');

const Users = require('../models/user-model.js');

// GET USERS (RESTRICTED)
router.get('/', restricted, (req, res) => {
    Users.get()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ error: 'Could not retrieve user data.' });
    })
})



module.exports = router;
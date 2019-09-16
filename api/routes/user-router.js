const express = require('express');
const router = express.Router();

const Users = require('../models/user-model.js');

router.get('/', (req, res) => {
    Users.get()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ error: 'Could not retrieve user data.' });
    })
})



module.exports = router;
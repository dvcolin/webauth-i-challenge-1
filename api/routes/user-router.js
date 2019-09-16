const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>USERS GO HERE</h1>');
})



module.exports = router;
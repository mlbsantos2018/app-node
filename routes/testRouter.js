const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Server is Running..."
    });
});

module.exports = router;
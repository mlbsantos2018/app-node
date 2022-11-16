const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Server OK, No problem found..."
    });
});

router.post('/', (req, res, next) => {
    const {nome, idade} = req.body;
    const pessoa = [nome, idade];
    res.status(200).send(pessoa);
});

module.exports = router;
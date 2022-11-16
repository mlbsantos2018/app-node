const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

//const products = [];

//Return all products
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Products returned successfully"
    });
});

//Return product by Id
router.get('/:id', (req, res, next) => {
    res.status(200).send({
        message: "Product returned successfully"
    });
});

//Add product
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: "Product created successfully"
    });
});

router.delete('/:id', (req, res, next) =>{
    res.status(200).send({
        message: "Product removed successfully"
    });
});

module.exports = router;
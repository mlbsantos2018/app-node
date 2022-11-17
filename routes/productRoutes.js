const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

let products = [
    {
        "id":123,
        "name": "Smartphone Xiaomi note 9 pro"
    },
    {
        "id":456,
        "name": "Smartphone Xiaomi note 7"
    },
    {
        "id":789,
        "name": "Smartphone Xiaomi note 6"
    }
];


//Return all products
router.get('/', (req, res, next) => {
    console.log("Products returned successfully");
    return res.status(200).json(products);
});

//Return product by Id
router.get('/:id', (req, res, next) => {

    let objectReturn;
    let statusCode;
    let productExist = false;

    const productId = req.params.id;

    products.forEach( product => {
        if(product.id == productId){
            objectReturn = product;
            productExist = true;
            statusCode = 200;
        }
    });

    if(!productExist){
        objectReturn = { message: "Product not found"};
        statusCode = 404;
    }
    return res.status(statusCode).json(objectReturn);
});

//Add product
router.post('/', (req, res, next) => {
    
    const product = {
        id: req.body.id,
        name: req.body.name
    };

    products.push(product);
    console.log("Product created successfully");

    return res.status(201).json(product);

});

//Delete product by Id
router.delete('/:id', (req, res, next) =>{
    
    let objectReturn;
    let statusCode;
    let productExist = false;
    const productId = req.params.id;

    products.forEach( product => {
        if(product.id == productId){
            const index = products.indexOf(product);
            if (index > -1) {
                products.splice(index, 1);
                objectReturn = {
                    message: "Product removed successfully"
                };
                statusCode = 200;
                productExist = true;
            }
        }
    });

    if(!productExist){
        objectReturn = {
            message: "Product not found"
        }
        statusCode = 404;
    }

    return res.status(statusCode).json(objectReturn);

});

module.exports = router;
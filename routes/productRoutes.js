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


router.get('/', (req, res, next) => {
   
    let responseBody;

    console.log("Searching all products");
    if(products.length ===0){
        console.log("No products found");
        responseBody = {
            message: "No products found"
        }
    
    }else{
        console.log("Successfully found products");
        responseBody = products;
    }
    return res.status(200).json(responseBody);
});

router.get('/:id', (req, res, next) => {

    let responseBody;
    let statusCode;
    let productExist = false;

    const productId = req.params.id;

    console.log("Searching all products");
    products.forEach( product => {
        if(product.id == productId){
            responseBody = product;
            productExist = true;
            statusCode = 200;
        }
    });

    if(!productExist){
        responseBody = { message: "Product not found"};
        statusCode = 404;
    }
    return res.status(statusCode).json(responseBody);
});

router.post('/', (req, res, next) => {
    
    const product = {
        id: req.body.id,
        name: req.body.name
    };

    products.push(product);
    console.log("Products successfully created");

    return res.status(201).json(product);

});

router.delete('/:id', (req, res, next) =>{
    
    let responseBody;
    let statusCode;
    let productExist = false;
    const productId = req.params.id;

    console.log("Searching all products");
    products.forEach( product => {
        if(product.id == productId){
            const index = products.indexOf(product);
            if (index > -1) {
                products.splice(index, 1);
                responseBody = {
                    message: "Product successfully removed"
                };
                statusCode = 200;
                productExist = true;
            }
        }
    });

    if(!productExist){
        responseBody = {
            message: "Product not found"
        }
        statusCode = 404;
    }

    return res.status(statusCode).json(responseBody);
});

router.put('/', (req, res, next) => {
    let responseBody;
    let statusCode;
    let productExist = false;

    console.log("Searching all products");
    products.forEach( product => {
        if(product.id == req.body.id){

            const index = products.indexOf(product);

            const productUpdated = {
                id: req.body.id,
                name: req.body.name
            };
        
            products[index] = productUpdated;
            console.log("Product successfully updated");

            responseBody = productUpdated;
            productExist = true;
            statusCode = 200;
        }
    });

    if(!productExist){
        responseBody = {
            message: "Product not found"
        }
        statusCode = 404;
    }

    res.status(statusCode).json(responseBody);
});

module.exports = router;
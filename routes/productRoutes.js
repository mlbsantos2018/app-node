const express = require('express');
const res = require('express/lib/response');
const Product = require('../src/model/Product');
const ProductService = require('../src/service/ProductService')


const productService = new ProductService();

const router = express.Router();

router.get('/', (req, res, next) => {
    let response = productService.getAll()
    console.log(response.statusCode);
    return res.status(response.statusCode).json(response.body);
});

router.get('/:id', (req, res, next) => {
    let product = new Product(req.params.id, req.body.name, req.body.price);
    let response = productService.getById(product);
    return res.status(response.statusCode).json(response.body);
});

router.post('/', (req, res, next) => {
    let product = new Product(req.body.id, req.body.name, req.body.price);
    let response = productService.add(product);
    return res.status(response.statusCode).json(response.body);
});

router.delete('/:id', (req, res, next) =>{
    let product = new Product(req.params.id, req.body.name, req.body.price);
    let response = productService.delete(product);
    return res.status(response.statusCode).json(response.body);
});

router.put('/', (req, res, next) => {
    let product = new Product(req.body.id, req.body.name, req.body.price);
    let response = productService.update(product);
    return res.status(response.statusCode).json(response.body);
});

module.exports = router;
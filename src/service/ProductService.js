const { response } = require("express");
const DatabaseMock = require('../infra/DatabaseMock');
const database = new DatabaseMock();
const products = database.getDatabase();


class ProductService{
    
    constructor(){
        this.products = products;
    }   

    
    add(product){
        products.push(product);
        let response = {
            body: product,
            statusCode: 200
        }
        console.log("Product successfully created");
        return response;
    };


    delete(product){

        let response;
        let productExist = false;

        console.log("Searching all products");

        products.forEach( currentProduct => {
            if(currentProduct.id == product.id){

                const index = products.indexOf(currentProduct);

                if (index > -1) {

                    products.splice(index, 1);
                    console.log("Product successfully removed");

                    response = {
                        body: {message: "Product successfully removed"},
                        statusCode: 200
                    };
                    productExist = true;
                }
            }
        });

        if(!productExist){
            response = {
                body: {message: "Product not found"},
                statusCode: 404
            }
        }
        return response;
    };


    getAll(){
        let response;

        console.log("Searching all products");
        if(products.length ===0){
            console.log("No products found");
            response = {
                body: {message:"No products found"},
                statusCode: 404 
            }
        
        }else{
            console.log("Successfully found products");
            response = {
                body: this.products,
                statusCode: 200
            }    
        }
        return response;
    }


    getById(product){
        let response;
        let productExist = false;
    
        console.log("Searching all products");
        products.forEach( currentProduct => {
            if(currentProduct.id == product.id){
                console.log("Product found successfully");
                response = {
                    body: currentProduct,
                    statusCode: 200
                }
                productExist = true;
            }
        });
    
        if(!productExist){
            response = {
                body: {message: "Product not found"},
                statusCode: 404
            }
        }
        return response;
    };

    update(product){
        let response;
        let productExist = false;
    
        console.log("Searching all products");
        products.forEach( currentProduct => {
            if(product.id == currentProduct.id){
    
                const index = products.indexOf(currentProduct);
  
                products[index] = product;
                console.log("Product successfully updated");
    
                response = {
                    body: product,
                    statusCode: 200
                };
                productExist = true;
            }
        });
    
        if(!productExist){
            response = {
                body: {message: "Product not found"},
                statusCode: 404
            };
        }
        return response;
    };

}

module.exports = ProductService
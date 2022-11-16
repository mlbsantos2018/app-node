const express = require('express');
const morgan = require('morgan');
const app = express();

const testRouter = require('./routes/testRouter');
const productRoutes = require('./routes/productRoutes');

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/products', productRoutes);
app.use('/test', testRouter);

app.use((req, res, next) => {
    const erro = new Error('Path not found');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    });
});

module.exports = app;
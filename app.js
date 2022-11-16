const express = require('express');
const app = express();
const morgan = require('morgan');
const testRouter = require('./routes/testRouter');
const productRoutes = require();

app.use(express.json());
app.use(morgan('dev'));


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
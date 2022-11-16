const express = require('express');
const app = express();
const morgan = require('morgan');
const testRouter = require('./routes/testRouter');

app.use(express.json());
app.use(morgan('dev'));
app.use('/test', testRouter);

module.exports = app;
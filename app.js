const express = require('express');
const app = express();
const testRouter = require('./routes/testRouter');

app.use('/test', testRouter);

module.exports = app;
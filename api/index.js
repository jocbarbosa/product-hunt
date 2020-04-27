const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();


mongoose.connect("mongodb://localhost:27017/nodeapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./src/models/Product');


app.get('/', (request, response) => {
    response.json({
        message: 'teste'
    })
});

app.listen(3333);
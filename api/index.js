require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.STRING_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/models/');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT);
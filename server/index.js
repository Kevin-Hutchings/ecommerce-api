const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

app.get('/api/products', getProducts);

app.get('/api/products/:id', getProduct);

app.listen(4242, () => console.log('Listening on port 4242'));
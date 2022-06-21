const express = require('express');
const { getProducts } = require('../Services/ProductService');

const productRouter = express.Router();

// This becomes the file with all you product routes
productRouter.get('/get-prodcuts', () => {
    console.log(getProducts());
});

module.exports = productRouter;


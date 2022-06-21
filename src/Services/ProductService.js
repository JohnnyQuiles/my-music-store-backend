const { fetchProducts } = require("../Models/ProductModel");

const getProducts = () => {
    // All of the logic on how to get products

    // fetches data from database:
    const products =  fetchProducts();
    return products;
}

module.exports = {
    getProducts,
}
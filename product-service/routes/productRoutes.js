const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create product
router.post('/', productController.createProduct);

// Get all products
router.get('/', productController.getProducts);

// Get product by ID
router.get('/:id', productController.getProductById);

module.exports = router;

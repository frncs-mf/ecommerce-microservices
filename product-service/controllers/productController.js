const Product = require('../models/Product');

// Create new product
exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const Order = require('../models/Order'); // Import your Order model
const Product = require('../models/Product'); // Import the Product model

const createOrder = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        // Check if the product exists in the database
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(400).json({ error: 'Product not found' });
        }

        // Create the order
        const order = new Order({ userId, productId, quantity });
        await order.save();

        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { createOrder };

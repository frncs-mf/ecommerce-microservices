const mongoose = require('mongoose');
const Order = require('../models/Order');
const Product = require('../models/Product');

// Create Order Function
exports.createOrder = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        // Convert productId to ObjectId (if it isn't one already)
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: 'Invalid productId format' });
        }

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ error: 'Product not found' });

        const totalAmount = product.price * quantity;

        const order = new Order({
            userId,
            productId,
            quantity,
            totalAmount,
        });

        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

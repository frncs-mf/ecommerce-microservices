// orderRoutes.js
const express = require('express');
const { createOrder } = require('../controllers/orderController'); // Make sure the function is imported correctly
const router = express.Router();

// POST endpoint to create an order
router.post('/', createOrder); // Pass the function handler directly

module.exports = router;

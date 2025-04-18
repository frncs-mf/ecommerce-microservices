const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Login User (for simplicity, we just check username)
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(400).json({ message: 'Invalid credentials' });
    }
});

// Get User Details
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;

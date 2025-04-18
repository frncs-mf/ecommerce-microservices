const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes'); // Correctly use the imported routes

const app = express();

// Middleware
app.use(bodyParser.json()); // Use bodyParser to parse JSON bodies

// Use the order routes
app.use('/orders', orderRoutes);

// MongoDB connection setup
mongoose.connect('mongodb+srv://francisformentera29:OF3W9g7PMzMgra5k@cluster0.qqulfer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB Atlas for Order Service'))
    .catch(err => console.log(err));

// Start the server
app.listen(3003, () => {
    console.log('Server running on port 3003');
});

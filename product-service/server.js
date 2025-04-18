const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://francisformentera29:OF3W9g7PMzMgra5k@cluster0.qqulfer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas for Product Service'))
    .catch((err) => console.log(err));

// Use the productRoutes for routes under /api/products
app.use('/api/products', productRoutes);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Product Service running on port ${PORT}`);
});

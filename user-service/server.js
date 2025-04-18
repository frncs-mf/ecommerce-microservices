const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Replace this with your MongoDB Atlas URI
mongoose.connect('mongodb+srv://francisformentera29:OF3W9g7PMzMgra5k@cluster0.qqulfer.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB Atlas for User Service'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});

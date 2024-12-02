const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express App
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/new')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

// Pet Schema
const PetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    area: { type: String, required: true },
    justification: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    type: { type: String, required: true },
    filename: { type: String, required: true },
    status: { type: String, required: true }
}, { timestamps: true });

const Pet = mongoose.model('Pet', PetSchema);

// Routes
app.post('/addPet', async (req, res) => {
    console.log('request recieved ',req.body)
    try {
        const newPet = new Pet(req.body);
        await newPet.save();
        res.status(200).send('Pet added successfully!');
    } catch (error) {
        res.status(500).json({ error: 'Failed to add pet' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

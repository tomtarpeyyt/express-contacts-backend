require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const userRoutes = require('./src/routes/userRoutes');
const contactRoutes = require('./src/routes/contactRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(config.dbUrl)
.then(() => {
    console.log('connected to MongoDB');
})
.catch((err) => {
    console.error('Error connection to MongoDB', err);
});

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => {
    res.json('time2code!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

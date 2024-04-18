const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, require: true },
    email: { type: String },
    telephone: { type: String },
    address: { type: String },
    category: { type: String, enum: [ 'individual', 'business' ], require: true }
});

module.exports = mongoose.model('Contact', contactSchema);
const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
    try {
        const { name, email, telephone, address, category } = req.body;
        const newContact = new Contact({
            user: req.user._id,
            name,
            email,
            telephone,
            address,
            category
        });

        console.log('new contact:', newContact);

        const created = await newContact.save();
        console.log('contact', created);
        res.status(201).json({ message: 'Contact created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
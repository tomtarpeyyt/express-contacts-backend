const Contact = require('../models/Contact');

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user._id });
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}


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

exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findOne({ _id: req.params.id, user: req.user._id });

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
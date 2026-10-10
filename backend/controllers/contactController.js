import Contact from '../models/Contact.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();
    console.log('Contact query saved:', contact);
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error('Error saving contact query:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    console.log('Fetched contacts:', contacts);
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, response } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      id,
      { status, response, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact query not found' });
    }
    console.log('Updated contact:', contact);
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    console.error('Error updating contact:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact query not found' });
    }
    console.log('Deleted contact:', contact);
    res.status(200).json({ success: true, message: 'Contact query deleted' });
  } catch (error) {
    console.error('Error deleting contact:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  //#swagger.tags=['Contacts']
  try {
    const result = await mongodb.getDb().db().collection('contacts').find();
    const contacts = await result.toArray();

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSingle = async (req, res) => {
  //#swagger.tags=['Contacts']
  try {
    const contact = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .findOne({ _id: ObjectId.createFromHexString(req.params.id) });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createContact = async (req, res) => {
  //#swagger.tags=['Contacts']
  //Create a contact
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  try {
    await mongodb.getDb().db().collection('contacts').insertOne({ contact });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Temple by the id in the request
const updateContact = async (req, res) => {
  //#swagger.tags=['Contacts']
  const id = req.params.id;

  //Create a contact
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  try {
    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .replaceOne({ _id: ObjectId.createFromHexString(id) }, contact);

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(204).send();
  } catch (error) {
    console.log('Here');
    res.status(500).json({ error: error.message });
  }
};

const deleteContact = async (req, res) => {
  //#swagger.tags=['Contacts']
  const id = req.params.id;

  try {
    await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .deleteOne({ _id: ObjectId.createFromHexString(id) });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};

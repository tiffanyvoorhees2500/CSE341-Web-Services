const mongodb = require('../db/connection');
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDb().db().collection('contacts').find();
        const contacts = await result.toArray();

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    } catch (error){
        res.status(500).json({ error: error.message });
    } 
}

const getSingle = async (req, res) => {
    try {
        const contact = await mongodb.getDb().db().collection('contacts').findOne({"_id": ObjectId.createFromHexString(req.params.id)});
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact);
    } catch (error){
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAll,
    getSingle
}
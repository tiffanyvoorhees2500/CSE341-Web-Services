const mongodb = require('../db/connection');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('professional').findOne();
  
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
};

module.exports = { getData };
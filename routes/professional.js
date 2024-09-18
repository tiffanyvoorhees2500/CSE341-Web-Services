const routes = require("express").Router();
const { Router } = require("express");
const professionalController = require('../controllers/professional');

routes.get('/professional', professionalController.getData);
routes.get('/', professionalController.getData)

module.exports = routes;
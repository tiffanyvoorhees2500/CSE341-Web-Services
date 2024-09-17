const routes = require("express").Router();
const { Router } = require("express");
const professionalController = require('../controllers/professional');

routes.get('/professional', professionalController.tiffanyRoute);
routes.get('/', professionalController.tiffanyRoute)

module.exports = routes;
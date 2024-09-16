const routes = require("express").Router();
const { Router } = require("express");
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.tiffanyRoute);
routes.get('/scott', lesson1Controller.scottRoute);
routes.get('/isaac', lesson1Controller.isaacRoute);

module.exports = routes;
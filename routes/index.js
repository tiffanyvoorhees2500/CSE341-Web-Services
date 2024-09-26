const routes = require('express').Router();

routes.use('/professional', require('./professional'));
routes.use('/contacts', require('./contacts'));
routes.use('/', require('./swagger'));
routes.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = routes;

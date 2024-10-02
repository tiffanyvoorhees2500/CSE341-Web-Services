const routes = require('express').Router();
const contactController = require('../controllers/contacts');
const {
  contactValidationRules,
  validateContact,
} = require('../utilities/contact-validation');
const utilities = require('../utilities/');

routes.get('/', utilities.handleErrors(contactController.getAll));
routes.get('/:id', utilities.handleErrors(contactController.getSingle));

routes.post(
  '/',
  contactValidationRules(),
  validateContact,
  utilities.handleErrors(contactController.createContact)
);

routes.put(
  '/:id',
  contactValidationRules(),
  validateContact,
  utilities.handleErrors(contactController.updateContact)
);

routes.delete('/:id', utilities.handleErrors(contactController.deleteContact));

module.exports = routes;

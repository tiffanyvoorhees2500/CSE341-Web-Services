const { body, validationResult } = require('express-validator');
const contactValidationRules = () => {
  return [
    body('firstName').trim().notEmpty().isString(),
    body('lastName').trim().notEmpty().isString(),
    body('email').trim().notEmpty().isEmail(),
    body('favoriteColor').trim().notEmpty().isString(),
    body('birthday')
      .isISO8601({ strict: true }) // Ensure strict adherence to ISO 8601 format
      .withMessage(
        'Date must be in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)'
      ),
  ];
};

const validateContact = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  contactValidationRules,
  validateContact,
};

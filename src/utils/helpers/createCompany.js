const Model = require('../../../models');

module.exports = details => Model.companies.create(details)
  .then(() => true)
  .catch(() => false);

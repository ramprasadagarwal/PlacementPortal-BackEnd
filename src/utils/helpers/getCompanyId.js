const Model = require('../../../models');

module.exports = name => Model.companies.findOne({
  where: { name },
}).then((result) => {
  if (result) {
    return result.dataValues.id;
  }
  return 'Not Found';
});

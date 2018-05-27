const Model = require('../../../models');

module.exports = (usn, companyId) => Model.users.update({ placed: companyId }, {
  where: {
    usn,
  },
}).then(result => result)
  .catch(() => 'Error');

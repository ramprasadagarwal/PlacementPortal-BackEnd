const Model = require('../../../models');

module.exports = usn => Model.users.update({ role: 1 }, {
  where: { usn },
}).then(result => result[0]);


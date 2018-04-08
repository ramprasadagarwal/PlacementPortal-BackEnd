const Model = require('../../../models');

module.exports = usn => Model.users.findOne({
  attributes: ['role'],
  where: { usn },
  raw: true,
})
  .then((result) => {
    if (result) return true;
    return false;
  })
  .catch(() => false);

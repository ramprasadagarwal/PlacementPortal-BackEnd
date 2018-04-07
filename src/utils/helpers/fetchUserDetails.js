const Models = require('../../../models');

module.exports = usn => Models.users.find({
  where: {
    usn,
  },
});

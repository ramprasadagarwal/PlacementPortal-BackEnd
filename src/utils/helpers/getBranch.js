const Models = require('../../../models');

const createUser = usn => Models.users.findOne({
  where: {
    usn,
  },
})
  .then(res => res.dataValues)
  .catch(err => err);
module.exports = createUser;

const Models = require('../../../models');

const isExsitingUser = usn => Models.users.findAll({
  where: {
    usn,
  },
})
  .then((user) => {
    if (user.length === 0) return false;
    return true;
  })
  .catch(err => err);
module.exports = isExsitingUser;

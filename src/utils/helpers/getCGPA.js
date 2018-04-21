const Models = require('../../../models');

const createUser = cgpa => Models.companies.findAll({
  where: {
    cgpa,
    deadline: { [Models.sequelize.Op.gt]: Date.now() },
  },
})
  .then(console.log)
  .catch(err => err);
module.exports = createUser;

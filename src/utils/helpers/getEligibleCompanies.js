const Models = require('../../../models');

const getEligibleCompanies = (cgpa, branch) => Models.companies.findAll({
  where: {
    cgpa: {
      [Models.sequelize.Op.lt]: cgpa,
    },
    deadline: { [Models.sequelize.Op.gt]: Date.now() },
  },
})
  .then(res => res.map(row => row.dataValues)
    .filter((row) => {
      if (row[branch] === true) return true;
      return false;
    }))
  .catch(err => err);
module.exports = getEligibleCompanies;

const Models = require('../../../models');

const getEligibleCompanies = (usn, cgpa, branch) => Models.companies.findAll({
  where: {
    cgpa: {
      [Models.sequelize.Op.lt]: cgpa,
    },
    deadline: { [Models.sequelize.Op.gt]: Date.now() },
    [branch]: true,
  },
})
  .then(res => res.map(row => row.dataValues))
  .then((result) => {
    const promiseArray = [];
    result.map(row => promiseArray.push(Models.companyresponses.findOne({
      where: {
        companyid: row.id,
        studentusn: usn,
      },
    })
      .then((response) => {
        const companyRow = row;
        if (response) {
          companyRow.registerStatus = 1;
        } else {
          companyRow.registerStatus = 0;
        }
        return companyRow;
      })));
    return Promise.all(promiseArray);
  })
  .catch(err => err);
module.exports = getEligibleCompanies;

const Model = require('../../../models');

module.exports = (usn, companyId) => Model.companyresponses.findOne({
  where: {
    studentusn: usn,
    companyid: companyId,
  },
}).then((result) => {
  if (result) {
    return Model.companyresponses.destroy({
      where: {
        studentusn: usn,
        companyid: companyId,
      },
    }).then(() => 0);
  }
  return Model.companyresponses.create({
    studentusn: usn,
    companyid: companyId,
  }).then(() => 1);
}).catch(() => -1);

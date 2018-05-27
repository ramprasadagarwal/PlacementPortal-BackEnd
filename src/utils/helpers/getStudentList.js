const Models = require('../../../models');

const getStudentList = companyid => Models.companyresponses.findAll({
  where: {
    companyid,
  },
})
  .then(result => result.map(row => row.dataValues))
  .then((result) => {
    const promiseArray = [];
    result.map(student => promiseArray.push(Models.users.findOne({
      attributes: ['fullname', 'usn', 'xmarks', 'xiimarks', 'cgpa', 'branch'],
      where: { usn: student.studentusn },
    }).then(response => response.dataValues)));
    return Promise.all(promiseArray);
  })
  .catch(err => err);
module.exports = getStudentList;

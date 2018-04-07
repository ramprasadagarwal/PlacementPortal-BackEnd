const Models = require('../../../models');

const createUser = studentDetails => Models.users.create(studentDetails)
  .then(details => Models.academics.create({ usn: studentDetails.usn })
    .then(() => details.dataValues))
  .catch(err => err);
module.exports = createUser;

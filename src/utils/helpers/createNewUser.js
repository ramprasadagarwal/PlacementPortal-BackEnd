const Models = require('../../../models');

const createUser = studentDetails => Models.users.create(studentDetails)
  .then(details => Models.academics.create({
    usn: studentDetails.usn,
    mutebacklog: -1,
    currentbacklog: -1,
    clearbacklog: -1,
    placed: -1,
  })
    .then(() => details.dataValues))
  .catch(err => err);
module.exports = createUser;

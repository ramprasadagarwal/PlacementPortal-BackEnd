const isExsitingUser = require('../utils/helpers/isExsitingUser');
const createNewUser = require('../utils/helpers/createNewUser');
const encryptUserData = require('../utils/helpers/encryptUserData');

module.exports = {
  method: 'POST',
  path: '/signup',
  handler: (Request, Response) => {
    const userData = Request.payload;
    isExsitingUser(userData.usn)
      .then((existingUser) => {
        if (existingUser) {
          Response('User Already Registered').code(409);
        } else {
          createNewUser(encryptUserData(userData))
            .then((databaseMessage) => {
              const expectedOutput = ['branch', 'cgpa', 'createdAt', 'currentbacklog', 'email', 'fullName', 'historybacklog', 'id', 'password', 'placed', 'updatedAt', 'usn', 'xclass', 'xiiclass', 'year'];
              if (Object.keys(databaseMessage).sort().toString() === expectedOutput.sort().toString()) {
                Response('User Registered Successfully').code(201);
              } else {
                console.log(Object.keys(databaseMessage).sort().toString(), expectedOutput.sort().toString());
                Response('Internal Database Server Error').code(500);
              }
            });
        }
      });
  },
};

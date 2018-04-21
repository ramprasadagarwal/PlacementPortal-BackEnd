const isExsitingUser = require('../utils/helpers/isExsitingUser');
const createNewUser = require('../utils/helpers/createNewUser');
const encryptUserData = require('../utils/helpers/encryptUserData');
const createToken = require('../utils/helpers/createToken');

module.exports = {
  method: 'POST',
  path: '/signup',
  handler: (Request, Response) => {
    const userData = JSON.parse(Request.payload);
    isExsitingUser(userData.usn)
      .then((existingUser) => {
        if (existingUser) {
          Response({
            code: 409,
            message: 'User Already Registered',
          });
        } else {
          createNewUser(encryptUserData(userData))
            .then((databaseMessage) => {
              const expectedOutput = ['id', 'usn', 'fullname', 'email', 'phone', 'sex', 'dob', 'address', 'year', 'branch', 'xmarks', 'xiimarks', 'cgpa', 'historybacklog', 'currentbacklog', 'placed', 'password', 'createdAt', 'updatedAt', 'role'];
              if (Object.keys(databaseMessage).sort().toString() === expectedOutput.sort().toString()) {
                Response({
                  code: 201,
                  message: 'User Registered Successfully',
                  token: createToken(databaseMessage.usn),
                  fullName: databaseMessage.fullname,
                });
              } else {
                Response({
                  code: 500,
                  message: 'Internal Database Server Error',
                });
              }
            });
        }
      });
  },
};

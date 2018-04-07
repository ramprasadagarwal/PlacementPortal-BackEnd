const verifyPassword = require('../utils/helpers/verifyPassword');
const fetchUserDetails = require('../utils/helpers/fetchUserDetails');
const createToken = require('../utils/helpers/createToken');

module.exports = [
  {
    method: 'POST',
    path: '/login',
    handler: (Request, Response) => {
      const userData = JSON.parse(Request.payload);
      fetchUserDetails(userData.usn)
        .then((result) => {
          if (result !== null && verifyPassword(userData.password, result.dataValues.password)) {
            Response({
              code: 200,
              token: createToken(result.dataValues.usn),
              fullName: result.dataValues.fullname,
            });
          } else {
            Response({
              code: 409,
              message: 'Invalid Request',
            });
          }
        })
        .catch(() => {
          Response({
            code: 500,
            message: 'Internal Server Error',
          });
        });
    },
  },
];


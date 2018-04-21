const promiteUser = require('../utils/helpers/promoteUser');

module.exports = [
  {
    method: 'POST',
    path: '/promote',
    handler: (request, response) => {
      const userData = JSON.parse(request.payload);
      if (userData.password === 'ramprasad') { // export the password to env variable later
        promiteUser(userData.usn)
          .then((result) => {
            if (result === 1) {
              response({
                code: 201,
                message: 'Pomoted Successfully',
              });
            } else {
              response({
                code: 400,
                message: 'Invalid Request',
              });
            }
          })
          .catch(() => {
            response({
              code: 500,
              message: 'Internal Database Server Error',
            });
          });
      } else {
        response({
          code: 409,
          message: 'Invalid Request',
        });
      }
    },
  },
];


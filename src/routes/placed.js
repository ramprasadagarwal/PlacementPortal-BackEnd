const placeUser = require('../utils/helpers/placeUser');
const getCompanyId = require('../utils/helpers/getCompanyId');

module.exports = [
  {
    method: 'POST',
    path: '/place',
    handler: (request, response) => {
      const userData = JSON.parse(request.payload);
      if (userData.password === 'ramprasad') { // export the password to env variable later
        getCompanyId(userData.companyName)
          .then((companyId) => {
            if (companyId !== 'Not Found') {
              placeUser(userData.usn, companyId)
                .then((result) => {
                  if (result.length === 1) {
                    response({
                      code: 201,
                      message: 'Placed Successfully',
                    });
                  } else {
                    response({
                      code: 400,
                      message: 'Invalid Request1',
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
                message: 'Invalid Company Name',
              });
            }
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


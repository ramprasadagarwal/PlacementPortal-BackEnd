const createCompany = require('../utils/helpers/createCompany');
const VerifyRole = require('../utils/helpers/verifyRole');
const getJWTPayload = require('../utils/helpers/getJWTPayload');

module.exports = [
  {
    method: 'POST',
    path: '/company',
    handler: (request, response) => {
      const userData = JSON.parse(request.payload);
      const usn = getJWTPayload(request);
      VerifyRole(usn)
        .then((allowed) => {
          if (allowed) {
            createCompany(userData)
              .then((result) => {
                if (result !== false) {
                  response({
                    code: 201,
                    message: 'Company Created Successfully',
                  });
                } else {
                  response({
                    code: 500,
                    message: 'Some Error Occured, Please Try Again',
                  });
                }
              });
          } else {
            response({
              code: 409,
              message: 'Invalid Request',
            });
          }
        });
    },
  },
];


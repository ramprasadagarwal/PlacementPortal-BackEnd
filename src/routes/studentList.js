const getJWTPayload = require('../utils/helpers/getJWTPayload');
const VerifyRole = require('../utils/helpers/verifyRole');
const getStudentList = require('../utils/helpers/getStudentList');

module.exports = [
  {
    method: 'POST',
    path: '/studentlist',
    handler: (request, response) => {
      const userData = JSON.parse(request.payload);
      const usn = getJWTPayload(request);
      VerifyRole(usn)
        .then((allowed) => {
          if (allowed) {
            const { companyId } = userData;
            getStudentList(companyId)
              .then((result) => {
                response({
                  message: result,
                });
              })
              .catch(() => {
                response({
                  message: 'Error Occured',
                });
              });
          }
        });
    },
  },
];


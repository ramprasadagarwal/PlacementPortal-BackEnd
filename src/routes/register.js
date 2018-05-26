const getJWTPayload = require('../utils/helpers/getJWTPayload');
const registerStudent = require('../utils/helpers/registerStudent');

module.exports = [
  {
    method: 'POST',
    path: '/register',
    handler: (request, response) => {
      const userData = JSON.parse(request.payload);
      const usn = getJWTPayload(request);
      const { companyId } = userData;
      registerStudent(usn, companyId)
        .then((result) => {
          response({
            message: result,
          });
        });
    },
  },
];


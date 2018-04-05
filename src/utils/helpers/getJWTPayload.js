const jwt = require('jsonwebtoken');

module.exports = req => jwt.verify(req.headers.authtoken, 'placement-portal', (err, decoded) => {
  if (err) {
    return {
      message: 'token expired',
    };
  }
  return decoded;
});


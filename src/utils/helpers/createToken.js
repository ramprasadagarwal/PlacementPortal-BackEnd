const jwt = require('jsonwebtoken');

module.exports = userdetails => jwt.sign({
  usn: userdetails,
}, 'placement-portal', {
  algorithm: 'HS256',
  expiresIn: '1y',
});

const signup = require('./signup');
const login = require('./login');
const profile = require('./profile');
const promote = require('./promote');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (req, res) => res('Server Running'),
}]
  .concat(
    signup,
    login,
    profile,
    promote,
  );

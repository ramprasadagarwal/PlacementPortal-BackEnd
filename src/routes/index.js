const signup = require('./signup');
const login = require('./login');
const profile = require('./profile');
const promote = require('./promote');
const placed = require('./placed');
const company = require('./company');
const register = require('./register');
const studentList = require('./studentList');

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
    company,
    register,
    placed,
    studentList,
  );

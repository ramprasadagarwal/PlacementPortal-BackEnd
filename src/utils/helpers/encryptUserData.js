const PasswordHash = require('password-hash');

const encryptedUserData = formData => ({
  usn: formData.usn,
  fullname: formData.fullName,
  password: PasswordHash.generate(formData.password),
  placed: -1,
  role: false,
});

module.exports = encryptedUserData;

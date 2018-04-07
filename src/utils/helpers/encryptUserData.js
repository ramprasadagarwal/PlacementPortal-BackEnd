const PasswordHash = require('password-hash');

const encryptedUserData = formData => ({
  usn: formData.usn,
  fullname: formData.fullName,
  password: PasswordHash.generate(formData.password),
});

module.exports = encryptedUserData;

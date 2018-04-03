const PasswordHash = require('password-hash');

const encryptedUserData = formData => ({
  usn: formData.usn,
  password: PasswordHash.generate(formData.password),
});

module.exports = encryptedUserData;

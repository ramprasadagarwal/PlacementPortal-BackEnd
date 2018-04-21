

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    usn: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    sex: DataTypes.STRING,
    dob: DataTypes.STRING,
    address: DataTypes.STRING,
    year: DataTypes.STRING,
    branch: DataTypes.STRING,
    xmarks: DataTypes.DECIMAL,
    xiimarks: DataTypes.DECIMAL,
    cgpa: DataTypes.DECIMAL,
    historybacklog: DataTypes.BOOLEAN,
    currentbacklog: DataTypes.BOOLEAN,
    placed: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    role: DataTypes.BOOLEAN,
  }, {});
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};

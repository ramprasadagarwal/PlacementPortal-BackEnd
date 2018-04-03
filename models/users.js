

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    usn: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    year: DataTypes.STRING,
    branch: DataTypes.STRING,
    xclass: DataTypes.DECIMAL,
    xiiclass: DataTypes.DECIMAL,
    cgpa: DataTypes.DECIMAL,
    historybacklog: DataTypes.BOOLEAN,
    currentbacklog: DataTypes.INTEGER,
    placed: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
  }, {});
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};

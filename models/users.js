

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    usn: DataTypes.STRING,
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    address: DataTypes.STRING,
    year: DataTypes.STRING,
    branch: DataTypes.STRING,
    xstd: DataTypes.DECIMAL,
    xiistd: DataTypes.DECIMAL,
    cgpa: DataTypes.DECIMAL,
    historybacklog: DataTypes.BOOLEAN,
    currentbacklog: DataTypes.BOOLEAN,
    placed: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
  }, {});
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
